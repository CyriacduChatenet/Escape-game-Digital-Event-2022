import './DashboardPage.scss';
import { Terminal } from "../../components/Terminal/Terminal"
import { ProgressBar } from '../../components/ProgressBar/ProgressBar';
import { Timer } from '../../components/Timer/Timer';
import { Chat } from '../../components/Chat/Chat';
import { PeopleScoreboard } from '../../components/PeopleScoreboard/PeopleScoreboard';
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
                <Timer/>
                <Chat/>
                <PeopleScoreboard/>
                <Missions/>
            </div>
        </div>
    )
}