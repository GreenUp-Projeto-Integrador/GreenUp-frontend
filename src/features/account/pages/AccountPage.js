import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useNavigate } from "react-router";
import AccountView from "../views/AccountView";
import { mockAccount } from "../../../shared/mockData";

export default function AccountPage() {
  const navigate = useNavigate();
  const [account] = useState(mockAccount);

  const handleBack = () => {
    navigate("/main");
  };

  const handleViewUserData = () => {
    navigate("/user-data");
  };

  return _jsxs("div", {
    className: "relative size-full overflow-hidden bg-white",
    children: [
      _jsx(AccountView, {
        account: account,
        onBack: handleBack,
        onViewUserData: handleViewUserData,
      }),
    ],
  });
}
