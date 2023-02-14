import  style from  "../BlogCard/BlogCard.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faHeartCrack, faBookmark } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from "react-redux";
import { setLikes, setDislikes, addFavorite } from "../../appSlices";
import { NavLink } from "react-router-dom";




const BlogCard = ({post}) => {
    const dispatch = useDispatch();
    
    return (
        <div className={style.post}>
            <div className={style.post_wrap}>
                <div className={style.post_img}>
                    <img src={post.image} alt="" />
                </div>
                <div className={style.data}>{post.data}</div>
                <h2><NavLink to={`post/${post.id}`}>{post.title}</NavLink></h2>
                <p>{post.description}</p>
                  

                <div className={style.post_footer}>
                    <div className={style.likePost}>
                        <button onClick={() => dispatch(setLikes(post.id))}>
                            <FontAwesomeIcon icon={faHeart}  />
                        </button>
                        
                               {post.likeCount} 
                              
                        <button onClick={() => dispatch(setDislikes(post.id))}>
                            <FontAwesomeIcon icon={faHeartCrack} />
                        </button>
                                {post.disLikeCount} 
                    </div>
                    
                    <div className={style.savePost}>
                        <button onClick={() => dispatch(addFavorite(post))}>
                        
                            <FontAwesomeIcon icon={faBookmark} />
                            
                        </button>
                        
                    </div>
                        
                </div>  
            </div>
        </div>
    );
};
  
export default BlogCard;