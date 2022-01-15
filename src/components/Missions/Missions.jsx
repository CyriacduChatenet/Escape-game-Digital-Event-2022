import DropdownWindow from '../DropdownWindow/DropdownWindow';
import { Mission } from '../Mission/Mission';
import './Missions.scss';
export const Missions = () => {
    return (
        <DropdownWindow position={{top:0,right:0}}>
            <div className="missions">
                <h3 className="subtitle">Missions</h3>
                <div className="mission-container">
                    <Mission/>
                    <Mission/>
                    <Mission/>
                </div>
            </div>
        </DropdownWindow>
    )
}