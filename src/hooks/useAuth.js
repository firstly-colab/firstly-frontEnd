import { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Context from '../context/Context';

const useAuth = () => {

    const { setUser } = useContext(Context)
    const [authInfo, setAuthInfo] = useState({name: '', email: '', password: ''})
    const [message, setMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false); 

    const navigate = useNavigate();

    const handleChange = (event) => {
        setAuthInfo({
            ...authInfo,
            [event.target.name] : event.target.value
        })
    }

    const login = async () => {
        const { email, password } = authInfo
        //const response = await fetch('https://mellow-colab.herokuapp.com/login', {
        const response = await fetch('http://localhost:3001/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email : email.toLowerCase(),
				password
			})
		})
        const data = await response.json();
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

    const signup = async () => {
        const { name, email, password } = authInfo
        //const response = await fetch('https://mellow-colab.herokuapp.com/register', {
        const response = await fetch('http://localhost:3001/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email : email.toLowerCase(),
                name,
				password
			})
		})
        const data = await response.json();

        if (!data.token) {
            setMessage(data)
            return
        }
        login()
    }

    const logout = () => {
        window.localStorage.removeItem("token")
        window.localStorage.removeItem("user")
        window.localStorage.removeItem("isLoggedIn")
        navigate('/login')
    }

    return {
        handleChange,
        login,
        signup,
        logout,
        authInfo,
        message,
        setMessage
    }
}

export default useAuth;