import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useNavigate } from "react-router";
// NOVO: agora toast.success 
import { toast } from "sonner";
import InteractiveLogin from "../components/InteractiveLogin";
import Login from "../views/Login";

export default function LoginPage() {
  const navigate = useNavigate();


  const handleLogin = (email, password) => {
    if (!email || !password) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }
    if (!email.includes("@")) {
      toast.error("Por favor, insira um e-mail válido");
      return;
    }
    // NOVO: toast.success do sonner
    toast.success("Login realizado com sucesso!");
    setTimeout(() => {
      navigate("/main");
    }, 1050);
  };

  const handleGoogleLogin = () => {
    // NOVO: toast.success do sonner 
    toast.success("Login realizado com sucesso!");
    setTimeout(() => {
      navigate("/main");
    }, 1500);
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
        onSwitchToCadastro: handleSwitchToCadastro,
      }),
    ],
  });
}