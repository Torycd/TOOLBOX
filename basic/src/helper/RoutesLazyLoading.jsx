import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Home = lazy(() => import(""));
const About = lazy(() => import(""));
const Contact = lazy(() => import(""));

const RoutesLazyLoading = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <RouterProvider router={routes} />
    </Suspense>
  );
};

export default RoutesLazyLoading;
