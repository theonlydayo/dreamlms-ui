import { Link } from "react-router-dom";
import "./InstructorCourseCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";

type InstructorCourseCardProps = {
  image: string;
  title: string;
  status: "Published" | "Draft";
  students: number;
  lessons: number;
  slug: string;
};

function InstructorCourseCard({
  image,
  title,
  status,
  students,
  lessons,
  slug,
}: InstructorCourseCardProps) {
  return (
    <article className="instructor-course-card">
      <div className="instructor-course-image">
        <img src={image} alt={title} />
      </div>

      <div className="instructor-course-content">
        <div className="instructor-course-status">
          <span className={status.toLowerCase()}>{status}</span>
        </div>

        <h3>{title}</h3>

        <div className="instructor-course-meta">
            <span>
                <FontAwesomeIcon icon={faUsers} />
                {students} Students
            </span>

            <span>
                <FontAwesomeIcon icon={faBookOpen} />
                {lessons} Lessons
            </span>
        </div>

        <div className="instructor-course-actions">
          <Link to={`/courses/${slug}`}>View Course</Link>

          <button type="button">Edit</button>
        </div>
      </div>
    </article>
  );
}

export default InstructorCourseCard;