import { ChatInput } from '../ChatInput/ChatInput';
import { ChatReciever } from '../ChatReciever/ChatReciever';
import { ChatSender } from '../ChatSender/ChatSender';
import DropdownWindow from '../DropdownWindow/DropdownWindow';
import './Chat.scss';
export const Chat = () => {
    return (
        <DropdownWindow position={{bottom:50,right:0}}>
            <div className="chat">
                <ChatReciever/>
                <ChatSender/>
                <ChatReciever/>
                <ChatSender/>
            </div>
            <ChatInput/>
        </DropdownWindow>
        
        // <div className="chat-container">
        //      <div className="chat-header">
        //         <img src="/assets/images/terminal-bar/bar-top-left.png" alt="" className="chat-head" />
        //         <img src="/assets/images/terminal-bar/Bar-top-right.png" alt="" className="chat-btn" />
        //     </div>
        //     <div className="chat">
        //         <ChatReciever/>
        //         <ChatSender/>
        //         <ChatReciever/>
        //         <ChatSender/>
        //     </div>
        //     <ChatInput/>
        // </div>
    )
}