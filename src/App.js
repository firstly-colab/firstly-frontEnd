//Modules
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import LoginPage from './Components/LoginPage';
import Survey from './Components/Survey';
import Results from './Components/Results';
import Music from './Components/Music';
import Dashboard from "./Components/Dashboard";
import SignupPage from './Components/SignupPage'

//styles
import './style/master.css'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/survey/results" element={<Results />} />
          <Route path="/survey/music" element={<Music />} />
        </Routes>
    </div>
  );
}

export default App;
