import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useNavigate } from "react-router";
import RankingView from "../views/RankingView";
import { mockRanking } from "../../../shared/mockData";

export default function RankingPage() {
  const navigate = useNavigate();
  const [ranking] = useState(mockRanking);

  const handleBack = () => {
    navigate("/main");
  };

  return _jsxs("div", {
    className: "relative size-full overflow-hidden bg-white",
    children: [_jsx(RankingView, { ranking: ranking, onBack: handleBack })],
  });
}
