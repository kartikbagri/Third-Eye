import Map, {FullscreenControl, GeolocateControl, NavigationControl, Marker} from 'react-map-gl';
import mapboxgl from 'mapbox-gl';
import React, { useState, useEffect, Fragment } from 'react';
import FoundCarInfo from './FoundCarInfo';
import axios from 'axios';
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const MAPBOX_TOKEN = 'pk.eyJ1Ijoia2FydGlrYmFncmkiLCJhIjoiY2w0bXVnbm5nMDlxZjNqbnJkdXVrc3kzeSJ9.EeK2W46FPoYPPA7voQhrkQ';

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
            latitude: props.data? props.data[0].latitude: prevViewport.latitude,
            longitude: props.data? props.data[0].longitude: prevViewport.longitude,
        }))
    }, [props])

    const [showDetails, setShowDetails] = useState(false);
    const [carDetails, setCarDetails] = useState(null);

    const markerClickHandler = (carData) => {
        axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${carData.longitude},${carData.latitude}.json?access_token=${MAPBOX_TOKEN}`)
        .then(res => {
            const carDataWithAddress = {...carData, address: res.data.features[0].place_name};
            setCarDetails(carDataWithAddress);
            setShowDetails(true);
        })
    }

    return (
        <Fragment>
            <div style={{width: '100vw', height: '70vh'}}>
                <Map
                    {...viewport}
                    mapboxAccessToken = {MAPBOX_TOKEN}
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
                {props.data && props.data.map(carData => {
                    return <Marker 
                        key={Math.random()}
                        latitude={carData.latitude}
                        longitude={carData.longitude}
                        onClick={() => markerClickHandler(carData)}
                    >
                        <img style={{height: '60px'}} src='/images/marker.gif' alt='pin' />
                    </Marker>
                })}
                </Map>
            </div>
            {showDetails && <FoundCarInfo data={carDetails}/>}
        </Fragment>
    )

};

export default MapWithLocations;