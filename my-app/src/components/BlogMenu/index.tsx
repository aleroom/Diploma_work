import style from "./BlogMenu.module.css";

// import { ThemeContext } from "../../../App.tsx";
import {useAppSelector} from "../../store/hooks";
import { NavLink } from "react-router-dom";


const BlogMenu = () => {
    const menu = useAppSelector((state) => state.rootReducer.postsReducer.menu);
    return (
        <div className={style.menuContainer}>
            <div className={style.menuNav}>  
            <div className={style.navSite}>  
                <div className={style.menuArticles}>
                    <NavLink to="/allPosts">
                        {menu.allPosts}
                    </NavLink>
                </div>
                
                <div className={style.menuFav}>
                <NavLink to="/favorites" >
                        {menu.favorites}
                </NavLink>    
                </div>
            </div> 

                <div className={style.socialNetworks}>
                    <a href="https://www.instagram.com/artforintrovert_russia/" className={style.inst}><img src="https://say-hi.me/wp-content/uploads/2016/05/novyi-logotip-instagram1.jpg" alt="" /></a>
                    
                    <a href="https://online.artforintrovert.ru/" className={style.site}><img src="https://static.tildacdn.com/tild3733-3439-4138-b035-643537353037/Frame_19.svg" alt="" /></a>

                    
                </div>            
                
            </div>  

             
        </div>
    )
}

export default BlogMenu;