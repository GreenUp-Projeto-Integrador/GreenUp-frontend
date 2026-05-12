import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useNavigate } from "react-router";
// NOVO: toast da biblioteca "sonner" — já configurada no Root.tsx com <Toaster position="top-center" />
import { toast } from "sonner";
import UserDataView from "../views/UserDataView";
import { mockUserData } from "../../../shared/mockData";

export default function UserDataPage() {
  const navigate = useNavigate();
  const [userData] = useState(mockUserData);

  // MUDANÇA: era apenas navigate("/account")
  // NOVO: handleSave recebe os dados editados do UserDataView,
  // dispara toast.success e depois navega para /account com 500ms de delay
  // (delay garante que o usuário veja o toast antes da troca de tela)
  const handleSave = (updatedData) => {
    // NOVO: ponto de integração futura com API (ex: await updateUser(updatedData))
    toast.success("Dados salvos com sucesso!");
    setTimeout(() => {
      navigate("/account");
    }, 500);
  };

  const handleBack = () => {
    navigate("/account");
  };

  return _jsxs("div", {
    className: "relative size-full overflow-hidden bg-white",
    children: [
      _jsx(UserDataView, {
        userData: userData,
        onBack: handleBack,
        // NOVO: prop onSave conectada ao handleSave acima
        // O UserDataView chama onSave(formData) ao clicar em "Salvar informações"
        onSave: handleSave,
      }),
    ],
  });
}