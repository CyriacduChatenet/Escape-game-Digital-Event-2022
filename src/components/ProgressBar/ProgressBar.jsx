import './ProgressBar.scss';
import {Timer} from "../Timer/Timer"
import { useState, useEffect } from 'react';
export const ProgressBar = () => {

    const [progressTime, setProgressTime] = useState(1800)
    const [progressChart, setProgressChart] = useState(0)
    let intervalTime;
/*
    useEffect(() => {
        intervalTime = setInterval(() => {
            setProgressTime(progressTime - 1)
            setProgressChart(progressChart + 1)
            if(progressTime === 0){
                setProgressTime(0)
                setProgressChart(25)
            }
        },1000)

        return ()=> clearInterval(intervalTime)
    })
    */
    return (
        <div className="progress-bar">
            <img src="/assets/images/progress-bar/progress-bar-bg.png" alt="" className='progress-bar-bg' />
            <div className="progress-bar-chart" style={{width: progressChart}}></div>
        </div>
    )
}