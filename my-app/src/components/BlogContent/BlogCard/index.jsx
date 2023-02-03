// import { useState } from "react";
import  style from"../BlogCard/BlogCard.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const BlogCard = ({title, description, img, liked, likePost }) => {

const heartFill = liked ? 'red' : 'black'
 

    return (
        <div className={style.post}>
            <div className={style.post_wrap}>
                <h2>{title}</h2>
                <div className={style.post_img}>
                    <img src={img} alt="" />
                </div>
                <p>{description}</p>
                <div>
                    <button onClick={likePost}>
                        <FontAwesomeIcon icon={faHeart} style={{fill: heartFill}} />
                    </button>
                    
                    {/* {likeCount} */}
                </div>    
            </div>
        </div>
    );
};
  
export default BlogCard;