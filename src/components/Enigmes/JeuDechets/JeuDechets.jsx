import "./JeuDechets.scss";
import { useState, useEffect, useRef } from "react";
import Pins from './pins';
import CITIES from './dechets.json';
import MapGL from 'react-map-gl';

export const JeuDechets = () => {

    const TOKEN = 'pk.eyJ1IjoiZXVsYWxpZW1vcmVhdSIsImEiOiJja3llZXc2OGgwMjgxMnBxcnVyeHRvM3p3In0.RSi02tf789hSAqrwOJu2zg'; // Set your mapbox token here

    const [viewport, setViewport] = useState({
        latitude: -24.36844269983584,
        longitude: -128.32643204046312,
        zoom: 12,
        bearing: 0,
        pitch: 0
    });

    function handleClick() {
        console.log('Le lien a été cliqué.');
    }

    return (
        <div className="JeuDechets">
            <div className="mapbox-container">
                <MapGL
                    {...viewport}
                    width="100%"
                    height="100%"
                    mapStyle="mapbox://styles/mapbox/satellite-streets-v11"
                    onViewportChange={setViewport}
                    mapboxApiAccessToken={TOKEN}
                >
                    <Pins data={CITIES} onClick={handleClick}/> 
                </MapGL>
            </div>
        </div>
    );

};