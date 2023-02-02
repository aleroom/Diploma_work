import './App.css';
import React, { useState } from "react";
import Header from './components/Header';
import BlogContent from './components/BlogContent';
import Footer from './components/Footer';
// import { useDispatch } from "react-redux";
// import { fetchPostById } from "./appSlices/index.js";


export const ThemeContext = React.createContext();


//  import AppRouters from './components/AppRouters';

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchPostById());
  // }, []);

  const [isNight, setIsNight] = useState(false);
  const ToggleDarkMode = () => {
    setIsNight(!isNight);
  };

  return (
    
    <div className='App'>
      <ThemeContext.Provider value={{ isNight, ToggleDarkMode }}>
        {/* <div className={isNight ? `Container-dark` : `Container-light`}> */}
          <Header/>

          <main>
            <BlogContent />
          </main>
            
          <Footer year ={new Date().getFullYear()} />
        {/* </div> */}
      </ThemeContext.Provider>
    </div>

);
}
  


export default App;
