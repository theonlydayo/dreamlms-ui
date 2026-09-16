import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout/AuthLayout";
import Input from "../../components/Input/Input";
import "./Auth.css";

function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/otp");
  };

  return (
    <AuthLayout description="Access your courses and continue your learning journey with Dreams LMS.">
      <div className="auth-heading">
        <h2>Forgot Password?</h2>

        <p>
          Enter your email address and we'll send you a link to reset your
          password.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>

          <Input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleChange}
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
    </AuthLayout>
  );
}

export default ForgotPassword;