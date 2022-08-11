import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

	const navigate = useNavigate();

	const handleSubmit = (event) => {
		navigate("/survey")
	};

	return (
        <div className="login">
			<h2>Sign up to get started!</h2>
			<p>One step closer to curated conversation starters for your first date.</p>
			<form>
				<label>
					Name
					<input type="text" name="name" placeholder="First Name"/>
				</label>
				<label>
					Email
					<input type="text" name="name" placeholder="Enter your email" />
				</label>
				<label>
					Password
					<input type="text" name="name" placeholder="Create a password" />
				</label>
			</form>
			<button onClick={handleSubmit}>Sign Up</button>
		</div>
	);
};

export default LoginPage;
