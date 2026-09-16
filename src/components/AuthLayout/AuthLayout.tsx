import type { ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
  description: string;
};

function AuthLayout({ children, description }: AuthLayoutProps) {
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
            <h1>
              Welcome to Dreams
              <span className="highlight">LMS</span> Courses
            </h1>

            <p>{description}</p>
          </div>
        </div>

        <div className="auth-right">
          <div className="auth-form-wrapper">
            <div className="mobile-brand">
              <img src="/images/logo.svg" alt="Dreams LMS" />
            </div>

            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;