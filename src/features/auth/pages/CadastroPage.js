import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from "react-router";
// NOVO: toast.success usado no lugar do PopUpCadastro
import { toast } from "sonner";
import InteractiveCadastro from "../components/InteractiveCadastro";
import Cadastro from "../views/Cadastro";

export default function CadastroPage() {
  const navigate = useNavigate();

  const handleCadastro = (name, email, password, confirmPassword) => {
    if (!name || !email || !password || !confirmPassword) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("As senhas não coincidem");
      return;
    }
    // NOVO: toast.success do sonner 
    toast.success("Cadastro realizado com sucesso!");
    // NOVO: navega para /login após cadastro, conforme solicitado
    setTimeout(() => {
      navigate("/login");
    }, 1050);
  };

  const handleGoogleLogin = () => {
    // NOVO: toast.success do sonner + navega para /login
    toast.success("Cadastro realizado com sucesso!");
    setTimeout(() => {
      navigate("/login");
    }, 1050);
  };

  const handleSwitchToLogin = () => {
    navigate("/login");
  };

  return _jsxs("div", {
    className: "relative size-full overflow-hidden bg-white",
    children: [
      _jsx("div", {
        className: "absolute inset-0",
        children: _jsx(Cadastro, {}),
      }),
      _jsx(InteractiveCadastro, {
        onCadastro: handleCadastro,
        onGoogleLogin: handleGoogleLogin,
        onSwitchToLogin: handleSwitchToLogin,
      }),
    ],
  });
}