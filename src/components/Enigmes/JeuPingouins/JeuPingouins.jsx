import { useState, useEffect } from "react";
import "./JeuPingouins.scss";
import SpeechRecognition from 'react-speech-recognition/lib/SpeechRecognition';
import { useSpeechRecognition } from 'react-speech-recognition';
import { Box } from "@mui/system";
import icebergs from "./icebergs.json"
import {store} from "../../../redux/store"
import { useSelector } from "react-redux";
import { updateMission } from "../../../services/firebaseService";

export const JeuPingouins = () => {
  const [translateXValue, setTranslateXValue] = useState(0)
  const [translateYValue, setTranslateYValue] = useState(0)
  const [mapSrc, SetMapSrc] = useState("/assets/images/polar-game/thermique-bg.png")
  const [hour, setHour] = useState(7)
  const [minutes, setMinutes] = useState(50)
  const [numberAnimals, setNumberAnimals] = useState(20)
  const [initGame, setInitGame] = useState(true)
  const [animalsTop, setAnimalsTop] = useState(0)
  const [animalsLeft, setAnimalsLeft] = useState(0)
  const [displayLoader, setDisplayLoader] = useState(true)
  const missions = useSelector(state=> state.missionsReducer)

  const [isListening, setIsListening] = useState(false)

  const commands = [
    {
      command : ["A1"],
      callback : () => {mooveAnimals(0)}
    },
    {
      command : ["A2"],
      callback : () => {mooveAnimals(1)}
    },
    {
      command : ["A3"],
      callback : () => {
          mooveAnimals(2)

          missions[4].completed = true
          store.dispatch({
              type: "missions/update",
              payload: missions,
            });
          updateMission("4")
        }
    },
    {
      command : ["A4"],
      callback : () => {mooveAnimals(3)}
    },
  ]

  const {transcript, resetTranscript,listening} = useSpeechRecognition({commands})

  const [animalsPoints, setAnimalsPoints] = useState([])

  const mooveAnimals = (positionIndex) => {
    setAnimalsTop(icebergs[positionIndex].style.top)
    setAnimalsLeft(icebergs[positionIndex].style.left)
  }

  useEffect(() => {
    if(initGame){
      setAnimalsTop(icebergs[0].style.top)
      setAnimalsLeft(icebergs[0].style.left)
      initPositionsAnimals()
      setInitGame(false)
    }
  },[])

  useEffect(() => {
    setTimeout(() => {
      setDisplayLoader(false)
    },3000)
  },[])

  useEffect(() => {
    let interval = setInterval(()=>{
      if(minutes < 59) {
        setMinutes(minutes + 1)
      }
      if(minutes >= 59){
        setMinutes(0)
        setHour(hour + 1)
      }
    },1000)

    return ()=> clearInterval(interval)
  })

  const initPositionsAnimals = () => {
    const animalsCreated = []
    for (let index = 0; index < numberAnimals; index++) {
      const top = Math.floor(Math.random() * 90)
      const left = Math.floor(Math.random() * 90)
  
      const style = {
        "position": "absolute",
        "top": top,
        "left": left
      }
      
      animalsCreated.push(<div className="animalPoint" style={style}></div>)
    }
    setAnimalsPoints(animalsCreated)
  }

  const handleListening = () => {
    setIsListening(true);
    SpeechRecognition.startListening({
      continuous : true 
    })

    setTimeout(() => {
      SpeechRecognition.stopListening()
    }, 4000);
  }

  const handleStopListening = () => {
    setIsListening(false);
    SpeechRecognition.stopListening();
  }

  const handleReset = () => {
    handleStopListening();
    resetTranscript();
  }

  const StartListening = () => {
    handleListening();
    setTimeout(() => {
      handleStopListening();
      handleReset();
    }, 180000)
  }

  return (
    <>
      <div className="JeuPingouins">
      {displayLoader ? <video autoPlay className="loader-video" >
        <source src="assets/video/loader/loader-extinction.mp4" type="video/mp4" />
      </video> : null}
      <div className="game-content">
        {/* <div className="tv-effect" style={{backgroundImage : `url(/assets/images/polar-game/tv-effect.png)`}}> */}
        <div className="tv-effect" >
          <div className="radar" >
          {/* <div className="radar" style={{backgroundImage : `url(/assets/images/polar-game/radar-base.png)`}}> */}
            <div className="radar-line" ></div>
            {/* <div className="radar-line" style={{backgroundImage : `url(/assets/images/polar-game/radar-line.png)`}}></div> */}
          </div>
        </div>
        <div className="map-container" style={{backgroundImage: `url(${mapSrc})`}}>
          <div className="icebergs">
            {icebergs.map(iceberg => (
              <div className="iceberg" style={iceberg.style}>{iceberg.name}</div>
            ))}
          </div>
          <div className="animals-container" >
            <div className="animals" style={{top: animalsTop, left: animalsLeft}}>
              <Box>
                {animalsPoints.map(el => el)}
              </Box>
            </div>
          </div>
        </div>
        <div className="controlls-container">
          <div className="controlls-row">
            <div className="controlls-item">
              <p className="controlls-item-title">OG</p>
              <p className="controlls-item-desc">4.5Kn</p>
            </div>
            <div className="controlls-item-coord">
              <p className="controlls-item-title">PDS</p>
              <p className="controlls-item-desc">
                N 46°08.109 <br /> W 1°11.326
              </p>
            </div>
          </div>
          <div className="controlls-row">
            <div className="controlls-item">
              <p className="controlls-item-title">FOND</p>
              <p className="controlls-item-desc">
                ---
              </p>
            </div>
            <div className="controlls-item">
              <p className="controlls-item-title">TIME</p>
              <p className="controlls-item-desc">
               {hour}:{minutes} <br /> am
              </p>
            </div>
            <div className="controlls-item">
              <p className="controlls-item-title">IR</p>
              <p className="controlls-item-desc">
                Haut
              </p>
            </div>
          </div>
          <div className="controlls-row">
            <div className="controlls-item">
            <p className="controlls-item-title">Lim</p>
              <p className="controlls-item-desc">
                30%
              </p>
            </div>
            <div className="controlls-item">
            <p className="controlls-item-title">COG</p>
              <p className="controlls-item-desc">
                050 °T
              </p>
            </div>
            <div className="controlls-item">
            <p className="controlls-item-title">Microphone</p>
              <p className="controlls-item-desc-desc-red">
                <Box sx={{color: listening ? "green" : "red"}}>{listening ? 'ON' : 'OFF'}</Box>
              </p>
            </div>
          </div>
          <div className="controlls-row">
            <div className="controlls-item">
                {listening ? (
                  <img src="/assets/images/polar-game/sound_wavess.gif" alt="" className="micro"  />
                ): (
                  <button onClick={StartListening}>
                    <span></span>
                    Record
                    </button>
                )}
                {/* <img src="/assets/images/polar-game/microphone-icon.png" alt="" className="micro" onClick={StartListening} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
