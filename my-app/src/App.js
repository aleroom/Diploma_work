import './App.css';
import React, { createContext, useContext, useEffect, useState } from "react";
import Header from './components/Header';
import BlogContent from './components/BlogContent';
import Footer from './components/Footer';
import BlogMenu from './components/BlogMenu';
import { useDispatch } from "react-redux";
import { fetchPostById } from "./appSlices/index.js";
import { useSelector } from 'react-redux';
import { store } from './store';
import Favorites from './pages/Favorites';





//  import AppRouters from './components/AppRouters';

// const ThemeContext = React.createContext(null)


// const theme = {
//   light: {
//     foreground: "#000000",
//     background: "#eeeeee"
//   },
//   dark: {
//     foreground: "#ffffff",
//     background: "#222222"
//   }
// }

// function ThemeButton() {
//   const context = useContext(ThemeContext);
//   return (
//     <div>
//       {/* <button>
//         Text Context
//       </button> */}
//       <div style={({...context[context.currentTheme]})}>
//         <button onClick={() => context.setCurrentTheme("dark")}>DAY/NIGHT-THEME</button>
//       </div>
//     </div>
//   )
// }

function App() {

   const dispatch = useDispatch();
  //  dispatch(addUsername(username)); //примеры хука useDispatch;
  //  dispatch(addProduct(product));

  
  // const [currentTheme, setCurrentTheme] = useState((prev) => prev == "light" ? "dark" : "light");
  
  // function toggleCurrentTheme() {
  //   setCurrentTheme((prev) => (prev == "light" ? "dark" : "light"));
  // }
 
 
useEffect( ()=> {
   dispatch(fetchPostById())
}, [])



  return (
    
    <div className='App'>
      {/* <ThemeContext.Provider value={{...theme, ...{currentTheme: currentTheme, setCurrentTheme: toggleCurrentTheme }}}>
        <ThemeButton />
        
      </ThemeContext.Provider> */}

      <Header/>
      <div className='container'>
      
        <BlogMenu /> 
          
          
        <BlogContent />

        <Favorites />
            
          
            
        <Footer year ={new Date().getFullYear()} />
        
      </div>
    </div>

);
}
  


export default App;