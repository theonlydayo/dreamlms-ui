export type CourseCategory = {
  _id: string;
  name: string;
  slug: string;
};

export type CourseInstructor = {
  _id: string;
  name: string;
  email: string;
};

export type Course = {
  _id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  category: CourseCategory;
  instructor: CourseInstructor;
  price: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  status: "draft" | "published";
  createdAt: string;
  updatedAt: string;
};