// import logo from './logo.svg';
import {Routes,Route} from 'react-router-dom'
import React from "react";
import Home from './components/ReactRouting/tut3/home';
import About from './components/ReactRouting/tut3/about';
import "./App.css";

function App() {
  return (
    
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
      </Routes>
    </div>
  )
} 

export default App;

