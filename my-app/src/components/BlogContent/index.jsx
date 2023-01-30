import posts from "../common/projectData/index.jsx";
import BlogCard from "./component/BlogCard/index.jsx";
import React, {useState} from "react";

const BlogContent = () => { 

    const blogPosts = posts.map ((item, pos) => {
        return (
            <BlogCard 
                key={item.id}
                title = {item.title}
                description = {item.description}
                pos={pos}
            
            />
        )
    })
    // const [click, setClick] = useState(true);

    // // const handleClick = () => {
    //     setClick(false)
    // }
    return (
        <>
            {/* <button onClick={() => handleClick}>Скрыть блог</button> */}
            
              <>
                <h1>SimpleBlog</h1>
                <div className="posts">
                    {blogPosts}
                </div>  
            </>  
            
        }
            
            

            
        </>
    );
};

export default BlogContent;