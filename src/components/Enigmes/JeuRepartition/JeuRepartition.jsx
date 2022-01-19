import { useEffect, useRef } from 'react';
import { useState } from 'react';
import './JeuRepartition.scss'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal'
import style from "./style.js"
import "../../PrimaryModal/primary-modal.scss"
import tuyaux from "./tuyaux.json"
import emplacements from "./emplacements.json"
import {store} from "../../../redux/store"
import { useSelector } from 'react-redux'

export const JeuRepartition = () => {
  const terminalText = "C:\hacker>"
  const [tuyauxList, setTuyauxList] = useState(tuyaux)
  const [emplacementsClick, setEmplacementsClick] = useState(emplacements)
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [selectedEmplacement,setSelectedEmplacement] = useState()
  const [isValidated, setIsValidated] = useState(false)
  const missions = useSelector(state=> state.missionsReducer)

  const handleClickEmplacement = (index) => {
    setOpen(true)
    setSelectedEmplacement(index)
  }

  const handleSelectTuyau = (index) => {

    setOpen(false)
    emplacementsClick[selectedEmplacement].tuyau = tuyauxList[index]
    tuyauxList.splice(index, 1);
    console.log(emplacementsClick)
    setEmplacementsClick(emplacementsClick)
    checkValidatedGame()
  }

  const checkValidatedGame = () => {
    if(
      emplacementsClick[0].tuyau.type === "tuyau3"
      && emplacementsClick[5].tuyau.type === "tuyau2"
      && emplacementsClick[7].tuyau.type === "tuyau1"
    ){
      setIsValidated(true)
      
      missions[1].completed = true
      store.dispatch({
        type: "missions/update",
        payload: missions,
      });
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
        {isValidated && <img className='img-circuit' src="/assets/images/jeu-repartition/bg-validated2.png" />}
        {!isValidated && <img className='img-circuit' src="/assets/images/jeu-repartition/carte.png" />}
        
      </div>
      <div className='filterImg filter1'></div>
      <div className='filterImg filter2'></div>
      <div className='filterImg filter3'></div>
      <div className='filterImg filter4'></div>
      <div className='filterImg filter5'></div>

      {emplacementsClick.map((emplacement, index) => (
        <>
        {emplacement.tuyau ? (
          <img className='emplacement' src={emplacement.tuyau.img} style={emplacement.position} alt="" />
          ): (
          <div className='emplacement' style={emplacement.position} onClick={() => handleClickEmplacement(index)}></div>
        )}
        </>
      ))}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {tuyauxList.map((tuyau, index) => (
            <img src={tuyau.img} className='tuyauItem' alt="" onClick={() => handleSelectTuyau(index)}/>
          ))}
        </Box>
      </Modal>

      {isValidated && (
        <div className="victoryRepartition">Bravo</div>
      )}
      
    </div>
  );
}
