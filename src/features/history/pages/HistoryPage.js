import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useNavigate } from "react-router";
import HistoryView from "../views/HistoryView";
import { mockDisposals } from "../../../shared/mockData";

export default function HistoryPage() {
  const navigate = useNavigate();
  const [disposals] = useState(mockDisposals);

  const handleBack = () => {
    navigate("/main");
  };

  return (
    _jsxs("div", {
      className: "relative size-full overflow-hidden bg-white",
      children: [
        _jsx(HistoryView, { disposals: disposals, onBack: handleBack }),
      ],
    })
  );
}
