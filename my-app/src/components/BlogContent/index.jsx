import BlogCard from "./BlogCard/index.jsx";
import React, {useEffect, useState} from "react";
import style from "./blogContent.module.css"
import { useSelector, useDispatch } from "react-redux";
import { setLikes, setDislikes } from "../../appSlices/index.js";
import BlogMenu from "./BlogMenu/index";

const BlogContent = () => { 
    const dispatch = useDispatch()
    const posts = useSelector(store=> store.rootReducer.postsReducer.posts)
    const [click, setClick] = useState(true);
    
    const handleClick = () => { //toggleBlog
        setClick(!click);
    }
    
    return (
        <>
            <div className={style.postMenu}>{BlogMenu}</div>
            <button onClick={handleClick}>
                {
                    click ? 'Блог скрыть' : 'Блог показать'
                }
            </button> 
            {click ? 
              <>
                <h1>Simple Blog</h1>
                <div className={style.posts}> 
                    {posts.length > 0 && posts.map((item) => {
        return (
            <BlogCard 
                key={item.id}
                title = {item.title}
                img = {item.img}
                description = {item.description}
                likeCount = {item.likes}
                desLikeCount = {item.dislikes}
                likePost = {() => dispatch(setLikes(item.id))}
                desLikePost = {() => dispatch(setDislikes(item.id))}
                
            />
        )
    })} 
                </div>        
                 
                </>  
            : null
            }
           
            
            

            
        </>
    );
};

export default BlogContent;