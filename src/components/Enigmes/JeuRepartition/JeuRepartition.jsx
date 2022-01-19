import { useEffect } from 'react';
import { useState } from 'react';
import './JeuRepartition.scss'

// TODO :
// Changer l'image sans les tuyaux

// Afficher les tuyaux manquant QUE quans ils ont executé le fichier qui se trouve dans Oracle
// Compléter le chemin avec les tuyaux
// Afficher l'écran de victoire
// Cocher Répartition dans le dashboard

export const JeuRepartition = () => {

  const terminalText = "C:\hacker>"

  const [tuyauFirst, setTuyauFirst] = useState(false)
  // console.log('First tuyau :',tuyauFirst);

  const [tuyauSecond, setTuyauSecond] = useState(false)
  // console.log('Second Tuyau :',tuyauSecond);

  const [tuyauThird, setTuyauThird] = useState(false)
  // console.log('Third Tuyau :',tuyauThird);

  const [placeFirst, setPlaceFirst] = useState(false)
  // console.log('First place :',placeFirst);

  const [placeSecond, setPlaceSecond] = useState(false)
  // console.log('Second place :',placeSecond);

  const [placeThird, setPlaceThird] = useState(false)
  // console.log('Third place :',placeThird);

  const [firstIn, setFirstIn] = useState(false)
  // console.log('FIRST IN', firstIn);

  const [secondIn, setSecondIn] = useState(false)
  // console.log('SECOND IN', secondIn);

  const [thirdIn, setThirdIn] = useState(false)
  // console.log('THIRD IN', thirdIn);

  const [counterClick, setCounterClick] = useState(0)
  // console.log(counterClick);

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
    if (counterClick < 2) {
      setCounterClick(counterClick + 1)
      if (tuyauFirst === true && placeFirst === true) {
        setFirstIn(true)
        initState()
      }
      if (tuyauSecond === true && placeSecond === true) {
        setSecondIn(true)
        initState()
      }
      if (tuyauThird === true && placeThird === true) {
        setThirdIn(true)
        initState()
      }
    } else {
      setCounterClick(1)
      if (tuyauFirst === true && placeFirst === true) {
        setFirstIn(true)
        initState()
      }
      if (tuyauSecond === true && placeSecond === true) {
        setSecondIn(true)
        initState()
      }
      if (tuyauThird === true && placeThird === true) {
        setThirdIn(true)
        initState()
      }
    }
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
        <img className='img-circuit' src="/assets/images/jeu-repartition/circuit.png" />
      </div>

      <div className='tuyauFirst' onClick={() => { setTuyauFirst(true); verifyFirst() }} style={firstIn == true ? { display: 'none' } : { display: 'block' }}>First</div>
      <div className='tuyauSecond' onClick={() => { setTuyauSecond(true); verifyFirst() }} style={secondIn == true ? { display: 'none' } : { display: 'block' }}>Second</div>
      <div className='tuyauThird' onClick={() => { setTuyauThird(true); verifyFirst() }} style={secondIn == true ? { display: 'none' } : { display: 'block' }}>Third</div>
      <div className=' firstPlace' onClick={() => { setPlaceFirst(true); verifyFirst() }}>
        First
        <div className='tuyauFirst initPosition' style={firstIn == true ? { display: 'block' } : { display: 'none' }}></div>
      </div>
      <div className=' secondPlace' onClick={() => { setPlaceSecond(true); verifyFirst() }}>
        Second
        <div className='tuyauSecond initPosition' style={secondIn == true ? { display: 'block' } : { display: 'none' }}></div>
      </div>
      <div className='thirdPlace' onClick={() => { setPlaceThird(true); verifyFirst() }}>
        Third
        <div className='tuyauThird initPosition' style={thirdIn == true ? { display: 'block' } : { display: 'none' }}></div>
      </div>
    </div>
  );
}
