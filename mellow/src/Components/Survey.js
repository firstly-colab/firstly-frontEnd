import { Link } from "react-router-dom";


const Survey = () => {

    return (
        <div className="survey">
            <p>Just a little reminder...</p>
            <img src="" alt=""></img>
            {/*  DELETE THIS AFTER
            <img src="https://jorcus.com/animation.gif" alt="funny animation GIF"> 
            or
            <img src="animation.gif" alt="funny animation GIF" width="100%">
             */}
            <button><Link to="/survey/q1">Next</Link></button>
        </div>
    );
};

export default Survey;
