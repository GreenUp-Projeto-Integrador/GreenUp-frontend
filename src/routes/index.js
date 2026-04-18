import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import LoginPage from "../features/auth/pages/LoginPage";
import CadastroPage from "../features/auth/pages/CadastroPage";
import MainPage from "../features/dashboard/pages/MainPage";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: LoginPage },
      { path: "login", Component: LoginPage },
      { path: "cadastro", Component: CadastroPage },
      { path: "main", Component: MainPage },
    ],
  },
]);
