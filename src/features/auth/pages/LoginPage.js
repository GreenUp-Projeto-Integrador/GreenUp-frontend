import { jsx as _jsx } from "react/jsx-runtime";
import { useLocation, useNavigate } from "react-router";
import { toast } from "sonner";
import { comingSoon } from "../../../shared/comingSoon";
import FormularioLogin from "../components/FormularioLogin";
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

  return _jsx("div", {
    className: "relative size-full overflow-hidden bg-white",
    children: _jsx(FormularioLogin, {
      onLogin: handleLogin,
      onGoogleLogin: handleGoogleLogin,
      onForgotPassword: handleForgotPassword,
      onSwitchToCadastro: handleSwitchToCadastro,
    }),
  });
}