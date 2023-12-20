import logo from './logo.svg';
import { useState, useEffect } from "react"
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Chatbot from './pages/Chatbot/Chatbot';
import Services from './pages/Services/Services';
import Checkout from './pages/Checkout/Checkout'
import FAQ from './pages/FAQ/FAQ';

import Fpo from "./pages/FPO/CreateForm"
import About from './pages/About/about';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Profile from './components/Profile/Profile';
import TestGraph from './components/TestGraph';
import Dashboard from './pages/Dashboard/Dashboard';
import TextToSpeech from './components/TestTextToSpeech';
import AvailableWDCs from './pages/AvailableWDCs/AvailableWDCs';
import { ToastContainer, toast } from 'react-toastify';

function App() {


  return (
    <Router>
      <Navbar />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
        {/* Same as */}
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/faq" element={<FAQ/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/checkout/:id" element={<Checkout />} />
        <Route path="/fpo" element={<Fpo/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/profile" element={<Profile/>} /> 
        <Route path="/wdcs" element={<AvailableWDCs/>} />       
        <Route path="/dashboard" element={<Dashboard/>}>
          <Route path="statistics" element={"Statistics"}/>
          <Route path="transactions" element={"Transactions"}/>
          <Route path="wdcs"  element={"WDCs"}/>



          {/* Apps */}
          <Route path="kanban" element={"Kanban"}/>
          <Route path="editor" element={"Editor"}/>
          <Route path="calender" element={"Calendar"}/>
          <Route path="color-picker" element={"ColorPicker"}/>
        </Route>
        <Route path="/testGraph" element={<TestGraph/>} />
        <Route path="/testTextToSpeech" element={<TextToSpeech text={"This is the temporary text"}/>}  />
      </Routes>
      <Chatbot />
    </Router>
  );
}

export default App;
