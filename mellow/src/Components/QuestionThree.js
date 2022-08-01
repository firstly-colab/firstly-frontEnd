import { Link } from "react-router-dom";

const QuestionThree = () => {

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
        <div className="questionThree">
            <button><Link to="/survey/q2">Back Button</Link></button>
            <h2>Question Three</h2>
            <button><Link to="/survey/results">Results</Link></button>
        </div>
    );
};

export default QuestionThree;
