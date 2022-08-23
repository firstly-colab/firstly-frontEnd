import Illustration2 from "../assets/Illustration2.svg"
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from "@mui/material";
import PlayCircleIcon from '@mui/icons-material/PlayCircle'; 
import { useState, useContext } from "react";
import Context from '../context/Context'

const Music = () => {

    const [modal, setModal] = useState(false);
    const { setChecked } = useContext(Context)


    const toggleModal = () => {
        setModal(!modal);
    };

    const navigate = useNavigate();

    const handleSubmit = () => {
        setChecked([])
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
                    <ArrowBackIcon 
                    className="colorArrow"/>
                </IconButton>
                <p>Remember to just have fun... You have nothing to lose!</p>
                <img src={Illustration2} alt="an illustration of a male and female head"></img>
                <p>Here’s a playlist to pump you up:</p>


                <button
                    className="musicButton" 
                    onClick={toggleModal}>
                    <PlayCircleIcon className="playlist"/>
                    <span className="flexCont">
                        Confidence Boost
                        <span className="spotify">Spotify</span>
                    </span>
                </button>



                <button className="submit" onClick={handleSubmit}>Back home</button>

                {modal && (
                    <div className="modal">
                        <div onClick={toggleModal} className="overlay"></div>
                        <div className="modalContent">
                            <h3>Listen to Confidence Boost?</h3>
                            <a href="https://open.spotify.com/playlist/37i9dQZF1DX4fpCWaHOned">Open Spotify</a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Music;
