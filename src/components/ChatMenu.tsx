import { h, FunctionalComponent } from "preact"
import { GoPrimitiveDot } from "react-icons/go"
import { useEffect, useState, useRef } from "preact/hooks"
import { io, Socket } from "socket.io-client"
import MenuToggler from "./MenuToggler"

const ChatMenu: FunctionalComponent = () => {
    const [visible, setVisible] = useState<boolean>(false)
    const [userCount, setUserCount] = useState<number>(0)
    const [socket, setSocket] = useState<Socket>(null)
    const [messages, setMessages] = useState<string[]>([])
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        const socket = io("http://localhost:7070")
        setSocket(socket)
        socket.on("userCount", (count: number) => {
            setUserCount(count)
        })
        socket.on("chat", (message: string) => {
            setMessages(messages => [...messages, message])
        })
    }, [])

    function onSubmit (e: Event) {
        e.preventDefault()
        const input = inputRef.current
        if (input.value) {
            socket.emit("chat", input.value)
            input.value = ""
        }
    }

    return (
        <div>
            <div className="absolute rounded w-1/5 h-2/5 bottom-8 right-8 bg-gray-200 bg-opacity-90" id="chat-mainframe" data-visible={visible}>
                <div>
                    <p className="w-1/2 pl-3 text-lg font-bold inline-block">Prodigy X Chat</p>
                    {/* @ts-ignore */}
                    <p className="w-1/2 pr-3 text-right text-sm font-bold inline-block text-[#5fc4b9]"><GoPrimitiveDot className="inline-block" color="#5fc4b9" />{userCount} Online</p>
                </div>
                <div className="overflow-y-auto">
                    {messages.map((message, index) => {
                        return <div key={index}>{message}</div>
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
