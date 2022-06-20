import Map, {FullscreenControl, GeolocateControl, NavigationControl, Marker} from 'react-map-gl';
import mapboxgl from 'mapbox-gl';
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const MapWithLocations = () => {
    return (
        <div style={{width: '100vw', height: '70vh'}}>
            <Map
                mapboxAccessToken='pk.eyJ1Ijoia2FydGlrYmFncmkiLCJhIjoiY2w0bXVnbm5nMDlxZjNqbnJkdXVrc3kzeSJ9.EeK2W46FPoYPPA7voQhrkQ'  
                style={{width: '100vw', height: '100%'}}
                initialViewState={{
                    longitude: -100,
                    latitude: 40,
                    zoom: 3.5
                  }}
                mapStyle="mapbox://styles/mapbox/streets-v11"
            >
            <FullscreenControl />
            <GeolocateControl />
            <NavigationControl />
            <Marker longitude={70.2728} latitude={59.7342} />
            <Marker longitude={70.2728} latitude={65.7342} />
            <Marker longitude={-9.2728} latitude={22.7342} />
            <Marker longitude={-70.2728} latitude={28.7342} />
            </Map>
        </div>
    )

};

export default MapWithLocations;