import { useNavigate } from "react-router-dom";
import useAuth from '../hooks/useAuth'



const SignupPage = () => {
	const { handleChange, signup, message, authInfo } = useAuth();
    const navigate = useNavigate()

    function handleSubmit (e) {
        e.preventDefault()
        signup()
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
							name="name" 
							placeholder="Enter your first name" 
							onChange={(event) => handleChange(event)}
							value = {authInfo.name}
						/>
					</label>
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
					<button 
						onClick={handleSubmit}
						style={{ backgroundColor: (authInfo.password.length || 0) === 0 || (authInfo.email.length || 0) === 0 || (authInfo.name.length || 0) === 0 ? 'rgba(0, 0, 0, 0.5)' : 'black' }}
						disabled={authInfo.password.length === 0 || authInfo.email.length === 0 || authInfo.name.length === 0}
						>
							Sign up
						
					</button>
				</form>
				<p>Already have an account?</p>
				<button className='signUp' onClick = {goToLogin}> Log in </button>
			</div>
		</div>
    )
}

export default SignupPage;