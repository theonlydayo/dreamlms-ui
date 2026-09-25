import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

function Header() {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    closeMenu();
    navigate("/login");
  };

  return (
    <header className="home-header">
      <div className="home-header-container">
        <button
          type="button"
          className="home-menu-button"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "×" : "☰"}
        </button>

        <Link to="/" className="home-logo" onClick={closeMenu}>
          <img src="/images/home-logo.svg" alt="Dreams LMS" />
        </Link>

        <nav className={`home-nav ${menuOpen ? "open" : ""}`}>
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/courses" onClick={closeMenu}>
            Courses
          </NavLink>

          <NavLink
            to={
              isAuthenticated && user?.role === "instructor"
                ? "/instructor/dashboard"
                : "/dashboard"
            }
            onClick={closeMenu}
          >
            Dashboard
          </NavLink>

          <NavLink to="/pricing" onClick={closeMenu}>
            Pricing
          </NavLink>

          <NavLink to="/blogs" onClick={closeMenu}>
            Blogs
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
        </nav>

        <div className="home-header-actions">
          {isAuthenticated ? (
            <>
              <Link
                to={
                  user?.role === "instructor"
                    ? "/instructor/dashboard"
                    : "/dashboard"
                }
                className="home-login"
              >
                {user?.name}
              </Link>

              <button
                type="button"
                className="home-register"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="home-login">
                Login
              </Link>

              <Link to="/register" className="home-register">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;