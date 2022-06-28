import { useState } from "react";
import MapWithLocations from "../components/MapWithLocations";
import AddMissingCarForm from "../components/AddMissingCarForm";
import styles from "./VehicleTracker.module.css";
import Button from "../components/Button";
import axios from "axios";
import { Grid } from "react-loader-spinner";

const VehicleTracker = () => {
	
	const [activeForm, setActiveForm] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	const [foundData, setFoundData] = useState(null);
	const [error, setError] = useState(null);
	const addMissingCarHandler = (obj) => {
		setIsLoading(true);
		setFoundData(null);
		const formData = new FormData();
		axios.post("http://localhost:8080/api", obj)
		.then(res => {
			console.log(res.data);
			setFoundData(res.data);
		})
		.then(data => {
			setFoundData([]);
		})
		.catch(err => {
			console.log(err);
			setFoundData(null);
			setError(err);
		})
		.finally(() => {
			setIsLoading(false);
			setActiveForm(false);
		});
	};

	return (
		<div className={styles['container']}>
			<h1 className={styles['title']}>Welcome to V-Trace</h1>
			{!isLoading && activeForm && <AddMissingCarForm submitHandler={addMissingCarHandler} />}
			{!isLoading && error && <p className={styles['error']}>{error}</p>}
			{!isLoading && !activeForm && foundData && <MapWithLocations data={foundData}/>}
			{!isLoading && !activeForm && foundData && foundData.length === 0 && <p className={styles['empty-locations']}>Car hasn't been detected but car added for Sherlock!</p>}
			{isLoading && <div className='loading'><Grid color='white' ariaLabel="loading-indicator" /></div>}
			{!activeForm && <Button className={styles['btn']} onClick={() => setActiveForm(true)}>Add a missing car</Button>}
		</div>
	)
};

export default VehicleTracker;