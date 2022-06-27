import { useState, Fragment } from "react";
import { Grid } from "react-loader-spinner";
import Button from "./Button";
import Input from "./Input";

const ReportForm = () => {
	
	const [isLoading, setIsLoading] = useState(false);
	const [isFound, setIsFound] = useState(false);

	const reportFormSubmitHandler = (event) => {
		event.preventDefault();
		setIsLoading(true);
		// API Call to backend
		// If found, redirect to map
		setIsFound(true);
		// else added and show not found but searching
	}

	const foundDialogBox = (
		<div>
			<h1>Found</h1>
			<p>Details</p>
		</div>
	);

  return (
		<Fragment>
			<form>
				<Input
					label='License Plate Number'
					type='text'
					placeholder='Enter License Plate Number'
				/>
				<Input
					label='Color'
					type='text'
					placeholder='Enter Color'
				/>
				<Input
					label='Contact of owner'
					type='text'
					placeholder='Enter Contact of owner'
				/>
				<Button
					type='submit'
					onClick={reportFormSubmitHandler}
				/>
			</form>
			{isLoading && <div className='loading'><Grid color='white' ariaLabel="loading-indicator" /></div>}
			{!isLoading && isFound && foundDialogBox}
			{!isLoading && !isFound && <p>Not Found</p>}
		</Fragment>
	);
};

export default ReportForm;