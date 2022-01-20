import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import { useSelector } from 'react-redux'
import {store} from "../../../redux/store"
import './PagesJustice.scss'
import { updateMission } from '../../../services/firebaseService';

const PagesJustice = ({selectValue}) => {
  const [background,setBackground] = useState('')
  const missions = useSelector(state=> state.missionsReducer)

  const terminalText1 = "C:\hacker>"

  useEffect(() => {
    if(selectValue === "acces-all-utilisateurs" ){
      setBackground("./assets/images/justice/pages-non-bloque.png")
    }else{
      setBackground("./assets/images/justice/Pages-bloqué.png")
    }
  },[])

  const handleClick = () => {
    console.log('click')
    updateMission("5")
    missions[5].completed = true
    store.dispatch({
        type: "missions/update",
        payload: missions,
      });
  }

  return (
    <div className='pageBloque' style={{backgroundImage: `url(${background})`}}>
      <div className="terminal">
        <table className="table" border="1">
          <tr><th className="top">Terminal satellite n°Ec567ztBQx154y894</th></tr>
          <tr><td className="middle">
            <span className="middle-text margin-bottom">{terminalText1}</span><br />
            <span className="middle-text margin-bottom"> Le gouvernement a classé confidentiel l’ensemble des gros problèmes de la société,
retrouvez les et mettez les en ligne pour révéler au monde la vérité.</span>
<span className="middle-text">Après cela, je débloquerai tout le monde.</span>
          </td></tr>
        </table>
      </div>
      {/* Button a afficher seulement si le select a bien été cliqué */}
      {selectValue === "acces-all-utilisateurs" && 
        <div className='btn-publier'>
          <button onClick={handleClick}>Publier les données</button>
        </div>
      }

      
      {/* OnClick : le mini jeu est validé, retour au dashboard, coche du mini jeu, écran final WIN */}
    </div>
  );
}

export default PagesJustice;