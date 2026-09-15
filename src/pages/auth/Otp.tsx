import { useNavigate, Link } from "react-router-dom";
import "./Auth.css";
import type { FormEvent } from "react";

function Otp() {
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/set-password");
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
              <h2>Enter OTP</h2>
              <p>
                We have sent a verification code to your email address.
                Enter the code below to continue.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="otp">Verification Code</label>
                <input
                  type="text"
                  id="otp"
                  name="otp"
                  placeholder="Enter 6-digit OTP"
                  maxLength={6}
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  required
                />
              </div>

              <button type="submit" className="auth-button">
                Verify OTP
              </button>
            </form>

            <p className="auth-switch">
              Didn't receive the code?{" "}
              <button type="button" className="auth-link-button">
                Resend OTP
              </button>
            </p>

            <p className="auth-switch">
              <Link to="/forgot-password">Back to Forgot Password</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Otp;