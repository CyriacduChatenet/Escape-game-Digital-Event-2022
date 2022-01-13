import './DockIcon.scss';
export const DockIcon = ({dockText, dockIcon}) => {
    return (
        <div className="dock-icon-container">
            <img src={dockIcon} alt="" className="dock-icon" />
            <p className="dock-text">{dockText}</p>
        </div>
    )
}