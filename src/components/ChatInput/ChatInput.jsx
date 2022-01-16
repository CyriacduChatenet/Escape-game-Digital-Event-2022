import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, setDoc, doc } from 'firebase/firestore/lite';
import firebaseConfig from "../../firebaseConfig";
import { useState } from 'react';
import './ChatInput.scss';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux'

export const ChatInput = () => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const [credentials, setCredentials] = useState({
        pseudo: "Username",
        message: "",
    });
    const {user} = useSelector(state=> state.userReducer)

    const handleChange = ({ currentTarget }) => {
        const { value, name } = currentTarget;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        e.currentTarget.reset()
        const message = {
            ...credentials,
            createdAt: new Date(),
            img:user.img,
            type: user.type
        }
        setDoc(doc(db, "chat",uuidv4()), message);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                name='message'
                type="text" 
                placeholder='Cliquez pour écrire...' 
                className="chat-input" 
                onChange={handleChange}
            />
        </form>
    )
}