import { useState } from 'react'
import './Defeat.scss'

export const Defeat = () => {
    return(
        <div className='defeat'>
            <video  autoPlay className="loader_video" loop muted>
                <source src="/assets/video/earth.mp4" type="video/mp4" />
            </video>
            <div className="overlay"></div>
            <div className="defeat-content">
                <div className="defeat-text">
                    <h1>Last chance [ version 10.0.2000 ]</h1>
                    <h2>Echec de la mission</h2>
                    <p className="text-p1">Vous n’avez pas réussi le défi, recommencez si vous voulez sauver la planette !</p>
                </div>
                <img src='/assets/images/cadre-bouton.png' className='img-cadre-bouton-rejouer'/>
                <img src='/assets/images/cadre-bouton.png' className='img-cadre-bouton-quitter'/>
                <button className='btn-rejouer'>Rejouer</button>
                <button className='btn-quitter'>Quitter</button>
            </div>
        </div>
    )
}