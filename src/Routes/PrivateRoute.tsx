import { ReactNode } from "react";

import useAuth from "Hooks/useAuth";
import { Navigate } from "react-router-dom";
import PATH_NAMES from "Constants/PathNames";

export default function PrivateRoute({ children }: { children: ReactNode }) {
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <Navigate to={PATH_NAMES.LOGIN} replace />;
  }

  return children;
}
