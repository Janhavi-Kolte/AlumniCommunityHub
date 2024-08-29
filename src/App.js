
import './App.css';
import Alumni from './Component/Alumni'
import Login from './Component/Login';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import StudentSignUp from './Component/StudentSignUp';
import HomePage from './Component/HomePage';
import MegaMenu from './Component/MegaMenu';
import AdminDashboard from './Component/AdminDashboard';
import EventDashboard from './Component/EventDashboard';
import StudentDashboard from './Component/StudentDashboard';
import AlumniDashboard from './Component/AlumniDashboard';

function App() {
  return (
    <div className="App">

      <h2>Alumni Community Hub</h2>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Alumni />} />
          <Route path='/stuRegister' element={<StudentSignUp />} />
          <Route path="/home" element={<HomePage />} />
          <Route path='/menu' element={<MegaMenu />} />
          <Route path="/aDash" exact Component={AdminDashboard} />
          <Route path="/eDash" exact Component={EventDashboard} />
          <Route path="/stdDash" exact Component={StudentDashboard} />
          <Route path="/aluDash" exact Component={AlumniDashboard} />

          </Routes>
      </Router>
    </div>
  );
}

export default App;
