import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

const route_help = () => {
  const router = createBrowserRouter([
    {
      path: "", //string
      element: <></>, //element
    },
    {
      path: "", //string
      element: <></>, //element
      children: [
        {
          path: "", //string
          element: <></>, //element
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default route_help;

// how to use nested route

import { Outlet } from "react-router-dom";

export function Parent() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
