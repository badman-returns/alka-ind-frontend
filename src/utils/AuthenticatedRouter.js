import { Navigate } from "react-router-dom";
import { useAuth } from "./useAuth";

export const AuthenticatedRouterLayout = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return children;
};