import './Chat.scss';
export const Chat = () => {
    return (
        <div className="chat-container">
             <div className="chat-header">
                <img src="/assets/images/terminal-bar/bar-top-left.png" alt="" className="chat-head" />
                <img src="/assets/images/terminal-bar/Bar-top-right.png" alt="" className="chat-btn" />
            </div>
            <div className="chat"></div>
        </div>
    )
}