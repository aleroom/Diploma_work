import './App.css';
import React from "react";
import Home from './pages/Home';
import { Route, Routes } from "react-router-dom";
import { useState } from 'react';
import News from "./pages/News";
import Favorites from './pages/Favorites';
import Articles from './pages/Articles';
import Post from './pages/Post';
import {useSelector, useDispatch} from 'react-redux';
import {login} from "./appSlices/index";
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
  const userStatus = useSelector((state) => state?.rootReducer?.userReducer?.user);
  const dispatch = useDispatch();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(login({email, password}))
  }
  
  return (
    
    <>

    <h3>{JSON.stringify(userStatus)}</h3>
    <form onSubmit = {handleLogin}>
        <input
          type={"email"}
          required
          placeholder={"Email"}
          value={email}
          onChange = {(e) => setEmail(e.target.value)}
        />
        <input
          type={"password"}
          placeholder={"Password"}
          value={password}
          required
          onChange = {(e) => setPassword(e.target.value)}
        />
        
        <input type="submit" value="Submit" />
        <br />
  </form>

    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path="/articles" element={<Articles />} /> 
      <Route path="/news" element={<News />} /> 
      <Route path="/favorites" element={<Favorites />} /> 
      <Route path="/post/:id" element={<Post />} />
    </Routes> 
    </>



);
}
  


export default App;