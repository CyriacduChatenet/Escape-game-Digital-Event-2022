import { useState } from "react";
import "./JeuPingouins.scss";
import SpeechRecognition from 'react-speech-recognition/lib/SpeechRecognition';
import { useSpeechRecognition } from 'react-speech-recognition';

export const JeuPingouins = () => {

  const [translateXValue, setTranslateXValue] = useState(0)

  const commands = [
    {
      command : "Go right",
      callback : () => {setTranslateXValue(100)}
    }
  ]

  const {transcript} = useSpeechRecognition({commands})

  return (
    <div className="JeuPingouins">
      <div className="JeuPingouins-header">
        <img
          src="/assets/images/terminal-bar/bar-top-left.png"
          alt=""
          className="header-banner"
        />
        <img
          src="/assets/images/terminal-bar/Bar-top-right.png"
          alt=""
          className="header-cross"
        />
      </div>
      <div className="game-content">
        <div className="map-container">
          <div className="animals-container">
            <div className="animals" style={{transform:`translateX(${translateXValue}px)`}}></div>
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
               7:50 <br /> am
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
              <button className="record-button"><img src="/assets/images/polar-game/microphone-icon.png" alt="" className="micro" onClick={SpeechRecognition.startListening} /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
