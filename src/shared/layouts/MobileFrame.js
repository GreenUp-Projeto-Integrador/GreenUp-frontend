import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react"; // NOVO
import SidebarMenu from "../components/SidebarMenu"; // NOVO

export default function MobileFrame({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false); // NOVO

    // NOVO: função para abrir o sidebar, passada via context ou prop drilling
    // Por simplicidade, vamos expor via window para qualquer componente chamar
    // NOVO: registra a função globalmente para o botão hamburguer chamar
    if (typeof window !== "undefined") {
        window.__openSidebar = () => setSidebarOpen(true);
    }

    return _jsx("div", {
        className: "flex items-center justify-center min-h-screen bg-gradient-to-br from-[#6f9a7c]/10 to-[#f8c78d]/10",
        children: _jsxs("div", {
            className: "relative w-full max-w-[430px] h-[932px] bg-white shadow-2xl overflow-hidden",
            children: [
                // NOVO: SidebarMenu aqui, dentro do frame mobile
                _jsx(SidebarMenu, {
                    isOpen: sidebarOpen,
                    onClose: () => setSidebarOpen(false),
                }),
                children,
            ],
        }),
    });
}