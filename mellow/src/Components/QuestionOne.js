import { useState } from "react";
import { Link } from "react-router-dom";
import Loader1 from "../assets/Loader1.png";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";



const QuestionOne = () => {

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
    // const [quality, setQuality] = useState([]);

    const handleCheck = (event) => {
        let list = [...checked];
        if (event.target.checked) {
            list = [...checked, event.target.value];
        } else {
            list.splice(checked.indexOf(event.target.value));
        }
        setChecked(list);
        console.log(list,"list of items checked")
    };

    const navigate = useNavigate();

	const handleSubmit = (event) => {
        event.preventDefault();
        console.log(checked,"submitted list")

        navigate("/survey/q2")
	};

    return (
        <div className="questionOne">
            <div className="flex">
                <Link to="/survey"><ArrowBackIcon /></Link>
                <img src={Loader1} alt="loading bar" />
            </div>
            <h2>{questionArray[0].question}</h2>
            <form className="questions">
                {questionArray[0].answers.map((answers, index) =>  
                    <div key={index}>
                        <input
                            id={index}
                            type="checkbox"
                            value={answers}
                            onChange={handleCheck}
                        />
                        <label htmlFor={index}> {answers} </label>
                    </div> 
                )}
                <button 
                    type="button" 
                    onClick={handleSubmit}
                    disabled={checked.length === 0}
                >Hello
                </button>
            </form>
        </div>
    );    
};

export default QuestionOne;

