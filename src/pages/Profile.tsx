import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import DashboardHeader from "../components/DashboardHeader/DashboardHeader";
import DashboardSidebar from "../components/DashboardSidebar/DashboardSidebar";
import Footer from "../components/Footer/Footer";
import "./Profile.css";

function Profile() {
  const { user, token, login } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: user?.name || "",
    phone: user?.phone || "",
    gender: user?.gender || "",
    bio: user?.bio || "",
  });

  const initial = user?.name?.charAt(0).toUpperCase() || "U";

  const registrationDate = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "—";

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleEdit = () => {
    setFormData({
      name: user?.name || "",
      phone: user?.phone || "",
      gender: user?.gender || "",
      bio: user?.bio || "",
    });

    setIsEditing(true);
    setError("");
  };

  const handleCancel = () => {
    setFormData({
      name: user?.name || "",
      phone: user?.phone || "",
      gender: user?.gender || "",
      bio: user?.bio || "",
    });

    setIsEditing(false);
    setError("");
  };

  const handleSave = async () => {
    if (!token) return;

    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/profile`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to update profile");
      }

      login(token, data.user);
      setIsEditing(false);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard-page">
      <DashboardHeader onMenuClick={() => setSidebarOpen(true)} />

      <div className="dashboard-layout">
        <DashboardSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <main className="dashboard-main profile-main">
          <div className="profile-heading">
            <h1>My Profile</h1>
            <p>Manage your personal information and account details.</p>
          </div>

          <section className="profile-card">
            <div className="profile-cover"></div>

            <div className="profile-header">
              <div className="profile-avatar">{initial}</div>

              <div className="profile-user-info">
                <h2>{user?.name}</h2>
                <span>{user?.role}</span>
              </div>
            </div>
          </section>

          <section className="profile-card profile-information">
            <div className="profile-section-heading">
              <h2>Personal Information</h2>

              {!isEditing ? (
                <button
                  type="button"
                  className="profile-edit-button"
                  onClick={handleEdit}
                >
                  ✎
                </button>
              ) : (
                <div className="profile-edit-actions">
                  <button
                    type="button"
                    className="profile-cancel-button"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>

                  <button
                    type="button"
                    className="profile-save-button"
                    onClick={handleSave}
                    disabled={loading}
                  >
                    {loading ? "Saving..." : "Save"}
                  </button>
                </div>
              )}
            </div>

            {error && <p className="profile-error">{error}</p>}

            <div className="profile-details">
              <div className="profile-detail">
                <span>Name</span>

                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                ) : (
                  <strong>{user?.name || "—"}</strong>
                )}
              </div>

              <div className="profile-detail">
                <span>Registration Date</span>
                <strong>{registrationDate}</strong>
              </div>

              <div className="profile-detail">
                <span>User Name</span>
                <strong>
                  {user?.email?.split("@")[0] || "—"}
                </strong>
              </div>

              <div className="profile-detail">
                <span>Phone Number</span>

                {isEditing ? (
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                  />
                ) : (
                  <strong>{user?.phone || "—"}</strong>
                )}
              </div>

              <div className="profile-detail">
                <span>Email</span>
                <strong>{user?.email || "—"}</strong>
              </div>

              <div className="profile-detail">
                <span>Gender</span>

                {isEditing ? (
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                ) : (
                  <strong>{user?.gender || "—"}</strong>
                )}
              </div>

              <div className="profile-detail profile-bio">
                <span>Bio</span>

                {isEditing ? (
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    placeholder="Tell us about yourself"
                    rows={4}
                  />
                ) : (
                  <strong>
                    {user?.bio ||
                      "Tell us a little about yourself and your learning journey."}
                  </strong>
                )}
              </div>
            </div>
          </section>

          <section className="profile-card profile-password">
            <div>
              <h2>Password</h2>
              <p>
                Keep your account secure by using a strong password.
              </p>
            </div>

            <button type="button">Change Password</button>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default Profile;