import Title from "../common/Title";
import style from './post.module.css';

const Post = ({post}) => {
    return (
        <div className={style.post}>
            {/* <Date date={post.date} />  */}
            <Title title={post.title} />
        </div>)
}

export default Post;
