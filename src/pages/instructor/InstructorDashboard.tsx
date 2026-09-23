import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faCircleCheck,
  faUsers,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import DashboardSidebar from "../../components/DashboardSidebar/DashboardSidebar";
import InstructorStatCard from "../../components/InstructorStatCard/InstructorStatCard";
import InstructorCourseCard from "../../components/InstructorCourseCard/InstructorCourseCard";
import Footer from "../../components/Footer/Footer";
import { useAuth } from "../../context/AuthContext";
import "./InstructorDashboard.css";

type InstructorCourse = {
  _id: string;
  title: string;
  slug: string;
  image: string;
  status: "draft" | "published";
  price: number;
  level: string;
};

function InstructorDashboard() {
  const { user, token } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [courses, setCourses] = useState<InstructorCourse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      if (!token) {
        return;
      }

      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/courses/instructor`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch courses");
        }

        setCourses(data.courses);
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : "Failed to fetch courses"
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourses();
  }, [token]);

  const publishedCourses = courses.filter(
    (course) => course.status === "published"
  );

  return (
    <div className="dashboard-page">
      <DashboardHeader onMenuClick={() => setSidebarOpen(true)} />

      <div className="dashboard-layout">
        <DashboardSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <main className="dashboard-main instructor-dashboard-main">
          <div className="instructor-dashboard-heading">
            <div>
              <span>Instructor Dashboard</span>
              <h1>Welcome back, {user?.name}</h1>
              <p>
                Manage your courses, lessons and learners from one place.
              </p>
            </div>

            <Link
              to="/instructor/courses/create"
              className="instructor-create-button"
            >
              Create Course
            </Link>
          </div>

          <div className="instructor-stats">
            <InstructorStatCard
              title="Total Courses"
              value={courses.length}
              icon={faBookOpen}
            />

            <InstructorStatCard
              title="Published Courses"
              value={publishedCourses.length}
              icon={faCircleCheck}
            />

            <InstructorStatCard
              title="Total Students"
              value={0}
              icon={faUsers}
            />

            <InstructorStatCard
              title="Total Reviews"
              value={0}
              icon={faStar}
            />
          </div>

          <section className="instructor-dashboard-section">
            <div className="instructor-section-heading">
              <div>
                <h2>My Courses</h2>
                <p>Manage your courses and learning content.</p>
              </div>

              <button type="button">View All</button>
            </div>

            {isLoading && (
              <p>Loading courses...</p>
            )}

            {error && (
              <p>{error}</p>
            )}

            {!isLoading && !error && courses.length === 0 && (
              <p>You haven't created any courses yet.</p>
            )}

            {!isLoading && !error && courses.length > 0 && (
              <div className="instructor-courses-grid">
                {courses.map((course) => (
                  <InstructorCourseCard
                    key={course._id}
                    image={course.image}
                    title={course.title}
                    status={
                      course.status === "published"
                        ? "Published"
                        : "Draft"
                    }
                    students={0}
                    lessons={0}
                    slug={course.slug}
                  />
                ))}
              </div>
            )}
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default InstructorDashboard;