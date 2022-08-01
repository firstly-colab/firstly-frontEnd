import { Link } from "react-router-dom";

const LoginPage = () => {

	return (
        <div className="login">
			<h2>Log in</h2>
			<button><Link to="/survey">Log In</Link></button>
		</div>
	);
};

export default LoginPage;
