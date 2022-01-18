import "./JeuDechetsNew.scss";
import { useState } from "react";

// Si le quizz n'a pas été fait, rien n'est débloqué
// Si le quizz a été fait :
// Le contenu du terminal change : "Quels type de déchets sont sur la plage ? Encore 5 restants..."
// On peut entrer des mots dans l'input :
// Si le bon mot clé est entré (ex : cigarette), l'image de la cigarette apparait sur la place à la place du point d'interrogation ET apparait dans l'espace déchet à l'écrit en bas à droite 
// Il est alors possible de rammasser le déchet en cliquant dessus
// Quand le déchet a été rammassé, le mot en bas à droite se barre et le nombre d'objet restant décrémente dans le terminal
// Quand ils ont tous été ramassés, le mini jeu est gagné : écran de win avec petite transition

export const JeuDechetsNew = () => {

  const [trash1, setTrash1] = useState(true)
  const [trash2, setTrash2] = useState(true)
  const [trash3, setTrash3] = useState(true)
  const [trash4, setTrash4] = useState(true)
  const [trash5, setTrash5] = useState(true)

  const terminalText = "C:\hacker>"

  return (
    <div className="JeuDechetsNew">
      <div className="terminal">
        <table className="table" border="1">
          <tr><th className="top">Terminal satellite n°Ec567ztBQx154y894</th></tr>
          <tr><td className="middle"><span className="middle-text1">{terminalText}</span><br />
            Débloquez la compétence “Tri des déchets“ avant de pouvoir commencer ce mini-jeu...</td></tr>
          <tr><td className="bottom"><input type="text" placeholder="Tapez votre réponse..." /></td></tr>
        </table>
      </div>
      <div className="inventaire">
        <div className="section-img-sac-inventaire">
          <img src="/assets/images/jeu-dechets/sac-inventaire.png" className="img-sac-inventaire" />
        </div>
        <div className="section-dechet-inventaire">
          <p className="dechet-inventaire">?</p>
          <p className="dechet-inventaire">?</p>
          <p className="dechet-inventaire">?</p>
          <p className="dechet-inventaire">?</p>
          <p className="dechet-inventaire">?</p>
        </div>
      </div>
      <div className="dechets">
        {
          trash1 === true ? <img src="/assets/images/jeu-dechets/bouteille-plastique.png" className="dechet dechet1" onClick={() => { setTrash1(false) }}></img> : null
        }
        {
          trash2 === true ? <img src="/assets/images/jeu-dechets/megot-cigarette.png" className="dechet dechet2" onClick={() => { setTrash2(false) }}></img> : null
        }
        {
          trash3 === true ? <img src="/assets/images/jeu-dechets/sac-plastique.png" className="dechet dechet3" onClick={() => { setTrash3(false) }}></img> : null
        }
        {
          trash4 === true ? <img src="/assets/images/jeu-dechets/canette.png" className="dechet dechet4" onClick={() => { setTrash4(false) }}></img> : null
        }
        {
          trash5 === true ? <img src="/assets/images/jeu-dechets/dechet-a-decouvrir.png" className="dechet dechet5" onClick={() => { setTrash5(false) }}></img> : null
        }
      </div>

    </div>
  );

};