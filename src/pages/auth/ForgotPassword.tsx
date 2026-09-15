import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";
import type { FormEvent } from "react";

function ForgotPassword() {
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/otp");
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
              Access your courses and continue your learning journey with
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
              <h2>Forgot Password?</h2>
              <p>
                Enter your email address and we'll send you a link to reset
                your password.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <button type="submit" className="auth-button">
                Send Reset Link
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

export default ForgotPassword;