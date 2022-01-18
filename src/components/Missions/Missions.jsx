import DropdownWindow from '../DropdownWindow/DropdownWindow';
import { Mission } from '../Mission/Mission';
import './Missions.scss';
import { useSelector } from 'react-redux'

export const Missions = () => {
    const missions = useSelector(state=> state.missionsReducer)

    return (
        <DropdownWindow position={{top:0,right:0}}>
            <div className="missions">
                <h3 className="subtitle">Missions</h3>
                <div className="mission-container">
                    {missions.map(mission => (
                        <Mission mission={mission} />
                    ))}
                </div>
            </div>
        </DropdownWindow>
    )
}