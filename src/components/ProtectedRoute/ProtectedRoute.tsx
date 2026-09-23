import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

type ProtectedRouteProps = {
  allowedRole?: "student" | "instructor";
};

function ProtectedRoute({ allowedRole }: ProtectedRouteProps) {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRole && user?.role !== allowedRole) {
    return user?.role === "instructor" ? (
      <Navigate to="/instructor/dashboard" replace />
    ) : (
      <Navigate to="/dashboard" replace />
    );
  }

  return <Outlet />;
}

export default ProtectedRoute;