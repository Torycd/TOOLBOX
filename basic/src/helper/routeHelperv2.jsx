import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const routeHelperv2 = () => {
  const router = createBrowserRouter([
    {
      path: "",
      element: <></>,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default routeHelperv2;

export function Full() {
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
}
