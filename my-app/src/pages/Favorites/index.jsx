import BlogCard from "../../components/BlogCard";
import style from './favorite.module.css';
import '../../App.css';

import { useSelector } from "react-redux";
import Layout from "../../components/Layout";

function Favorites() {
  const favorite = useSelector((state) => state?.rootReducer?.postsReducer.favorite);

  return (
    <Layout>
      <div className={style.favWrap}>
      {favorite.map((item) => (
        <div className={style.favoritePosts}>
          <BlogCard post={item} />
        </div>
      ))}
      </div>
    </Layout>
  );
}

export default Favorites;