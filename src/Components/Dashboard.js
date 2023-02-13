import { useNavigate } from "react-router-dom";
import happychatting from "../assets/happychatting.svg"
import { useState, useEffect } from "react";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import useAuth from "../hooks/useAuth";
//pics
import food from '../assets/food.svg'
import family from '../assets/family.svg'
import friends from '../assets/friends.svg'
import hike from '../assets/hike.svg'
import hobbies from '../assets/hobbies.svg'
import humor from '../assets/humor.svg'
import music from '../assets/music.svg'
import netflix from '../assets/netflix.svg'
import outdoorsy from '../assets/outdoorsy.svg'
import pet from '../assets/pet.svg'
import travel from '../assets/travel.svg'
import newThings from '../assets/trying-new.svg'
//no favourites
import nofavourites from '../assets/nofavourites.svg'

const Dashboard = () => {

    const tagLine = {
        "Foodie" : ["Because being a foodie is important...", food],
        "Loves to travel" : ["Since having a travel bug is necessary...", travel],
        "Pet lover" : ["Because having a pet always wins...", pet],
        "Friends oriented" : ["Everyone should have friends...", friends],
        "Outdoorsy" : ["Nature is the best healer...", outdoorsy],
        "Humorous" : ["Who doesn't love a good laugh...", humor],
        "Family oriented" : ["Because family is the best...", family],
        "Passionate about personal hobbies" : ["Because hobbies are for your soul...", hobbies],
        "Open to trying new things" : ["Here curiosity doesn't kill the cat...", newThings],
        "Music lover" : ["Everyone needs a song rec...", music],
        "Netflix & Chill-er" : ["Because why not...", netflix],
        "Planning the next hike" : ["View is always better from the top...", hike]
    }

    const { logout } = useAuth();
    const [favorites, setFavorites] = useState([])
    const user = JSON.parse(window.localStorage.getItem('user'))
    
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate("/survey")
    };

    const getFavorites = async () => {
        const response = await fetch(`https://mellow-colab.herokuapp.com/liked-question/${user.id}`)
        const data = await response.json()
        setFavorites(data)
    }

    const handleDislike = async (e, response_id) => {
        e.preventDefault();
        const response = await fetch(`https://mellow-colab.herokuapp.com/liked-question/${user.id}/${response_id}`, {
            method: 'DELETE',
        })
        const message = await response.json()
        console.log(message)
        getFavorites()
    }

    useEffect(() => {
        getFavorites()
	}, [favorites.length]);

    return (
        <div className="dashboard">
            <div className="dashboxcontainer">
                <h1>Firstly</h1>
                <button className="logout" onClick={logout}>Log out</button>
            </div>
            <div className="wrapper">
                <p>Hi {user.name[0].toUpperCase() + user.name.slice(1)}!</p>
                <img src={happychatting} alt="an illustration of a male and female chatting"></img>
                <p>Going on a date? We’ll help you keep the conversation flowin’</p>
                <button className="takeQuestionaire" onClick={handleSubmit}>Take questionnaire </button>
                <p className="favorites">Your Favorites ({ favorites.length })</p>
                {favorites.length > 0 ? favorites.map(dialogue => {
                //cards for showing the favorites
                return (
                <div key={dialogue.id}>
                    <div className="ontop">
                        <p className="smallfont">{dialogue.category}</p>
                        <div className="boxStyle">
                            <Checkbox {...label}
                                checked = {true}
                                icon={<FavoriteBorder
                                className="icon" />}
                                checkedIcon={<Favorite
                                className="iconbutton" />}
                                onClick = {(event) => {handleDislike(event, dialogue.id)}}
                            />
                            <img src={tagLine[dialogue.category][1]} alt="1" />
                            <h3>{dialogue.dialogue}</h3>
                        </div>
                    </div>
                </div>)}) : 
                <div className="noFavouritesYet">
                    <img src={nofavourites} alt="heart bubble"></img>
                    <p>No favorites yet!</p>
                    <p>Take the Firstly questionnaire to find and save your favorite conversation starters!</p>
                </div>} 
            </div>
        </div>
    );
}
export default Dashboard;