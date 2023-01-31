import { useState } from "react";
import "./BlogCard.module.css";

const BlogCard = ({title, description, img }) => {
    const [count, setCount] = useState(0);

    // const likePost = () => {
    //     setCount(count+1)
    // }
    
    return (
        <div className="post">
            
            <h2>{title}</h2>
            <div>
                <img src={img} alt="" />
            </div>
            <p>{description}</p>
            
            <div>
                <button onClick={() => setCount(count+1)}>Like </button>
                {count}
                
            </div>
        </div>
    );
};
  
export default BlogCard;