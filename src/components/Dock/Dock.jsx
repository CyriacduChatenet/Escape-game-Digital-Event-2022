import { DockIcon } from '../DockIcon/DockIcon';
import { DossierJustice } from '../DossierJustice/DossierJustice';
// import { JeuDechets } from '../Enigmes/JeuDechets/JeuDechets';
import { JeuDechetsNew } from '../Enigmes/JeuDechetsNew/JeuDechetsNew';
import { JeuPingouins } from '../Enigmes/JeuPingouins/JeuPingouins';
import { JeuJustice } from '../Enigmes/JeuJustice/JeuJustice';
import { JeuClimat } from '../Enigmes/JeuClimat/JeuClimat';
import { JeuFeuForet } from '../Enigmes/JeuFeuForet/JeuFeuForet';
import { SettingsModal } from '../Modal/SettingsModal/SettingsModal'
import './Dock.scss';
import Partage from '../Enigmes/partage/Partage';

export const Dock = () => {
    return (
        <div className="dock-container">
            <div className="row-dock">
                <DockIcon dockText="Justice" dockIcon="/assets/images/dock-icon/justice.png" >
                    <JeuJustice />
                </DockIcon>
                <DockIcon dockText="Extinction" dockIcon="/assets/images/dock-icon/extinction.png" >
                    <JeuPingouins/>
                </DockIcon>
                <DockIcon dockText="Ecologie" dockIcon="/assets/images/dock-icon/ecologie.png" >
                    <JeuDechetsNew />
                </DockIcon>
                <DockIcon dockText="Partage" dockIcon="/assets/images/dock-icon/partage.png" >
                    <Partage />
                </DockIcon>
                <DockIcon dockText="Climat" dockIcon="/assets/images/dock-icon/climat.png" >
                    <JeuFeuForet />
                </DockIcon>
                <DockIcon dockText="Surconsommation" dockIcon="/assets/images/dock-icon/surConsommation.png" >
                    
                </DockIcon>
                <DockIcon dockText="Dossiers" dockIcon="/assets/images/dock-icon/doc.png" ></DockIcon>
                <DockIcon dockText="Oracle" dockIcon="/assets/images/dock-icon/earth.png" />
                <DockIcon dockText="Réglages"dockIcon="/assets/images/dock-icon/settings.png">
                    <SettingsModal/>
                </DockIcon>
                <DockIcon dockText="Galerie" dockIcon="/assets/images/dock-icon/galerie.png"/>
                <DockIcon dockText="Corbeille" dockIcon="/assets/images/dock-icon/bin.png" />
            </div>
        </div>
    )
}