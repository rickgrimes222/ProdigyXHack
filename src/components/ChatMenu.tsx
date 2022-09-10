import { h, FunctionalComponent, Fragment } from "preact"
import { GoPrimitiveDot } from "react-icons/go"
// import { useState } from "preact/hooks"

const ChatMenu: FunctionalComponent = () => {
    // const [visible, setVisible] = useState<boolean>(false)

    return (
        <Fragment>
            <div className="absolute rounded w-1/5 h-2/5 bottom-5 right-5 bg-gray-200 bg-opacity-90" id="chat-mainframe">
                <div>
                    <p className="w-1/2 pl-3 text-lg font-bold inline-block">Prodigy X Chat</p>
                    {/* @ts-ignore */}
                    <p className="w-1/2 pr-3 text-right text-sm font-bold inline-block text-[#5fc4b9]"><GoPrimitiveDot className="inline-block" color="#5fc4b9" /> 1234 Online</p>
                </div>
            </div>
        </Fragment>
    )
}

export default ChatMenu
