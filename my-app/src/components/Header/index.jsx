import style from "./header.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import {useState} from "react";
import Navigation from "../Navigation";
// import { ThemeContext } from "../../App";


const Header = () => {

    const [isShows, setIsShows] = useState(false);
//     const { isNight, ToggleDarkMode } = useContext(ThemeContext);
//   const handleClick = () => {
//     ToggleDarkMode();
//   };

    return(
        <se className={style.header}>
            <div className={style.header_wrap}>
                <div className={style.logo}>MyBlog</div>
                <div 
                    className={style.header_bar} 
                    onClick={() => setIsShows(!isShows)}>
                    <FontAwesomeIcon icon={isShows ? faXmark : faBars} />
                </div>

                {/* {isShows && (
                    <div className={style.nav_bar}>
                    <Navigation /> */}
                    {/* <div
                      className={
                        isNight
                          ? `${style.checkbox} ${style.active}`
                          : style.checkbox
                      }
                      onClick={handleClick}
                    >
                      <div
                        className={
                          isNight
                            ? `${style.circle} ${style.active}`
                            : style.circle
                        }
                      ></div>
                    </div> */}
                  {/* </div>
                )} */}

                <div className={style.header_search}>
                    <input 
                    type="text"
                    placeholder="search"
                     />
                
                
                </div>
                <div className={style.search_logo}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
                <div className={style.header_author}>SignIn</div>
            </div>

        </se>
    )
}

export default Header;