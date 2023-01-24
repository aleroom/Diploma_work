import style from './navigation.module.css';

const Navigation = () => {
    return (
        <div className={style.nav_bar}> 
            <ul className={style.links}>
                <li>Home</li>
                <li>Blog</li>
                <li>Add post</li>
            </ul>
        </div>
    )
}

export default Navigation;