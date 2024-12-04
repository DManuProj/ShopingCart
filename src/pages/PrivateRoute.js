import { useSelector } from "react-redux";

// PrivateRoute component checks if the user is authenticated
const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return isAuthenticated ? children : (window.location.href = "/login");
};

export default PrivateRoute;
