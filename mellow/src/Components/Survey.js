import { Link } from "react-router-dom";


const Survey = () => {

    return (
        <div className="survey">
            <h3>Before we begin...</h3>
            <img src="https://media.discordapp.net/attachments/759472478975950859/924384675118587954/683860864729612322.gif" alt="funny animation GIF"></img>
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
