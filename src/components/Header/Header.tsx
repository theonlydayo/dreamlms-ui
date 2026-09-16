import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="home-header">
      <div className="home-header-container">
        <Link to="/" className="home-logo">
          <img src="/images/home-logo.svg" alt="Dreams LMS" />
        </Link>

        <nav className="home-nav">
          <Link to="/" className="active">
            Home
          </Link>

          <Link to="/courses">Courses</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="home-header-actions">
          <Link to="/login" className="home-login">
            Login
          </Link>

          <Link to="/register" className="home-register">
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;