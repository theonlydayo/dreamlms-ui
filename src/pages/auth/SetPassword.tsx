import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";
import type { FormEvent } from "react";

function SetPassword() {
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/login");
  };

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
              Create a new password and continue your learning journey with
              Dreams LMS.
            </p>
          </div>
        </div>

        <div className="auth-right">
          <div className="auth-form-wrapper">
            <div className="mobile-brand">
              <img src="/images/logo.svg" alt="Dreams LMS" />
            </div>

            <div className="auth-heading">
              <h2>Set New Password</h2>
              <p>
                Create a new password for your account. Make sure it is
                strong and secure.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="password">New Password</label>

                <div className="password-input">
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your new password"
                    required
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
                    placeholder="Confirm your new password"
                    required
                  />

                  <button type="button" className="password-toggle">
                    👁
                  </button>
                </div>
              </div>

              <button type="submit" className="auth-button">
                Reset Password
              </button>
            </form>

            <p className="auth-switch">
              Remember your password?{" "}
              <Link to="/login">Back to Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SetPassword;