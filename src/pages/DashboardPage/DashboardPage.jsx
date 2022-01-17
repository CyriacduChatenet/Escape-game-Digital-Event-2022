import './DashboardPage.scss';
import { Terminal } from "../../components/Terminal/Terminal"
import { ProgressBar } from '../../components/ProgressBar/ProgressBar';
import { Chat } from '../../components/Chat/Chat';
import { Missions } from '../../components/Missions/Missions';
import { Dock } from '../../components/Dock/Dock';
import { ShortTerminal } from '../../components/ShortTerminal/ShortTerminal';
import { Modal } from "../../components/Modal/Modal";
import JusticeDossier from '../../components/Enigmes/justice/JusticeDossier';
import ClimatDossier from '../../components/Enigmes/climat/ClimatDossie';
import DraggableFolder from '../../components/DraggableFolder/DraggableFolder';

export const DashboardPage = () => {
   
    return (
        <div>
            <div className="video-container">
                <video autoPlay className='video' muted loop>
                    <source src="/assets/video/background-loop.mp4" type="video/mp4" />
                </video>
            </div>
            <Terminal/>
            <ProgressBar/>
            <div className = 'dossierDivDashboard'>
                <DraggableFolder defaultPosition={{ top: 200, right: 100 }}>
                    <JusticeDossier/>
                </DraggableFolder>
                <DraggableFolder defaultPosition={{ top: 200, right: 200 }}>
                    <ClimatDossier/>
                </DraggableFolder>
            </div>
            
            <Chat/>
            <Missions/>
            <Dock/>
            <ShortTerminal/>
            <Modal/>
        </div>
    )
}