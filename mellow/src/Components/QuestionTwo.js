import { Link } from "react-router-dom";

const QuestionTwo = () => {

    const questionArray = [
        //[0]
        // {
        //     question: `Which quality attracted you the most to "swipe right?"`,
        //     answers: [
        //         "Friends oriented",
        //         "Pet Lover",
        //         "Outdoorsy",
        //         "Humorous"
        //     ],
        // }
        // },
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

    return (
        <div className="questionTwo">
            <button><Link to="/survey/q1">Back Button</Link></button>
            <h2>Question Two</h2>
            <button><Link to="/survey/q3">Next</Link></button>
        </div>
    );
};

export default QuestionTwo;
