import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout/AuthLayout";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import "./Auth.css";

function SetPassword() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/login");
  };

  return (
    <AuthLayout description="Create a new password and continue your learning journey with Dreams LMS.">
      <div className="auth-heading">
        <h2>Set New Password</h2>

        <p>
          Create a new password for your account. Make sure it is strong and
          secure.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="password">New Password</label>

          <PasswordInput
            id="password"
            name="password"
            placeholder="Enter your new password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>

          <PasswordInput
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your new password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="auth-button">
          Reset Password
        </button>
      </form>

      <p className="auth-switch">
        Remember your password?{" "}
        <Link to="/login">Back to Login</Link>
      </p>
    </AuthLayout>
  );
}

export default SetPassword;