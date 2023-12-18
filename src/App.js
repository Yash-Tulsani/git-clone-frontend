import logo from './logo.svg';
import { useState, useEffect } from "react"
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
<<<<<<< HEAD
import Contact from './pages/Contact/Contact';
import Status from './pages/Status/Status';
import Chatbot from './pages/Chatbot/Chatbot';
import Services from './pages/Services/Services';
import Checkout from './pages/Checkout/Checkout'
=======
import Contact from './components/Contact/Contact';
import Status from './components/Status/Status';
import Services from './pages/Services/Services'
import About from './pages/About/about';
import Dashboard from './pages/Dashboard/Dashboard';
>>>>>>> upstream/main

function App() {

  function successFunction(pos) {
    var crd = pos.coords;
  
    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }

  function errorFunction(error) {
    console.log(error);
  }

  const getLocation1 = () =>{
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            console.log(result.state);
            navigator.geolocation.getCurrentPosition(successFunction);
          } else if (result.state === "prompt") {
            console.log(result.state);
            navigator.geolocation.getCurrentPosition(successFunction,errorFunction);
          } else if (result.state === "denied") {
            console.log("Prompt user to give permission"); 
          }
          result.onchange = function () {
            console.log(result.state);
          };
        });
    } else {
      alert("Sorry Not available!");
    }
  }

  useEffect(() => {

    getLocation1()

  }, [])


  


  return (
    <Router>
      <Navbar />
      <Routes>
        

        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/status" element={<Status/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/checkout/:id" element={<Checkout />} />
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
      <Chatbot />
    </Router>
  );
}

export default App;
