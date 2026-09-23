import { Link } from "react-router-dom";
import "./Home.css";
import Header from "../components/Header/Header";
import CategoryCard from "../components/CategoryCard/CategoryCard";
import CourseCard from "../components/CourseCard/CourseCard";
import BlogCard from "../components/BlogCard/BlogCard";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <div className="home-page">
      <Header />

      <main>
        <section className="hero-section">
          <div className="hero-container">
            <div className="hero-content">
              <span className="hero-badge">THE LEADER IN ONLINE LEARNING</span>

              <h1>
                Engaging & Accessible
                <span> Online Courses for All</span>
              </h1>

              <p>
                Learn from expert instructors and gain the skills you need to
                achieve your goals. Discover thousands of courses designed to
                help you learn, grow and succeed.
              </p>

              <div className="hero-search">
                <input
                  type="text"
                  placeholder="Search for courses, tutors"
                />

                <button>⌕</button>
              </div>
            </div>

            <div className="hero-image">
              <div className="hero-shape hero-shape-one"></div>
              <div className="hero-shape hero-shape-two"></div>
              <div className="hero-shape hero-shape-three"></div>

              <div className="hero-image-circle"></div>

              <img
                src="/images/home-illustration.png"
                alt="Student"
              />
            </div>
          </div>
        </section>

        <section className="trusted-section">
          <div className="section-container trusted-container">
            <div className="trusted-title">
              <strong>Trusted By 500+</strong>
              <span>Leading Universities & Companies</span>
            </div>

            <div className="trusted-logos">
              <img
                src="/images/trust.svg"
                alt="Trusted Logos"
              />
            </div>
          </div>
        </section>

        <section className="category-section">
          <div className="section-container">
            <div className="section-heading centered-heading">
              <div>
                <span>EXPLORE OUR CATEGORIES</span>
                <h2>Popular Categories</h2>
                <p>
                  Explore our top categories to find the perfect courses for
                  your learning journey
                </p>
              </div>
            </div>

            <div className="category-grid">
              <CategoryCard
                name="Angular"
                courses="50+ Courses"
                icon="</>"
                link="/courses?category=development"
              />

              <CategoryCard
                name="React JS"
                courses="50+ Courses"
                icon="⚛"
                link="/courses?category=react"
              />

              <CategoryCard
                name="Node JS"
                courses="50+ Courses"
                icon="⬡"
                link="/courses?category=node"
              />

              <CategoryCard
                name="Docker"
                courses="50+ Courses"
                icon="◈"
                link="/courses?category=docker"
              />
            </div>

            <div className="category-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </section>

        <section className="stats-section">
          <div className="section-container stats-container">
            <div className="stat-item">
              <strong>145</strong>
              <span>Online Courses</span>
            </div>

            <div className="stat-item">
              <strong>23,989</strong>
              <span>Expert Tutors</span>
            </div>

            <div className="stat-item">
              <strong>80+</strong>
              <span>Certified Courses</span>
            </div>

            <div className="stat-item">
              <strong>58,789</strong>
              <span>Online Students</span>
            </div>
          </div>
        </section>

        <section className="course-section">
          <div className="section-container">
            <div className="section-heading centered-heading">
              <div>
                <span>FEATURED COURSES</span>
                <h2>Popular Courses</h2>
                <p>
                  Discover our featured courses, specially curated to help you
                  gain in-demand skills
                </p>
              </div>
            </div>

            <div className="course-grid">
              <CourseCard
                image="/images/course-1.jpg"
                imageAlt="Information About UI UX Design"
                category="Design"
                title="Information About UI/UX Design & Development"
                lessons={12}
                students={30}
                rating={4.8}
                price="$49"
                slug="ui-ux-design-fundamentals"
              />

              <CourseCard
                image="/images/course-2.jpg"
                imageAlt="Wordpress course"
                category="Development"
                title="Wordpress for Beginners - Master Wordpress Quickly"
                lessons={18}
                students={25}
                rating={4.9}
                price="$39"
                slug="wordpress-for-beginners"
              />

              <CourseCard
                image="/images/course-3.jpg"
                imageAlt="Sketch course"
                category="Design"
                title="Sketch from A to Z (2026): Become an App Designer"
                lessons={15}
                students={50}
                rating={5.0}
                price="Free"
                slug="sketch-from-a-to-z"
              />

              <CourseCard
                image="/images/course-4.jpg"
                imageAlt="Angular course"
                category="Development"
                title="Learn Angular Fundamentals From Beginning"
                lessons={16}
                students={31}
                rating={4.8}
                price="$45"
                slug="angular-fundamentals"
              />

              <CourseCard
                image="/images/course-5.jpg"
                imageAlt="Developer course"
                category="Development"
                title="CP Developers Double Your Coding Speed with Visual Studio"
                lessons={22}
                students={30}
                rating={4.7}
                price="Free"
                slug="cp-developers-visual-studio"
              />

              <CourseCard
                image="/images/course-6.jpg"
                imageAlt="Responsive world course"
                category="Development"
                title="Build Responsive Real World Websites with HTML5 and CSS3"
                lessons={20}
                students={25}
                rating={4.9}
                price="$59"
                slug="responsive-real-world-websites"
              />
            </div>

            <div className="course-view-all">
              <Link to="/courses">View All Courses</Link>
            </div>
          </div>
        </section>

        <section className="skills-section">
          <div className="section-container skills-container">
            <div className="skills-intro">
              <span>WHY CHOOSE US</span>
              <h2>
                Master the skills
                <br />
                to drive your career
              </h2>

              <p>
                Get certified, master modern tech skills, and train at your own
                pace. Learn from expert instructors and build the future you
                want.
              </p>

              <div className="skills-buttons">
                <Link to="/courses">Join Courses</Link>
                <Link to="/about">Learn More</Link>
              </div>
            </div>

            <div className="skills-list">
              <div className="skill-item">
                <div className="skill-icon">✓</div>
                <div>
                  <h3>Stay motivated with engaging instructors</h3>
                  <p>
                    Learn from experts who make complex topics simple and
                    interesting.
                  </p>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-icon">✓</div>
                <div>
                  <h3>Keep up with the latest in cloud</h3>
                  <p>
                    Stay ahead with practical, modern and industry-ready
                    courses.
                  </p>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-icon">✓</div>
                <div>
                  <h3>Get certified with 100+ certification courses</h3>
                  <p>
                    Earn certificates that showcase your skills to employers.
                  </p>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-icon">✓</div>
                <div>
                  <h3>Build skills your way, from labs to courses</h3>
                  <p>
                    Choose flexible learning paths that fit your goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="instructor-section">
          <div className="section-container instructor-container">
            <div className="instructor-images">
              <img
                src="/images/instructors-grid.png"
                alt="Instructors"
              />
            </div>

            <div className="instructor-content">
              <span>MEET OUR INSTRUCTORS</span>
              <h2>Experienced Course Instructor</h2>
              <p>
                An award-winning course management system designed to help
                educators create engaging courses, share knowledge and inspire
                learners.
              </p>

              <p>
                Our instructors bring real-world experience and practical
                knowledge to every course.
              </p>

              <Link to="/instructors">Explore Now</Link>
            </div>
          </div>
        </section>

        <section className="mentor-section">
          <div className="section-container mentor-container">
            <div className="mentor-content">
              <span>BECOME AN INSTRUCTOR</span>

              <h2>
                Want to share your
                <br />
                knowledge? Join us a Mentor
              </h2>

              <p>
                High-quality video of video instructor could quickly use your
                skills to teach others and grow your career.
              </p>

              <ul>
                <li>✓ Access Your Classes anywhere</li>
                <li>✓ Flexible Course Plan</li>
                <li>✓ Quality Assurance</li>
                <li>✓ Get Free Mentors</li>
                <li>✓ Your New Path to Success</li>
              </ul>

              <Link to="/register">Start Teaching Today</Link>
            </div>

            <div className="mentor-image">
              <div className="mentor-number mentor-number-one">
                <strong>100+</strong>
                <span>Expert Tutors</span>
              </div>

              <div className="mentor-number mentor-number-two">
                <strong>80+</strong>
                <span>Courses</span>
              </div>

              <div className="mentor-number mentor-number-three">
                <strong>50K+</strong>
                <span>Approved</span>
              </div>

              <img
                src="/images/instructor.png"
                alt="Become a mentor"
              />
            </div>
          </div>
        </section>

        <section className="testimonial-section">
          <div className="section-container">
            <div className="section-heading centered-heading light-heading">
              <div>
                <span>TESTIMONIALS</span>
                <h2>What our learners say</h2>
                <p>
                  We are a very happy because we have a happy customer
                </p>
              </div>
            </div>

            <div className="testimonial-container">
              <div className="testimonial-quote">“</div>
              <div className="testimonial-card">
                <img 
                  src="/images/testimonial.png" 
                  alt="" 
                />
              </div>

              {/* <div className="testimonial-card">
                <p>
                  Exactly what I was looking for. You will not regret it. It
                  really saves me time and effort. Still skills is what our
                  business lacked.
                </p>

                <strong>Hawkins</strong>
                <span>UI/UX Designer</span>

                <div className="testimonial-stars">★★★★★</div>
              </div> */}

              {/* <div className="testimonial-image">
                <img
                  src="/images/testimonial.svg"
                  alt="Happy student"
                />
              </div> */}
            </div>
          </div>
        </section>

        <section className="blog-section">
          <div className="section-container">
            <div className="section-heading centered-heading">
              <div>
                <span>OUR BLOG</span>
                <h2>Latest Blogs</h2>
                <p>
                  Follow the latest and most useful articles on students'
                  blogs
                </p>
              </div>
            </div>

            <div className="blog-grid">
              <BlogCard
                image="/images/blog-1.jpg"
                imageAlt="Programming knowledge"
                category="Development"
                title="Mastering Programming with a Technical Knowledge"
                description="Learning to code can be overwhelming, but here are some tips to make it easier."
                author="Alex Smith"
                date="05 Aug 2026"
              />

              <BlogCard
                image="/images/blog-2.jpg"
                imageAlt="Coding skills"
                category="Technology"
                title="How to Level Up Your Coding Skills with the Help of a Mentor"
                description="Whether you're a beginner or an experienced coder, this blog will explain how learning can help."
                author="John Carter"
                date="18 Aug 2026"
              />

              <BlogCard
                image="/images/blog-3.jpg"
                imageAlt="Technology world"
                category="Learning"
                title="Navigating the Tech World: The Ultimate Guide"
                description="From tech trends to tips and ever-changing tech career paths, stay informed."
                author="John Smith"
                date="02 Sep 2026"
              />
            </div>

            <div className="blog-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;