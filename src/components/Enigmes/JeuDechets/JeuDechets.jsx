import "./JeuDechets.scss";

import geoJson from "./dechets.json";
import { useState, useEffect, useRef } from "react";

import ControlPanel from './control-panel';
import Pins from './pins';
import CityInfo from './city-info';

import CITIES from './cities.json';

import MapGL, {
    Popup,
    NavigationControl,
    FullscreenControl,
    ScaleControl,
    GeolocateControl
} from 'react-map-gl';

export const JeuDechets = () => {

    const TOKEN = 'pk.eyJ1IjoiZXVsYWxpZW1vcmVhdSIsImEiOiJja3llZXc2OGgwMjgxMnBxcnVyeHRvM3p3In0.RSi02tf789hSAqrwOJu2zg'; // Set your mapbox token here

    const geolocateStyle = {
        top: 0,
        left: 0,
        padding: '10px'
    };

    const fullscreenControlStyle = {
        top: 36,
        left: 0,
        padding: '10px'
    };

    const navStyle = {
        top: 72,
        left: 0,
        padding: '10px'
    };

    const scaleControlStyle = {
        bottom: 36,
        left: 0,
        padding: '10px'
    };

    const [viewport, setViewport] = useState({
        latitude: 44.83,
        longitude: -0.57,
        zoom: 12,
        bearing: 0,
        pitch: 0
    });

    const [popupInfo, setPopupInfo] = useState(null);

    return (
        <div className="JeuDechets">
            <h1>Jeu Dechets</h1>
            <div className="mapbox-container">
                <MapGL
                    {...viewport}
                    width="100%"
                    height="100%"
                    mapStyle="mapbox://styles/mapbox/dark-v9"
                    onViewportChange={setViewport}
                    mapboxApiAccessToken={TOKEN}
                >
                    <Pins data={CITIES} onClick={setPopupInfo} />

                    {popupInfo && (
                        <Popup
                            tipSize={5}
                            anchor="top"
                            longitude={popupInfo.longitude}
                            latitude={popupInfo.latitude}
                            closeOnClick={false}
                            onClose={setPopupInfo}
                        >
                            <CityInfo info={popupInfo} />
                        </Popup>
                    )}

                    <GeolocateControl style={geolocateStyle} />
                    <FullscreenControl style={fullscreenControlStyle} />
                    <NavigationControl style={navStyle} />
                    <ScaleControl style={scaleControlStyle} />
                </MapGL>

                <ControlPanel />
            </div>
        </div>
    );

};