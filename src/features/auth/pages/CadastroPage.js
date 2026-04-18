import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useNavigate } from "react-router";
import InteractiveCadastro from "../components/InteractiveCadastro";
import Cadastro from "../views/Cadastro";
import PopUpCadastro from "../views/PopUpCadastro";
import { toast } from "sonner";
export default function CadastroPage() {
    const navigate = useNavigate();
    const [showSuccess, setShowSuccess] = useState(false);
    const handleCadastro = (name, email, password, confirmPassword) => {
        // Simple validation
        if (!name || !email || !password || !confirmPassword) {
            toast.error("Por favor, preencha todos os campos");
            return;
        }
        if (password !== confirmPassword) {
            toast.error("As senhas não coincidem");
            return;
        }
        setShowSuccess(true);
        // Navigate to main page after showing success message
        setTimeout(() => {
            navigate("/main");
        }, 1500);
    };
    const handleGoogleLogin = () => {
        setShowSuccess(true);
        setTimeout(() => {
            navigate("/main");
        }, 1500);
    };
    const handleSwitchToLogin = () => {
        navigate("/login");
    };
    return (_jsxs("div", { className: "relative size-full overflow-hidden bg-white", children: [_jsx("div", { className: "absolute inset-0", children: _jsx(Cadastro, {}) }), _jsx(InteractiveCadastro, { onCadastro: handleCadastro, onGoogleLogin: handleGoogleLogin, onSwitchToLogin: handleSwitchToLogin }), showSuccess && (_jsx("div", { className: "fixed inset-0 flex items-center justify-center z-50 pointer-events-none", children: _jsx("div", { className: "w-[320px] h-[80px]", children: _jsx(PopUpCadastro, {}) }) }))] }));
}
