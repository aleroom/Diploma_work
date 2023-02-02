import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

import style from './tab.module.css'

function Tab() {
  const tabs = useSelector((state) => state.postsReducer.tabs)

  return (
    <ul>
      <li>
        <NavLink
          to="posts"
          className={({ isActive }) => (isActive ? style.active : '')}
        >
          {tabs.all}
        </NavLink>
      </li>

      <li>
        <NavLink
          to="favorites"
          className={({ isActive }) => (isActive ? style.active : '')}
        >
          {tabs.myFavorites}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="popular"
          className={({ isActive }) => (isActive ? style.active : '')}
        >
          {tabs.popular}
        </NavLink>
      </li>
    </ul>
  )
}

export default Tab