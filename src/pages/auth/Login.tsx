import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout/AuthLayout";
import Input from "../../components/Input/Input";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import "./Auth.css";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(formData);
    console.log("Remember me:", rememberMe);
  };

  return (
    <AuthLayout description="Platform designed to help organisations, educators and learners manage, deliver and track learning and training activities.">
      <div className="auth-heading">
        <h2>Welcome back!</h2>
        <p>Sign in to continue learning with Dreams LMS.</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>

          <Input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <div className="password-label">
            <label htmlFor="password">Password</label>
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>

          <PasswordInput
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="remember-row">
          <label className="remember">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(event) => setRememberMe(event.target.checked)}
            />
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
    </AuthLayout>
  );
}

export default Login;