import './App.css';
//Modules
import { Link, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import LoginPage from './Components/LoginPage';
import QuestionOne from './Components/QuestionOne';
import Survey from './Components/Survey';
import QuestionTwo from './Components/QuestionTwo';
import QuestionThree from './Components/QuestionThree';
import Results from './Components/Results';
import Music from './Components/Music';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        {/* <h1>Mellow</h1> */}
        <ul className="navBar">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/login">let's get started</Link>
          </li>
          <li>
            <Link to="/survey">survey</Link>
          </li>
          <li>
            <Link to="/survey/q1">question 1</Link>
          </li>
          <li>
            <Link to="/survey/q2">question 2</Link>
          </li>
          <li>
            <Link to="/survey/q3">question 3</Link>
          </li>
          <li>
            <Link to="/survey/results">results</Link>
          </li>
          <li>
            <Link to="/survey/music">music</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/survey/q1" element={<QuestionOne />} />
          <Route path="/survey/q2" element={<QuestionTwo />} />
          <Route path="/survey/q3" element={<QuestionThree />} />
          <Route path="/survey/results" element={<Results />} />
          <Route path="/survey/music" element={<Music />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
