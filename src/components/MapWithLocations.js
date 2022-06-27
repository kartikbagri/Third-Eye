import Map, {FullscreenControl, GeolocateControl, NavigationControl, Marker} from 'react-map-gl';
import mapboxgl from 'mapbox-gl';
import { useState, useEffect } from 'react';
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const MapWithLocations = (props) => {

    const [viewport, setViewport] = useState({
        latitude: 28.597713703326125,
        longitude: 77.04909737144587,
        zoom: 13,
        bearing: 0,
    });

    useEffect(() => {
        setViewport((prevViewport) => ({
            ...prevViewport,
            latitude: props.locations.length>0? props.locations[0][0]: prevViewport.latitude,
            longitude: props.locations.length>0? props.locations[0][1]: prevViewport.longitude,
        }))
    }, [props])

    return (
        <div style={{width: '100vw', height: '70vh'}}>
            <Map
                {...viewport}
                mapboxAccessToken='pk.eyJ1Ijoia2FydGlrYmFncmkiLCJhIjoiY2w0bXVnbm5nMDlxZjNqbnJkdXVrc3kzeSJ9.EeK2W46FPoYPPA7voQhrkQ'  
                style={{width: '100vw', height: '100%'}}
                onViewportChange={(viewport) => {
                    setViewport(viewport);
                }}
                onMove={evt => setViewport(evt.viewState)}
                mapStyle="mapbox://styles/mapbox/streets-v11"
            >
            <FullscreenControl />
            <GeolocateControl />
            <NavigationControl />
            {props.locations && props.locations.map(location => {
                return <Marker key={Math.random()} latitude={location[0]} longitude={location[1]} >
                    <img style={{height: '60px'}}src='/images/marker.gif' alt='pin' />
                </Marker>
            })}
            </Map>
        </div>
    )

};

export default MapWithLocations;