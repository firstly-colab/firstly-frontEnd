import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from 'react'
import Context from '../context/Context'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const LoginPage = () => {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [message, setMessage] = useState('')
	const { user, setUser } = useContext(Context)

	const navigate = useNavigate();

	async function login() {
		const response = await fetch('https://mellow-colab.herokuapp.com/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email,
				password
			})
		})
		const data = await response.json()

		if (!data.token) {
			setMessage(data)
			return;
		} 
		setMessage('')
		window.localStorage.setItem("token", data.token)
		window.localStorage.setItem("user", JSON.stringify(data.user))
		window.localStorage.setItem("isLoggedIn", true)
		setUser(data.user)
		navigate('/dashboard')
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
						<VisibilityOffIcon />
					</label>
					{message && <p> {message} </p>}
					<button onClick={handleSubmit}>Log in</button>
				</form>
				<p>Don't have an account?</p>
				<button className="signUp" onClick = {goToSignup}> Sign up </button>
			</div>
		</div>
	);
};

export default LoginPage;
