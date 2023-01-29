import posts from "../common/projectData/index.jsx";
import BlogCard from "./component/BlogCard/index.jsx";

const BlogContent = () => { 

    const blogPosts = posts.map ((item) => {
        return (
            <BlogCard 
                key={item.id}
                title = {item.title}
                description = {item.description}
            
            />
        )
    })
    
    return (
        <>
            <button onClick={() => alert ('Работает')}>Скрыть блог</button>
            <h1>SimpleBlog</h1>
            <div className="posts">
                {blogPosts}
            </div>

            
        </>
    );
};

export default BlogContent;