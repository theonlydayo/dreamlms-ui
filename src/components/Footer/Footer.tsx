import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="home-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img src="/images/logo.svg" alt="Dreams LMS" />

          <p>
            Empowering learners with the skills they need to succeed in
            today's digital world.
          </p>

          <div className="footer-socials">
            <a href="/">f</a>
            <a href="/">𝕏</a>
            <a href="/">in</a>
          </div>
        </div>

        <div className="footer-column">
          <h3>For Instructor</h3>
          <Link to="/profile">Profile</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/instructors">Instructor</Link>
          <Link to="/courses">Courses</Link>
        </div>

        <div className="footer-column">
          <h3>For Student</h3>
          <Link to="/profile">Profile</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/courses">Student</Link>
        </div>

        <div className="footer-column footer-subscribe">
          <h3>Subscription</h3>
          <p>Sign up to get updates & news.</p>

          <div className="subscribe-form">
            <input type="email" placeholder="Enter Email Address" />
            <button>Subscribe</button>
          </div>

          <div className="app-links">
            <span>App Store</span>
            <span>Google Play</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Dreams LMS. All rights reserved.</p>

        <div className="footer-bottom-links">
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;