import posts from "../common/projectData/index.jsx";
import BlogCard from "./BlogCard/index.jsx";
import React, {useState} from "react";

const BlogContent = () => { 

    const blogPosts = posts.map ((item, pos) => {
        return (
            <BlogCard 
                key={item.id}
                title = {item.title}
                img = {item.img}
                description = {item.description}
                likeCount = {item.likeCount}
            
            />
        )
    })
    const [click, setClick] = useState(true);

    const handleClick = () => {
        setClick(!click);
    }
    return (
        <>
           {
           click ? 'Блог скрыт' : 'Блог показать'
           }
            <button onClick={handleClick}>Нажми на меня</button> 
            {click ? 
              <>
                <h1>Simple Blog</h1>
                <div className="posts">
                    {blogPosts}
                </div>  
                </>  
            : null
            }
           
            
            

            
        </>
    );
};

export default BlogContent;