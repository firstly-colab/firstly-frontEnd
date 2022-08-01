import { Link } from "react-router-dom";

const Music = () => {


    return (
        <div className="music">
            <button><Link to="/survey/results">Back Button</Link></button>
            <h2>Music</h2>
            <button><Link to="/survey/q1">Retake questionnaire</Link></button>
        </div>
    );
};

export default Music;
