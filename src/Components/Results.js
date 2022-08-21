import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from "@mui/material";
import { useState, useContext, useLayoutEffect } from "react";
import dance from "../assets/dance.svg"
// import axios from 'axios'
import Context from '../context/Context'


import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import RefreshIcon from '@mui/icons-material/Refresh';

const Results = () => {

    const surveyArray = [
        "Too serious",
        "Doesn’t apply to me",
        "Not comfortable asking this",
        "Other"
    ]

    const navigate = useNavigate();
    const {checked, setChecked} = useContext(Context)
    const [result, setResult] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    const [modal, setModal] = useState(false);
    const [modalOne, setModalOne] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    const toggleHeartModal = () => {
        setModalOne(!modalOne);
    };

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const handleSubmit = () => {
        navigate("/survey/music")
    };

    const handleBack = () => {
        setChecked([])
        navigate('/survey')
    }
    
    const getResult = async () => {
        try {
            setIsLoading(true);
            const response = await fetch('https://mellow-colab.herokuapp.com/result', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    checked
                })
            })
            const data = await response.json();
            console.log("data", data)
            //wait 2 seconds before loading state turns back to false (loading spinner)
            setTimeout(function () {
                setResult(data)
                setIsLoading(false);
            }, 2000)
        } catch (error) {
            console.log(error)
        }
        
    }
    useLayoutEffect(() => {
        getResult();
    }, [])

    const handleRefresh = (event) => {
        event.preventDefault();
        console.log("new question comes")
    }

    console.log(result)
    return (
        
        <div className="results">

            {isLoading ? 
            <div className="spinnerContainer"> 
                <p>Loading some fun questions for you</p>
                <div className="loadingSpinner">
                </div>
            </div> : 
            <div className="wrapper">
                <IconButton
                    type="button"
                    onClick={handleBack}
                    className="arrowStyle">
                    <ArrowBackIcon />
                </IconButton>

                <p>Here are some conversation starters for you, Shannon:</p>

                {result.map(dialogue => {
                    return (<div key={dialogue.id}>
                        <div className="ontop">
                            <p className="smallfont">{dialogue.category}</p>

                            <div className="boxStyle">

                                <Checkbox {...label}
                                    icon={<FavoriteBorder
                                    className="icon" />}
                                    checkedIcon={<Favorite
                                    className="iconbutton" />
                                }
                                />

                                <img src={dance} alt="illustration" />
                                <p>{dialogue.dialogue}</p>
                                <h3>{dialogue.dialogue}</h3>

                                <IconButton
                                    onClick={toggleModal}>
                                    <RefreshIcon
                                        className="icon" />
                                </IconButton>

                            </div>
                        </div>
                    </div>
                    )
                })}
                {modalOne && (
                    <div className="modal">
                        <div onClick={toggleHeartModal} className="overlay"></div>
                        <div className="modalContent">
                            <h3>Saved to Favorites!</h3>
                        </div>
                    </div>
                )}
                {modal && (
                    <div className="modal">
                        <div onClick={toggleModal} className="overlay"></div>
                        <form className="modalContent">
                            <h3>Okay! Tell us why:</h3>
                            {surveyArray.map((survey, index) =>
                                <div className="flexRadio" key={index}>
                                    <input
                                        id={index}
                                        type="radio"
                                        name="selected"
                                    />
                                    <label htmlFor={index}>{survey}</label>
                                </div>
                            )}
                            <button className="refresh" onClick={handleRefresh}>Send</button>
                        </form>
                    </div>
                )}

                <button className="complete" onClick={handleSubmit}>Complete</button>
            </div>}         
        </div>
    );
};

export default Results;
