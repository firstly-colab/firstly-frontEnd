import { Link } from "react-router-dom";
import yourock from "../assets/yourock.gif"
import { useState } from "react";
import Loader1 from "../assets/Loader1.png";
import Loader3 from "../assets/Loader3.png"
import Loader2 from "../assets/Loader2.png"

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Results from "./Results";


const Survey = () => {

    const [page, setPage] = useState(0)

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

        const [checked, setChecked] = useState([]);
        const [arrayOne, setArrayOne] = useState([]);
        const [arrayTwo, setArrayTwo] = useState([]);
        const [arrayThree, setArrayThree] = useState([]);
        // const [checkedState, setCheckedState] = useState(
        //     new Array(questionArray[0].answers.length).fill(false));

    // console.log(questionArray[0].answers.length)

        const handleCheck = (event) => {
            // console.log(checkedState, "checkedstate")
            // const updatedCheckedState = checkedState.map((item, index) =>
            //     index === event ? !item : item
            // );

            // setCheckedState(updatedCheckedState);
            // console.log(updatedCheckedState, "updatedchecked state")

            let list = [...checked];
            if (event.target.checked) {
                list = [...checked, event.target.value];
            } else {
                console.log((event.target.value), "index of")
                list.splice(checked.indexOf(event.target.value), 1);
            }
            setChecked(list);
            console.log(list, "list of items checked")
        };


        

        const handleBack = () => {
                setChecked([])
                setPage(page - 1)
        };

        const navigate = useNavigate();

        const handleSubmit = (event) => {
            event.preventDefault();
            console.log(checked, "submitted list")

            console.log(checked, "submitted list")
            setChecked([])
            if (page === 1) {
                setArrayOne(checked)
                console.log(arrayOne, "arrayOne")
            }
            else if (page === 2) {
                setArrayTwo(checked)
                console.log(arrayOne, "arrayTwo")
            }
            else if (page === 3) {
                setArrayThree(checked)
                console.log(arrayOne, "arrayThree")
            }
            console.log(page, "page")
            if (page < 3) {
                setPage(page + 1)
            }
            else {
                
                <Results page={page} setPage={setPage}/>
                navigate("/survey/results")
            }
            // setChecked([])
        };

    if (page === 0) {
        return (
            <div className="survey">
                <p>Just a little reminder...</p>
                <img src={yourock} alt="gif of a rock moving its eyes"></img>
                <button onClick={() => setPage(1) }>Start</button>
            </div>
        );
    }

    else {
        return (
            <div className="questionOne">
                <div className="flex">
                    <IconButton 
                        type="button" 
                        onClick={handleBack}>
                        <ArrowBackIcon />
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
                                value={answers}
                                // checked={checkedState[index]}
                                onChange={handleCheck}
                            />
                            <label htmlFor={index}> {answers} </label>
                            {/* <p>{checkedState ? "unchecked" : "selected"}</p> */}
                        </div>
                    )}
                    <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={checked.length === 0}
                    >Next
                    </button>
                </form>
            </div>
        );    
    }
};

export default Survey;
