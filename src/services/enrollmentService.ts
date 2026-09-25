export type DashboardStats = {
  enrolledCourses: number;
  inProgressCourses: number;
  completedCourses: number;
  certificates: number;
};

export type DashboardEnrollment = {
  id: string;
  progress: number;
  enrolledAt: string;
  course: {
    _id: string;
    title: string;
    image: string;
    category: {
      name: string;
      slug: string;
    };
    instructor: {
      name: string;
    };
  };
};

export type StudentDashboard = {
  stats: DashboardStats;
  courses: DashboardEnrollment[];
};

export type EnrollmentResponse = {
  message: string;
  enrollment: {
    _id: string;
    student: string;
    course: string;
    progress: number;
    certificateIssued: boolean;
  };
};

const API_URL = import.meta.env.VITE_API_URL;

export const getStudentDashboard =
  async (): Promise<StudentDashboard> => {
    const response = await fetch(
      `${API_URL}/api/enrollments/dashboard`,
      {
        credentials: "include",
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Failed to fetch student dashboard"
      );
    }

    return data;
  };

export const enrollInCourse = async (
  slug: string
): Promise<EnrollmentResponse> => {
  const response = await fetch(
    `${API_URL}/api/enrollments/${slug}`,
    {
      method: "POST",
      credentials: "include",
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to enroll in course"
    );
  }

  return data;
};

export type EnrollmentStatus = {
  enrolled: boolean;
  enrollment: {
    _id: string;
    student: string;
    course: string;
    progress: number;
    certificateIssued: boolean;
  } | null;
};

export const getEnrollmentStatus = async (
  slug: string
): Promise<EnrollmentStatus> => {
  const response = await fetch(
    `${API_URL}/api/enrollments/${slug}`,
    {
      credentials: "include",
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to check enrollment status"
    );
  }

  return data;
};