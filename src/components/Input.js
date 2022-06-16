import { forwardRef } from "react";
import styles from "./Input.module.css";

const Input = forwardRef((props, ref) => {
	const classes = `${styles['input']} + ${props.className}`;
	return (
		<div >
			<label>{props.label}</label>
			<input 
				className={classes}
				type={props.type}
				placeholder={props.placeholder}
				ref={ref}
			/>
		</div>
	);
});

export default Input;