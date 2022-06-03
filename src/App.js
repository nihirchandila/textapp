import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Contact from './components/Contact'; 
import About from './components/About';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  //handle toggle
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.color = '#fff';
      document.body.style.backgroundColor = '#111';
      message("Dark Mode has been enabled", "success");
    }else{
      setMode('light');
      document.body.style.color = '#000';
      document.body.style.backgroundColor = '#fff';
      message("Light Mode has been enabled", "success");

    }
  }
  const[mode, setMode] = useState('light');
  //handle alerts
  const message = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(()=>{
      setAlert({
        msg: '',
        type: ''
      })
      }, 2000
    )
    
  }
  const [alert, setAlert] = useState({
    msg: '',
    type: ''
  });

  




  return (
    
    <Router>
        <Navbar color={mode} toggleMode={toggleMode} message={alert}/>
        <Routes>
            <Route path="/" element={<Main color={mode}/>}/>
            <Route path="/contact" element={<Contact color={mode}/>}/>
            <Route path="/about" element={<About color={mode}/>}/>
        </Routes>
    </Router>
  );
}

export default App;
