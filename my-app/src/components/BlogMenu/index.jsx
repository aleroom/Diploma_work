import style from "./BlogMenu.module.css";

// import { ThemeContext } from "../../../App.js";
import { useSelector } from "react-redux/es/exports";
// import { NavLink } from "react-router-dom";


const BlogMenu = () => {
    const menu = useSelector((state) => state.rootReducer.postsReducer.menu);
    return (
        <div className={style.menuContainer}>
            <div className={style.menuNav}>  
                
                <div className={style.menuArticles}>
                    {/* <NavLink to="/" className={({isActive}) => (isActive ? style.active : "")}> */}
                        {menu.articles}
                    {/* </NavLink> */}
                </div>
                
                <div className={style.menuNews}>
                    {/* <NavLink to="/news" className={({isActive}) => (isActive ? style.active : "")}> */}
                        {menu.news}
                    {/* </NavLink>     */}
                </div>

                <div className={style.menuFav}>
                {/* <NavLink to="/favorites" className={({isActive}) => (isActive ? style.active : "")}> */}
                        {menu.myFavorites}
                {/* </NavLink>     */}
                </div>
            </div>  

             
        </div>
    )
}

export default BlogMenu;