import { Link } from "react-router-dom";

type BlogCardProps = {
  image: string;
  imageAlt: string;
  category: string;
  title: string;
  description: string;
  author: string;
  date: string;
};

function BlogCard({
  image,
  imageAlt,
  category,
  title,
  description,
  author,
  date,
}: BlogCardProps) {
  return (
    <article className="blog-card">
      <div className="blog-image">
        <img src={image} alt={imageAlt} />
      </div>

      <div className="blog-content">
        <span>{category}</span>

        <h3>{title}</h3>

        <p>{description}</p>

        <div>
          <small>By {author}</small>
          <small>◷ {date}</small>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;