import "./JeuEcologie.scss";
import { useState } from "react";
import { useSelector } from "react-redux";
import { display } from "@mui/system";
import {store} from "../../../redux/store"
import { useEffect } from "react/cjs/react.development";
import { updateMission } from "../../../services/firebaseService";

// TODO :
// BUG : décallage lors de l'entrée du mot dans le terminal et du ramassage du déchet
// Gérer la casse : que Mégot ou mégot fonctionnent dans l'input
// Gérer la persistance 
// Affichage de l'écran "Mission réussie" quand tous les déchets ont été ramassés
// Cocher la mission "Ecologie" dans le dashboard

export const JeuEcologie = () => {
  const missions = useSelector(state=> state.missionsReducer)

  const terminalText = "C:\hacker>"

  const unlock = useSelector(state => state.ecologieReducer)

  const [isCompleted, setIsCompleted] = useState(false)

  const [dechetsList, setDechetsList] = useState([
    { name: "Mégot", trouve: false, img: "/assets/images/jeu-ecologie/megot.png", className: "dechet1", collect: false },
    { name: "Sac plastique", trouve: false, img: "/assets/images/jeu-ecologie/sac-plastique.png", className: "dechet2", collect: false },
    { name: "Canette", trouve: false, img: "/assets/images/jeu-ecologie/canette.png", className: "dechet3", collect: false },
    { name: "Boulette de papier", trouve: false, img: "/assets/images/jeu-ecologie/boulette-de-papier.png", className: "dechet4", collect: false },
    { name: "Bouteille vide", trouve: false, img: "/assets/images/jeu-ecologie/bouteille-vide.png", className: "dechet5", collect: false },
    { name: "Emballage", trouve: false, img: "/assets/images/jeu-ecologie/emballage.png", className: "dechet6", collect: false }
  ])

  const [userValue, setUservalue] = useState("")

  useEffect(() => {
    if(missions[0].completed === true){
      setIsCompleted(true)
    }
  },[])

  useEffect(() => {
    if(isCompleted === true){
      dechetsList.map(dechet => {
        dechet.collect = true
        dechet.trouve = true
      })
      setDechetsList(dechetsList)
    }
  },[isCompleted])

  const handleChange = (e) => {
    const { value } = e.currentTarget
    setUservalue(value)
    dechetsList.map((dechet, index) => {
      const isInclude = dechet.name === userValue ? true : false
      console.log(isInclude)
      if (isInclude) {
        dechetsList[index].trouve = true
      }
    })
    setDechetsList(dechetsList)
    checkGameIsValid()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dechetsList.map((dechet, index) => {
      const isInclude = dechet.name === userValue ? true : false
      console.log(isInclude)
      if (isInclude) {
        dechetsList[index].trouve = true
      }
    })
    setDechetsList(dechetsList) 
  }

  const handleClick = (index) => {
    dechetsList[index].collect = true
    setDechetsList(dechetsList)
    checkGameIsValid()
  }

  const checkGameIsValid = () => {
    let numberOfCollect = 0

    dechetsList.map(dechet => {
      if(dechet.collect === true) numberOfCollect++
    })

    if(numberOfCollect >= 6) {
      missions[0].completed = true
      store.dispatch({
        type: "missions/update",
        payload: missions,
      });
      updateMission("0")
    }
  }

  return (
    <div className="JeuDechetsNew">

      <div className="terminal">
        <table className="table" border="1">
          <tr><th className="top">Terminal satellite n°Ec567ztBQx154y894</th></tr>
          <tr><td className="middle"><span className="middle-text1">{terminalText}</span>
            <br />
            {
              unlock ? ("Quels sont les déchets sur la plage ?")
                : ("Débloquez la compétence “Tri des déchets“ avant de pouvoir commencer ce mini-jeu...")
            }
          </td></tr>
          <tr>
            {
              unlock &&
              <td className="bottom">
                <form onSubmit={handleSubmit}>
                  <input type="text" placeholder="Tapez votre réponse..." onChange={handleChange} />
                </form>
              </td>
            }
          </tr>
        </table>
      </div>

      <div className="inventaire">
        <img src="/assets/images/jeu-ecologie/cadre-inventaire.png" className="img-cadre-inventaire" />
        <div className="section-img-sac-inventaire">
          <img src="/assets/images/jeu-ecologie/sac-inventaire.png" className="img-sac-inventaire" />
        </div>
        <div className="section-dechet-inventaire">
          {
            dechetsList.map(dechet => (
              <p className="dechet-inventaire" style={{ textDecoration: dechet.collect ? 'line-through' : 'none' }}>{dechet.trouve ? dechet.name : "?"}</p>
            ))
          }
        </div>
      </div>

      <div className="dechets">
        {
          dechetsList.map((dechet, index) => (
            dechet.trouve === false ? (<img src="/assets/images/jeu-ecologie/dechet-a-decouvrir.png" className={"dechet " + dechet.className} />)
              : dechet.trouve && !dechet.collect ? (<img src={dechet.img} className={"dechet " + dechet.className} onClick={() => handleClick(index)} />)
                : (dechet.collect && dechet.trouve) && null
          ))
        }
      </div>

    </div>
  );

};
