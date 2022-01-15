import { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
            <h1>Qui es-tu</h1>
            <div className="personnages">
                <div className="personnage">
                    <img src="/assets/images/personnages/le-pecheur.png" alt="session-img" className="Session-img" />
                    <p>Le pêcheur</p>
                </div>
                <div className="personnage">
                    <img src="/assets/images/personnages/la-pollueuse.png" alt="session-img" className="Session-img" />
                    <p>La pollueuse</p>
                </div>
                <div className="personnage">
                    <img src="/assets/images/personnages/le-campagnard.png" alt="session-img" className="Session-img" />
                    <p>Le campagnard</p>
                </div>
                <div className="personnage">
                    <img src="/assets/images/personnages/la-depensiere.png" alt="session-img" className="Session-img" />
                    <p>La dépensière</p>
                </div>
            </div>
        </div>
    )
}

{/* <form className="session-form">
<input 
    type="text" 
    name="username" 
    placeholder="Enter username" 
    onChange={handleChange}
    />
<NavLink to='/dashboard'><a>Se connecter</a></NavLink>
</form> */}