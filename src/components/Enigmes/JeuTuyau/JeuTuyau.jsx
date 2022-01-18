import { useEffect } from 'react';
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
    
    const [secondIn, setSecondIn] = useState(false)
    console.log('SECOND IN', secondIn);
    
    const [thirdIn, setThirdIn] = useState(false)
    console.log('THIRD IN', thirdIn);

    const [counterClick, setCounterClick] = useState(0)
    console.log(counterClick);
    
    

    const initState = () => {
        setCounterClick(1)
        setTuyauFirst(false)
        setPlaceFirst(false)
        setTuyauSecond(false)
        setPlaceSecond(false)
        setTuyauThird(false)
        setPlaceThird(false)    
    }
    const verifyFirst = () => {
        if(counterClick < 2){
            setCounterClick(counterClick + 1)
            if(tuyauFirst === true && placeFirst === true){
                setFirstIn(true)
                initState()
            }
            if(tuyauSecond === true && placeSecond === true){
                setSecondIn(true)
                initState()
            }
            if(tuyauThird === true && placeThird === true){
                setThirdIn(true)
                initState()
            }

        }else{
            setCounterClick(1)
            if(tuyauFirst === true && placeFirst === true){
                setFirstIn(true)
                initState()
            }
            if(tuyauSecond === true && placeSecond === true){
                setSecondIn(true)
                initState()
            }
            if(tuyauThird === true && placeThird === true){
                setThirdIn(true)
                initState()
            }
            
        }
    }
    


    return (
        <div>
            <div className = 'tuyauFirst' onClick={()=>{setTuyauFirst(true);verifyFirst()}} style={firstIn == true ? {display:'none'} : {display:'block'}}>First</div>
            <div className = 'tuyauSecond' onClick={()=>{setTuyauSecond(true);verifyFirst()}} style={secondIn == true ? {display:'none'} : {display:'block'}}>Second</div>
            <div className = 'tuyauThird' onClick={()=>{setTuyauThird(true);verifyFirst()}} style={secondIn == true ? {display:'none'} : {display:'block'}}>Third</div>

            <div className = ' firstPlace' onClick={()=>{setPlaceFirst(true); verifyFirst()}}>
                First
                <div className='tuyauFirst initPosition' style={firstIn == true ? {display:'block'} : {display:'none'}}></div>
            </div>
            <div className = ' secondPlace' onClick={()=>{setPlaceSecond(true);verifyFirst()}}>
                Second
                <div className='tuyauSecond initPosition' style={secondIn == true ? {display:'block'} : {display:'none'}}></div>
            </div>
            <div className = 'thirdPlace' onClick={()=>{setPlaceThird(true);verifyFirst()}}>
                Third
                <div className='tuyauThird initPosition' style={thirdIn == true ? {display:'block'} : {display:'none'}}></div>
            </div>
            
        </div>
    );
  }

