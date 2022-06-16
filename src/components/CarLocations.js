import { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1Ijoia2FydGlrYmFncmkiLCJhIjoiY2w0ZnVhdGx5MDBpYjNjczExNGtzNjB1MCJ9.mUBFT6LBpUtT94dQtVeTVQ';

const CarLocations = () => {

	useEffect(() => {
		if (map.current) return; // initialize map only once
		map.current = new mapboxgl.Map({
		container: mapContainer.current,
		style: 'mapbox://styles/mapbox/streets-v11',
		center: [lng, lat],
		zoom: zoom
		});
	});

  const mapContainer = useRef(null);
	const map = useRef(null);
	const [lng, setLng] = useState(-70.9);
	const [lat, setLat] = useState(42.35);
	const [zoom, setZoom] = useState(9);

	return (
		<div>
			<div ref={mapContainer} className="map-container" />
		</div>
	)

};

export default CarLocations;