import { useState, useEffect } from "react";
import "./JeuPingouins.scss";
import SpeechRecognition from 'react-speech-recognition/lib/SpeechRecognition';
import { useSpeechRecognition } from 'react-speech-recognition';
import { Box } from "@mui/system";

export const JeuPingouins = () => {
  const [translateXValue, setTranslateXValue] = useState(0)
  const [translateYValue, setTranslateYValue] = useState(0)
  const [mapSrc, SetMapSrc] = useState("/assets/images/polar-game/polar-map.png")
  const [hour, setHour] = useState(7)
  const [minutes, setMinutes] = useState(50)
  const [numberAnimals, setNumberAnimals] = useState(20)

  const commands = [
    {
      command : ['Allez',"Droite", "Avancer"],
      callback : () => {setTranslateXValue(translateXValue + 100)}
    },
    {
      command : ['Gauche', 'Reculer'],
      callback : () => {setTranslateXValue(translateXValue -100)}
    },
    {
      command : ['En-bas', 'descendre'],
      callback : () => {setTranslateYValue(translateYValue +100)}
    },
    {
      command : ['En-haut', 'monter'],
      callback : () => {setTranslateYValue(translateYValue -100)}
    },
    {
      command: "reset",
      callback: () => {
        handleReset();
      },
    },
  ]
  
  const [isListening, setIsListening] = useState(false)
  const {transcript, resetTranscript,listening} = useSpeechRecognition({commands})

  let animalsPoints = []
  let interval

  for (let index = 0; index < numberAnimals; index++) {
    const top = Math.floor(Math.random() * 90)
    const left = Math.floor(Math.random() * 90)

    const style = {
      "position": "absolute",
      "top": top,
      "left": left
    }
    animalsPoints.push(<div className="animalPoint" style={style}></div>)
  }

  useEffect (() => {
    interval=setInterval(()=>{
      if(minutes < 59) {
        setMinutes(minutes + 1)
      }
      if(minutes >= 59){
        setMinutes(0)
        setHour(hour + 1)
      }
    },1000)

    return ()=> clearInterval(interval)
  }, [])

  const handleListening = () => {
    setIsListening(true);
    SpeechRecognition.startListening({
      continuous : true 
    })

    // setTimeout(() => {
    //   SpeechRecognition.stopListening()
    // }, 4000);
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
      <div className="game-content">
        <div className="tv-effect" style={{backgroundImage : `url(/assets/images/polar-game/tv-effect.png)`}}>
          <div className="radar" style={{backgroundImage : `url(/assets/images/polar-game/radar-base.png)`}}>
            <div className="radar-line" style={{backgroundImage : `url(/assets/images/polar-game/radar-line.png)`}}></div>
          </div>
        </div>
        <div className="map-container" style={{backgroundImage: `url(${mapSrc})`}}>
          <div className="animals-container">
            <div className="animals" style={{transform:`translate(${translateXValue}px, ${translateYValue}px)`}}>
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
              <button className="record-button"><img src="/assets/images/polar-game/microphone-icon.png" alt="" className="micro" onClick={StartListening} /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
