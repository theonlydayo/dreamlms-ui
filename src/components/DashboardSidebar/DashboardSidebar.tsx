import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function DashboardSidebar() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside className="dashboard-sidebar">
      <nav>
        <p className="dashboard-sidebar-title">MAIN MENU</p>

        <NavLink to="/">Home</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/courses">My Courses</NavLink>
        <NavLink to="/wishlist">Wishlist</NavLink>

        <p className="dashboard-sidebar-title">LEARNING</p>

        <NavLink to="/messages">Messages</NavLink>
        <NavLink to="/reviews">Reviews</NavLink>
        <NavLink to="/quiz">Quiz Attempts</NavLink>

        <p className="dashboard-sidebar-title">ACCOUNT</p>

        <NavLink to="/profile">My Profile</NavLink>
        <NavLink to="/settings">Settings</NavLink>

        <button
          type="button"
          className="dashboard-logout"
          onClick={handleLogout}
        >
          Logout
        </button>
      </nav>
    </aside>
  );
}

export default DashboardSidebar;