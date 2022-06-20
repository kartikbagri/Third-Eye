// import CarLocations from "../components/CarLocations";
import { useState } from "react";
import MapWithLocations from "../components/MapWithLocations";
import AddMissingCarForm from "../components/AddMissingCarForm";
import styles from "./VehicleTracker.module.css";
import Button from "../components/Button";
import axios from "axios";

const VehicleTracker = () => {
	
	const [activeForm, setActiveForm] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	const [locations, setLocations] = useState(null);
	// const [licensePlate, setLicensePlate] = useState(null);
	const [error, setError] = useState(null);

	var foundLocations;

	const addMissingCarHandler = (licensePlate) => {
		setIsLoading(true);
		const formData = new FormData();
		formData.append("licensePlate", licensePlate);
		axios.post("http://127.0.0.1:5000/api/cars/find", formData)
		.then(res => {
			console.log(res.data.data);
			return res.data.data
		})
		.then(data => {
			foundLocations = data.map(car => {
				return [car[0], car[1]];
			});
			setLocations(foundLocations);
		}).catch(err => {
			console.log(err);
			setError(err);
		})
		setIsLoading(false);
		setActiveForm(false);
	};

  return (
		<div className={styles['container']}>
			<h1 className={styles['title']}>Welcome to V-Trace</h1>
			{!isLoading && activeForm && <AddMissingCarForm submitHandler={addMissingCarHandler} />}
			{isLoading && <p className={styles['loading']}>Loading...</p>}
			{!isLoading && error && <p className={styles['error']}>{error}</p>}
			{!isLoading && !activeForm && <MapWithLocations locations={locations}/>}
			{!isLoading && !activeForm && locations && locations.length===0 && <p className={styles['empty-locations']}>Car hasn't been detected but car added for Sherlock!</p>}
			{!activeForm && <Button onClick={() => setActiveForm(true)}>Add a missing car</Button>}
		</div>

	)
};

export default VehicleTracker;