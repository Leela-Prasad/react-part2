import { createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import UserListPage from "./components/UserListPage";
import ContactPage from "./components/ContactPage";
import UserDetailPage from "./components/UserDetailPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/users", element: <UserListPage /> },
  { path: "/users/:id", element: <UserDetailPage /> },
  { path: "/contact", element: <ContactPage /> },
]);

export default router;
