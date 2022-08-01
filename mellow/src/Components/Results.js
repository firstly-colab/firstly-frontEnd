import { Link } from "react-router-dom";

const Results = () => {

    return (
        <div className="results">
            <button><Link to="/survey/q3">Back Button</Link></button>
            <h2>Results</h2>
            <button><Link to="/survey/music">Music</Link></button>
        </div>
    );
};

export default Results;
