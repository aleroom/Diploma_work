import style from "./BlogMenu.module.css";
// import { ThemeContext } from "../../../App.js";
// import { useContext } from "react";

const BlogMenu = () => {
    
   
    

    return (
        <div className={style.menuContainer}>
            <div className={style.menuNav}>  
                <div className={style.menuArticles}>
                    <button>Articles</button>
                </div>

                <div className={style.menuNews}>
                    <button>News</button>
                </div>

                <div className={style.menuFav}>
                    <button>Favorites</button>
                </div>
            </div>  

             
        </div>
    )
}

export default BlogMenu;