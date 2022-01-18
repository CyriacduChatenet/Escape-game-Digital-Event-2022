import "./JeuDechetsNew.scss";
import { useState } from "react";

// TODO : 
// Le quizz avant de lancer le mini jeu
// Ajouter les images des déchets
// Ajouter le timer de 3 minutes
// Si un déchet a été ramassé, celui-ci doit être ajouté à un inventaire (ou tout simplement écrit de côté)
// Si jeu réussi : affichage de l'écran "défi réussi", Sinon écran ""défi échoué"" avec choix de recommencer

export const JeuDechetsNew = () => {

    const [trash1, setTrash1] = useState(true)
    const [trash2, setTrash2] = useState(true)
    const [trash3, setTrash3] = useState(true)
    const [trash4, setTrash4] = useState(true)
    const [trash5, setTrash5] = useState(true)

    return (
        <div className="JeuDechetsNew">
            <div className="terminal">
                <table className="table" border="1">
                    <tr><th className="top">Terminal satellite n°Ec567ztBQx154y894</th></tr>
                    <tr><td className="middle"><span className="middle-text1">C:\hacker></span><br/>
                    Débloquez la compétence “Tri des déchets“ avant de pouvoir commencer ce mini-jeu...</td></tr>
                    <tr><td className="bottom"><input type="text" placeholder="Tapez votre réponse..."/></td></tr>
                </table>
            </div>
            <div className="dechets">
                {
                    trash1 === true ? <div className="dechet1" onClick={() => {setTrash1(false)}}></div> : null
                }
                {
                    trash2 === true ? <div className="dechet2" onClick={() => {setTrash2(false)}}></div> : null
                }
                {
                    trash3 === true ? <div className="dechet3" onClick={() => {setTrash3(false)}}></div> : null
                }
                {
                    trash4 === true ? <div className="dechet4" onClick={() => {setTrash4(false)}}></div> : null
                }
                {
                    trash5 === true ? <div className="dechet5" onClick={() => {setTrash5(false)}}></div> : null
                }
            </div>

        </div>
    );

};