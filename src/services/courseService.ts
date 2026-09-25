import type { Course } from "../types/course";

const API_URL = import.meta.env.VITE_API_URL;

export const getCourses = async (): Promise<Course[]> => {
  const response = await fetch(`${API_URL}/api/courses`);

  if (!response.ok) {
    throw new Error("Failed to fetch courses");
  }

  const data: { courses: Course[] } = await response.json();

  return data.courses;
};

export const getCourseBySlug = async (slug: string): Promise<Course> => {
  const response = await fetch(`${API_URL}/api/courses/${slug}`);

  if (!response.ok) {
    throw new Error("Failed to fetch course");
  }

  const data: { course: Course } = await response.json();

  return data.course;
};

export type Lesson = {
  id: string;
  title: string;
  description: string;
  content: string;
  videoUrl: string;
  order: number;
  duration: number;
  isPreview: boolean;
};

export type CurriculumSection = {
  section: string;
  order: number;
  lessons: Lesson[];
};

export type CourseCurriculum = {
  course: {
    id: string;
    title: string;
    slug: string;
    description: string;
    image: string;
    price: number;
    level: string;
    status: "draft" | "published";
  };
  curriculum: CurriculumSection[];
};

export const getCourseCurriculum = async (
  slug: string
): Promise<CourseCurriculum> => {
  const response = await fetch(
    `${API_URL}/api/courses/${slug}/curriculum`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch course curriculum");
  }

  return response.json();
};

export const getInstructorCoursePreview = async (
  slug: string
): Promise<CourseCurriculum> => {
  const response = await fetch(
    `${API_URL}/api/courses/instructor/${slug}/preview`,
    {
      credentials: "include",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch course preview");
  }

  return response.json();
};

export const getInstructorCourse = async (
  slug: string
): Promise<Course> => {
  const url = `${API_URL}/api/courses/instructor/${slug}`;

  console.log("Instructor course URL:", url);

  const response = await fetch(url, {
    credentials: "include",
  });

  console.log("Response URL:", response.url);
  console.log("Response status:", response.status);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch instructor course");
  }

  return data.course;
};

type UpdateCourseData = {
  title: string;
  description: string;
  image: string;
  category: string;
  price: number;
  level: string;
  status: "draft" | "published";
};

export const updateInstructorCourse = async (
  slug: string,
  courseData: UpdateCourseData
): Promise<Course> => {
  const response = await fetch(
    `${API_URL}/api/courses/instructor/${slug}`,
    {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(courseData),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to update course");
  }

  return data.course;
};