import { NavLink } from "react-router-dom";
import style from './navigation.module.css';

const Navigation = () => {

    const handleActiveLink = (linkStatus) => {
        return linkStatus.isActive
          ? `${style.active} ${style.link}`
          : `${style.link}`;
      };

    return (
        <div className={style.nav_bar}> 
            <NavLink className={handleActiveLink}>
                Home
            </NavLink>
            <NavLink className={handleActiveLink}>
                Blogs
            </NavLink>
            <NavLink className={handleActiveLink}>
                Create post
            </NavLink>
            <NavLink className={handleActiveLink}>
                Sign In
            </NavLink>
        </div>
    )
}

export default Navigation;