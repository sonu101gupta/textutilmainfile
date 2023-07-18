import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import Contact from "./components/Contact";
import About from "./components/About";

import { BrowserRouter, Route, Routes } from "react-router-dom";


// import {
//   BrowserRouter as Router,
//   Switch,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled.", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled.", "success");
    }
  };

  return(
    <div>
    <Navbar title="About" aboutText="TextAbouts" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert} />
        <TextForm showAlert={showAlert} heading="Enter Text to analyze " mode={mode}/>
    </div>
  );
}

export default App;
