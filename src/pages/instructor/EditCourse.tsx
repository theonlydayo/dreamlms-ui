import {
  useEffect,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCloudArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import DashboardSidebar from "../../components/DashboardSidebar/DashboardSidebar";
import Footer from "../../components/Footer/Footer";
import {
  getInstructorCourse,
  updateInstructorCourse,
} from "../../services/courseService";
import type { Course } from "../../types/course";
import "./CreateCourse.css";

function EditCourse() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    level: "Beginner",
    status: "draft" as "draft" | "published",
  });

  const {
    data: course,
    isLoading,
    error: courseError,
  } = useQuery<Course, Error>({
    queryKey: ["instructor-course", slug],
    queryFn: () => getInstructorCourse(slug!),
    enabled: !!slug,
  });

  useEffect(() => {
    if (!course) {
      return;
    }

    setFormData({
      title: course.title,
      description: course.description,
      category:
        typeof course.category === "string"
          ? course.category
          : course.category.slug,
      price: String(course.price),
      level: course.level,
      status: course.status,
    });

    setImageUrl(course.image || "");
  }, [course]);

  const uploadImageMutation = useMutation({
    mutationFn: async (file: File) => {
      const uploadData = new FormData();
      uploadData.append("image", file);

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/uploads/course-image`,
        {
          method: "POST",
          body: uploadData,
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to upload image");
      }

      return data.imageUrl;
    },
    onSuccess: (url) => {
      setImageUrl(url);
    },
    onError: (error) => {
      setSelectedImage(null);
      setError(
        error instanceof Error
          ? error.message
          : "Failed to upload image"
      );
    },
  });

  const updateCourseMutation = useMutation({
    mutationFn: () =>
      updateInstructorCourse(slug!, {
        title: formData.title,
        description: formData.description,
        image: imageUrl,
        category: formData.category,
        price: Number(formData.price) || 0,
        level: formData.level,
        status: formData.status,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["instructor-courses"],
      });

      queryClient.invalidateQueries({
        queryKey: ["instructor-course", slug],
      });

      navigate("/instructor/dashboard");
    },
  });

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleImageChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    setSelectedImage(file);
    setError("");
    uploadImageMutation.mutate(file);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!slug) {
      setError("Course not found.");
      return;
    }

    if (!imageUrl) {
      setError("Please upload a course thumbnail.");
      return;
    }

    setError("");
    updateCourseMutation.mutate();
  };

  const isUpdating = updateCourseMutation.isPending;
  const isUploading = uploadImageMutation.isPending;
  const mutationError = updateCourseMutation.error;

  if (isLoading) {
    return (
      <div className="dashboard-page">
        <DashboardHeader
          onMenuClick={() => setSidebarOpen(true)}
        />

        <div className="dashboard-layout">
          <DashboardSidebar
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />

          <main className="dashboard-main create-course-main">
            <p>Loading course...</p>
          </main>
        </div>

        <Footer />
      </div>
    );
  }

  if (courseError || !course) {
    return (
      <div className="dashboard-page">
        <DashboardHeader
          onMenuClick={() => setSidebarOpen(true)}
        />

        <div className="dashboard-layout">
          <DashboardSidebar
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />

          <main className="dashboard-main create-course-main">
            <p>
              {courseError?.message || "Course not found."}
            </p>

            <Link
              to="/instructor/dashboard"
              className="create-course-back"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
              Back to Dashboard
            </Link>
          </main>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="dashboard-page">
      <DashboardHeader
        onMenuClick={() => setSidebarOpen(true)}
      />

      <div className="dashboard-layout">
        <DashboardSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <main className="dashboard-main create-course-main">
          <div className="create-course-heading">
            <div>
              <Link
                to="/instructor/dashboard"
                className="create-course-back"
              >
                <FontAwesomeIcon icon={faArrowLeft} />
                Back to Dashboard
              </Link>

              <h1>Edit Course</h1>

              <p>
                Update your course information and manage its status.
              </p>
            </div>
          </div>

          <form
            className="create-course-form"
            onSubmit={handleSubmit}
          >
            <section className="create-course-section">
              <div className="create-course-section-heading">
                <h2>Course Information</h2>

                <p>
                  Update the basic information about your course.
                </p>
              </div>

              <div className="create-course-form-group">
                <label htmlFor="title">Course Title</label>

                <input
                  id="title"
                  name="title"
                  type="text"
                  placeholder="Enter course title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="create-course-form-group">
                <label htmlFor="description">Description</label>

                <textarea
                  id="description"
                  name="description"
                  placeholder="Describe what students will learn from this course"
                  value={formData.description}
                  onChange={handleChange}
                  rows={6}
                  required
                />
              </div>

              <div className="create-course-form-grid">
                <div className="create-course-form-group">
                  <label htmlFor="category">Category</label>

                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select category</option>
                    <option value="development">
                      Development
                    </option>
                    <option value="design">Design</option>
                    <option value="business">Business</option>
                    <option value="marketing">Marketing</option>
                    <option value="photography">
                      Photography
                    </option>
                    <option value="music">Music</option>
                  </select>
                </div>

                <div className="create-course-form-group">
                  <label htmlFor="level">Level</label>

                  <select
                    id="level"
                    name="level"
                    value={formData.level}
                    onChange={handleChange}
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">
                      Intermediate
                    </option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
              </div>

              <div className="create-course-form-grid">
                <div className="create-course-form-group">
                  <label htmlFor="price">Course Price</label>

                  <div className="create-course-price-input">
                    <span>₦</span>

                    <input
                      id="price"
                      name="price"
                      type="number"
                      min="0"
                      placeholder="0"
                      value={formData.price}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="create-course-form-group">
                  <label htmlFor="status">Course Status</label>

                  <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                  </select>
                </div>
              </div>
            </section>

            <section className="create-course-section">
              <div className="create-course-section-heading">
                <h2>Course Thumbnail</h2>

                <p>
                  Update the image that represents your course.
                </p>
              </div>

              <div className="create-course-upload">
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt="Course thumbnail preview"
                    className="create-course-upload-preview"
                  />
                ) : (
                  <>
                    <FontAwesomeIcon icon={faCloudArrowUp} />

                    <h3>Upload Course Image</h3>

                    <p>
                      Recommended size: 1200 × 675px
                    </p>
                  </>
                )}

                <label
                  htmlFor="course-image"
                  className="create-course-upload-button"
                >
                  {isUploading
                    ? "Uploading..."
                    : selectedImage
                      ? "Change Image"
                      : "Choose Image"}
                </label>

                <input
                  id="course-image"
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  onChange={handleImageChange}
                  hidden
                />
              </div>
            </section>

            {(error || mutationError) && (
              <p className="create-course-error">
                {error || mutationError?.message}
              </p>
            )}

            <div className="create-course-actions">
              <button
                type="button"
                className="create-course-cancel"
                onClick={() =>
                  navigate("/instructor/dashboard")
                }
              >
                Cancel
              </button>

              <button
                type="submit"
                className="create-course-submit"
                disabled={isUpdating || isUploading}
              >
                {isUpdating ? "Updating..." : "Save Changes"}
              </button>
            </div>
          </form>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default EditCourse;