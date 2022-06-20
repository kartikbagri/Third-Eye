// import CarLocations from "../components/CarLocations";
import { useState } from "react";
import MapWithLocations from "../components/MapWithLocations";
import AddMissingCarForm from "../components/AddMissingCarForm";
import styles from "./VehicleTracker.module.css";
import Button from "../components/Button";

const VehicleTracker = () => {
	
	const [activeForm, setActiveForm] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	const [locations, setLocations] = useState(null);
	const [error, setError] = useState(null);

	const addMissingCarHandler = () => {
		setIsLoading(true);
		// API Call
		const foundLocations = [];
		setIsLoading(false);
		setActiveForm(false);
		setLocations(foundLocations);
	};

  return (
		<div className={styles['container']}>
			<h1 className={styles['title']}>Welcome to V-Trace</h1>
			{activeForm && <AddMissingCarForm submitHandler={addMissingCarHandler} />}
			{isLoading && <p className={styles['loading']}>Loading...</p>}
			{!isLoading && error && <p className={styles['error']}>{error}</p>}
			{!isLoading && !activeForm && <MapWithLocations />}
			{!isLoading && !activeForm && locations.length===0 && <p className={styles['empty-locations']}>Car hasn't been detected but car added for Sherlock!</p>}
			{!activeForm && <Button onClick={() => setActiveForm(true)}>Add a missing car</Button>}
		</div>

	)
};

export default VehicleTracker;