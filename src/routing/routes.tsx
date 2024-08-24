import { createBrowserRouter } from "react-router-dom";
import ContactPage from "./components/ContactPage";
import HomePage from "./components/HomePage";
import Layout from "./components/Layout";
import UserDetail from "./components/UserDetail";
import UserPage from "./components/UserPage";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      {
        path: "users",
        element: <UserPage />,
        children: [{ path: ":id", element: <UserDetail /> }],
      },
    ],
  },

  { path: "/contact", element: <ContactPage /> },
]);

export default router;
