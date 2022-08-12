import Illustration2 from "../assets/Illustration2.png"
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from "@mui/material";

const Music = () => {
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate("/survey")
    };

    const handleBack = () => {
        navigate("/survey/results")
    };

    return (
        <div className="music">
            <IconButton
                type="button"
                onClick={handleBack}>
                <ArrowBackIcon />
            </IconButton>
            <h2>Remember to just have fun... You have nothing to lose!</h2>
            <p>Here’s a song to pump you up:</p>
            <img src={Illustration2} alt="an illustration of a male and female head"></img>
            <button onClick={handleSubmit}>Music</button>
        </div>



    );
};

export default Music;
