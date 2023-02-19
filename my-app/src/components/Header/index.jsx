import style from "./header.module.css";
import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../appSlices/user.slice";
import {filterBySearch} from "../../appSlices";
import {useEffect, useState} from "react";

// import Navigation from "../Navigation";
// import { ThemeContext } from "../../App";


const Header = () => {
    const dispatch = useDispatch()
    const [search, setSearch] = useState('')
    const isLogIn = useSelector(state => state.rootReducer.userReducer.isLogedIn)
    const userData = useSelector(state => state.rootReducer.userReducer.user)


    // const [isShows, setIsShows] = useState(false);
//     const { isNight, ToggleDarkMode } = useContext(ThemeContext);
//   const handleClick = () => {
//     ToggleDarkMode();
//   };

    useEffect(() => {
    }, [search])
    return (
        <section className={style.header}>
            <div className={style.header_wrap}>
                <div className={style.logo}>MyBlog</div>

                <div className={style.header_search}>
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        type="text"
                        placeholder="search"
                    />

                    <div className={style.search_logo}>
                        <button onClick={() => dispatch(filterBySearch(search))}>
                            жмак
                            {/*<FontAwesomeIcon icon={faMagnifyingGlass} />*/}
                        </button>
                    </div>
                </div>


                <div className="createPost">Create post</div>
                {
                    !isLogIn ?
                        <div className={style.headerNav}>
                            <div className={style.header_author}>SignIn</div>
                        </div>
                        :
                        <div>
                            <p>{userData.username}</p>
                            <p>{userData.email}</p>
                        </div>

                }

            </div>

        </section>
    )
}

export default Header;