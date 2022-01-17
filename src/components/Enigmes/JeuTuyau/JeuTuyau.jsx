import { useState } from 'react';
import './JeuTuyau.scss'

export const JeuTuyau = () => {

    const [tuyauFirst, setTuyauFirst] = useState(false)
    console.log('First tuyau :',tuyauFirst);
    
    const [tuyauSecond, setTuyauSecond] = useState(false)
    console.log('Second Tuyau :',tuyauSecond);

    const [tuyauThird, setTuyauThird] = useState(false)
    console.log('Third Tuyau :',tuyauThird);

    const [placeFirst, setPlaceFirst] = useState(false)
    console.log('First place :',placeFirst);
    
    const [placeSecond, setPlaceSecond] = useState(false)
    console.log('Second place :',placeSecond);

    const [placeThird, setPlaceThird] = useState(false)
    console.log('Third place :',placeThird);

    
    const [firstIn, setFirstIn] = useState(false)
    console.log('FIRST IN', firstIn);

    const [counterClick, setCounterClick] = useState(0)
    console.log(counterClick);
    

    const verifyFirst = () => {
        if(counterClick < 2){
            setCounterClick(counterClick + 1)
            if(tuyauFirst === true || placeFirst === true){
                
                setFirstIn(!firstIn)
            }
        }else if(counterClick == 2){
            setCounterClick(1)
            setTuyauFirst(false)
            setPlaceFirst(false)
        }
    }


    return (
        <div>
            <div className = 'tuyauFirst' onClick={()=>{setTuyauFirst(true);verifyFirst()}}>First</div>
            <div className = 'tuyauSecond' onClick={()=>{setTuyauSecond(true);verifyFirst()}}>Second</div>
            <div className = 'tuyauThird' onClick={()=>{setTuyauThird(true);verifyFirst()}}>Third</div>

            <div className = ' firstPlace' onClick={()=>{setPlaceFirst(true); verifyFirst()}}>First</div>
            <div className = ' secondPlace' onClick={()=>{setPlaceSecond(true);verifyFirst()}}>Second</div>
            <div className = ' thirdPlace' onClick={()=>{setPlaceThird(true);verifyFirst()}}>Third</div>
        </div>
    );
  }

