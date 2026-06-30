import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
  useNavigation,
  useRouteError,
} from "react-router-dom";

import { loader as apiMenuLoader } from "./route";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    loader: apiMenuLoader,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

export default function AdvancedRouter() {
  return <RouterProvider router={router} />;
}

export function HomePage() {
  const navigation = useNavigation();
  const isloading = navigation.state === "loading";
  return (
    <div>
      {isloading && <h1>loading...</h1>}
      <main>menu</main>
    </div>
  );
}
export function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError();
  return (
    <div>
      <h1>{error.message}</h1>
      <button onClick={() => navigate(-1)}></button>
    </div>
  );
}
