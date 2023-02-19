import './App.css';
import React, { useEffect } from "react";
import Home from './pages/Home';
import { Route, Routes } from "react-router-dom";
import { useDispatch } from 'react-redux';
import News from "./pages/News";
import Favorites from './pages/Favorites';
import Post from './pages/Post';
import { refresh} from "./appSlices/user.slice";

import ModalSignIn from './pages/ModalPageSignIn';
import AllPosts from './pages/Articles';

// import { swichTheme } from './appSlices/theme';

function App() {
  // const currentTheme = useSelector((state) => state.rootReducer.themeSlice.reducer.theme);
  // const post = useSelector((state) => state?.rootReducer?.themeSlice.reducer?.post);

  // const dispatch = useDispatch();

  // const changeTheme = () => {
  //   dispatch(swichTheme());
  // };

  // const handleActiveLink = (linkStatus, theme) => {
  //   return linkStatus.isActive ? `${styles.link} ${styles[theme]}` : `${styles.link}`
  // }


  const dispatch = useDispatch();

  useEffect(() => {
    const refreshInterval = setInterval(()=> {
      const user = localStorage.getItem("user"); 
        if (user && JSON.parse(user).refresh)
          dispatch(refresh({refresh: JSON.parse(user).refresh}))
      }, 300000);
      return () => clearInterval(refreshInterval);
    }, [])
 

  
  return (
    

<> 

    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path="/allPosts" element={<AllPosts />} /> 
      <Route path="/favorites" element={<Favorites />} /> 
      <Route path="/post/:id" element={<Post />} />
     
    </Routes> 
   
    </>

);
}
  


export default App;