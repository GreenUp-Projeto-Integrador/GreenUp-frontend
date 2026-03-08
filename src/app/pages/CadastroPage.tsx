import { useState } from "react";
import { useNavigate } from "react-router";
import InteractiveCadastro from "../components/InteractiveCadastro";
import Cadastro from "../../imports/Cadastro";
import PopUpCadastro from "../../imports/PopUpCadastro";
import { toast } from "sonner";

export default function CadastroPage() {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleCadastro = (name: string, email: string, password: string, confirmPassword: string) => {
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

  return (
    <div className="relative size-full overflow-hidden bg-white">
      {/* Use the imported Cadastro component which includes Safari bottom bar */}
      <div className="absolute inset-0">
        <Cadastro />
      </div>

      {/* Overlay the interactive form on top */}
      <InteractiveCadastro 
        onCadastro={handleCadastro}
        onGoogleLogin={handleGoogleLogin}
        onSwitchToLogin={handleSwitchToLogin}
      />

      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div className="w-[320px] h-[80px]">
            <PopUpCadastro />
          </div>
        </div>
      )}
    </div>
  );
}