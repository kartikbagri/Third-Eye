import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
	return (
		<div>
			<label>{props.label}</label>
			<input 
				type={props.type}
				placeholder={props.placeholder}
				ref={ref}
			/>
		</div>
	);
});

export default Input;