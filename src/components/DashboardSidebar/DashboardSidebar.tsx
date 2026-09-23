import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faGauge,
  faBookOpen,
  faHeart,
  faMessage,
  faStar,
  faClipboardQuestion,
  faUser,
  faGear,
  faRightFromBracket,
  faXmark,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../context/AuthContext";

type DashboardSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

function DashboardSidebar({
  isOpen,
  onClose,
}: DashboardSidebarProps) {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const isInstructor = user?.role === "instructor";

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      {isOpen && (
        <div
          className="dashboard-sidebar-overlay"
          onClick={onClose}
        />
      )}

      <aside
        className={`dashboard-sidebar ${
          isOpen ? "dashboard-sidebar-open" : ""
        }`}
      >
        <button
          type="button"
          className="dashboard-sidebar-close"
          onClick={onClose}
          aria-label="Close menu"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <nav>
          <p className="dashboard-sidebar-title">MAIN MENU</p>

          <NavLink to="/" onClick={onClose}>
            <FontAwesomeIcon icon={faHouse} />
            Home
          </NavLink>

          <NavLink
            to={
              isInstructor
                ? "/instructor/dashboard"
                : "/dashboard"
            }
            onClick={onClose}
          >
            <FontAwesomeIcon icon={faGauge} />
            Dashboard
          </NavLink>

          <NavLink
            to={isInstructor ? "/instructor/courses" : "/courses"}
            onClick={onClose}
          >
            <FontAwesomeIcon icon={faBookOpen} />
            My Courses
          </NavLink>

          {!isInstructor && (
            <NavLink to="/wishlist" onClick={onClose}>
              <FontAwesomeIcon icon={faHeart} />
              Wishlist
            </NavLink>
          )}

          {isInstructor && (
            <NavLink to="/instructor/students" onClick={onClose}>
              <FontAwesomeIcon icon={faUsers} />
              Students
            </NavLink>
          )}

          <p className="dashboard-sidebar-title">
            {isInstructor ? "MANAGEMENT" : "LEARNING"}
          </p>

          <NavLink to="/messages" onClick={onClose}>
            <FontAwesomeIcon icon={faMessage} />
            Messages
          </NavLink>

          <NavLink
            to={isInstructor ? "/instructor/reviews" : "/reviews"}
            onClick={onClose}
          >
            <FontAwesomeIcon icon={faStar} />
            Reviews
          </NavLink>

          {!isInstructor && (
            <NavLink to="/quiz" onClick={onClose}>
              <FontAwesomeIcon icon={faClipboardQuestion} />
              Quiz Attempts
            </NavLink>
          )}

          <p className="dashboard-sidebar-title">ACCOUNT</p>

          <NavLink
            to={isInstructor ? "/instructor/profile" : "/profile"}
            onClick={onClose}
          >
            <FontAwesomeIcon icon={faUser} />
            My Profile
          </NavLink>

          <NavLink
            to={
              isInstructor
                ? "/instructor/settings"
                : "/settings"
            }
            onClick={onClose}
          >
            <FontAwesomeIcon icon={faGear} />
            Settings
          </NavLink>

          <button
            type="button"
            className="dashboard-logout"
            onClick={handleLogout}
          >
            <FontAwesomeIcon icon={faRightFromBracket} />
            Logout
          </button>
        </nav>
      </aside>
    </>
  );
}

export default DashboardSidebar;