import style from "./header.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    return(
        <div className={style.header}>
            <div className={style.header_wrap}>
                <div className={style.logo}>MyBlog</div>
                <div className={style.header_bar}>
                    <FontAwesomeIcon icon={faBars} />
                    {/* <ul>
                        <li>Home</li>
                        <li>All </li>
                        <li>Favorite</li>
                        <li></li>
                    </ul> */}
                </div>
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

        </div>
    )
}

export default Header;