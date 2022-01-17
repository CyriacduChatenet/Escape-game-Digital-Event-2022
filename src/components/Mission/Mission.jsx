import './Mission.scss';
export const Mission = ({mission}) => {
    return (
        <div className="mission">
            <label htmlFor="completed" className={mission.completed && 'checked'}>
                <div className="mission-check"></div>
            </label>
            <input type="checkbox" id="completed" checked={mission.completed}/>
            <p className="mission-title">{mission.name}</p>
        </div>
    )
}