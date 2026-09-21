import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  faCertificate,
  faInfinity,
  faPlay,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import {
  getCourseBySlug,
  getCourseCurriculum,
} from "../services/courseService";
import type { Course } from "../types/course";
import type { CourseCurriculum } from "../services/courseService";
import "./CourseDetails.css";

function CourseDetails() {
  const { slug } = useParams();

  const [course, setCourse] = useState<Course | null>(null);
  const [curriculum, setCurriculum] =
    useState<CourseCurriculum | null>(null);

  const [loading, setLoading] = useState(true);
  const [curriculumLoading, setCurriculumLoading] = useState(true);
  const [error, setError] = useState("");
  const [openSection, setOpenSection] = useState<number | null>(1);

  useEffect(() => {
    const fetchCourse = async () => {
      if (!slug) return;

      try {
        const data = await getCourseBySlug(slug);
        setCourse(data);

        const curriculumData = await getCourseCurriculum(slug);
        setCurriculum(curriculumData);
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : "Failed to fetch course"
        );
      } finally {
        setLoading(false);
        setCurriculumLoading(false);
      }
    };

    fetchCourse();
  }, [slug]);

  if (loading) {
    return (
      <div className="course-details-page">
        <Header />

        <main className="course-details-state">
          <div className="course-loader"></div>
          <p>Loading course...</p>
        </main>

        <Footer />
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="course-details-page">
        <Header />

        <main className="course-details-state">
          <h2>Course not found</h2>
          <p>
            {error ||
              "The course you're looking for doesn't exist."}
          </p>

          <Link to="/courses" className="back-courses-button">
            Back to Courses
          </Link>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="course-details-page">
      <Header />

      <section className="course-hero">
        <div className="course-hero-container">
          <div className="course-hero-content">
            <div className="course-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <Link to="/courses">Courses</Link>
              <span>/</span>
              <span>{course.category.name}</span>
            </div>

            <span className="course-category">
              {course.category.name}
            </span>

            <h1>{course.title}</h1>

            <p className="course-description">
              {course.description}
            </p>

            <div className="course-rating">
              <span className="stars">★★★★★</span>
              <strong>4.8</strong>
              <span>(124 reviews)</span>
            </div>

            <div className="course-instructor">
              <div className="instructor-avatar">
                {course.instructor.name.charAt(0)}
              </div>

              <div>
                <span>Created by</span>
                <strong>{course.instructor.name}</strong>
              </div>
            </div>
          </div>

          <div className="course-preview-card">
            <div className="course-preview-image">
              <img src={course.image} alt={course.title} />

              <div className="preview-overlay">
                <button type="button" className="preview-button">
                  <FontAwesomeIcon icon={faPlay} />
                </button>

                <span>Preview this course</span>
              </div>
            </div>

            <div className="course-preview-content">
              <div className="course-price">
                ₦{course.price.toLocaleString()}
              </div>

              <button type="button" className="enroll-button">
                Enroll Now
              </button>

              <p className="guarantee">
                30-Day Money-Back Guarantee
              </p>

              <div className="course-includes">
                <h3>This course includes:</h3>

                <div>
                  <FontAwesomeIcon icon={faPlay} />
                  Video lessons
                </div>

                <div>
                  <FontAwesomeIcon icon={faBookOpen} />
                  Course materials
                </div>

                <div>
                  <FontAwesomeIcon icon={faInfinity} />
                  Lifetime access
                </div>

                <div>
                  <FontAwesomeIcon icon={faCertificate} />
                  Certificate of completion
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="course-details-body">
        <section className="course-overview">
          <h2>About This Course</h2>

          <p>{course.description}</p>

          <div className="course-info-grid">
            <div>
              <span>Level</span>
              <strong>{course.level}</strong>
            </div>

            <div>
              <span>Category</span>
              <strong>{course.category.name}</strong>
            </div>

            <div>
              <span>Instructor</span>
              <strong>{course.instructor.name}</strong>
            </div>

            <div>
              <span>Language</span>
              <strong>English</strong>
            </div>
          </div>
        </section>

        <section className="course-what-you-learn">
          <h2>What You'll Learn</h2>

          <div className="learning-grid">
            <div>
              <span>✓</span>
              Build modern applications
            </div>

            <div>
              <span>✓</span>
              Understand core concepts
            </div>

            <div>
              <span>✓</span>
              Work with real-world projects
            </div>

            <div>
              <span>✓</span>
              Develop practical skills
            </div>
          </div>
        </section>

        <section className="course-curriculum">
          <div className="curriculum-heading">
            <div>
              <span>Course Content</span>
              <h2>Curriculum</h2>
            </div>

            {!curriculumLoading && curriculum && (
              <p>
                {curriculum.curriculum.length} sections
              </p>
            )}
          </div>

          {curriculumLoading && (
            <p className="curriculum-state">
              Loading curriculum...
            </p>
          )}

          {!curriculumLoading && curriculum && (
            <div className="curriculum-list">
              {curriculum.curriculum.map((section) => (
                <div
                  className="curriculum-section"
                  key={section.order}
                >
                  <button
                    type="button"
                    className="curriculum-section-header"
                    onClick={() =>
                      setOpenSection(
                        openSection === section.order
                          ? null
                          : section.order
                      )
                    }
                  >
                    <div>
                      <h3>{section.section}</h3>

                      <span>
                        {section.lessons.length} lessons
                      </span>
                    </div>

                    <span
                      className={`curriculum-arrow ${
                        openSection === section.order
                          ? "open"
                          : ""
                      }`}
                    >
                      ⌄
                    </span>
                  </button>

                  {openSection === section.order && (
                    <div className="curriculum-lessons">
                      {section.lessons.map((lesson) => (
                        <div
                          className="curriculum-lesson"
                          key={lesson.id}
                        >
                          <div className="lesson-icon">
                            ▶
                          </div>

                          <div className="lesson-info">
                            <strong>{lesson.title}</strong>

                            <span>
                              {lesson.description}
                            </span>
                          </div>

                          <span className="lesson-duration">
                            {lesson.duration} min
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {!curriculumLoading && !curriculum && (
            <p className="curriculum-state">
              No curriculum available for this course.
            </p>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default CourseDetails;