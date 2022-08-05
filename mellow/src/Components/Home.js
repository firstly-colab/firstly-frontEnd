import { Link } from "react-router-dom";
import Meeting from "../assets/Meeting.png"

const Home = () => {

    return (
        <div className="home">
            <h1>Firstly</h1>
            <img src={Meeting} alt="illustrtion of a mobile phone and two people beside it" />
            <p>Curated conversation starters to bring to your first date!</p>
            <button><Link to="/login">Let’s go!</Link></button>
        </div>
    );
};

export default Home;
