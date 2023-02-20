import BlogCard from "../../components/BlogCard";
import style from './favorite.module.css';
import '../../App.css';
import {useAppSelector} from "../../store/hooks";
import Layout from "../../components/Layout";

function Favorites() {
  const favorite = useAppSelector((state) => state?.rootReducer?.postsReducer.favorite);

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