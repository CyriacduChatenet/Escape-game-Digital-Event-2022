import './ProgressBar.scss';
import {Timer} from "../Timer/Timer"
import { useState, useEffect } from 'react';
export const ProgressBar = () => {

    const [progressTime, setProgressTime] = useState(1800000)
    const [progressChart, setProgressChart] = useState(0)
    let intervalTime;

    useEffect(() => {
        intervalTime = setInterval(() => {
            if(progressTime < 1800001) {
                setProgressChart(progressChart + 0.013)
                setProgressTime(progressTime - 1)
            }
            if (progressTime <= 0){
                setProgressChart(25)
                setProgressTime(0)
            }
        },1000)

        return ()=> clearInterval(intervalTime)
    })
    return (
        <div className="progress-bar">
            <img src="/assets/images/progress-bar/progress-bar-bg.png" alt="" className='progress-bar-bg' />
            <div className="progress-bar-chart" style={{width: `${progressChart}%`}}></div>
            <Timer className="timer"/>
        </div>
    )
}