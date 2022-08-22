import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';



const SignupPage = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const navigate = useNavigate()
    async function register () {
		const response = await fetch('https://mellow-colab.herokuapp.com/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email,
                name,
				password
			})
		})

        const data = await response.json();

        if (!data.token) {
            setMessage(data)
            return
        }
        navigate('/login')
    }

    function handleSubmit (e) {
        e.preventDefault()
        register()
    }

	const goToLogin = () => {
		navigate('/login')
	}

    return (
        <div className="signup">
			<div className="wrapper">
				<h2>Sign up to get started!</h2>
				<p>One step closer to curated conversation starters for your first date.</p>
				<form>
                    <label>
						Name
						<input 
							type="text" 
							name="Name" 
							placeholder="Enter your first name" 
							onChange={(event) => setName(event.target.value)}
							value = {name}
						/>
					</label>
					<label>
						Email
						<input 
							type="text" 
							name="Email" 
							placeholder="Enter your email" 
							onChange={(event) => setEmail(event.target.value)}
							value = {email}
						/>
					</label>
					<label>
						Password
						<input 
							type="password" 
							name="Password" 
							placeholder="Enter your password"
							onChange={(event) => setPassword(event.target.value)}
							value = {password}
							/>
						<VisibilityOffIcon />
					</label>
					{message && <p> {message} </p>}
					<button onClick={handleSubmit}>Sign up</button>
				</form>
				<p>Already have an account?</p>
				<button className='signUp' onClick = {goToLogin}> Log in </button>
			</div>
		</div>
    )
}

export default SignupPage;