import { BrowserRouter, useRoutes } from "react-router-dom";

import Home from "Pages/Home";
import Login from "Pages/Login/Login";
import PATH_NAMES from "Constants/PathNames";
import NotFound from "Pages/NotFound/NotFound";
import PrivateRoute from "./PrivateRoute";
import Help from "Pages/Help/Help";
import PublicRoute from "./PublicRoute";

function AllRoutes() {
  const routes = useRoutes([
    {
      path: PATH_NAMES.HOME,
      element: (
        <PrivateRoute>
          <Home />
        </PrivateRoute>
      ),
      children: [
        {
          path: PATH_NAMES.HELP,
          element: <Help />,
        },
      ],
    },
    {
      path: PATH_NAMES.LOGIN,
      element: (
        <PublicRoute>
          <Login />
        </PublicRoute>
      ),
      children: [],
    },
    {
      path: PATH_NAMES.REIGSTER,
      element: <NotFound />,
      children: [],
    },
  ]);
  return routes;
}

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
  );
}
