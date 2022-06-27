import { useState, createContext } from 'react';

const AuthContext = createContext({
	token: null,
  	isAuthenticated: false,
	login: () => {},
	logout: () => {}
});

export const AuthContextProvider = (props) => {

	const [token, setToken] = useState(null);
	const isAuthenticated = !!token;

	const loginHandler = (token) => {
		setToken(token);
	}

	const logoutHandler = () => {
		setToken(null);
	}

	const contextValue = {
		token,
		isAuthenticated,
		login: loginHandler,
		logout: logoutHandler
	}

	return (
		<AuthContext.Provider
			value={contextValue}
		>
			{props.children}
		</AuthContext.Provider>
	)
}

export default AuthContext;