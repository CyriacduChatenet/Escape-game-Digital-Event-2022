import './Dock.scss';
import { DockIcon } from '../DockIcon/DockIcon';
import IndexJustice from '../Enigmes/justice/IndexJustice';
import { JeuPingouins } from '../Enigmes/JeuPingouins/JeuPingouins';
import { JeuEcologie } from '../Enigmes/JeuEcologie/JeuEcologie';
import { OracleModal } from '../Modal/OracleModal/OracleModal';
import { SettingsModal } from '../Modal/SettingsModal/SettingsModal';
import { Galerie } from '../Galerie/Galerie';
import { CorbeilleModal } from '../Modal/CorbeilleModal/CorbeilleModal';
import { JeuRepartition } from '../Enigmes/JeuRepartition/JeuRepartition';
import { Canadair } from '../Canadair/Canadair';
import { Surconsommation } from '../Surconsommation/Surconsommation';

export const Dock = () => {
  return (
    <div className="dock-container">
      <div className="row-dock">

        <DockIcon dockText="Désinformation" dockIcon="/assets/images/dock-icon/justice.png" >
          <IndexJustice />
        </DockIcon>

        <DockIcon dockText="Extinction" dockIcon="/assets/images/dock-icon/extinction.png" >
          <JeuPingouins />
        </DockIcon>

        <DockIcon dockText="Ecologie" dockIcon="/assets/images/dock-icon/ecologie.png" >
          <JeuEcologie />
        </DockIcon>

        <DockIcon dockText="Répartition" dockIcon="/assets/images/dock-icon/partage.png" >
          <JeuRepartition />
        </DockIcon>

        <DockIcon dockText="Climat" dockIcon="/assets/images/dock-icon/climat.png" >
          <Canadair/>
        </DockIcon>

        <DockIcon dockText="Surconsommation" dockIcon="/assets/images/dock-icon/surConsommation.png" >
          <Surconsommation/>
        </DockIcon>

        <DockIcon dockText="Oracle" dockIcon="/assets/images/dock-icon/earth.png" >
          <OracleModal />
        </DockIcon>

        <DockIcon dockText="Réglages" dockIcon="/assets/images/dock-icon/settings.png">
          <SettingsModal />
        </DockIcon>

        <DockIcon dockText="Galerie" dockIcon="/assets/images/dock-icon/galerie.png">
          <Galerie />
        </DockIcon>

        <DockIcon dockText="Corbeille" dockIcon="/assets/images/dock-icon/bin.png" >
          <CorbeilleModal />
        </DockIcon>
      </div>
    </div>
  )
}