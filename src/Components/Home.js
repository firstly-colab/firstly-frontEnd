import dance from "../assets/dance.png"
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate("/login")
    };

    return (
        <div className="home">
            <h1>Firstly</h1>
            <img src={dance} alt="illustrtion of a mobile phone and two people beside it" />
            <p>Curated conversation starters to bring to your first date!</p>
            <button onClick={handleSubmit}>Let’s go!</button>
        </div>
    );
};

export default Home;
