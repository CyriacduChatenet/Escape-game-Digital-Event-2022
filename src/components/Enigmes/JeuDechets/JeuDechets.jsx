import "./JeuDechets.scss";
import { useState, useEffect, useRef } from "react";
import Pins from './pins.jsx';
import initialTrash from './trash.json';
import MapGL from 'react-map-gl';

export const JeuDechets = () => {

    const [trashList, setTrashList] = useState(initialTrash)

    const TOKEN = 'pk.eyJ1IjoiZXVsYWxpZW1vcmVhdSIsImEiOiJja3llZXc2OGgwMjgxMnBxcnVyeHRvM3p3In0.RSi02tf789hSAqrwOJu2zg';

    const [viewport, setViewport] = useState({
        latitude: -24.36844269983584,
        longitude: -128.32643204046312,
        minZoom: 12,
        bearing: 0,
        pitch: 0
    });

    function hideTrash(trash,index) {
        // ne change que si on bouge la map
        trashList[index].hidden = true
        setTrashList(trashList)        
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
                    { 
                        // trashList[0].hidden === false ? <Pins data={trashList} onClick={handleClick}/> : null
                        <Pins data={trashList} onClick={handleClick} />                        
                    }      
                </MapGL>
            </div>
        </div>
    );

};