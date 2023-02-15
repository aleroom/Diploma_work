import './App.css';
import React from "react";
import Home from './pages/Home';
import { Route, Routes } from "react-router-dom";

import News from "./pages/News";
import Favorites from './pages/Favorites';
import Articles from './pages/Articles';
import Post from './pages/Post';

// import {useSelector, useDispatch} from 'react-redux';
// import { swichTheme } from './appSlices/theme';

function App() {
  // const currentTheme = useSelector((state) => state.rootReducer.themeSlice.reducer.theme)
  // const dispatch = useDispatch();
  // const changeTheme = () => {
  //   dispatch(swichTheme());
  // };

  // const handleActiveLink = (linkStatus, theme) => {
  //   return linkStatus.isActive ? `${styles.link} ${styles[theme]}` : `${styles.link}`
  // }
  
  return (
    
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path="/articles" element={<Articles />} /> 
      <Route path="/news" element={<News />} /> 
      <Route path="/favorites" element={<Favorites />} /> 
      <Route path="/post/:id" element={<Post />} />
    </Routes> 

);
}
  


export default App;