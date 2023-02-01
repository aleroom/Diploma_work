// import { useState } from "react";
import "./BlogCard.module.css";

const BlogCard = ({title, description, img, likeCount, likePost }) => {
    
    return (
        <div className="post">
            <div className="post_wrap">
                <h2>{title}</h2>
                <div className="post_img">
                    <img src={img} alt="" />
                </div>
                <p>{description}</p>
                <div>
                    <button onClick={likePost}>Like </button>
                    {likeCount}
                </div>    
            </div>
        </div>
    );
};
  
export default BlogCard;