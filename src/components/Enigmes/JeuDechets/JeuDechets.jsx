import "./JeuDechets.scss";
import { useState, useEffect, useRef } from "react";
import Pins from './pins';
import TRASH from './trash.json';
import MapGL from 'react-map-gl';

export const JeuDechets = () => {

    const TOKEN = 'pk.eyJ1IjoiZXVsYWxpZW1vcmVhdSIsImEiOiJja3llZXc2OGgwMjgxMnBxcnVyeHRvM3p3In0.RSi02tf789hSAqrwOJu2zg';

    const [viewport, setViewport] = useState({
        latitude: -24.36844269983584,
        longitude: -128.32643204046312,
        // zoom: 12,
        minZoom: 12,
        bearing: 0,
        pitch: 0
    });

    // Récupérer la clé du markeur, le markeur sur lequel on clic
    const [displayCurrentMarker, setDisplayCurrentMarker] = useState(true);

    function handleClick() {
        setDisplayCurrentMarker(false);
    }

    return (
        <div className="JeuDechets">
            <h1>Jeu Dechets</h1>
            <div className="mapbox-container">
                <MapGL
                    {...viewport}
                    width="100%"
                    height="100%"
                    mapStyle="mapbox://styles/mapbox/satellite-streets-v11"
                    onViewportChange={setViewport}
                    mapboxApiAccessToken={TOKEN}
                >
                    {
                        displayCurrentMarker === true ? <Pins data={TRASH} onClick={handleClick}/> : null
                    }
                </MapGL>
            </div>
        </div>
    );

};