import { useRef } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { useHistory } from 'react-router-dom';

const Signup = () => {
	const history = useHistory();
	const usernameRef = useRef();
	const passwordRef = useRef();

	const signupHandler = (event) => {
		event.preventDefault();
		
		const enteredEmail = usernameRef.current.value;
		const enteredPassword = passwordRef.current.value;
	
		fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB_AACeYAFIIE1Ev9m0g-GLlkGIqeIL1f0', {
			method: 'POST',
			body: JSON.stringify({
				email: enteredEmail,
				password: enteredPassword,
				returnSecureToken: true
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then(res => {
			if(res.ok) {
				return res.json();
			} else {
				return res.json().then(data => {
					throw new Error(data.error.message);
				})
			}
		})
		.then(data => {
			console.log(data);
			history.replace('/dashboard');
		})
		.catch(err => {
			console.log(err);
		});
	};

	return (
		<form>
			<Input
				label='Email'
				type='email'
				placeholder='Enter your Email'
				ref={usernameRef}
			/>
			<Input
				label='Password'
				type='password'
				placeholder='Enter your password'
				ref={passwordRef}
			/>
			<Button 
				type='submit'
				onClick={signupHandler}
			>
				Sign Up
			</Button>
		</form>
	);
};


export default Signup;