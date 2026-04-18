import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useNavigate } from "react-router";
import TelaPrincipal from "../views/TelaPrincipal";
import Sidebar from "../views/Sidebar";
import { motion, AnimatePresence } from "motion/react";
export default function MainPage() {
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const handleSidebarClick = (e) => {
        const target = e.target;
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
    return (_jsxs("div", { className: "relative size-full overflow-hidden", children: [_jsx("div", { className: "size-full", onClick: (e) => {
                    const target = e.target;
                    // Handle hamburger menu click
                    if (target.closest('button')) {
                        const button = target.closest('button');
                        if (button?.querySelector('[data-name="Group 1"]') ||
                            button?.innerHTML.includes('left-[30px] top-[86px]')) {
                            handleSidebarToggle();
                        }
                    }
                }, children: _jsx(TelaPrincipal, {}) }), _jsx(AnimatePresence, { children: isSidebarOpen && (_jsxs(_Fragment, { children: [_jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.2 }, className: "fixed inset-0 bg-black/50 z-40", onClick: () => setIsSidebarOpen(false) }), _jsx(motion.div, { initial: { x: -280 }, animate: { x: 0 }, exit: { x: -280 }, transition: { type: "spring", damping: 25, stiffness: 200 }, className: "fixed left-0 top-0 bottom-0 w-[280px] z-50", onClick: handleSidebarClick, children: _jsx(Sidebar, {}) })] })) })] }));
}
