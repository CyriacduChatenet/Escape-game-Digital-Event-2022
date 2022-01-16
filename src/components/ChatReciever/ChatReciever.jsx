import './ChatReciever.scss';
export const ChatReciever = ({chatObj}) => {
    return (
        <div className="chat-reciever">
            <img src={chatObj.img} alt="" className="people-picture" />
            <div className="people-info-reciever">
                <h4 className="people-name">{chatObj.username}</h4>
                <p className="people-comment">{chatObj.message}</p>
            </div>
        </div>
    )
}