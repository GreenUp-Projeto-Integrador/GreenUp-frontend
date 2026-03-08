import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import LoginPage from "./pages/LoginPage";
import CadastroPage from "./pages/CadastroPage";
import MainPage from "./pages/MainPage";

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
