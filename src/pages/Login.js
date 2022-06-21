import { useRef, useContext, useState } from 'react';
import Button from "../components/Button";
import Input from "../components/Input";
import AuthContext from '../context/auth-context';
import { useHistory } from 'react-router-dom';
import styles from './Login.module.css';


const Login = () => {
	const history = useHistory();
	const usernameRef = useRef();
	const passwordRef = useRef();

	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const authContext = useContext(AuthContext);

	const loginHandler = (event) => {
		event.preventDefault();

		const enteredEmail = usernameRef.current.value;
		const enteredPassword = passwordRef.current.value;
	
		setError(null);
		setIsLoading(true);

		fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB_AACeYAFIIE1Ev9m0g-GLlkGIqeIL1f0', {
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
			setIsLoading(false);
			if(res.ok) {
				return res.json();
			} else {
				return res.json().then(data => {
					throw new Error(data.error.message);
				});
			}
		})
		.then(data => {
			authContext.login(data.idToken);
			history.replace('/dashboard');
		})
		.catch(err => {
			console.log(err);
			setError(err.message);
		});
	};
	
	return (
		<div className={styles['container']}>
			<div className={styles['form-container']}>
				<h1 className={styles['title']}>Glad to see you!</h1>
				<div className={styles['note']}>For testing purpose:
				<p className={styles['note']}>
					Username: kartik@gmail.com<br />
					Password: 123456<br />
					Note: You may manually go to /signup page and register yourself.
				</p>
				</div>
				<form onSubmit={loginHandler} className={styles['form']}>
					<div className={styles['form-input-container']}>
						<Input
							className={styles['form-input']}
							type='email'
							placeholder='Email'
							ref={usernameRef}
						/>
					</div>
					<div className={styles['form-input-container']}>
						<Input
							className={styles['form-input']}
							type='password'
							placeholder='Password'
							ref={passwordRef}
						/>
					</div>
					<Button 
						className={styles['btn']}
						type='submit'
					>
						Login
					</Button>
				</form>
			</div>
			{!isLoading && error && <p className={styles['error']}>{error}</p>}
			{isLoading && <p className={styles['loading']}>Loading...</p>}
		</div>
	);
};

export default Login;