import style from "./header.module.css";
import React, {useEffect, useState} from 'react'
import {logOut} from "../../appSlices/user.slice";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import {filterBySearch, setModal, setModalCreate, filterByDate} from "../../appSlices";
import type { DatePickerProps } from 'antd';
import { DatePicker } from 'antd';

// import Navigation from "../Navigation";
// import { ThemeContext } from "../../App";


const Header = () => {
    const dispatch = useAppDispatch()
    const [search, setSearch] = useState('')
    const isLogIn = useAppSelector(state => state.rootReducer.userReducer.isLogedIn)
    const userData = useAppSelector(state => state.rootReducer.userReducer.user)

    const [dateFilter, setDateFilter] = useState('')
    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        setDateFilter(dateString)
    };


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
                            
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                    <DatePicker onChange={onChange} />
                    <button onClick={() => dispatch(filterByDate(dateFilter))}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                </div>


                <div className={style.createPost} onClick={()=> dispatch(setModalCreate())}>Create post</div>
                {
                    !isLogIn ?
                        <div className={style.headerNav}>
                            <div className={style.header_author} onClick={() => dispatch(setModal())}>SignIn</div>
                        </div>
                        :
                        <div style={{display: 'flex', justifyContent: 'space-between', gap: '30px'}}>
                            <div>
                                <p>{userData.username}</p>
                                <p>{userData.email}</p>
                            </div>
                            <button className={style.header_author} onClick={() => dispatch(logOut())}>Log out</button>
                        </div>

                }

            </div>

        </section>
    )
}

export default Header;