//Modules
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import LoginPage from './Components/LoginPage';
import Survey from './Components/Survey';
import Results from './Components/Results';
import Music from './Components/Music';

//styles
import './style/master.css'

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/survey/results" element={<Results />} />
          <Route path="/survey/music" element={<Music />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
