import { Link } from "react-router-dom";

const LoginPage = () => {

	return (
        <div className="login">
			<h2>Sign up to get started!</h2>
			<p>We want to make sure we personalize the best conversations for you! </p>
			<form>
				<label>
					Name:
					<input type="text" name="name" />
				</label>
				<label>
					Email:
					<input type="text" name="name" />
				</label>
				<label>
					Password:
					<input type="text" name="name" />
				</label>
				<label>
					Confirm Password:
					<input type="text" name="name" />
				</label>
			</form>
			<button><Link to="/survey">Log In</Link></button>
		</div>
	);
};

export default LoginPage;
