import { Link } from "react-router-dom";
import "./Auth.css";

function Register() {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-left">
          <div className="auth-brand">
            <img src="/images/logo.svg" alt="Dreams LMS" />
          </div>

          <div className="auth-illustration">
            <img
              src="/images/login-illustration.svg"
              alt="Learning illustration"
            />
          </div>

          <div className="auth-left-content">
            <h1>Welcome to Dreams<span className="highlight">LMS</span> Courses</h1>
            <p>
              Platform designed to help organisations, educators and learners manage, deliver and track learning and training activities.
            </p>
          </div>
        </div>

        <div className="auth-right">
          <div className="auth-form-wrapper">
            <div className="mobile-brand">
              <img src="/images/logo.svg" alt="Dreams LMS" />
            </div>

            <div className="auth-heading">
              <h2>Create an account</h2>
              <p>Join Dreams LMS and start your learning journey.</p>
            </div>

            <form>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>

                <div className="password-input">
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                  />

                  <button type="button" className="password-toggle">
                    👁
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>

                <div className="password-input">
                  <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm your password"
                  />

                  <button type="button" className="password-toggle">
                    👁
                  </button>
                </div>
              </div>

              <div className="remember-row">
                <label className="remember">
                  <input type="checkbox" />
                  <span>
                    I agree to the{" "}
                    <Link to="/terms">Terms and Conditions</Link>
                  </span>
                </label>
              </div>

              <button type="submit" className="auth-button">
                Create Account
              </button>
            </form>

            <p className="auth-switch">
              Already have an account?{" "}
              <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;