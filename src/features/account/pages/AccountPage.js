import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import AccountView from "../views/AccountView";
import { userApi } from "../../../shared/api/endpoints";
import { errorMessage } from "../../../shared/api/http";

export default function AccountPage() {
  const navigate = useNavigate();
  const [account, setAccount] = useState(null);
  useEffect(() => {
  userApi.summary()
    .then((s) => setAccount({ ...s, joinDate: s.joinDate.split("-").reverse().join("/") }))
    .catch((e) => toast.error(errorMessage(e)));
  }, []);

  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleBack = () => {
    navigate("/main");
  };

  const handleViewUserData = () => {
    navigate("/user-data");
  };

  const handleOpenPasswordModal = () => {
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setShowPasswordModal(true);
  };

  const handleClosePasswordModal = () => {
    setShowPasswordModal(false);
  };

  const handleChangePassword = async () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      toast.error("Preencha todos os campos");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("As senhas não coincidem");
      return;
    }

    try {
      await userApi.changePassword({ currentPassword, newPassword, confirmPassword,});
      setShowPasswordModal(false);
      toast.success("Senha alterada com sucesso!");
    } catch (err) {
      toast.error(errorMessage(err));
    }
  };

  return _jsxs("div", {
    className: "relative size-full overflow-hidden bg-white",
    children: [
      showPasswordModal &&
        _jsx("div", {
          className: "fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-6",
          children: _jsxs("div", {
            className: "bg-white rounded-2xl p-6 w-full max-w-sm shadow-lg space-y-5",
            children: [
              _jsxs("div", {
                className: "flex items-center justify-between",
                children: [
                  _jsx("h2", {
                    className: "text-lg font-semibold text-black",
                    children: "Alterar senha",
                  }),
                  _jsx("button", {
                    onClick: handleClosePasswordModal,
                    className: "w-8 h-8 rounded-full text-white text-sm font-bold flex items-center justify-center",
                    style: { backgroundColor: "#6F9A7C" },
                    children: "✕",
                  }),
                ],
              }),

              _jsxs("div", {
                className: "flex flex-col gap-1",
                children: [
                  _jsx("label", {
                    className: "text-xs font-semibold text-gray-700 ml-1",
                    children: "Senha atual",
                  }),
                  _jsx("input", {
                    type: "password",
                    value: currentPassword,
                    placeholder: "••••••••",
                    onChange: (e) => setCurrentPassword(e.target.value),
                    className:
                      "w-full border border-[#DADADA] rounded-xl px-4 py-3 bg-white text-sm text-gray-800 placeholder-gray-400 min-h-[46px] outline-none focus:border-[#6F9A7C] focus:ring-1 focus:ring-[#6F9A7C] transition-colors",
                  }),
                ],
              }),

              _jsxs("div", {
                className: "flex flex-col gap-1",
                children: [
                  _jsx("label", {
                    className: "text-xs font-semibold text-gray-700 ml-1",
                    children: "Nova senha",
                  }),
                  _jsx("input", {
                    type: "password",
                    value: newPassword,
                    placeholder: "••••••••",
                    onChange: (e) => setNewPassword(e.target.value),
                    className:
                      "w-full border border-[#DADADA] rounded-xl px-4 py-3 bg-white text-sm text-gray-800 placeholder-gray-400 min-h-[46px] outline-none focus:border-[#6F9A7C] focus:ring-1 focus:ring-[#6F9A7C] transition-colors",
                  }),
                ],
              }),

              _jsxs("div", {
                className: "flex flex-col gap-1",
                children: [
                  _jsx("label", {
                    className: "text-xs font-semibold text-gray-700 ml-1",
                    children: "Confirmar nova senha",
                  }),
                  _jsx("input", {
                    type: "password",
                    value: confirmPassword,
                    placeholder: "••••••••",
                    onChange: (e) => setConfirmPassword(e.target.value),
                    className:
                      "w-full border border-[#DADADA] rounded-xl px-4 py-3 bg-white text-sm text-gray-800 placeholder-gray-400 min-h-[46px] outline-none focus:border-[#6F9A7C] focus:ring-1 focus:ring-[#6F9A7C] transition-colors",
                  }),
                ],
              }),

              _jsx("button", {
                onClick: handleChangePassword,
                className:
                  "w-full text-white py-3 rounded-2xl font-semibold text-sm transition hover:opacity-90",
                style: { backgroundColor: "#6F9A7C" },
                children: "Alterar Senha",
              }),

            ],
          }),
        }),

      _jsx(AccountView, {
        account: account,
        onBack: handleBack,
        onViewUserData: handleViewUserData,
        onChangePassword: handleOpenPasswordModal,
      }),

    ],
  });
}