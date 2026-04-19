import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useNavigate } from "react-router";
import UserDataView from "../views/UserDataView";
import { mockUserData } from "../../../shared/mockData";

export default function UserDataPage() {
  const navigate = useNavigate();
  const [userData] = useState(mockUserData);

  const handleBack = () => {
    navigate("/account");
  };

  return _jsxs("div", {
    className: "relative size-full overflow-hidden bg-white",
    children: [_jsx(UserDataView, { userData: userData, onBack: handleBack })],
  });
}
