import { Link } from "react-router-dom";

const Music = () => {


    return (
        <div className="music">
            <button><Link to="/survey/results">Back Button</Link></button>
            <h2>Remember to just have fun... You have nothing to lose!</h2>
            <p>Here’s a song to pump you up:</p>
            
            <button><Link to="/survey/q1">Retake questionnaire</Link></button>
        </div>
    );
};

export default Music;
