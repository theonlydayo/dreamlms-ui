import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCloudArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import DashboardSidebar from "../../components/DashboardSidebar/DashboardSidebar";
import Footer from "../../components/Footer/Footer";
import { useAuth } from "../../context/AuthContext";
import "./CreateCourse.css";

function CreateCourse() {
  const navigate = useNavigate();
  const { token } = useAuth();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    level: "Beginner",
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

  const handleImageChange = async (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    setSelectedImage(file);
    setIsUploading(true);
    setError("");

    try {
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

      setImageUrl(data.imageUrl);
    } catch (error) {
      setSelectedImage(null);
      setImageUrl("");
      setError(
        error instanceof Error
          ? error.message
          : "Failed to upload image"
      );
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!token) {
      setError("You must be logged in to create a course.");
      return;
    }

    if (!imageUrl) {
      setError("Please upload a course thumbnail.");
      return;
    }

    setIsCreating(true);
    setError("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/courses`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            title: formData.title,
            description: formData.description,
            category: formData.category,
            price: formData.price,
            level: formData.level,
            image: imageUrl,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to create course");
      }

      navigate("/instructor/dashboard");
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Failed to create course"
      );
    } finally {
      setIsCreating(false);
    }
  };

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

              <h1>Create Course</h1>

              <p>
                Create a new course and start sharing your knowledge
                with learners.
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
                  Provide the basic information about your course.
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
            </section>

            <section className="create-course-section">
              <div className="create-course-section-heading">
                <h2>Course Thumbnail</h2>
                <p>
                  Upload an image that represents your course.
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

            {error && (
              <p className="create-course-error">
                {error}
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
                disabled={isCreating || isUploading}
              >
                {isCreating ? "Creating..." : "Create Course"}
              </button>
            </div>
          </form>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default CreateCourse;