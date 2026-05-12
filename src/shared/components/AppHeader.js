import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react"; // importar useState para controlar o sidebar
import { useNavigate } from "react-router"; // importar useNavigate
import svgPaths from "../../features/dashboard/views/svg-bfct7an0b4";
import imgMaleAvatar from "../../assets/a5378b296c9d3e83beae6b829ac0b6411c615059.png";
import SidebarMenu from "./SidebarMenu"; // importar SidebarMenu

// Logo parte 1 
function Component1() {
  return _jsx("div", { className: "absolute inset-[7.83%_60.53%_87.72%_30.93%]", children:
    _jsx("svg", { className: "absolute block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 36.7027 41.4037", children:
      _jsxs("g", { children: [
        _jsx("path", { clipRule: "evenodd", d: svgPaths.p1a572780, fill: "#114B54", fillRule: "evenodd" }),
        _jsx("path", { clipRule: "evenodd", d: svgPaths.p2687c900, fill: "#F8C78D", fillRule: "evenodd" }),
        _jsx("path", { clipRule: "evenodd", d: svgPaths.p3426500,  fill: "#114B54", fillRule: "evenodd" }),
        _jsx("path", { clipRule: "evenodd", d: svgPaths.p241def00, fill: "#FAEDE1", fillRule: "evenodd" }),
      ]})
    })
  });
}

// Logo parte 2 
function Component() {
  return _jsx("div", { className: "absolute inset-[9.6%_58.37%_87.42%_36.38%]", children:
    _jsx("svg", { className: "absolute block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 22.5726 27.856", children:
      _jsxs("g", { children: [
        _jsx("path", { clipRule: "evenodd", d: svgPaths.p43e6900,  fill: "#B8502B", fillRule: "evenodd" }),
        _jsx("path", { clipRule: "evenodd", d: svgPaths.p2e368d00, fill: "#6F9A7C", fillRule: "evenodd" }),
        _jsx("path", { clipRule: "evenodd", d: svgPaths.p3dd61380, fill: "#FBF8F3", fillRule: "evenodd" }),
        _jsx("path", { clipRule: "evenodd", d: svgPaths.p33cc0080, fill: "#FC7D08", fillRule: "evenodd" }),
        _jsx("path", { clipRule: "evenodd", d: svgPaths.p37790100, fill: "#FBF8F3", fillRule: "evenodd" }),
        _jsx("path", { clipRule: "evenodd", d: svgPaths.p271a59f0, fill: "#FBF8F3", fillRule: "evenodd" }),
        _jsx("path", { clipRule: "evenodd", d: svgPaths.p35608080, fill: "#FBF8F3", fillRule: "evenodd" }),
      ]})
    })
  });
}

export default function AppHeader() {
  const [sidebarOpen, setSidebarOpen] = useState(false); // estado para controlar abertura do sidebar
  const navigate = useNavigate(); // hook de navegação

  return _jsxs("div", { className: "absolute contents left-[30px] top-[71px]", children: [

    // SidebarMenu renderizado aqui, controlado pelo estado sidebarOpen
    _jsx(SidebarMenu, {
      isOpen: sidebarOpen,
      onClose: () => setSidebarOpen(false),
    }),

    // Texto "GreenUp"
    _jsx("div", {
      className: "-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center leading-[0] left-[calc(50%+25px)] not-italic text-[#6f9a7c] text-[25px] text-center top-[93px] w-[112px]",
      children: _jsx("p", { className: "leading-[normal] font-bold", children: "GreenUp" }),
    }),

    // 
    // Avatar é um botão clicável que navega para /account
    _jsx("button", {
      onClick: () => navigate("/account"),
      className: "absolute left-[355px] size-[45px] top-[71px] cursor-pointer",
      style: { zIndex: 10, background: "none", border: "none", padding: 0 },
      children: _jsx("img", {
        alt: "Perfil",
        className: "absolute inset-0 max-w-none object-contain size-full rounded-full",
        src: imgMaleAvatar,
      }),
    }),

    //  onClick que abre o SidebarMenu via setSidebarOpen(true)
    _jsxs("button", {
      onClick: () => setSidebarOpen(true),
      className: "absolute cursor-pointer left-[30px] top-[86px]",
      style: { zIndex: 10 },
      children: [
        _jsx("div", { className: "absolute bg-black h-[2.833px] left-0 rounded-[2px] top-0 w-[27.2px]" }),     // linha 1
        _jsx("div", { className: "absolute bg-black h-[2.833px] left-0 rounded-[2px] top-[7.08px] w-[27.2px]" }), // linha 2
        _jsx("div", { className: "absolute bg-black h-[2.833px] left-0 rounded-[2px] top-[14.17px] w-[27.2px]" }), // linha 3
      ],
    }),

    // Logo (ícone colorido)
    _jsxs("div", { className: "absolute contents inset-[7.83%_58.37%_87.42%_30.93%]", children: [
      _jsx(Component1, {}),
      _jsx(Component, {}),
    ]}),

  ]});
}