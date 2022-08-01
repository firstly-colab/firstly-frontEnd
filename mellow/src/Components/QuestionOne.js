import { useState } from "react";
import { Link } from "react-router-dom";


const QuestionOne = () => {

    const questionArray = [
        //[0]
        {
            question: `Which quality attracted you the most to "swipe right?"`,
            answers: [
                "Friends oriented",
                "Pet Lover",
                "Outdoorsy",
                "Humorous"
            ],
        }
        // },
        // {
        //     question: "What is the most important to you in a partner?",
        //     answers: [
        //         "Family oriented",
        //         "Passionate about personal hobbies",
        //         "Loves to travel",
        //         "Open to trying new things"
        //     ],
        //     questionId: 2,
        // },
        // {
        //     question: "Which best describes you?",
        //     answers: [
        //         "Music Lover", 
        //         "Netflix & Chill-er", 
        //         "Foodie", 
        //         "Planning the next hike"
        //     ],
        //     questionId: 3,
        // },
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
            <button><Link to="/survey">Back button</Link></button>
            <h2>{questionArray[0].question}</h2>
            <form>
                {questionArray[0].answers.map((answers, index) =>  
                    <div key={index}>
                        <label htmlFor={answers}>{answers}</label>
                        <input
                            type="checkbox"
                            value={answers}
                            onChange={handleCheck}
                            
                        />
                    </div>  
                )}
                <button type="button" onClick={handleSubmit}><Link to="/survey/q2">Next</Link></button>
            </form>
        </div>
    );    
};

export default QuestionOne;

