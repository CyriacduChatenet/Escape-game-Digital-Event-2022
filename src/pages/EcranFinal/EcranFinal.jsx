import { useState } from 'react'
import './EcranFinal.scss'

export const EcranFinal = () => {

    const terminalText = "C:\hacker>"

    return(
        <div className='ecran-final'>

            <video  autoPlay className="loader_video" loop muted>
                <source src="/assets/video/earth.mp4" type="video/mp4" />
            </video>

            <div className="overlay"></div>

            <div className='texte-final'>
                <h1>Last chance [ version 10.0.2000 ]</h1>
                <p>{terminalText}</p>
                <p>Je vous ai laissé une dernière chance… Et vous avez su la saisir.</p>
                <p>Je vous félicite pour vos réflexions, votre travail d’équipe, vous m’avez prouvé qu’ il y a donc un espoir en l’humanité.  J’espère que ce test vous a ouvert les yeux sur les difficultés de notre monde, comment les surmonter, je compte sur vous pour transmettre tout cela à la génération future.</p>
                <p>Avec des personnes comme vous, la terre peut repartir, sereinement. Je prendrais soin de diffuser à tout le monde vos actes, qu’ils voient les visages des personnes qui ont sauvé la terre que vous partagez. </p>
                <p>Bravo à tous </p>
                {/* Texte dynamique en fonction de VICTOIRE ou DEFAITE de l'escape game */}
            </div>

            <div className='button'>
                <img src='/assets/images/cadre-bouton.png' className='img-cadre-bouton'/>
                <a href='/credits'>Crédits</a> 
                {/* onClick  -> page crédits */}
            </div>

            <div className="bilan">
                <h2>Bilan</h2>
                <div className='personnages'>
                    <img src="/assets/images/personnages/le-pecheur.png" alt="" />
                    <img src="/assets/images/personnages/la-pollueuse.png" alt="" />
                    <img src="/assets/images/personnages/le-campagnard.png" alt="" />
                    <img src="/assets/images/personnages/la-depensiere.png" alt="" />
                </div>
                <div className='missions'>
                    <div className='mission'>
                        <p>Mission Ecologie :</p>
                        <img src="" alt="" />
                        {/* Icone dynamique si réussite ou échec */}
                    </div>
                    <div>
                        <p>Mission Surconsommation :</p>
                        <img src="" alt="" />
                        {/* Icone dynamique si réussite ou échec */}
                    </div>
                    <div>
                        <p>Mission Répartition des ressources :</p>
                        <img src="" alt="" />
                        {/* Icone dynamique si réussite ou échec */}
                    </div>
                    <div>
                        <p>Mission Extinction des animaux :</p>
                        <img src="" alt="" />
                        {/* Icone dynamique si réussite ou échec */}
                    </div>
                    <div>
                        <p>Mission Dérèglement climatique :</p>
                        <img src="" alt="" />
                        {/* Icone dynamique si réussite ou échec */}
                    </div>
                    <div>
                        <p>Mission Désinformation :</p>
                        <img src="" alt="" />
                        {/* Icone dynamique si réussite ou échec */}
                    </div>
                </div>
            </div>

        </div>
    )
}