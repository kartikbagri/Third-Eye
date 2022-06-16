import { forwardRef } from "react";
import styles from "./Input.module.css";

const Input = forwardRef((props, ref) => {
	const classes = `${styles['input']} + ${props.className}`;
	return (
		<input 
			className={classes}
			type={props.type}
			placeholder={props.placeholder}
			ref={ref}
		/>
	);
});

export default Input;