import { useState } from 'react'
import './Credits.scss'

export const Credits = () => {

    const terminalText = "C:\hacker>"

    return(
        <div className='credits'>

            <video  autoPlay className="loader_video" loop muted>
                <source src="/assets/video/earth.mp4" type="video/mp4" />
            </video>

            <div className="overlay"></div>

            <div className='credits-texte'>
                <h1>Crédits - [ version 10.0.2000 ] </h1>
                <p>Intervenants Référents : Thomas MOUCHELET - Stanislas WIART - Quentin PALLIERE</p>
                <p className='apprenants'>Apprenants : Marie Tronel - Juliette Bernard - William Fort - Théo Gillet - Dimitri Zordan - Cyriac Descubes Du
Chatenet - Vincent Dulou - Léo Frati - Eulalie Moreau - Bastien Lacouture - Naour Ouaamou - Megann
Doudy - Charles Ambroise Delaunay - Jérémy Grollier - Axel Pinheiro - Selen Altin - Corentin Da Rocha
- Clara Tomaszek - Telma Voisin - Emma Landelle - Elisa Auboin - Romane Corbillon - Laura Faure -
Ludwig Cristia - Ambre Levesque</p>
            </div>

            <div className='merci'>
                <p>Merci d'avoir joué</p>
                <img src="/assets/images/logo.png" alt="" />
            </div>
        </div>
    )
}