import { Link } from "react-router-dom";

type CourseCardProps = {
  image: string;
  imageAlt: string;
  category: string;
  title: string;
  lessons: number;
  students: number;
  rating: number;
  price: string;
};

function CourseCard({
  image,
  imageAlt,
  category,
  title,
  lessons,
  students,
  rating,
  price,
}: CourseCardProps) {
  return (
    <div className="course-card">
      <div className="course-image">
        <img src={image} alt={imageAlt} />
      </div>

      <div className="course-content">
        <span>{category}</span>

        <h3>{title}</h3>

        <div className="course-info">
          <span>📚 {lessons} Lessons</span>
          <span>👥 {students} Students</span>
        </div>

        <div className="course-rating">
          <span>★★★★★</span>
          <small>({rating})</small>
        </div>

        <div className="course-footer">
          <strong>{price}</strong>
          <Link to="/courses">Buy Now</Link>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;