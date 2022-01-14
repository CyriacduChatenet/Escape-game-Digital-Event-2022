import "./JeuDechets.scss";
import mapboxgl from "mapbox-gl";
import geoJson from "./dechets.json";
import { useState, useEffect, useRef } from "react";

export const JeuDechets = () => {
  
  mapboxgl.accessToken = "pk.eyJ1IjoiZXVsYWxpZW1vcmVhdSIsImEiOiJja3llZXc2OGgwMjgxMnBxcnVyeHRvM3p3In0.RSi02tf789hSAqrwOJu2zg"

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-0.57);
  const [lat, setLat] = useState(44.83);
  const [zoom, setZoom] = useState(9);
  const data = [
    {
        "id" : 1,
        "lat" : 44.8357766,
        "lng" : -0.571498
    },
    {
        "id" : 2,
        "lat" : 44.8404,
        "lng" : -0.5805
    },
    {
        "id" : 3,
        "lat" : 44.83115005493164,
        "lng" : -0.5727508664131165
    } 
]

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [lng, lat],
        zoom: zoom,
    });

    // const marker1 = new mapboxgl.Marker()
    // .setLngLat([-0.571498, 44.8357766])
    // .addTo(map)

  });

  return (
    <div className="JeuDechets">
      <h1>Jeu Dechets</h1>
      <div className="mapbox-container">
        <div ref={mapContainer} id="mapbox-dechets"/>
      </div>
    </div>
  );

};