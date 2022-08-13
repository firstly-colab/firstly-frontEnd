import { useNavigate } from "react-router-dom";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const LoginPage = () => {

	const navigate = useNavigate();

	const handleSubmit = () => {
		navigate("/dashboard")
	};

	return (
        <div className="login">
			<div className="wrapper">
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
						<VisibilityOffIcon />
					</label>
					<button onClick={handleSubmit}>Sign Up</button>
				</form>
			</div>
		</div>
	);
};

export default LoginPage;
