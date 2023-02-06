import posts from "../common/projectData/index.jsx";
import BlogCard from "./BlogCard/index.jsx";
import React, {useState} from "react";
import style from "./blogContent.module.css"
// simport BlogMenu from "./BlogMenu/index";

const BlogContent = () => { 

    const [click, setClick] = useState(true);
    const [blogArr, setBlogArr] = useState(posts);  //массив для likePost
    const [desLike, setDesLike] = useState (posts)
    


    const likePost = id => { 
        setBlogArr(blogArr.map(item => {
            if(item.id == id) {
              console.log(item);
              return ({...item, likeCount: item.likeCount + 1})
            }else{
              return({...item})
            }
          }))
    }
    const desLikePost = id => { 
        setDesLike(desLike.map(item => {
            if(item.id == id) {
              console.log(item);
              return ({...item, desLikeCount: item.desLikeCount + 1})
            }else{
              return({...item})
            }
          }))
    }
    

const blogPosts = blogArr.map ((item) => {
        return (
            <BlogCard 
                key={item.id}
                title = {item.title}
                img = {item.img}
                description = {item.description}
                likeCount = {item.likeCount}
                desLikeCount = {item.desLikeCount}
                likePost = {() => likePost(item.id)}
                desLikePost = {() => desLikePost(item.id)}
               
            
            />
        )
    })
  
    
    const handleClick = () => { //toggleBlog
        setClick(!click);
    }
    
    return (
        <>
            {/* <div className={style.postMenu}>{BlogMenu}</div> */}
            <button onClick={handleClick}>
                {
                    click ? 'Блог скрыть' : 'Блог показать'
                }
            </button> 
            {click ? 
              <>
                <h1>Simple Blog</h1>
                <div className={style.posts}> 
                    {blogPosts} 
                </div>        
                 
                </>  
            : null
            }
           
            
            

            
        </>
    );
};

export default BlogContent;