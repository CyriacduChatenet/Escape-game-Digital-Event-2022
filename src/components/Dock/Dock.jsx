import { DockIcon } from '../DockIcon/DockIcon';
import './Dock.scss';

export const Dock = () => {
    return (
        <div className="dock-container">
            <div className="row-dock">
                <DockIcon dockText="Dossiers" dockIcon="/assets/images/dock-icon/doc.png" />
                <DockIcon dockText="Oracle" dockIcon="/assets/images/dock-icon/earth.png" />
                <DockIcon dockText="Réglages"dockIcon="/assets/images/dock-icon/settings.png" />
                <DockIcon dockText="Galerie" dockIcon="/assets/images/dock-icon/galerie.png"/>
                <DockIcon dockText="Corbeille" dockIcon="/assets/images/dock-icon/bin.png" />
            </div>
        </div>
    )
}