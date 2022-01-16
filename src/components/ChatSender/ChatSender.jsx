import './ChatSender.scss';
export const ChatSender = ({chatObj}) => {
    return (
        <div className="chat-sender">
            <div className="people-info-sender">
                <h4 className="people-name">Me</h4>
                <p className="people-comment">{chatObj.message}</p>
            </div>
            <img src={chatObj.img} alt="" className="people-picture" />
        </div>
    )
}