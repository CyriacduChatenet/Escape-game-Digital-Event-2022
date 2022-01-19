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
    
    const [stop ,setStop] = useState(false)

    useEffect(()=>{
        if(stop === false){
            intervalTime=setInterval(()=>{
    
                setSeconds(seconds - 1)
                setSecondAll(secondAll + 1)
                if(secondAll === 10){
                    setThree(three - 10)
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
        }
    })
    return(
        <div className="jeu-feu-foret">
            <h1>{three}</h1>
            <h1>{minutes} : {seconds}</h1>
            <h1>{secondAll}</h1>
            <button onClick = {() => setStop(true)} onDoubleClick = {() => {setStop(false)}}>STOP</button>
        </div>
    )
}