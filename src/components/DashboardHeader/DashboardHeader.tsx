import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function DashboardHeader() {
  const { user } = useAuth();

  const initial = user?.name?.charAt(0).toUpperCase() || "U";

  return (
    <header className="dashboard-header">
      <Link to="/" className="dashboard-logo">
        <img src="/images/logo.svg" alt="Dreams LMS" />
      </Link>

      <div className="dashboard-header-actions">
        <Link to="/profile" className="dashboard-user">
          <div className="dashboard-avatar">{initial}</div>

          <div>
            <strong>{user?.name}</strong>
            <small>Student</small>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default DashboardHeader;