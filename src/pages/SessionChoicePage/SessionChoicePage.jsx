import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Dossier } from '../../components/Dossier/Dossier';
import './SessionChoicePage.scss';
export const SessionChoicePage = () => {
    const [credentials, setCredentials] = useState({
        username: "",
    });

    const handleChange = ({ currentTarget }) => {
        const { value, name } = currentTarget;
        setCredentials({ ...credentials, [name]: value });
    };

    return (
        <div className="session-page">
            <img src="https://fakeimg.pl/100x100/" alt="session-img" className="Session-img" />
            <form className="session-form">
                <input 
                    type="text" 
                    name="username" 
                    placeholder="Enter username" 
                    onChange={handleChange}
                    />
                <NavLink to='/dashboard'><a>Se connecter</a></NavLink>
            </form>
            <Dossier/>
        </div>
    )
}