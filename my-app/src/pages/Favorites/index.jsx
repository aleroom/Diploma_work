import BlogCard from "../../components/BlogCard";
// import style from "./favorites.module.css";

import { useSelector } from "react-redux";

function Favorites() {
  const favorite = useSelector(
    (state) => state?.rootReducer?.postsReducer.favorite
  );

  return (
    <section>
      {favorite.map((favorite) => (
        <div key={favorite.id}>
          <BlogCard fav={favorite} />
        </div>
      ))}
    </section>
  );
}

export default Favorites;