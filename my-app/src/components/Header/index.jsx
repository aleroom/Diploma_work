import style from "./header.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

// import Navigation from "../Navigation";
// import { ThemeContext } from "../../App";


const Header = () => {

    // const [isShows, setIsShows] = useState(false);
//     const { isNight, ToggleDarkMode } = useContext(ThemeContext);
//   const handleClick = () => {
//     ToggleDarkMode();
//   };

    return(
        <se className={style.header}>
            <div className={style.header_wrap}>
                <div className={style.logo}>MyBlog</div>
                
                <div className={style.header_search}>
                    <input 
                    type="text"
                    placeholder="search"
                     />
                
                    <div className={style.search_logo}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                </div>    

                
                <div className="createPost">Create post </div> 

                <div className={style.headerNav}>
                    <div className={style.header_author}>SignIn</div>
                </div>    
            </div>

        </se>
    )
}

export default Header;