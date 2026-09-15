import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <header className="home-header">
        <div className="home-header-container">
          <Link to="/" className="home-logo">
            <img src="/images/logo.svg" alt="Dreams LMS" />
          </Link>

          <nav className="home-nav">
            <Link to="/" className="active">
              Home
            </Link>
            <Link to="/courses">Courses</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          <div className="home-header-actions">
            <Link to="/login" className="home-login">
              Login
            </Link>

            <Link to="/register" className="home-register">
              Register
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-container">
            <div className="hero-content">
              <span className="hero-badge">LEARN. GROW. SUCCEED.</span>

              <h1>
                Learn new skills and
                <span> build your future</span>
              </h1>

              <p>
                Discover quality courses taught by experienced instructors
                and take your skills to the next level.
              </p>

              <div className="hero-actions">
                <Link to="/courses" className="hero-primary-button">
                  Explore Courses
                </Link>

                <Link to="/register" className="hero-secondary-button">
                  Get Started
                </Link>
              </div>

              <div className="hero-stats">
                <div>
                  <strong>10K+</strong>
                  <span>Students</span>
                </div>

                <div>
                  <strong>500+</strong>
                  <span>Courses</span>
                </div>

                <div>
                  <strong>100+</strong>
                  <span>Instructors</span>
                </div>
              </div>
            </div>

            <div className="hero-image">
              <div className="hero-image-circle"></div>

              <img
                src="/images/home-illustration.svg"
                alt="Students learning"
              />
            </div>
          </div>
        </section>

        <section className="category-section">
          <div className="section-container">
            <div className="section-heading">
              <div>
                <span>EXPLORE</span>
                <h2>Popular Categories</h2>
              </div>

              <Link to="/courses">View All</Link>
            </div>

            <div className="category-grid">
              <Link to="/courses?category=development" className="category-card">
                <div className="category-icon">💻</div>
                <h3>Development</h3>
                <p>120 Courses</p>
              </Link>

              <Link to="/courses?category=design" className="category-card">
                <div className="category-icon">🎨</div>
                <h3>Design</h3>
                <p>85 Courses</p>
              </Link>

              <Link to="/courses?category=business" className="category-card">
                <div className="category-icon">💼</div>
                <h3>Business</h3>
                <p>75 Courses</p>
              </Link>

              <Link to="/courses?category=marketing" className="category-card">
                <div className="category-icon">📈</div>
                <h3>Marketing</h3>
                <p>60 Courses</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="course-section">
          <div className="section-container">
            <div className="section-heading">
              <div>
                <span>TOP COURSES</span>
                <h2>Popular Courses</h2>
              </div>

              <Link to="/courses">View All</Link>
            </div>

            <div className="course-grid">
              <div className="course-card">
                <div className="course-image">
                  <img
                    src="/images/course-1.jpg"
                    alt="Web Development course"
                  />
                </div>

                <div className="course-content">
                  <span>Development</span>
                  <h3>Complete Web Development Bootcamp</h3>

                  <div className="course-info">
                    <span>⭐ 4.8</span>
                    <span>24 Lessons</span>
                  </div>

                  <div className="course-footer">
                    <strong>$49</strong>
                    <Link to="/courses">View Course</Link>
                  </div>
                </div>
              </div>

              <div className="course-card">
                <div className="course-image">
                  <img
                    src="/images/course-2.jpg"
                    alt="UI UX Design course"
                  />
                </div>

                <div className="course-content">
                  <span>Design</span>
                  <h3>UI/UX Design Masterclass</h3>

                  <div className="course-info">
                    <span>⭐ 4.9</span>
                    <span>18 Lessons</span>
                  </div>

                  <div className="course-footer">
                    <strong>$39</strong>
                    <Link to="/courses">View Course</Link>
                  </div>
                </div>
              </div>

              <div className="course-card">
                <div className="course-image">
                  <img
                    src="/images/course-3.jpg"
                    alt="Digital Marketing course"
                  />
                </div>

                <div className="course-content">
                  <span>Marketing</span>
                  <h3>Digital Marketing Fundamentals</h3>

                  <div className="course-info">
                    <span>⭐ 4.7</span>
                    <span>20 Lessons</span>
                  </div>

                  <div className="course-footer">
                    <strong>$35</strong>
                    <Link to="/courses">View Course</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-container">
            <div>
              <h2>Ready to start learning?</h2>
              <p>
                Join thousands of students and start building the skills you
                need for your future.
              </p>
            </div>

            <Link to="/register">Get Started</Link>
          </div>
        </section>
      </main>

      <footer className="home-footer">
        <div className="footer-container">
          <div className="footer-brand">
            <img src="/images/logo.svg" alt="Dreams LMS" />
            <p>
              Empowering learners with the skills they need to succeed.
            </p>
          </div>

          <div className="footer-links">
            <Link to="/courses">Courses</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Login</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Dreams LMS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;