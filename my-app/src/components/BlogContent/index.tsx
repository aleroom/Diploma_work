import BlogCard from "../BlogCard";
import React, {useEffect, useState} from "react";
import style from "./blogContent.module.css"
import {useAppSelector} from "../../store/hooks";
import { setLikes, setDislikes } from "../../appSlices";


const BlogContent = () => { 
    // const dispatch = useDispatch()
    const posts = useAppSelector((state)=> state.rootReducer.postsReducer.posts)
    const searchedPosts = useAppSelector(state => state.rootReducer.postsReducer.searchedPosts)
    
    return (
        
        <div className={style.postsWrap}>
            {searchedPosts.length ? (
                searchedPosts.map((posts, index) => (
                <div className={style.posts} key={index} >
                    <BlogCard post={posts} />
                </div>
            ))
            ) : posts.length ?
                posts.map((posts, index) => (
                    <div className={style.posts} key={index} >
                        <BlogCard post={posts} />
                    </div>
                ))
                :

                (
                <span className={style.pending}>Wait</span>
            )}
      
        </div>
    )
    }
export default BlogContent;

