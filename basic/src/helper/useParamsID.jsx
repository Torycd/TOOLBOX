import React from "react";

import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";

export const route_help = () => {
  const router = createBrowserRouter([
    {
      path: "url", //string
      element: <></>, //element
    },
    {
      path: "url/:id", //string
      element: <></>, //element
    },
  ]);
  return <RouterProvider router={router} />;
};

// how to use nested route

import { Outlet } from "react-router-dom";

export function Parent() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default function useParamsID() {
  const { id } = useParams();
  return <div>useParamsID</div>;
}
