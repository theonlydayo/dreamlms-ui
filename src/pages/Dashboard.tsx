import {
  faBookOpen,
  faCirclePlay,
  faCircleCheck,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../context/AuthContext";
import { getStudentDashboard } from "../services/enrollmentService";
import DashboardHeader from "../components/DashboardHeader/DashboardHeader";
import DashboardSidebar from "../components/DashboardSidebar/DashboardSidebar";
import DashboardStatCard from "../components/DashboardStatCard/DashboardStatCard";
import DashboardCourseCard from "../components/DashboardCourseCard/DashboardCourseCard";
import DashboardActivity from "../components/DashboardActivity/DashboardActivity";
import Footer from "../components/Footer/Footer";
import "./Dashboard.css";

function Dashboard() {
  const { user } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const {
    data: dashboardData,
    isLoading,
  } = useQuery({
    queryKey: ["student-dashboard"],
    queryFn: getStudentDashboard,
  });

  return (
    <div className="dashboard-page">
      <DashboardHeader onMenuClick={() => setSidebarOpen(true)} />

      <div className="dashboard-layout">
        <DashboardSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <main className="dashboard-main">
          <div className="dashboard-welcome">
            <div>
              <h1>Welcome back, {user?.name}!</h1>
              <p>Let's continue your learning journey.</p>
            </div>
          </div>

          <section className="dashboard-stats">
            <DashboardStatCard
              icon={faBookOpen}
              value={
                isLoading
                  ? "..."
                  : String(dashboardData?.stats.enrolledCourses ?? 0)
              }
              label="Enrolled Courses"
              color="#f66962"
            />

            <DashboardStatCard
              icon={faCirclePlay}
              value={
                isLoading
                  ? "..."
                  : String(dashboardData?.stats.inProgressCourses ?? 0)
              }
              label="Courses In Progress"
              color="#3b82f6"
            />

            <DashboardStatCard
              icon={faCircleCheck}
              value={
                isLoading
                  ? "..."
                  : String(dashboardData?.stats.completedCourses ?? 0)
              }
              label="Completed Courses"
              color="#22c55e"
            />

            <DashboardStatCard
              icon={faCertificate}
              value={
                isLoading
                  ? "..."
                  : String(dashboardData?.stats.certificates ?? 0)
              }
              label="Certificates"
              color="#f59e0b"
            />
          </section>

          <section className="dashboard-section">
            <div className="dashboard-section-heading">
              <div>
                <h2>Recently Enrolled Courses</h2>
                <p>Continue learning where you left off.</p>
              </div>

              <Link to="/courses">View All</Link>
            </div>

            <div className="dashboard-courses">
              {isLoading ? (
                <p>Loading courses...</p>
              ) : dashboardData?.courses.length ? (
                dashboardData.courses.map((enrollment) => (
                  <DashboardCourseCard
                    key={enrollment.id}
                    image={enrollment.course.image}
                    category={enrollment.course.category.name}
                    title={enrollment.course.title}
                    instructor={enrollment.course.instructor.name}
                    progress={enrollment.progress}
                  />
                ))
              ) : (
                <p>You are not enrolled in any courses yet.</p>
              )}
            </div>
          </section>

          <section className="dashboard-section">
            <div className="dashboard-section-heading">
              <div>
                <h2>Recent Activity</h2>
                <p>Your latest learning activities.</p>
              </div>
            </div>

            <DashboardActivity />
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default Dashboard;