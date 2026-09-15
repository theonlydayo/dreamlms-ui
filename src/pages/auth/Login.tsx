import { Link } from "react-router-dom";
import "./Auth.css";

function Login() {
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
              <h2>Welcome back!</h2>
              <p>Sign in to continue learning with Dreams LMS.</p>
            </div>

            <form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <div className="password-label">
                  <label htmlFor="password">Password</label>
                  <Link to="/forgot-password">Forgot Password?</Link>
                </div>

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

              <div className="remember-row">
                <label className="remember">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
              </div>

              <button type="submit" className="auth-button">
                Login
              </button>
            </form>

            <p className="auth-switch">
              Don't have an account?{" "}
              <Link to="/register">Create Account</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;