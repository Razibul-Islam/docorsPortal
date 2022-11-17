import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Pages/SignUp/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex items-baseline">
        <p className="text-7xl">L</p>
        <p className="w-10 h-10 border-dashed border-8 rounded-full animate-spin border-yellow-300"></p>
        <p className="text-7xl">ading...</p>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
