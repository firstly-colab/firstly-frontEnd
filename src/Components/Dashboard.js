import { useNavigate } from "react-router-dom";
import happychatting from "../assets/happychatting.svg"
import { useState, useContext, useEffect } from "react";
import Context from '../context/Context'
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import { IconButton } from "@mui/material";

const Dashboard = () => {

    const [page, setPage] = useState(0)
    const { user, setUser } = useContext(Context)
    const [favorites, setFavorites] = useState([])
    

    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate("/survey")
    };
    
    const handleLogout = () => {
        window.localStorage.removeItem("token")
        window.localStorage.removeItem("user")
        window.localStorage.removeItem("isLoggedIn")
        navigate('/login')
    }

    const getFavorites = async () => {
        const response = await fetch(`https://mellow-colab.herokuapp.com/liked-question/${user.id}`)
        const data = await response.json()
        setFavorites(data)
    }

    //doesn't work as intended; will get to back to it later
    useEffect(() => {
		const loggedIn = window.localStorage.getItem("isLoggedIn");

		if (loggedIn) {
		  const user = JSON.parse(window.localStorage.getItem("user"));
		  setUser(user);
		} else {
		  navigate('/login')
		}
        getFavorites()
	}, []);

    if (page === 0) {

    return (
        <div className="dashboard">
            <div className="dashboxcontainer">
                <h1>Firstly</h1>
                <button className="logout" onClick={handleLogout}>Log out</button>
            </div>
            <div className="wrapper">
                <p>Hi {user.name[0].toUpperCase() + user.name.slice(1)}!</p>
                <img src={happychatting} alt="an illustration of a male and female chatting"></img>
                <p>Going on a date? We’ll help you keep the conversation flowin’</p>
                <button className="takeQuestionaire" onClick={handleSubmit}>Take questionnaire </button>
                <div className="flexDashboard">
                    <p className="favorites">Your Favorites ({ favorites.length })</p>
                    {favorites.length > 0 ?
                        favorites.map(ques => {
                        //cards for showing the favorites
                        return (
                            <div key = {ques.id}>
                                <p>{ques.dialogue}</p>
                            </div> 
                        ) 
                        }): <p>No saved questions. Please take the questionnaire.</p>

                    }
                    
                </div>
            </div>
        </div>
        );
    }
}
export default Dashboard;