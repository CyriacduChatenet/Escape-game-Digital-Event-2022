import { useState, useEffect } from 'react'
import './JeuFeuForet.scss'

export const JeuFeuForet = () => {
    const [three, setThree] = useState(100) 
    const [fire, setFire] = useState(0)

    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(30)

    const [secondAll, setSecondAll] = useState(0)
    const [secondCondition, setSecondCondition] = useState(false)
    let intervalTime;
    
    useEffect(()=>{
        intervalTime=setInterval(()=>{

            setSeconds(seconds - 1)
            setSecondAll(secondAll + 1)
            if(secondAll === 10){
                setSecondCondition(true)
                setSecondAll(0)
            }else{
                setSecondCondition(false)
            }
            if(seconds==0){
                setMinutes(minutes-1)
                setSeconds(59)
            }
        },1000)

        return ()=> clearInterval(intervalTime)
    })
    
    return(
        <div>
            <h1>{three}</h1>
            <h1>{minutes} : {seconds}</h1>
            <h1>{secondAll}</h1>
            {setSecondCondition === true ? <div className = 'divRed'></div> : <p>false</p>}
        </div>
    )
}