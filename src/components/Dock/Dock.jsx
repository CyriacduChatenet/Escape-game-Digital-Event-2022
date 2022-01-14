import { DockIcon } from '../DockIcon/DockIcon';
import './Dock.scss';
export const Dock = () => {
    return (
        <div className="dock-container">
            <DockIcon dockText="Dossiers"/>
            <DockIcon dockText="Oracle"/>
            <DockIcon dockText="Réglages"/>
            <DockIcon dockText="Galerie"/>
            <DockIcon dockText="Corbeille"/>
        </div>
    )
}