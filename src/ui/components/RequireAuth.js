import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

const auth = () => {
  return !!localStorage.getItem("userDetail");
};

function RequireAuth({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(auth);

  let location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  } else {
    return children;
  }
}

export default RequireAuth;
