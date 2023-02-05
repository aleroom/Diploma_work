import posts from "../common/projectData/index.jsx";
import BlogCard from "./BlogCard/index.jsx";
import React, {useState} from "react";
import style from "./blogContent.module.css"
// simport BlogMenu from "./BlogMenu/index";

const BlogContent = () => { 

    const [click, setClick] = useState(true);
    const [blogArr, setBlogArr] = useState(posts);
    

    // const likePost = (pos) => { 
    //     const temp = [...blogArr];
    //     temp[pos].liked = !temp[pos].liked;
       
    //     `                   
        
    //     `
    //     // setBlogArr({
    //     //     blogArr: temp
    //     // })

    //     setBlogArr(blogArr);
       
    //     localStorage.setItem('blogPosts', JSON.stringify(temp))
    // }


    // const blogPosts = blogArr.map ((item, pos) => {
    //     return (
    //         <BlogCard 
    //             key={item.id}
    //             title = {item.title}
    //             img = {item.img}
    //             description = {item.description}
    //             liked = {item.liked}
    //             likePost = {() => likePost(pos)}
               
            
    //         />
    //     )
    // })


    // код максима
    const likePost = id => {     
        setBlogArr(blogArr.map(item => {
          if(item.id == (id)) {
            console.log(item);
            return ({...item, likeCount: item.likeCount + 1})
          }else{
            return({...item})
          }
        }))
    }


    // const likePost = pos => { 
    //     const temp = blogArr;
    //     temp[pos].likeCount++;
        
    //     setBlogArr({
    //         blogArr: temp
    //     })
    // }

const blogPosts = blogArr.map ((props, id) => {
        return (
            <BlogCard 
                key={props.id}
                title = {props.title}
                img = {props.img}
                description = {props.description}
                likeCount = {props.likeCount}
                likePost = {() => likePost(id)}
               
            
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