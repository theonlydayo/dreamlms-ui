import { Link } from "react-router-dom";

type DashboardCourseCardProps = {
  image: string;
  category: string;
  title: string;
  instructor: string;
  progress: number;
};

function DashboardCourseCard({
  image,
  category,
  title,
  instructor,
  progress,
}: DashboardCourseCardProps) {
  return (
    <div className="dashboard-course-card">
      <img src={image} alt={title} />

      <div className="dashboard-course-content">
        <span className="dashboard-course-category">{category}</span>

        <h3>{title}</h3>

        <p>By {instructor}</p>

        <div className="dashboard-progress">
          <div className="dashboard-progress-top">
            <span>Progress</span>
            <strong>{progress}%</strong>
          </div>

          <div className="dashboard-progress-bar">
            <div style={{ width: `${progress}%` }} />
          </div>
        </div>

        <Link to="/courses">Continue Learning</Link>
      </div>
    </div>
  );
}

export default DashboardCourseCard;