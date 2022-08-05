import { useState } from "react";
import { Link } from "react-router-dom";
import Loader1 from "../assets/Loader1.png"


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
        }
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
        console.log(list,"list of items checked")
    };

	const handleSubmit = (event) => {
        event.preventDefault();
        console.log(checked,"submitted list")

	};

    return (
        <div className="questionOne">
            <button className="backButton"><Link to="/survey">back Button</Link></button>
            <img src={Loader1} alt="loading bar" />
            <h2>{questionArray[0].question}</h2>
            <form className="questions">
                {questionArray[0].answers.map((answers, index) =>  
                    <div key={index}>
                        <label>
                            <input
                                type="checkbox"
                                value={answers}
                                onChange={handleCheck}
                            /> {answers}
                        </label>
                    </div>  
                )}
                <button type="button" onClick={handleSubmit}><Link to="/survey/q2">Next</Link></button>
            </form>
        </div>
    );    
};

export default QuestionOne;

