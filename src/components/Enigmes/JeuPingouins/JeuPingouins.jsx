import { useState, useEffect } from "react";
import "./JeuPingouins.scss";
import SpeechRecognition from 'react-speech-recognition/lib/SpeechRecognition';
import { useSpeechRecognition } from 'react-speech-recognition';

export const JeuPingouins = () => {

  const [translateXValue, setTranslateXValue] = useState(0)
  const [translateYValue, setTranslateYValue] = useState(0)
  const [open, setOpen] = useState(true);
  const [mapSrc, SetMapSrc] = useState("/assets/images/polar-game/polar-map.png")

  const commands = [
    {
      command : "Go right",
      callback : () => {setTranslateXValue(translateXValue + 100)}
    },
    {
      command : "Go left",
      callback : () => {setTranslateXValue(translateXValue -100)}
    },
    {
      command : "Go down",
      callback : () => {setTranslateYValue(translateYValue +100)}
    },
    {
      command : "Go up",
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
  const {transcript, resetTranscript} = useSpeechRecognition({commands})

  const openModal = () => {
    if (openModal === false ) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }

  const handleListening = () => {
    setIsListening(true);
    SpeechRecognition.startListening({
      continuous : true 
    })
  }

  const handleStopListening = () => {
    setIsListening(false);
    SpeechRecognition.stopListening();
  }

  const handleReset = () => {
    handleStopListening();
    resetTranscript();
  }

  const ChangeMap = () => {
    setTimeout(() => {
      SetMapSrc("https://media.istockphoto.com/photos/night-map-of-usa-with-city-lights-illumination-picture-id1293496370?b=1&k=20&m=1293496370&s=170667a&w=0&h=aPDRphnLuE8E2UyTLI6MBLK3JI-8mf0unj-aCH0OiBc=")
    }, 30000)
    setTimeout(() => {
      SetMapSrc("https://media.istockphoto.com/photos/brazil-3d-render-topographic-map-color-border-picture-id1335251137?b=1&k=20&m=1335251137&s=170667a&w=0&h=RqC157yA2YTwYDq9eomyLwmbN1QCHH0hHdXjLSqsXew=")
    }, 60000)
    setTimeout(() => {
      SetMapSrc("https://media.istockphoto.com/photos/brazil-3d-render-topographic-map-color-border-picture-id1335251137?b=1&k=20&m=1335251137&s=170667a&w=0&h=RqC157yA2YTwYDq9eomyLwmbN1QCHH0hHdXjLSqsXew=")
    }, 90000)
    setTimeout(() => {
      SetMapSrc("https://media.istockphoto.com/photos/blue-world-map-background-global-business-news-and-media-finance-and-picture-id1300113567?b=1&k=20&m=1300113567&s=170667a&w=0&h=Rz604QF4tSjJUGQJTh_rwNOeBi2Ob9vpzSzpNKIkUtY=")
    }, 120000)
  }

  const StartListening = () => {
    handleListening();
    setTimeout(() => {
      handleStopListening();
      handleReset();
    }, 180000)

  }

  useEffect(() => {
    ChangeMap();
  }, [])

  const [coordNS, setCoordNS] = useState()
  const [coordNSFloat, setCoordNSFloat] = useState()
  const [coordEW, setCoordEW] = useState()
  const [coordEWFloat, setCoordEWFloat] = useState()
  const [hour, setHour] = useState(7)
  const [minutes, setMinutes] = useState(50)

  /*useEffect(() => {
    let interval = setInterval(() => {
      if (minutes <= 59) {
        setMinutes(minutes + 1)
      }
      if (minutes >= 59){
        setMinutes(0)
        setHour(hour + 1)
      }
    },60000)

    return () => {
      clearInterval(interval)
    }
  })*/

  return (
    <>
      {open === false ? null : 
      <div className="JeuPingouins">
      <div className="JeuPingouins-header">
        <img
          src="/assets/images/terminal-bar/bar-top-left.png"
          alt=""
          className="header-banner"
        />
        <img
          onClick={openModal}
          src="/assets/images/terminal-bar/Bar-top-right.png"
          alt=""
          className="header-cross"
        />
      </div>
      <div className="game-content">
        <div className="tv-effect" style={{backgroundImage : `url(/assets/images/polar-game/tv-effect.png)`}}>
          <div className="radar" style={{backgroundImage : `url(/assets/images/polar-game/radar-base.png)`}}>
            <div className="radar-line" style={{backgroundImage : `url(/assets/images/polar-game/radar-line.png)`}}></div>
          </div>
        </div>
        <div className="map-container" style={{backgroundImage: `url(${mapSrc})`}}>
          <div className="animals-container">
            <div className="animals" style={{transform:`translate(${translateXValue}px, ${translateYValue}px)`}}></div>
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
            <p className="controlls-item-title">Boost</p>
              <p className="controlls-item-desc-desc-red">
                off
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
      }
    </>
  );
};