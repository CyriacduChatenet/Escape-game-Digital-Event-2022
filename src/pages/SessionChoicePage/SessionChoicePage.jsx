import { NavLink } from 'react-router-dom';
import './SessionChoicePage.scss';
export const SessionChoicePage = () => {
    return (
        <div className='Session-page'>
            <NavLink to="/dashboard"><img src="" alt="session-img" className="Session-img" /></NavLink>
        </div>
    )
}