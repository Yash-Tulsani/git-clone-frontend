import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Contact from './components/Contact/Contact';
import Status from './components/Status/Status';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/status" element={<Status/>} />
      </Routes>
    </Router>
  );
}

export default App;
