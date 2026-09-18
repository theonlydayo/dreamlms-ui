import {
  faBookOpen,
  faCirclePlay,
  faCircleCheck,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
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

  return (
    <div className="dashboard-page">
      <DashboardHeader onMenuClick={() => setSidebarOpen(true)} />

      <div className="dashboard-layout">
        <DashboardSidebar isOpen={sidebarOpen}onClose={() => setSidebarOpen(false)} />

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
                value="08"
                label="Enrolled Courses"
                color="#f66962"
            />

            <DashboardStatCard
                icon={faCirclePlay}
                value="05"
                label="Courses In Progress"
                color="#3b82f6"
            />

            <DashboardStatCard
                icon={faCircleCheck}
                value="03"
                label="Completed Courses"
                color="#22c55e"
            />

            <DashboardStatCard
                icon={faCertificate}
                value="12"
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
              <DashboardCourseCard
                image="/images/course-1.jpg"
                category="Development"
                title="React JS Development"
                instructor="John Smith"
                progress={75}
              />

              <DashboardCourseCard
                image="/images/course-2.jpg"
                category="Design"
                title="UI/UX Design Fundamentals"
                instructor="Sarah Williams"
                progress={50}
              />

              <DashboardCourseCard
                image="/images/course-3.jpg"
                category="Development"
                title="JavaScript Essentials"
                instructor="Michael Brown"
                progress={35}
              />
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