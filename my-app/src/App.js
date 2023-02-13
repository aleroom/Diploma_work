import './App.css';
import React from "react";
import Home from './pages/Home';
import { Route, Routes } from "react-router-dom";

import News from "./pages/News"
import Favorites from './pages/Favorites';
import Articles from './pages/Articles';

function App() {

  return (
    
    <Routes>
      <Route path='/' element={<Home />}/>
       <Route path="/articles" element={<Articles />} /> 
       <Route path="/news" element={<News />} /> 
      <Route path="/favorites" element={<Favorites />} /> 
    </Routes> 

);
}
  


export default App;