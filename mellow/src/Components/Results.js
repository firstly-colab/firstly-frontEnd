import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from "@mui/material";
import { useState } from "react";

const Results = ({setPage, page}) => {

    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate("/survey/music")
    };

    const handleBack = () => {
        navigate("/survey")
        setPage(page + 3)

    };

    return (
        <div className="results">
            <IconButton
                type="button"
                onClick={handleBack}>
                <ArrowBackIcon />
            </IconButton>
            <h2>Results</h2>
            <button onClick={handleSubmit}>Music</button>
        </div>
    );
};

export default Results;
