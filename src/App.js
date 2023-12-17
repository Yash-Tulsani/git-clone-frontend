import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './components/Contact/Contact';
import Status from './components/Status/Status';
import Services from './pages/Services/Services'

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
      </Routes>
    </Router>
  );
}

export default App;
