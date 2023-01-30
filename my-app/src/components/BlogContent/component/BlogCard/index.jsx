import "./BlogCard.module.css";

const BlogCard = ({title, description, pos}) => {
    return (
        <div className="post">
            <h2>{title}</h2>
            <p>{description}</p>
            <div>
                <button onClick={() => alert(pos)}>Like</button>
            </div>
        </div>
    );
};
  
export default BlogCard;