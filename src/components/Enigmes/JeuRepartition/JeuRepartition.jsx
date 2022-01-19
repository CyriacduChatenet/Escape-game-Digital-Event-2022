import { useEffect, useRef } from 'react';
import { useState } from 'react';
import './JeuRepartition.scss'
import Tuyau from './Tuyau';

const tuyaux = [
  {
    type: "tuyau1",
    img: "/assets/images/jeu-repartition/tuyau-vertical.png",
    position: {
      bottom: 10,
      left: 50
    }
  },
  {
    type: "tuyau2",
    img: "/assets/images/jeu-repartition/tuyau-en-T.png",
    position: {
      bottom: 10,
      left: 100
    }
  },
  {
    type: "tuyau3",
    img: "/assets/images/jeu-repartition/tuyau-horizontal.png",
    position: {
      bottom: 10,
      left: 200
    }
  },
]

const emplacements = [
  {
    position: {
      top:500,
      left: 500
    },
    isValidated: false,
    isBusy: false,
    img:""
  },
  {
    position: {
      top:500,
      left: 500
    },
    isValidated: false,
    isBusy: false,
    img:""
  },
  {
    position: {
      top:500,
      left: 500
    },
    isValidated: false,
    isBusy: false,
    img:""
  }
]

export const JeuRepartition = () => {
  const terminalText = "C:\hacker>"
  const [tuyauxList, setTuyauxList] = useState(tuyaux)
  const [changeSelected, setChangeSelected] = useState(false)

  const resetOpacities = () => {
    // tuyauxRef.current.opacity =  0
    // console.log(refs)
  }

  return (
    <div className='JeuRepartition'>
      <div className="terminal">
        <table className="table" border="1">
          <tr><th className="top">Terminal satellite n°Ec567ztBQx154y894</th></tr>
          <tr><td className="middle">
            <span className="middle-text1">{terminalText}</span><br />
            <span className="middle-text1">Aujourd’hui tous les continents n’ont pas accès à l’eau potable. Vous allez devoir agir afin de leur en permettre l’accès à tous.</span><br />
            <span className="middle-text1">Pour compléter le circuit, vous devez tout d'abord débloquer le set d’outil de connexion hydraulique.</span><br />
            <span className="middle-text1">Ensuite, vous vous servirez des tuyaux pour compléter le réseau. Trois tuyaux sont nécessaires à la résolution du circuit. Il existe plusieurs solutions, mais une seule est juste, à vous de tester les différentes possibilités !</span><br />
          </td></tr>
        </table>
      </div>
      
      <div className='circuit'>
        <img className='img-circuit' src="/assets/images/jeu-repartition/carte.png" />
      </div>
      <div className='filterImg filter1'></div>
      <div className='filterImg'></div>
      <div className='filterImg'></div>
      <div className='filterImg'></div>

      {tuyauxList.map((tuyau, index) => (
        <Tuyau tuyau={tuyau}  resetOpacities={resetOpacities} />
      ))}

      <div className=' firstPlace'>
        First
        <div className='tuyauFirst initPosition'></div>
      </div>
      <div className=' secondPlace'>
        Second
        <div className='tuyauSecond initPosition' ></div>
      </div>
      <div className='thirdPlace' >
        Third
        <div className='tuyauThird initPosition' ></div>
      </div>
    </div>
  );
}
