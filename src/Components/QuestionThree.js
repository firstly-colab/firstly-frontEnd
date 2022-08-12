import { Link } from "react-router-dom";
import { useState } from "react";
import Loader3 from "../assets/Loader3.png"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const QuestionThree = () => {

    const questionArray = [
        //[0]
        {
            question: "Which best describes you?",
            answers: [
                "Music lover", 
                "Netflix & Chill-er", 
                "Foodie", 
                "Planning the next hike"
            ],
            questionId: 3,
        },
    ];

    const [checked, setChecked] = useState([]);

    const handleCheck = (event) => {
        let list = [...checked];
        if (event.target.checked) {
            list = [...checked, event.target.value];
        } else {
            list.splice(checked.indexOf(event.target.value));
        }
        setChecked(list);
        console.log(list, "list of items checked")
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        console.log(checked, "submitted list")
    };

    return (
        <div className="questionThree">
            <div className="flex">
                <Link to="/survey/q2"><ArrowBackIcon /></Link>
                <img src={Loader3} alt="loading bar" />
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
                <button type="button" onClick={handleSubmit}><Link to="/survey/results">Results</Link></button>
            </form>
        </div>
    );
};

export default QuestionThree;
