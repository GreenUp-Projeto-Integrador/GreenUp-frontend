import { useState } from "react";
import { useNavigate } from "react-router";
import TelaPrincipal from "../../imports/TelaPrincipal";
import Sidebar from "../../imports/Sidebar";
import { motion, AnimatePresence } from "motion/react";

export default function MainPage() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSidebarClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    
    // Handle logout
    if (target.closest('[data-name*="Sair"]')) {
      navigate("/login");
      setIsSidebarOpen(false);
    }
    
    // Handle "Fazer login" - if user wants to switch accounts
    if (target.closest('[data-name*="Fazer login"]')) {
      navigate("/login");
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="relative size-full overflow-hidden">
      {/* Main Content */}
      <div 
        className="size-full"
        onClick={(e) => {
          const target = e.target as HTMLElement;
          
          // Handle hamburger menu click
          if (target.closest('button')) {
            const button = target.closest('button');
            if (button?.querySelector('[data-name="Group 1"]') || 
                button?.innerHTML.includes('left-[30px] top-[86px]')) {
              handleSidebarToggle();
            }
          }
        }}
      >
        <TelaPrincipal />
      </div>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsSidebarOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 bottom-0 w-[280px] z-50"
              onClick={handleSidebarClick}
            >
              <Sidebar />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
