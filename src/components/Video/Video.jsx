import { useState } from 'react'
import './Video.scss'

export const Video = () => {
    const [linkVideo, setLinkVideo] = useState('https://www.youtube.com/embed/D9LBDFtAMnM?controls=0')
    return(
        <div className = 'videoDiv'>
            <iframe width="560" height="315" src = {linkVideo} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
        </div>
    )
}