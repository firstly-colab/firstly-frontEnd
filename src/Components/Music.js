import Illustration2 from "../assets/Illustration2.svg"
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from "@mui/material";

const Music = () => {
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate("/dashboard")
    };

    const handleBack = () => {
        navigate("/survey/results")
    };

    return (
        <div className="music">
            <div className="wrapper">
                <IconButton
                    type="button"
                    onClick={handleBack}
                    className="arrowStyle">
                    <ArrowBackIcon />
                </IconButton>
                <p>Remember to just have fun... You have nothing to lose!</p>
                <img src={Illustration2} alt="an illustration of a male and female head"></img>
                <p>Here’s a song to pump you up:</p>
                <a href="https://www.spotify.com">Link to spotify</a>
                <button onClick={handleSubmit}>Back home</button>
            </div>
        </div>
    );
};

export default Music;
