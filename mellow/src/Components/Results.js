import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from "@mui/material";
import { useState, useContext, useLayoutEffect } from "react";
// import axios from 'axios'
import Context from '../context/Context'

const Results = () => {

    const navigate = useNavigate();
    const {checked, setChecked} = useContext(Context)
    const [result, setResult] = useState([])

    const handleSubmit = () => {
        navigate("/survey/music")
    };

    const handleBack = () => {
        setChecked([])
        navigate('/survey')
    }
    
    const getResult = async () => {
        try {
            const response = await fetch('http://localhost:3001/result', {
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
            <IconButton
                type="button"
                onClick={handleBack}>
                <ArrowBackIcon />
            </IconButton>
            <h2>Results</h2>
            {result.map(dialogue => {
                return (<div>
                    <h4>{dialogue.dialogue}</h4>
                </div>
            )})}
            <button onClick={handleSubmit}>Music</button>
        </div>
    );
};

export default Results;
