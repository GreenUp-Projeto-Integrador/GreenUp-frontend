import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from "react-router";
import RankingView from "../views/RankingView";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { rankingApi } from "../../../shared/api/endpoints";
import { errorMessage } from "../../../shared/api/http";

export default function RankingPage() {
  const navigate = useNavigate();
  const [ranking, setRanking] = useState([]); 

  useEffect(() => {
  rankingApi.list().then(setRanking).catch((e) => toast.error(errorMessage(e)));
  }, []);

  const handleBack = () => {
    navigate("/main");
  };

  return _jsxs("div", {
    className: "relative size-full overflow-hidden bg-white",
    children: [_jsx(RankingView, { ranking: ranking, onBack: handleBack })],
  });
}
