import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login';
import StudentHomePage from './components/student/StudentHomePage';
import HOHomePage from './components/ho/HOHomePage';
import HRHomePage from './components/hr/HRHomePage';
import TicketDetails from './components/hr/ticket_details';
import TicketDetailsHo from './components/ho/ticket_details_ho';

function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/student" element={<StudentHomePage/>}/>
    <Route path="/ho" element={<HOHomePage/>}/>
    <Route path="/hr" element={<HRHomePage/>}/>
    <Route path="/display_ticket/ticket_details" element={<TicketDetails/>}/>
    <Route path="/ticket_details_ho" element={<TicketDetailsHo/>}/>
    </Routes>
  </Router>
);
}

export default App;
