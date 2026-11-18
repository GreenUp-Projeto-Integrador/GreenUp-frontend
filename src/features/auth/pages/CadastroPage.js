import { jsx as _jsx } from "react/jsx-runtime";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { comingSoon } from "../../../shared/comingSoon";
import FormularioCadastro from "../components/FormularioCadastro";
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

  return _jsx("div", {
    className: "relative size-full overflow-hidden bg-white",
    children: _jsx(FormularioCadastro, {
      onCadastro: handleCadastro,
      onGoogleLogin: handleGoogleLogin,
      onSwitchToLogin: handleSwitchToLogin,
    }),
  });
}