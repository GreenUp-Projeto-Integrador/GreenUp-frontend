import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { toast } from "sonner";
import { comingSoon } from "../../../shared/comingSoon";
import InteractiveLogin from "../components/InteractiveLogin";
import Login from "../views/Login";
import { useAuth } from "../AuthContext";
import { errorMessage } from "../../../shared/api/http";

export default function LoginPage() {
  const { login } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  // Integração Login
  const handleLogin = async (email, password) => {
    if (!email || !password) { toast.error("Por favor, preencha todos os campos"); return; }
    try {
      await login(email, password);
      toast.success("Login realizado com sucesso!");
      const from = location.state?.from;
      navigate(from ? from.pathname + from.search : "/main", { replace: true });
    } catch (err) {
      toast.error(err.status === 401 ? "E-mail ou senha incorretos." : errorMessage(err));
    }
  };

  const handleGoogleLogin = () => {
    comingSoon("Login com Google");
  };

  const handleForgotPassword = () => {
    comingSoon("Recuperação de senha");
  };

  const handleSwitchToCadastro = () => {
    navigate("/cadastro");
  };

  return _jsxs("div", {
    className: "relative size-full overflow-hidden bg-white",
    children: [
      _jsx("div", {
        className: "absolute inset-0",
        children: _jsx(Login, {}),
      }),
      _jsx(InteractiveLogin, {
        onLogin: handleLogin,
        onGoogleLogin: handleGoogleLogin,
        onForgotPassword: handleForgotPassword,
        onSwitchToCadastro: handleSwitchToCadastro,
        onForgotPassword: handleForgotPassword,
      }),
    ],
  });
}