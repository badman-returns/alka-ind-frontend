import { Navigate } from "react-router-dom";
import { useAuth } from "./useAuth";

export const AuthenticatedRouterLayout = ({ children }) => {
  const { loggedInStatus } = useAuth();
  if (!loggedInStatus) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return children;
};