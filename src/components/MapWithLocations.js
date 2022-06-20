import Map, {FullscreenControl, GeolocateControl, NavigationControl, Marker} from 'react-map-gl';
import mapboxgl from 'mapbox-gl';

// The following is required to stop "npm build" from transpiling mapbox code.
// notice the exclamation point in the import.
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

const MapWithLocations = () => {
    return (
        <div style={{width: '100vw', height: '70vh'}}>
            <Map
                mapboxAccessToken='pk.eyJ1Ijoia2FydGlrYmFncmkiLCJhIjoiY2w0ZnVhdGx5MDBpYjNjczExNGtzNjB1MCJ9.mUBFT6LBpUtT94dQtVeTVQ'  
                style={{width: '100vw', height: '100%'}}
                initialViewState={{
                    longitude: -100,
                    latitude: 40,
                    zoom: 3.5
                  }}
                mapStyle="mapbox://styles/mapbox/streets-v11"
                scrollZoom={true}
                touchZoomRotate={true}
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