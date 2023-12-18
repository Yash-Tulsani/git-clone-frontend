import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './components/Contact/Contact';
import Status from './components/Status/Status';
import Services from './pages/Services/Services'
import Fpo from "./pages/FPO/CreateForm"
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/status" element={<Status/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/fpo" element={<Fpo/>} />
        <Route path="/dashboard" element={<Dashboard/>}>
          <Route  path="statistics" element={"Statistics"}/>
          <Route path="transactions" element={"Transactions"}/>
          <Route path="wdcs"  element={"WDCs"}/>



          {/* Apps */}
          <Route path="kanban" element={"Kanban"}/>
          <Route path="editor" element={"Editor"}/>
          <Route path="calender" element={"Calendar"}/>
          <Route path="color-picker" element={"ColorPicker"}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
