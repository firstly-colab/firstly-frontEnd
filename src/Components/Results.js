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

    const navigate = useNavigate();
    const {checked, setChecked} = useContext(Context)
    const [result, setResult] = useState([])

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
            setResult(data)
        } catch (error) {
            console.log(error)
        }
        
    }
    useLayoutEffect(() => {
        getResult();
    }, [])

    console.log(result)
    return (
        <div className="results">
            <div className="wrapper">
                <IconButton
                    type="button"
                    onClick={handleBack}
                    className="arrowStyle">
                    <ArrowBackIcon />
                </IconButton>
                <p>Here are some conversation starters for you, Shannon:</p>
                {result.map(dialogue => {
                    return (<div key = {dialogue.id}>
                        <div className="ontop">
                            <p className="smallfont">Foodie</p>
                            <div className="boxStyle">
                                <Checkbox {...label} 
                                icon={<FavoriteBorder 
                                className="icon" />} 
                                checkedIcon={<Favorite 
                                className="iconbutton" />}
                                />
                                <img src={dance} alt="1" />
                                <p>{dialogue.dialogue}</p>
                                <h3>{dialogue.dialogue}</h3>
                                <IconButton>
                                    <RefreshIcon
                                    className="icon" />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                )})}
                <button className="complete" onClick={handleSubmit}>Complete</button>
            </div>
        </div>
    );
};

export default Results;
