import "./JeuDechets.scss";
import { useState, useEffect, useRef } from "react";
import Pins from './Pins';
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

    const [displayTrash, setDisplayTrash] = useState(true)

    function handleClick(trash,index) {

        // ne change que si on bouge la map
        trashList[index].hidden = true

        setTrashList(trashList)

        // console.log(trashList[index].hidden)
        // console.log(trashList[index].latitude)
        // console.log(trashList[index].longitude)

        // setDisplayTrash(false)
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
                        // trashList[index].show === true ? <Pins data={trashList} onClick={handleClick}/> : null
                        displayTrash === true ? <Pins data={trashList} onClick={handleClick} id="test"/> : null
                    }      
                    {/* <Pins data={trashList} onClick={handleClick} /> */}
                </MapGL>
            </div>
        </div>
    );

};