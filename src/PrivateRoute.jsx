import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const token = localStorage.getItem("token"); // JWT token

  if (!token) {
    return <Navigate to="/signup" replace />;
  }

  return children;
}

export default PrivateRoute;
