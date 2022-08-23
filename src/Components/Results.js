import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from "@mui/material";
import { useState, useContext, useEffect } from "react";
import dance from "../assets/dance.svg"
import Context from '../context/Context'


import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import RefreshIcon from '@mui/icons-material/Refresh';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

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

const Results = () => {

    const surveyArray = [
        "Too serious",
        "Doesn't apply to me",
        "Not comfortable asking this",
        "Other"
    ]

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

    const navigate = useNavigate();
    const {checked, setChecked, user} = useContext(Context)
    const [result, setResult] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    const [currentDisliked, setCurrentDisliked] = useState(null)
    const [disliked, setDisliked] = useState({});

    const [modal, setModal] = useState(false);
    const [modalOne, setModalOne] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    const toggleHeartModal = () => {
        setModalOne(!modalOne);
        if (modalOne === false) { setTimeout(() => {
        setModalOne(modalOne);
        }, 2000)}
        else {
            return
        }
    };

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const handleSubmit = () => {
        navigate("/survey/music")
    };

    const handleBack = () => {
        setChecked([])
        navigate('/survey')
    }
    
    const getResult = async () => {
        try {
            setIsLoading(true);
            const response = await fetch('https://mellow-colab.herokuapp.com/result', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    checked
                })
            })
            const data = await response.json();

            //wait 2 seconds before loading state turns back to false (loading spinner)
            setTimeout(function () {
                setResult(data)
                setIsLoading(false);
            }, 2000)
        } catch (error)
            {
            console.log(error)
        }
        
    }

    const handleRefresh = (event) => {
        event.preventDefault();
        toggleModal()
        console.log("new Question comes now")
        setDisliked({...disliked, [currentDisliked] : true})
    }

    const handleLike = async (e, question_id) => {
        e.preventDefault()
        try {
            const response = await fetch('https://mellow-colab.herokuapp.com/liked-question', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_id : user.id,
                    response_id : question_id
                })   
            })

            const message = await response.json() //This message is string "Added to favorites" when liking is done (can choose what to do with it)
            console.log(message)
        } catch (error) {
            console.log(error)
        }
        
    }

    useEffect(() => {
        getResult();
    }, [])

    //here I am populating the arr threeShown which is used to render 3 ques as results, but when refresh is pressed it properly changes the ques
    const threeShown = []
    const populateThreeShown = () => {
        let count = 0
        result.forEach(ele => {
            if (count < 3) {
                if (!disliked[ele.id]) {
                    threeShown.push(ele)
                    count++
                }
            }
        })
    }
    populateThreeShown();


    return (
        
        <div className="results">

            {isLoading ? 
            <div className="spinnerContainer"> 
                <p>Loading some fun questions for you</p>
                <div className="loadingSpinner">
                </div>
            </div> :
            <div className = "wrapper"> 
            {/* <div className="flexDashboard"> */}
                <IconButton
                    type="button"
                    onClick={handleBack}
                    className="arrowStyle">
                    <ArrowBackIcon 
                        className="colorArrow"/>
                </IconButton>

                <p>Here are some conversation starters for you, {user.name[0].toUpperCase() + user.name.slice(1)}:</p>
                {threeShown.length === 0 ? (<p>Sorry {user.name[0].toUpperCase() + user.name.slice(1)}, we ran out of questions. Please take the survey again.</p>) : 
                (
                    threeShown.map(dialogue => {
                        return (<div key={dialogue.id}>
                            <div className="ontop">
                                <p className="smallfont">{dialogue.category}</p>
    
                                <div className="boxStyle">
    
                                    <Checkbox {...label}
                                        icon={<FavoriteBorder
                                            className="icon" />}
                                        checkedIcon={<Favorite
                                            className="iconbutton" />}
                                        onClick = {(event) => {
                                            toggleHeartModal()
                                            handleLike(event, dialogue.id)
                                        }}
                                    />
    
                                    <img src={tagLine[dialogue.category][1]} alt="1" />
                                    <p>{tagLine[dialogue.category][0]}</p>
                                    <h3>{dialogue.dialogue}</h3>
    
                                    <IconButton
                                        onClick={() => {
                                            toggleModal()
                                            setCurrentDisliked(dialogue.id)
                                        }
                                        }>
                                        <RefreshIcon
                                            className="icon" />
                                    </IconButton>
    
                                </div>
                            </div>
                        </div>
                        )
                    })
                )
                }
                {modalOne && (
                    <div className="modal">
                        <div onClick={toggleHeartModal} className="overlay"></div>
                        <div className="modalContent">
                            <h3>Saved to Favorites!</h3>
                            <CheckCircleOutlineIcon className="circleCheckmark" />
                        </div>
                    </div>
                )}
                {modal && (
                    <div className="modal">
                        <div onClick={toggleModal} className="overlay"></div>
                        <form className="modalContent">
                            <h3>Okay! Tell us why:</h3>
                            {surveyArray.map((survey, index) =>
                                <div className="flexRadio" key={index}>
                                    <input
                                        id={index}
                                        type="radio"
                                        name="selected"
                                    />
                                    <label htmlFor={index}>{survey}</label>
                                </div>
                            )}
                            <button className="refresh" 
                                onClick={handleRefresh}
                                
                            >Send
                            </button>
                        </form>
                    </div>
                )}

                <button className="complete" onClick={handleSubmit}>Finish</button>
            {/* </div> */}
            </div>}         
        </div>
    );
};

export default Results;
