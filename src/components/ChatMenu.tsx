import { h, FunctionalComponent } from "preact"
import { GoPrimitiveDot } from "react-icons/go"
import { useEffect, useState } from "preact/hooks"
import { io, Socket } from "socket.io-client"

const ChatMenu: FunctionalComponent = () => {
    const [visible, setVisible] = useState<boolean>(false)
    const [userCount, setUserCount] = useState<number>(0)
    const [socket, setSocket] = useState<Socket>(null)

    useEffect(() => {
        const socket = io("http://localhost:7070")
        setSocket(socket)
        socket.on("userCount", (count: number) => {
            setUserCount(count)
        })
    }, [])

    return (
        <div>
            <button onClick={() => setVisible(!visible)} className="capitalize rounded px-4 py-1.5 absolute w-1/5 bottom-1/2 right-5 text-center bg-blue-600 text-white">
                Toggle Chat visibility
            </button>
            <div className="absolute rounded w-1/5 h-2/5 bottom-5 right-5 bg-gray-200 bg-opacity-90" id="chat-mainframe" data-visible={visible}>
                <div>
                    <p className="w-1/2 pl-3 text-lg font-bold inline-block">Prodigy X Chat</p>
                    {/* @ts-ignore */}
                    <p className="w-1/2 pr-3 text-right text-sm font-bold inline-block text-[#5fc4b9]"><GoPrimitiveDot className="inline-block" color="#5fc4b9" />{userCount} Online</p>
                </div>
            </div>
        </div>
    )
}

export default ChatMenu
