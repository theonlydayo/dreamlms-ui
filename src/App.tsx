import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Otp from "./pages/auth/Otp";
import SetPassword from "./pages/auth/SetPassword";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import InstructorDashboard from "./pages/instructor/InstructorDashboard";
import CreateCourse from "./pages/instructor/CreateCourse";
import EditCourse from "./pages/instructor/EditCourse";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/set-password" element={<SetPassword />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:slug" element={<CourseDetails />} />
          </Route>

          <Route element={<ProtectedRoute allowedRole="instructor" />}>
            <Route
              path="/instructor/dashboard"
              element={<InstructorDashboard />}
            />

            <Route
              path="/instructor/courses/create"
              element={<CreateCourse />}
            />

            <Route
              path="/instructor/courses/:slug/edit"
              element={<EditCourse />}
            />

            <Route
              path="/courses/:slug/preview"
              element={<CourseDetails />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;