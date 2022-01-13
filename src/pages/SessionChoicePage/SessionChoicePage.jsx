import { NavLink } from 'react-router-dom';
import './SessionChoicePage.scss';
export const SessionChoicePage = () => {
    return (
        <div className="session-page">
            <img src="https://fakeimg.pl/100x100/" alt="session-img" className="Session-img" />
            <form className="session-form">
                <input type="text" name="name" placeholder="Nom d'utilisateur" />
                <NavLink to='/dashboard'><a>Se connecter</a></NavLink>
            </form>
        </div>
    )
}