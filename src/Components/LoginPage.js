import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const LoginPage = () => {

	const { handleChange, login, authInfo, isLoading, message, setMessage } = useAuth();
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault()
		if (!authInfo.email && !authInfo.password) {
			setMessage('The above fields are required')
		} else {
			setMessage("")
			login();
		}
		
	};

	const goToSignup = () => {
		navigate('/signup')
	}

	return (
        <div className="login">
			{isLoading ?
				<div className="spinnerContainer">
					<p>Loading...</p>
					<div className="loadingSpinner"></div>
				</div> :
			<div className="wrapper">
				<h2>Log In!</h2>
				<p>One step closer to curated conversation starters for your first date.</p>
				<form>
					<label>
						Email
						<input 
							type="text" 
							name="email" 
							placeholder="Enter your email" 
							onChange={(event) => handleChange(event)}
							value = {authInfo.email}
						/>
					</label>
					<label>
						Password
						<input 
							type="password"
							name="password" 
							placeholder="Enter your password"
							onChange={(event) => handleChange(event)}
							value = {authInfo.password}
							/>
					</label>
						{message && <p className='errorMsg'> {message} </p>}
					
					<button onClick=
						{handleSubmit}
						style={{ backgroundColor: authInfo.password.length === 0 || authInfo.email.length === 0 ? 'rgba(0, 0, 0, 0.5)' : 'black' }}
						disabled={authInfo.password.length === 0 || authInfo.email.length === 0}
						>Log in
					</button>
				</form>
				<p>Don't have an account?</p>
				<button className="signUp" onClick = {goToSignup}> Sign up </button>
			</div>}
		</div>
	);
};

export default LoginPage;