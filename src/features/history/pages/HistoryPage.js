import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import HistoryView from "../views/HistoryView";
import { toast } from "sonner";
import { disposalApi } from "../../../shared/api/endpoints";
import { errorMessage } from "../../../shared/api/http";

export default function HistoryPage() {
  const navigate = useNavigate();
  const [selectedDisposal, setSelectedDisposal] = useState(null); 
  const [disposals, setDisposals] = useState([]); 

useEffect(() => {
  disposalApi.list()
    .then((list) => setDisposals(list.map((d) => ({ ...d, trashLevel: `Nível ${d.trashLevel}` }))))
    .catch((e) => toast.error(errorMessage(e)));
}, []);

  const handleBack = () => {
    navigate("/main");
  };

  return _jsxs("div", {
    className: "relative size-full overflow-hidden bg-white",
    children: [
      _jsx(HistoryView, {
        disposals: disposals,
        onBack: handleBack,
        onViewMore: setSelectedDisposal,       
        selectedDisposal: selectedDisposal,    
        onCloseModal: () => setSelectedDisposal(null), 
      }),
    ],
  });
}