import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import PrivateRoute from "../components/PrivateRoute";
import Profile from "../pages/Profile";
import AppDetails from "../pages/AppDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/About",
        Component: About,
      },
      {
        path: "/Contact",
        Component: Contact,
      },
      {
        path: "/login",
        Component: LoginForm,
      },
      {
        path: "/register",
        Component: RegisterForm,
      },
      {
        path: "/profile",
        Component: () => (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/apps/:appId",
        Component: () => (
          <PrivateRoute>
            <AppDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
