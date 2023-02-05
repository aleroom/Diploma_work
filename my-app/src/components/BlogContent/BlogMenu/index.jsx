import style from "./BlogMenu.modules.css";

function BlogMenu() {
    return (
        <div className={style.menuContainer}>
            <div className={style.menuArticles}>
                Articles
            </div>

            <div className={style.menuNews}>
                News
            </div>
        </div>
    )
}

export default BlogMenu;