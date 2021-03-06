import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/Page404";
import { Settings } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";

export const HomeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />
  },
  {
    path: "/settings",
    exact: false,
    children: <Settings />
  },
  {
    path: "/user_management",
    exact: false,
    children: <UserManagement />
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />
  }
];
