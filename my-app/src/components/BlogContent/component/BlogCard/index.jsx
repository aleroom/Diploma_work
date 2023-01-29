import "./BlogCard.module.css";

const BlogCard = ({title, description}) => {
    return (
        <div className="post">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};
  
export default BlogCard;