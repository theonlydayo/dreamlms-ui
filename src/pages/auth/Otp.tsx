import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout/AuthLayout";
import Input from "../../components/Input/Input";
import "./Auth.css";

function Otp() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setOtp(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/set-password");
  };

  return (
    <AuthLayout description="Access your courses and continue your learning journey with Dreams LMS.">
      <div className="auth-heading">
        <h2>Enter OTP</h2>

        <p>
          We have sent a verification code to your email address. Enter the
          code below to continue.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="otp">Verification Code</label>

          <Input
            id="otp"
            type="text"
            name="otp"
            placeholder="Enter 6-digit OTP"
            value={otp}
            onChange={handleChange}
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
    </AuthLayout>
  );
}

export default Otp;