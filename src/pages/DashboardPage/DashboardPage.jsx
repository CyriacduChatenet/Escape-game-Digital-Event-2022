import './DashboardPage.scss';
import { Terminal } from "../../components/Terminal/Terminal"
import { ProgressBar } from '../../components/ProgressBar/ProgressBar';
import { Chat } from '../../components/Chat/Chat';
import { Missions } from '../../components/Missions/Missions';
export const DashboardPage = () => {
    return (
        <div>
            <div className="video-container">
                <video autoPlay className='video' muted loop>
                    <source src="/assets/video/background-loop.mp4" type="video/mp4" />
                </video>
                <Terminal/>
                <ProgressBar/>
                <Chat/>
                <Missions/>
            </div>
        </div>
    )
}