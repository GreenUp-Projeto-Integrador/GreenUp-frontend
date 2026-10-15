import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import UserDataView from "../views/UserDataView";
import { userApi } from "../../../shared/api/endpoints";
import { errorMessage } from "../../../shared/api/http";
import { useAuth } from "../../auth/AuthContext";

export default function UserDataPage() {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const [userData, setUserData] = useState(null);
  useEffect(() => { userApi.me().then(setUserData).catch((e) => toast.error(errorMessage(e))); }, []);

const handleSave = async (form) => {
  try {
    const updated = await userApi.update({ ...form, cpf: form.cpf || null });
    setUser(updated);
    toast.success("Dados salvos com sucesso!");
    navigate("/account");
  } catch (err) { toast.error(errorMessage(err)); }
};

  if (!userData) return _jsx("p", { className: "p-6 text-sm", children: "Carregando…" });

  const handleBack = () => {
    navigate("/account");
  };

  return _jsxs("div", {
    className: "relative size-full overflow-hidden bg-white",
    children: [
      _jsx(UserDataView, {
        userData: userData,
        onBack: handleBack,
        onSave: handleSave,
      }),
    ],
  });
}