import { Link } from "react-router-dom";
import { useState } from "react";
import Loader2 from "../assets/Loader2.png"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const QuestionTwo = () => {

    const questionArray = [
        //[0]
        {
            question: "What is the most important to you in a partner?",
            answers: [
                "Family oriented",
                "Passionate about personal hobbies",
                "Loves to travel",
                "Open to trying new things"
            ],
            questionId: 2,
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
        <div className="questionTwo">
            <div className="flex">
                <Link to="/survey/q1"><ArrowBackIcon /></Link>
                <img src={Loader2} alt="loading bar" />
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
                
                <button type="button" onClick={handleSubmit}>
                    <Link to="/survey/q3">Next</Link></button>
            </form>
        </div>
    );
};

export default QuestionTwo;
