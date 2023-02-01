import posts from "../common/projectData/index.jsx";
import BlogCard from "./BlogCard/index.jsx";
import React, {useState} from "react";

const BlogContent = () => { 

    const [click, setClick] = useState(true);
    const [blogArr, setBlogArr] = useState(posts);
    

    const likePost = (pos) => { 
        const temp = blogArr;
        temp[pos].likeCount++;
       
        
        // setBlogArr({
        //     blogArr: temp
        // })
        setBlogArr(temp);
       
    }


    const blogPosts = blogArr.map ((item, pos) => {
        return (
            <BlogCard 
                key={item.id}
                title = {item.title}
                img = {item.img}
                description = {item.description}
                likeCount = {item.likeCount}
                likePost = {() => likePost(pos)}
               
            
            />
        )
    })
  
    

    const handleClick = () => { //toggleBlog
        setClick(!click);
    }
    console.log('1',blogPosts)
    return (
        <>
           
            <button onClick={handleClick}>
                {
                    click ? 'Блог скрыть' : 'Блог показать'
           }
            </button> 
            {click ? 
              <>
                <h1>Simple Blog</h1>
                <div className="posts"> {blogPosts} </div>        
                 
                </>  
            : null
            }
           
            
            

            
        </>
    );
};

export default BlogContent;