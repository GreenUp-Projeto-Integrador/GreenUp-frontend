import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import LoginPage from "../features/auth/pages/LoginPage";
import CadastroPage from "../features/auth/pages/CadastroPage";
import MainPage from "../features/dashboard/pages/MainPage";
import HistoryPage from "../features/history/pages/HistoryPage";
import RankingPage from "../features/ranking/pages/RankingPage";
import DashboardStatsPage from "../features/dashboard-stats/pages/DashboardStatsPage";
import AccountPage from "../features/account/pages/AccountPage";
import UserDataPage from "../features/user-data/pages/UserDataPage";
import DisposalPage from "../features/disposal/pages/DisposalPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: LoginPage },
      { path: "login", Component: LoginPage },
      { path: "cadastro", Component: CadastroPage },
      { path: "main", Component: MainPage },
      { path: "history", Component: HistoryPage },
      { path: "ranking", Component: RankingPage },
      { path: "dashboard", Component: DashboardStatsPage },
      { path: "account", Component: AccountPage },
      { path: "user-data", Component: UserDataPage },
      { path: "disposal", Component: DisposalPage },
    ],
  },
]);
