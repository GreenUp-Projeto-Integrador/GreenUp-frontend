import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useNavigate } from "react-router";
import DashboardStatsView from "../views/DashboardStatsView";
import { mockDashboardData } from "../../../shared/mockData";

export default function DashboardStatsPage() {
  const navigate = useNavigate();
  const [dashboardData] = useState(mockDashboardData);

  const handleBack = () => {
    navigate("/main");
  };

  return _jsxs("div", {
    className: "relative size-full overflow-hidden bg-white",
    children: [
      _jsx(DashboardStatsView, {
        data: dashboardData,
        onBack: handleBack,
      }),
    ],
  });
}
