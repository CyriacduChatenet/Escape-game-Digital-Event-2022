import { useEffect, useState } from 'react'
import './Timer.scss'

export const Timer = () => {

    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(30)
    let intervalTime;
    useEffect(()=>{
        intervalTime=setInterval(()=>{

            setSeconds(seconds - 1)

            if(seconds==0){
                setMinutes(minutes-1)
                setSeconds(59)
            }
        },1000)

        return ()=> clearInterval(intervalTime)
    })


    return(
        <div>
            <h1>{minutes} : {seconds}</h1>
        </div>
    )
}