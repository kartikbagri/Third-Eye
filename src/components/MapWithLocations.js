import Map, {FullscreenControl, GeolocateControl, NavigationControl, Marker} from 'react-map-gl';
import mapboxgl from 'mapbox-gl';
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const MapWithLocations = (props) => {
    return (
        <div style={{width: '100vw', height: '70vh'}}>
            <Map
                mapboxAccessToken='pk.eyJ1Ijoia2FydGlrYmFncmkiLCJhIjoiY2w0bXVnbm5nMDlxZjNqbnJkdXVrc3kzeSJ9.EeK2W46FPoYPPA7voQhrkQ'  
                style={{width: '100vw', height: '100%'}}
                initialViewState={{
                    longitude: 77.04909737144587,
                    latitude: 28.597713703326125,
                    zoom: 13
                  }}
                mapStyle="mapbox://styles/mapbox/streets-v11"
            >
            <FullscreenControl />
            <GeolocateControl />
            <NavigationControl />
            {props.locations && props.locations.map(location => {
                return <Marker key={location[0]} latitude={location[0]} longitude={location[1]} >
                    <img style={{height: '60px'}}src='/images/marker.gif' alt='pin' />
                </Marker>
            })}
            </Map>
        </div>
    )

};

export default MapWithLocations;