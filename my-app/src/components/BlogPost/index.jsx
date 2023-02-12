import  style from"../BlogCard/BlogCard.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faHeartCrack, faBookmark } from '@fortawesome/free-solid-svg-icons'

const BlogPost = ({post}) => {


 

    return (
        <div className={style.post}>
            <div className={style.post_wrap}>
                <div className={style.post_img}>
                    <img src={img} alt="" />
                </div>
                <h2>{title}</h2>
                <p>{description}</p>
                  

                <div className={style.post_footer}>
                    <div className={style.likePost}>
                        <button onClick={() => likePost(key)}>
                            <FontAwesomeIcon icon={faHeart}  />
                            
                        </button>
                    
                       
                    
                        <button onClick={() => desLikePost(key)}>
                            <FontAwesomeIcon icon={faHeartCrack} />
                        </button>
                        
                        
                    </div>
                    
                    <div className={style.savePost}>
                        <button >
                            <FontAwesomeIcon icon={faBookmark} />
                        </button>
                    </div>
                        
                </div>  
            </div>
        </div>
    );
};
  
export default BlogPost;