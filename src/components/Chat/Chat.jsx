import { ChatInput } from '../ChatInput/ChatInput';
import { ChatReciever } from '../ChatReciever/ChatReciever';
import { ChatSender } from '../ChatSender/ChatSender';
import DropdownWindow from '../DropdownWindow/DropdownWindow';
import firebaseConfig from "../../firebaseConfig";
import { initializeApp } from 'firebase/app';
import {getFirestore, collection, onSnapshot, doc} from 'firebase/firestore';
import { useEffect, useRef, useState } from 'react';
import './Chat.scss';
import { useSelector } from 'react-redux'

export const Chat = () => {
    const [chatMessages, setChatMessages] = useState([])
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const chatColleftionRef = collection(db, 'chat');
    const chatRef = useRef();
    const {user} = useSelector(state=> state.userReducer)

    useEffect(()=> {
        getMessages()
    },[])

    const getMessages = async () => {
        onSnapshot(chatColleftionRef, (querySnapshot) => {
            const messages = [];
            querySnapshot.forEach((doc) => {
                messages.push(doc.data());
            });
            messages.sort(function(a,b){
                return a.createdAt.seconds - b.createdAt.seconds;
              });
            setChatMessages(messages)
            chatRef.current.scrollTop = chatRef.current.scrollHeight
        })
    }

    return (
        <DropdownWindow position={{bottom:50,right:0,zIndex:9999999}}>
            <div className="chat" ref={chatRef}>
                {chatMessages.map(chatObj => (
                    <>
                        {chatObj.type === user.type ? (
                            <ChatSender chatObj={chatObj} />
                        ): (
                            <ChatReciever chatObj={chatObj} />
                        )}
                    </>
                ))}
            </div>
            <ChatInput/>
        </DropdownWindow>
    )
}