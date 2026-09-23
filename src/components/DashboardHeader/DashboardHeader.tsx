import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../context/AuthContext";

type DashboardHeaderProps = {
  onMenuClick: () => void;
};

function DashboardHeader({ onMenuClick }: DashboardHeaderProps) {
  const { user } = useAuth();

  const initial = user?.name?.charAt(0).toUpperCase() || "U";

  const role =
    user?.role === "instructor" ? "Instructor" : "Student";

  return (
    <header className="dashboard-header">
      <div className="dashboard-header-left">
        <button
          type="button"
          className="dashboard-menu-button"
          onClick={onMenuClick}
          aria-label="Open menu"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        <Link to="/" className="dashboard-logo">
          <img src="/images/logo.svg" alt="Dreams LMS" />
        </Link>
      </div>

      <Link to={user?.role === "instructor" ? "/instructor/dashboard" : "/dashboard"}
  className="dashboard-user">
        <div className="dashboard-avatar">{initial}</div>

        <div>
          <strong>{user?.name}</strong>
          <small>{role}</small>
        </div>
      </Link>
    </header>
  );
}

export default DashboardHeader;