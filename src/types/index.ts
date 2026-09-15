export interface User {
  id: string;
  name: string;
  email: string;
  role: "student" | "instructor" | "admin";
}

export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
  instructor: string;
  rating: number;
  lessons: number;
}

export interface Category {
  id: string;
  name: string;
  courseCount: number;
}