import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useNavigate } from "react-router";
// NOVO: toast da biblioteca "sonner" — já configurada no Root.tsx com <Toaster position="top-center" />
// Usado para exibir toast.success após alterar a senha com sucesso
import { toast } from "sonner";
import AccountView from "../views/AccountView";
import { mockAccount } from "../../../shared/mockData";

export default function AccountPage() {
  const navigate = useNavigate();
  const [account] = useState(mockAccount);

  // NOVO: estado que controla a visibilidade do modal de alterar senha
  // false = modal fechado | true = modal aberto
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  // NOVO: estados controlados dos campos do modal
  // Cada campo é uma string vazia por padrão
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleBack = () => {
    navigate("/main");
  };

  const handleViewUserData = () => {
    navigate("/user-data");
  };

  // NOVO: abre o modal e reseta os campos para garantir que estejam limpos
  const handleOpenPasswordModal = () => {
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setShowPasswordModal(true);
  };

  // NOVO: fecha o modal sem fazer nada
  const handleClosePasswordModal = () => {
    setShowPasswordModal(false);
  };

  // NOVO: chamado ao clicar em "Alterar Senha" dentro do modal
  // Valida os campos, exibe toast.success e redireciona para /account
  const handleChangePassword = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      toast.error("Preencha todos os campos");
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error("As senhas não coincidem");
      return;
    }
    // NOVO: fecha o modal imediatamente antes de exibir o toast
    setShowPasswordModal(false);
    // NOVO: exibe toast de sucesso via sonner (Toaster já montado no Root)
    toast.success("Senha alterada com sucesso!");
    // NOVO: redireciona para /account após 500ms para o usuário ver o toast
    setTimeout(() => {
      navigate("/account");
    }, 500);
  };

  return _jsxs("div", {
    className: "relative size-full overflow-hidden bg-white",
    children: [

      // NOVO: overlay escuro + modal de alterar senha
      // Renderizado condicionalmente quando showPasswordModal === true
      showPasswordModal &&
        _jsx("div", {
          // NOVO: overlay cobre toda a tela com fundo semitransparente preto (z-50)
          className: "fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-6",
          children: _jsxs("div", {
            // NOVO: card do modal — fundo branco, bordas bem arredondadas, sombra
            className: "bg-white rounded-2xl p-6 w-full max-w-sm shadow-lg space-y-5",
            children: [

              // NOVO: linha do topo com título "Alterar senha" + botão X verde
              _jsxs("div", {
                className: "flex items-center justify-between",
                children: [
                  // NOVO: título do modal
                  _jsx("h2", {
                    className: "text-lg font-semibold text-black",
                    children: "Alterar senha",
                  }),
                  // NOVO: botão X no canto direito — fundo #6F9A7C, texto branco, arredondado
                  _jsx("button", {
                    onClick: handleClosePasswordModal,
                    className: "w-8 h-8 rounded-full text-white text-sm font-bold flex items-center justify-center",
                    style: { backgroundColor: "#6F9A7C" },
                    children: "✕",
                  }),
                ],
              }),

              // NOVO: campo "Senha atual"
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

              // NOVO: campo "Nova senha"
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

              // NOVO: campo "Confirmar nova senha"
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

              // Ao clicar chama handleChangePassword que valida, fecha modal e exibe toast
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

      // MUDANÇA: adicionado onChangePassword={handleOpenPasswordModal}
      // NOVO: prop conecta o clique em "Alterar senha" no AccountView com o modal acima
      _jsx(AccountView, {
        account: account,
        onBack: handleBack,
        onViewUserData: handleViewUserData,
        onChangePassword: handleOpenPasswordModal,
      }),

    ],
  });
}