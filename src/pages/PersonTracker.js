import { useState } from "react";
import Button from "../components/Button";
import styles from "./PersonTracker.module.css";
import { Grid } from "react-loader-spinner";
import AddPersonForm from "../components/PTrace/AddPersonForm";

const PersonTracker = () => {
    const [activeForm, setActiveForm] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    return (
		<div className={styles['container']}>
			<h1 className={styles['title']}>Welcome to P-Trace</h1>
			{!isLoading && activeForm && <AddPersonForm />}
			{/* {!isLoading && error && <p className={styles['error']}>{error}</p>} */}
			{/* {!isLoading && !activeForm && foundData && <MapWithLocations data={foundData}/>} */}
			{/* {!isLoading && !activeForm && !foundData && <p className={styles['empty-locations']}>Car hasn't been detected but car added for Sherlock!</p>} */}
			{isLoading && <div className='loading'><Grid color='white' ariaLabel="loading-indicator" /></div>}
			{!activeForm && <Button className={styles['btn']} onClick={() => setActiveForm(true)}>Add a missing car</Button>}
		</div>
	)
};

export default PersonTracker;