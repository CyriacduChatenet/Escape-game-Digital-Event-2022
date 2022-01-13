import { Mission } from '../Mission/Mission';
import './Missions.scss';
export const Missions = () => {
    return (
        <div className="missions-container">
            <div className="missions-header">
                <img src="/assets/images/terminal-bar/bar-top-left.png" alt="" className="missions-head" />
                <img src="/assets/images/terminal-bar/Bar-top-right.png" alt="" className="missions-btn" />
            </div>
            <div className="missions">
                <h3 className="subtitle">Missions</h3>
                <div className="mission-container">
                    <Mission/>
                    <Mission/>
                    <Mission/>
                </div>
            </div>
        </div>
    )
}