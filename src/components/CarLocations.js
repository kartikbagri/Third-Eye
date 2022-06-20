import { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1Ijoia2FydGlrYmFncmkiLCJhIjoiY2w0ZnVhdGx5MDBpYjNjczExNGtzNjB1MCJ9.mUBFT6LBpUtT94dQtVeTVQ';

const CarLocations = () => {

	const mapContainer = useRef(null);
	const map = useRef(null);
	const [lng, setLng] = useState(-70.9);
	const [lat, setLat] = useState(42.35);
	const [zoom, setZoom] = useState(9);
	const [coordinates, setCoordinates] = useState([lng, lat]);

	const geojson = [
		{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [-77.031952, 38.913184]
			}
		},
		{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [-122.413682, 37.775408]
			}
		}
	];

	useEffect(() => {
		if(!map.current) {
			map.current = new mapboxgl.Map({
				container: mapContainer.current,
				style: 'mapbox://styles/mapbox/streets-v11',
				center: coordinates,
				zoom: zoom
			});
			console.log(map);
		}
		map.current.addControl(new mapboxgl.FullscreenControl());
		// } // initialize map only once
		// const marker = new mapboxgl.Marker({
		// 	draggable: true
		// })
		// .setLngLat([-70.5, 40.5])
		// .addTo(mapContainer.current);
	})

	return (
		<div>
			<div ref={mapContainer} className="map-container" />
		</div>
	)
}

export default CarLocations;