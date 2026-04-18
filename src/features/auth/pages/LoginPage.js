import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useNavigate } from "react-router";
import InteractiveLogin from "../components/InteractiveLogin";
import PopUpLogin from "../views/PopUpLogin";
import Login from "../views/Login";
import { toast } from "sonner";
export default function LoginPage() {
    const navigate = useNavigate();
    const [showSuccess, setShowSuccess] = useState(false);
    const handleLogin = (email, password) => {
        // Simple validation
        if (!email || !password) {
            toast.error("Por favor, preencha todos os campos");
            return;
        }
        if (!email.includes("@")) {
            toast.error("Por favor, insira um e-mail válido");
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
    const handleSwitchToCadastro = () => {
        navigate("/cadastro");
    };
    return (_jsxs("div", { className: "relative size-full overflow-hidden bg-white", children: [_jsx("div", { className: "absolute inset-0", children: _jsx(Login, {}) }), _jsx(InteractiveLogin, { onLogin: handleLogin, onGoogleLogin: handleGoogleLogin, onSwitchToCadastro: handleSwitchToCadastro }), showSuccess && (_jsx("div", { className: "fixed inset-0 flex items-center justify-center z-50 pointer-events-none", children: _jsx("div", { className: "w-[320px] h-[80px]", children: _jsx(PopUpLogin, {}) }) }))] }));
}
