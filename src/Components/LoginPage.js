import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const LoginPage = () => {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [message, setMessage] = useState('')

	const navigate = useNavigate();

	async function login() {
		const response = await fetch('http://localhost:3001/login', {
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
			return
		} 
		setMessage('')
		window.localStorage.setItem("token", data.token)
		window.localStorage.setItem("user", JSON.stringify(data.user))
		window.localStorage.setItem("isLoggedIn", true)
		navigate('/dashboard')
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		login();
	};

	return (
        <div className="login">
			<div className="wrapper">
				<h2>Sign up to get started!</h2>
				<p>One step closer to curated conversation starters for your first date.</p>
				<form>
					<label>
						Email
						<input 
							type="text" 
							name="name" 
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
				<p>Don't have an account? <a href= "/signup"> Sign up </a></p>
			</div>
		</div>
	);
};

export default LoginPage;
