import { useRef, useContext } from 'react';
import Button from "../components/Button";
import Input from "../components/Input";
import AuthContext from '../context/auth-context';
import { NavLink, useHistory } from 'react-router-dom';
import styles from './Login.module.css';


const Login = () => {
	const history = useHistory();
	const usernameRef = useRef();
	const passwordRef = useRef();

	const authContext = useContext(AuthContext);

	const loginHandler = (event) => {
		event.preventDefault();

		const enteredEmail = usernameRef.current.value;
		const enteredPassword = passwordRef.current.value;
	
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
		});
	};
	
	return (
		<div className={styles['container']}>
			<div className={styles['form-container']}>
				<h1 className={styles['title']}>Glad to see you!</h1>
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
		</div>
	);
};

export default Login;