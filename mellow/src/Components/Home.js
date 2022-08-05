import { Link } from "react-router-dom";

const Home = () => {

    return (
        <div className="home">
            <p>Go into your date</p>
            <h1>Mellow</h1>
            <img src="https://media.discordapp.net/attachments/759472478975950859/924384675118587954/683860864729612322.gif" alt="funny animation GIF"></img>
            <p>Worried you’ll have nothing to talk about on the first date? Take our questionnaire and we’ll personalize conversation starters for you!</p>
            <button><Link to="/login">Let’s go!</Link></button>
        </div>
    );
};

export default Home;
