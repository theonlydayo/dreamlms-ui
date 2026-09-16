import { Link } from "react-router-dom";

type CategoryCardProps = {
  name: string;
  courses: string;
  icon: string;
  link: string;
};

function CategoryCard({
  name,
  courses,
  icon,
  link,
}: CategoryCardProps) {
  return (
    <Link to={link} className="category-card">
      <div className="category-icon">{icon}</div>

      <h3>{name}</h3>

      <p>{courses}</p>

      <span className="category-arrow">→</span>
    </Link>
  );
}

export default CategoryCard;