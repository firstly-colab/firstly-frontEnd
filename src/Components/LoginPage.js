import { useNavigate } from "react-router-dom";
import { useContext, useState } from 'react'
import Context from '../context/Context'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const LoginPage = () => {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [message, setMessage] = useState('')
	const { user, setUser } = useContext(Context)
	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();

	async function login() {
		const response = await fetch('https://mellow-colab.herokuapp.com/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email : email.toLowerCase(),
				password
			})
		})
		const data = await response.json()

		if (!data.token) {
			setMessage(data)
			return;
		} 
		setIsLoading(true);
		setMessage('')
		window.localStorage.setItem("token", data.token)
		window.localStorage.setItem("user", JSON.stringify(data.user))
		window.localStorage.setItem("isLoggedIn", true)
		setUser(data.user)
		setTimeout(function () {
        setIsLoading(false);
		navigate('/dashboard')
        }, 1500)
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		if (!email && !password) {
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
							onChange={(event) => setEmail(event.target.value)}
							value = {email}
						/>
					</label>
					<label>
						Password
						<input 
							type="password" 
							name="name" 
							placeholder="Enter your password"
							onChange={(event) => setPassword(event.target.value)}
							value = {password}
							/>
						{/* <VisibilityOffIcon /> */}
					</label>
					{message && <p> {message} </p>}
					
					<button onClick=
						{handleSubmit}
						style={{ backgroundColor: password.length === 0 || email.length === 0 ? 'rgba(0, 0, 0, 0.5)' : 'black' }}
						disabled={password.length === 0 || email.length === 0}
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
