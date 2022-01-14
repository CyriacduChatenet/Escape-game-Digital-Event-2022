import "./JeuPingouins.scss";
import mapboxgl from "mapbox-gl";
import { useState, useEffect, useRef } from "react";

export const JeuPingouins = () => {
  mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-130.9);
  const [lat, setLat] = useState(72);
  const [zoom, setZoom] = useState(6);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });


      return (
        <div className="JeuPingouins">
          <h1>Jeu Pingouins</h1>
          <div className="mapbox-container">
            <div ref={mapContainer} id="mapbox-pingouins" />
          </div>
        </div>
      );
    }