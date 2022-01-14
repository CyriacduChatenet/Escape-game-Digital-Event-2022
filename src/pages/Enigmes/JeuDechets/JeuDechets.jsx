import './JeuDechets.scss';
import mapboxgl from 'mapbox-gl'

export const JeuDechets = () => {
    // MAPBOX
    mapboxgl.accessToken = 'pk.eyJ1IjoiZXVsYWxpZW1vcmVhdSIsImEiOiJja3d4ajQzdjQwZjM1Mnlycm41MXFrdTAxIn0.JoQ_ZKke13wpW28Vun1yIQ';
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-0.57, 44.83], // lat et long de Bordeaux
        zoom: 12 // starting zoom
    });
    const marker1 = new mapboxgl.Marker()
        .setLngLat([-0.571498, 44.8357766])
        .addTo(map)

    return (
        <div className="JeuDechets">
            <h1>Jeu Dechets</h1>
            
        </div>
    )
}