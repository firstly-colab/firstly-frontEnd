// import { Link } from "react-router-dom";
import yourock from "../assets/yourock.gif"
import { useState, useContext } from "react";
import Loader1 from "../assets/Loader1.svg";
import Loader3 from "../assets/Loader3.svg"
import Loader2 from "../assets/Loader2.svg"

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Context from '../context/Context'


const Survey = () => {
    const navigate = useNavigate();

    //States
    const [page, setPage] = useState(0)
    
    
    //progress bar assets
    const imageArray = [
        {
            title: '33%',
            image: Loader1,
        },
        {
            title: '66%',
            image: Loader2,
        },
        {
            title: '100%',
            image: Loader3,
        },
    ]

    //survey question and available options
    const questionArray = [
        //[0]
        {
            question: `Which quality attracted you the most to “swipe right?”"`,
            answers: [
                "Friends oriented",
                "Pet lover",
                "Outdoorsy",
                "Humorous"
            ],
        },
        {
            question: "What is the most important to you in a partner?",
            answers: [
                "Family oriented",
                "Passionate about personal hobbies",
                "Loves to travel",
                "Open to trying new things"
            ],
        },
        {
            question: "Which best describes you?",
            answers: [
                "Music lover",
                "Netflix & Chill-er",
                "Foodie",
                "Planning the next hike"
            ],
        },
    ];

    //some more states and contexts
    const {checked, setChecked} = useContext(Context)
    const [array0, setArray0] = useState([])
    const [array1, setArray1] = useState([])
    const [array2, setArray2] = useState([])
    const [checkList, setCheckList] = useState({
        0: new Array(questionArray[0].answers.length).fill(false),
        1: new Array(questionArray[1].answers.length).fill(false),
        2: new Array(questionArray[2].answers.length).fill(false),
    })

    //event handling funtions
    const handleCheck = (event, index) => {
        const key = page - 1;
        const keyValue = checkList[key]
        
        keyValue[index] = !keyValue[index]
        
        setCheckList({...checkList, [key] : keyValue})
        
        let list = [...checked];
        if (event.target.checked) {
            list = [...checked, event.target.name];
        } else {
            list.splice(checked.indexOf(event.target.name), 1);
        }
        setChecked(list);

        // let result0 = checkList[0].every(element => element === false);
        // setArray0(result0)
        // console.log(array0, "result0")
        // let result1 = checkList[1].every(element => element === false);
        // setArray1(result1)
        // console.log(array1, "result1")
        // let result2 = checkList[2].every(element => element === false);
        // setArray2(result2)
        // console.log(array2, "result2")
    };


    const handleBack = () => {
        if (page === 0) {
            navigate('/dashboard')
        }
        else {
            setPage(page - 1)
        }
            
    };


    const handleNext = (event) => {
        event.preventDefault();
        console.log(checked, "submitted list")
        setPage(page + 1)
    };

    const handleSubmit = () => {
        navigate('/survey/results')
    }

    

    //rendering section
    if (page === 0) {
        return (
            <div className="survey">
                <div className="wrapper">
                    <IconButton
                        type="button"
                        onClick={handleBack}
                        className="arrowStyle">
                        <ArrowBackIcon
                            className="colorArrow" />
                    </IconButton>
                    <p>Just a little reminder...</p>
                    <img src={yourock} alt="gif of a rock moving its eyes"></img>
                    <button onClick={() => setPage(1) }>Start</button>
                </div>
            </div>
        );
    }

    else {
        return (
            <div className="questionOne">
                <div className="wrapper">
                    <div className="flex">
                        <IconButton 
                            type="button" 
                            onClick={handleBack}>
                            <ArrowBackIcon 
                                className="colorArrow"/>
                        </IconButton>
                        <img 
                            src={imageArray[page - 1].image} 
                            alt={imageArray[page - 1].title}
                        />
                    </div>

                    <h2>
                        {questionArray[page - 1].question}
                    </h2>

                    <form className="questions">
                        {questionArray[page - 1].answers.map((answers, index) =>
                            <div key={index}>
                                <input
                                    id={index}
                                    type="checkbox"
                                    value={checkList[page - 1]}
                                    checked = {checkList[page - 1][index]}
                                    name ={answers}  
                                    
                                    onChange={(event) => {
                                        handleCheck(event, index)
                                    }}
                                    
                                />
                                <label htmlFor={index}> {answers} </label>
                            </div>
                        )}
                        {page < 3 ? (
                        <button
                                type="button"
                                onClick={handleNext}
                                style={{ backgroundColor: checked.length === 0 ? 'rgba(0, 0, 0, 0.5)' : 'black' }} 
                                disabled={checked.length === 0}
                            >Next
                            </button>
                        ) : ( 
                            <button
                                type="button"
                                onClick={handleSubmit}
                                disabled={checked.length === 0}
                            >Submit
                            </button>
                        )} 
                    </form>
                </div>
            </div>
        );    
    }
};

export default Survey;
