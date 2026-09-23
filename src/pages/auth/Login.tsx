import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout/AuthLayout";
import { useAuth } from "../../context/AuthContext";
import Input from "../../components/Input/Input";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import "./Auth.css";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [loginType, setLoginType] = useState<"student" | "instructor">(
    "student"
  );

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");

    try {
      setLoading(true);

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            role: loginType,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      if (data.user.role !== loginType) {
        throw new Error(
          `This account does not have ${loginType} access.`
        );
      }

      login(data.token, data.user);

      if (rememberMe) {
        localStorage.setItem("rememberMe", "true");
      } else {
        localStorage.removeItem("rememberMe");
      }

      if (loginType === "instructor") {
        navigate("/instructor/dashboard");
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout description="Platform designed to help organisations, educators and learners manage, deliver and track learning and training activities.">
      <div className="auth-heading">
        <h2>
          {loginType === "student"
            ? "Student Login"
            : "Instructor Login"}
        </h2>

        <p>
          {loginType === "student"
            ? "Sign in to continue learning with Dreams LMS."
            : "Sign in to manage your courses with Dreams LMS."}
        </p>
      </div>

      <div className="login-type-switch">
        <button
          type="button"
          className={loginType === "student" ? "active" : ""}
          onClick={() => {
            setLoginType("student");
            setError("");
          }}
        >
          Student
        </button>

        <button
          type="button"
          className={loginType === "instructor" ? "active" : ""}
          onClick={() => {
            setLoginType("instructor");
            setError("");
          }}
        >
          Instructor
        </button>
      </div>

      {error && <p className="auth-error">{error}</p>}

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
            required
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
              onChange={(event) =>
                setRememberMe(event.target.checked)
              }
            />

            <span>Remember me</span>
          </label>
        </div>

        <button
          type="submit"
          className="auth-button"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
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