import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { comingSoon } from "../../../shared/comingSoon";
import InteractiveCadastro from "../components/InteractiveCadastro";
import Cadastro from "../views/Cadastro";
import { authApi } from "../../../shared/api/endpoints";
import { errorMessage } from "../../../shared/api/http";

export default function CadastroPage() {
  const navigate = useNavigate();

  const handleCadastro = async ( name, email, password, confirmPassword
  ) => {
    if (!name || !email || !password || !confirmPassword) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("As senhas não coincidem");
      return;
    }

    // Integração
    try {
      await authApi.register({ name, email, password, confirmPassword,});
      toast.success("Cadastro realizado com sucesso!");
      navigate("/login");
    } catch (err) {
      toast.error(errorMessage(err));
    }
  };

  const handleGoogleLogin = () => {
    comingSoon("Cadastro com Google");
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