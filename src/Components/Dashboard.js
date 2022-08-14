import { useNavigate } from "react-router-dom";
import happychatting from "../assets/happychatting.svg"
import { useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from "@mui/material";

const Dashboard = () => {


    const [page, setPage] = useState(0)

    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate("/survey")
    };

    const handleAll = () => {
        setPage(page + 1)
    }

    const handleBack = () => {
        setPage(page - 1)
    };
    
    if (page === 0) {

    return (
        <div className="dashboard">
            <div className="dashboxcontainer">
                <h1>Firstly</h1>
                <button className="logout">Log out</button>
            </div>
            <div className="wrapper">
                <p>Hi Shannon!</p>
                <img src={happychatting} alt="an illustration of a male and female chatting"></img>
                <p>Going on a date? We’ll help you keep the conversation flowin’</p>
                <button className="takeQuestionaire" onClick={handleSubmit}>Take questionnaire </button>
                <div className="flexDashboard">
                    <p className="favorites">Your Favorites (x)</p>
                    <button 
                        onClick={handleAll}
                        className="expand smallfont">
                        See all
                    </button>
                </div>
            </div>
            <div className="seeAll">
                <img src={happychatting} alt="an illustration of a male and female head"></img>
            </div>
        </div>
        );
    }

    else {
        return (
            <div className="dashboard">
                <div className="dashboxcontainer">
                    <IconButton
                        type="button"
                        onClick={handleBack}
                        className="arrowbutton">
                        <ArrowBackIcon />
                    </IconButton>
                    <h1>
                        Firstly
                    </h1>
                </div>
                <div className="wrapper">
                    <p>Favourites (x)</p>
                </div>
            </div>
        );
    }
};

export default Dashboard;