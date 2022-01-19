import { useState } from 'react'
import './Victory.scss'

// TODO :
// Au clic du bouton suivant -> retour au dashboard (fermeture de la modale)

export const Victory = () => {
    return(
        <div className='victory'>
            <video  autoPlay className="loader_video" loop muted>
                <source src="/assets/video/earth.mp4" type="video/mp4" />
            </video>
            <div className="overlay"></div>
            <div className="victory-content">
                <div className="victory-text">
                    <h1>Last chance [ version 10.0.2000 ]</h1>
                    <h2>Mission réussie</h2>
                    <p className="text-p1">Félicitation, vous avez résolue cette problématique !</p>
                    <p className="text-p2">Continuez, vous n'êtes plus très loin de sauver la planète entière.</p>
                </div>
                <img src='/assets/images/cadre-bouton.png' className='img-cadre-bouton'/>
                <button>Suivant</button>
            </div>
        </div>
    )
}