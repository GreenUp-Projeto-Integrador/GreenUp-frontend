import { useState } from "react";
import { useNavigate } from "react-router";
import InteractiveLogin from "../components/InteractiveLogin";
import PopUpLogin from "../../imports/PopUpLogin";
import Login from "../../imports/Login";
import { toast } from "sonner";

export default function LoginPage() {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleLogin = (email: string, password: string) => {
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

  return (
    <div className="relative size-full overflow-hidden bg-white">
      {/* Use the imported Login component which includes Safari bottom bar */}
      <div className="absolute inset-0">
        <Login />
      </div>

      {/* Overlay the interactive form on top */}
      <InteractiveLogin 
        onLogin={handleLogin}
        onGoogleLogin={handleGoogleLogin}
        onSwitchToCadastro={handleSwitchToCadastro}
      />

      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div className="w-[320px] h-[80px]">
            <PopUpLogin />
          </div>
        </div>
      )}
    </div>
  );
}