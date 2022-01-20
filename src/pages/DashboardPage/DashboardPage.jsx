import "./DashboardPage.scss";
import { Terminal } from "../../components/Terminal/Terminal";
import { ProgressBar } from "../../components/ProgressBar/ProgressBar";
import { Chat } from "../../components/Chat/Chat";
import { Missions } from "../../components/Missions/Missions";
import { Dock } from "../../components/Dock/Dock";
import { ShortTerminal } from "../../components/ShortTerminal/ShortTerminal";
import { Modal } from "../../components/Modal/Modal";
import JusticeDossier from "../../components/Enigmes/justice/JusticeDossier";
import { DereglementClimatiqueDossier } from "../../components/Enigmes/DereglementClimatiqueDossier/DereglementClimatiqueDossier";
import { SurconsommationDossier } from "../../components/Enigmes/SurconsommationDossier/Surconsommation";
import { EcologieDossier } from "../../components/Enigmes/EcologieDossier/EcologieDossier";
import { ExtinctionEspeceDossier } from "../../components/Enigmes/ExtinctionEspeceDossier/ExtinctionEspeceDossier";
import { RepartitionDossier } from "../../components/Enigmes/RepartitionDossier/RepartitionDossier";
import DraggableFolder from "../../components/DraggableFolder/DraggableFolder";

export const DashboardPage = () => {
  return (
    <div>
      <div className="video-container">
        <video autoPlay className="video" muted loop>
          <source src="/assets/video/background-loop.mp4" type="video/mp4" />
        </video>
      </div>
      <Terminal />
      <ProgressBar />
      <div className="dossierDivDashboard">
        <DraggableFolder defaultPosition={{ top: 300, right: 100 }}>
          <ExtinctionEspeceDossier />
        </DraggableFolder>
        <DraggableFolder defaultPosition={{ top: 300, right: 250 }}>
          <DereglementClimatiqueDossier />
        </DraggableFolder>
        <DraggableFolder defaultPosition={{ top: 450, right: 250 }}>
          <SurconsommationDossier />
        </DraggableFolder>
        <DraggableFolder defaultPosition={{ top: 450, right: 100 }}>
          <EcologieDossier />
        </DraggableFolder>
        <DraggableFolder defaultPosition={{ top: 450, right: 400 }}>
          <RepartitionDossier />
        </DraggableFolder>
        <DraggableFolder defaultPosition={{ top: 300, right: 400 }}>
          <JusticeDossier />
        </DraggableFolder>
      </div>

      <Chat />
      <Missions />
      <Dock />
      <ShortTerminal />
      <Modal />
    </div>
  );
};
