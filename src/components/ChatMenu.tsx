import { h, FunctionalComponent } from "preact"
import { GoPrimitiveDot } from "react-icons/go"
import { useEffect, useState, useRef } from "preact/hooks"
import { io, Socket } from "socket.io-client"
import MenuToggler from "./MenuToggler"
import { getPlayer, launchCard } from "../hack"
import { Player } from "../types/player"

interface Message {
    message: string
    name: string
    id: number
}

const ChatMenu: FunctionalComponent = () => {
    const [visible, setVisible] = useState<boolean>(false)
    const [userCount, setUserCount] = useState<number>(0)
    const [socket, setSocket] = useState<Socket>(null)
    const [messages, setMessages] = useState<Message[]>([])
    const inputRef = useRef<HTMLInputElement>(null)
    const messageRef = useRef<HTMLDivElement>(null)

    const player = getPlayer() as Player

    useEffect(() => {
        const socket = io("https://prodigy-x-chat.herokuapp.com")
        setSocket(socket)
        socket.on("userCount", (count: number) => {
            setUserCount(count)
        })
        socket.on("chat", (message: Message) => {
            setMessages(messages => [...messages, message])
        })
    }, [])

    useEffect(() => {
        if (messageRef.current) {
            messageRef.current.scrollTop = messageRef.current.scrollHeight
        }
    }, [messages])

    function onSubmit (e: Event) {
        e.preventDefault()
        const input = inputRef.current
        if (input.value) {
            socket.emit("chat", {
                message: input.value,
                name: player.getName(),
                id: player.userID
            })
            input.value = ""
        }
    }

    return (
        <div>
            <div className="absolute rounded w-1/5 h-2/5 bottom-16 right-8 bg-gray-200 bg-opacity-90" id="chat-mainframe" data-visible={visible}>
                <div>
                    <p className="w-1/2 pl-3 mt-2 text-xl font-bold inline-block">Prodigy X Chat</p>
                    {/* @ts-ignore */}
                    <p className="w-1/2 pr-5 mt-2 text-right text-sm font-bold inline-block text-[#5fc4b9]"><GoPrimitiveDot className="inline-block" color="#5fc4b9" />{userCount} Online</p>
                </div>
                <div className="flex flex-col overflow-y-auto overflow-x-visible no-scrollbar m-6 bg-opacity-90 w-2/2 h-3/4" ref={messageRef}>
                    {messages.map((message, index) => {
                        return (
                            <div className="rounded bg-gray-300 m-1 p-2" key={index}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png" alt={`${message.name}'s Avatar`} role="button" className="w-10 h-10 float-left mr-3" onClick={() => launchCard(message.id)} />
                                <button className="font-bold text-sm" onClick={() => launchCard(message.id)}>{message.name}</button>
                                <p className="text-sm">{message.message}</p>
                            </div>
                        )
                    })}
                </div>
                <form onSubmit={onSubmit}>
                    <input ref={inputRef} type="text" className="w-full" placeholder="Enter message..." />
                </form>
            </div>
            <MenuToggler toggled={!visible} onToggle={() => setVisible(!visible)} bottomRight={true} />
        </div>
    )
}

export default ChatMenu
