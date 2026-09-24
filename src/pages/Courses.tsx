import Header from "../components/Header/Header";
import CourseCard from "../components/CourseCard/CourseCard";
import Footer from "../components/Footer/Footer";
import { getCourses } from "../services/courseService";
import type { Course } from "../types/course";
import { useQuery } from "@tanstack/react-query";
import "./Courses.css";

function Courses() {
  const {
    data: courses = [],
    isLoading,
    error,
  } = useQuery<Course[], Error>({
    queryKey: ["courses"],
    queryFn: getCourses,
  });

  return (
    <div className="courses-page">
      <Header />

      <main className="courses-main">
        <div className="courses-heading">
          <h1>Explore Our Courses</h1>
          <p>Learn new skills and grow your knowledge.</p>
        </div>

        {isLoading && <p>Loading courses...</p>}

        {error && <p>{error.message}</p>}

        {!isLoading && !error && courses.length === 0 && (
          <p>No courses available.</p>
        )}

        {!isLoading && !error && courses.length > 0 && (
          <div className="courses-grid">
            {courses.map((course) => (
              <CourseCard
                key={course._id}
                image={course.image}
                imageAlt={course.title}
                category={course.category.name}
                title={course.title}
                lessons={0}
                students={0}
                rating={0}
                price={`₦${course.price.toLocaleString()}`}
                slug={course.slug}
              />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default Courses;