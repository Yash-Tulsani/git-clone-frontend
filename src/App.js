import logo from './logo.svg';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Contact from './components/Contact/Contact';
import Status from './components/Status/Status';
import Chatbot from './components/Chatbot/Chatbot';

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
      <Chatbot/>
    </Router>
  );
}

export default App;
