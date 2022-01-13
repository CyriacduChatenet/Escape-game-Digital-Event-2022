import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import './Timer.scss';
export const Timer = () => {
    const [minutes, setMinutes] = useState(40)
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
    })
    return (
        <div className="timer-container">
            <p className='timer'>{minutes} : {seconds}</p>
        </div>
    )
}