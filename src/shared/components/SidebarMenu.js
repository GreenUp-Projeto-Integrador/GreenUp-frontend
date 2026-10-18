import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../features/auth/AuthContext";
import svgPaths from "../../features/dashboard/views/svg-ani2nrow18";
import NotificationsPopup from "./NotificationsPopup";
import TrashBinsPopup from "./TrashBinsPopup";
import { notificationApi } from "../api/endpoints";
import { canSeeManagerArea, isManager } from "../access";

// Ícone de Home
function IconHome() {
  return _jsxs("div", { className: "relative size-[28px]", children: [
    _jsx("div", { className: "absolute inset-[37.5%_16.67%_12.5%_16.67%]", children:
      _jsx("svg", { className: "block size-full", fill: "none", viewBox: "0 0 22.1667 17", children:
        _jsx("path", { d: svgPaths.p25d4bf80, stroke: "#B8502B", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5" })
      })
    }),
    _jsx("div", { className: "absolute inset-[56.25%_38.54%_12.5%_38.54%]", children:
      _jsx("svg", { className: "block size-full", fill: "none", viewBox: "0 0 8.60417 11.1875", children:
        _jsx("path", { d: svgPaths.p1f25b180, stroke: "#B8502B", strokeLinecap: "square", strokeWidth: "1.5" })
      })
    }),
    _jsx("div", { className: "absolute inset-[12.49%_8.33%_58.3%_8.33%]", children:
      _jsx("svg", { className: "block size-full", fill: "none", viewBox: "0 0 27.3334 10.5558", children:
        _jsx("path", { d: svgPaths.p193cf900, stroke: "#B8502B", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5" })
      })
    }),
  ]});
}

// Ícone de Login
function IconLogin() {
  return _jsx("div", { className: "relative size-[28px]", children:
    _jsx("svg", { className: "block size-full", fill: "none", viewBox: "0 0 21.5 24", children:
      _jsx("path", { d: svgPaths.pde9680, stroke: "#B8502B", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5" })
    })
  });
}

// Ícone de Whatsapp
function IconWhatsapp() {
  return _jsx("div", { className: "relative size-[26px]", children:
    _jsx("svg", { className: "block size-full", fill: "none", viewBox: "0 0 26 26", children:
      _jsx("path", { d: svgPaths.p36088d00, stroke: "#B8502B", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: "10", strokeWidth: "1.5" })
    })
  });
}

// Ícone de Help
function IconHelp() {
  return _jsx("div", { className: "relative size-[26px]", children:
    _jsx("svg", { className: "block size-full", fill: "none", viewBox: "0 0 24.8333 24.8333", children:
      _jsx("path", { d: svgPaths.p1dbfc000, stroke: "#B8502B", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5" })
    })
  });
}

// Ícone de Logout
function IconLogout() {
  return _jsx("div", { className: "relative size-[26px]", children:
    _jsx("svg", { className: "block size-full", fill: "none", viewBox: "0 0 22.5 22.5", children: _jsxs("g", { children: [
      _jsx("path", { d: svgPaths.p1c3a8d00, fill: "#B8502B" }),
      _jsx("path", { d: svgPaths.p2c6d6800, fill: "#B8502B" }),
    ]})})
  });
}

// Estilização dos ícones abaixo
const iconProps = { width: 26, height: 26, viewBox: "0 0 24 24", fill: "none", stroke: "#B8502B", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" };

// Ícone de Notificação
function IconBell() {
    return _jsxs("svg", { ...iconProps, children: [_jsx("path", { d: "M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9" }), _jsx("path", { d: "M13.7 21a2 2 0 01-3.4 0" })] });
}

// Ícone de Lixeira
function IconTrash() {
    return _jsx("svg", { ...iconProps, children: _jsx("path", { d: "M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6M10 11v6M14 11v6" }) });
}

// Ícone de Mapa
function IconMap() {
    return _jsxs("svg", { ...iconProps, children: [_jsx("path", { d: "M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11z" }), _jsx("circle", { cx: 12, cy: 10, r: 2.5 })] });
}

// Ícone de Suporte
function IconSupport() {
    return _jsx("svg", { ...iconProps, children: _jsx("path", { d: "M4 14v-2a8 8 0 0116 0v2M4 14h3v5H5a1 1 0 01-1-1v-4zM20 14h-3v5h2a1 1 0 001-1v-4zM17 19c0 1.5-1.5 2-5 2" }) });
}

// Botão X verde
export function CloseButton({ onClose }) {
  return _jsx("button", {
    onClick: onClose,
    className: "text-white text-sm font-bold flex items-center justify-center transition hover:opacity-80",
    style: { backgroundColor: "#6F9A7C", width: "32px", height: "32px", borderRadius: "50%", flexShrink: 0 },
    children: "✕",
  });
}

// Linha separadora
function Divider() {
  return _jsx("div", { style: { borderBottom: "1px solid #f0f0f0", margin: "4px 0" } });
}

// Modal "Fale Conosco"
function FaleConoscoModal({ onClose }) {
  const contacts = [
    { icon: "📞", label: "Telefone", value: "+55 11 91234-5678" },
    { icon: "📧", label: "E-mail", value: "suporte@greenup.com.br" },
    { icon: "📧", label: "E-mail", value: "contato@greenup.com.br" },
    { icon: "📷", label: "Instagram", value: "@greenup.oficial" },
    { icon: "🎵", label: "TikTok", value: "@greenup.oficial" },
    { icon: "▶", label: "YouTube", value: "GreenUp Oficial" },
    { icon: "📘", label: "Facebook", value: "GreenUp Oficial" },
    { icon: "📍", label: "Endereço", value: "São Paulo - SP" },
    { icon: "⏰", label: "Atendimento", value: "Seg–Sex: 8h às 18h" },
  ];

  return _jsx("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center px-6",
    style: { backgroundColor: "rgba(0,0,0,0.45)", backdropFilter: "blur(3px)" },
    children: _jsxs("div", {
      className: "bg-white w-full max-w-sm overflow-hidden",
      style: { borderRadius: "20px", boxShadow: "0 20px 60px rgba(0,0,0,0.15)", animation: "fadeScale 0.2s ease-out", maxHeight: "85vh" },
      children: [
        // Cabeçalho
        _jsxs("div", {
          className: "flex items-center justify-between px-5 py-4",
          style: { borderBottom: "1px solid #f0f0f0" },
          children: [
            _jsx("h2", { className: "text-base font-semibold text-black", children: "Fale Conosco" }),
            _jsx(CloseButton, { onClose }),
          ],
        }),
        // Conteúdo
        _jsx("div", {
          className: "px-5 py-4 overflow-y-auto",
          style: { maxHeight: "60vh" },
          children: _jsx("div", {
            className: "space-y-3",
            children: contacts.map(({ icon, label, value }, i) =>
              _jsxs("div", {
                className: "flex items-center gap-3 pb-3",
                style: { borderBottom: "1px solid #f5f5f5" },
                children: [
                  _jsx("span", { className: "text-lg", style: { minWidth: "24px" }, children: icon }),
                  _jsxs("div", { children: [
                    _jsx("p", { className: "text-xs font-semibold", style: { color: "#555" }, children: label }),
                    _jsx("p", { className: "text-sm text-black", children: value }),
                  ]}),
                ],
              }, i)
            ),
          }),
        }),
      ],
    }),
  });
}

// Modal "Ajuda"
function AjudaModal({ onClose }) {
  const faqs = [
    { q: "O que é o GreenUp?", a: "É uma plataforma para encontrar pontos de coleta de lixo eletrônico." },
    { q: "Como encontro um ponto de coleta?", a: "Acesse o mapa e veja os locais próximos a você." },
    { q: "Preciso me cadastrar para usar?", a: "Não é obrigatório, mas o cadastro permite histórico e pontos." },
    { q: "O que são pontos e ranking?", a: "Você ganha pontos ao descartar lixo corretamente e sobe no ranking sustentável." },
    { q: "O que acontece com o lixo descartado?", a: "Ele é coletado e enviado para tratamento ambiental adequado." },
  ];

  const contacts = [
    { icon: "📱", label: "WhatsApp", value: "+55 11 91234-5678" },
    { icon: "📧", label: "E-mail", value: "suporte@greenup.com.br" },
    { icon: "📧", label: "E-mail", value: "contato@greenup.com.br" },
    { icon: "📷", label: "Instagram", value: "@greenup.oficial" },
    { icon: "🎵", label: "TikTok", value: "@greenup.oficial" },
    { icon: "▶", label: "YouTube", value: "GreenUp Oficial" },
  ];

  // Ajuda
  return _jsx("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center px-6",
    style: { backgroundColor: "rgba(0,0,0,0.45)", backdropFilter: "blur(3px)" },
    children: _jsxs("div", {
      className: "bg-white w-full max-w-sm overflow-hidden",
      style: { borderRadius: "20px", boxShadow: "0 20px 60px rgba(0,0,0,0.15)", animation: "fadeScale 0.2s ease-out", maxHeight: "88vh" },
      children: [
        // Cabeçalho
        _jsxs("div", {
          className: "flex items-center justify-between px-5 py-4",
          style: { borderBottom: "1px solid #f0f0f0" },
          children: [
            _jsx("h2", { className: "text-base font-semibold text-black", children: "Ajuda" }),
            _jsx(CloseButton, { onClose }),
          ],
        }),
        // Conteúdo
        _jsxs("div", {
          className: "px-5 py-4 overflow-y-auto space-y-5",
          style: { maxHeight: "72vh" },
          children: [
            // FAQ
            _jsx("h3", { className: "text-sm font-semibold", style: { color: "#6F9A7C" }, children: "Perguntas Frequentes" }),
            _jsx("div", {
              className: "space-y-3",
              children: faqs.map(({ q, a }, i) =>
                _jsxs("div", {
                  className: "pb-3",
                  style: { borderBottom: "1px solid #f5f5f5" },
                  children: [
                    _jsx("p", { className: "text-sm font-semibold text-black mb-1", children: q }),
                    _jsx("p", { className: "text-sm font-normal", style: { color: "#555" }, children: a }),
                  ],
                }, i)
              ),
            }),
            // Contato
            _jsx(Divider, {}),
            _jsx("h3", { className: "text-sm font-semibold", style: { color: "#6F9A7C" }, children: "Contato Direto" }),
            _jsx("div", {
              className: "space-y-3",
              children: contacts.map(({ icon, label, value }, i) =>
                _jsxs("div", {
                  className: "flex items-center gap-3 pb-3",
                  style: { borderBottom: "1px solid #f5f5f5" },
                  children: [
                    _jsx("span", { className: "text-lg", style: { minWidth: "24px" }, children: icon }),
                    _jsxs("div", { children: [
                      _jsx("p", { className: "text-xs font-semibold", style: { color: "#555" }, children: label }),
                      _jsx("p", { className: "text-sm text-black", children: value }),
                    ]}),
                  ],
                }, i)
              ),
            }),
          ],
        }),
      ],
    }),
  });
}

// Componente principal 
export default function SidebarMenu({ isOpen, onClose }) {
  const navigate = useNavigate();
  const {logout, user} = useAuth();
  const [showFaleConosco, setShowFaleConosco] = useState(false);
  const [showAjuda, setShowAjuda] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showTrashBins, setShowTrashBins] = useState(false);
  const [unread, setUnread] = useState(0);
  const managerArea = canSeeManagerArea(user)

  // Contador de não lidas
  useEffect(() => {
    if (!isOpen || !isManager(user)) return;
      notificationApi
      .list()
      .then((list) => setUnread(list.filter((n) => !n.readAt).length))
      .catch(() => {});
  }, [isOpen, user]);

  const handleNavigate = (path) => {
    onClose();
    navigate(path);
  };

  const menuItems = [
    {
      icon: _jsx(IconHome, {}),
      label: "Tela principal",
      action: () => handleNavigate("/main"),
    },
     // Área do gestor (aparece para todos enquanto SHOW_MANAGER_AREA_TO_ALL for true)
    ...(managerArea
    ? [
      { icon: _jsx(IconBell, {}), 
        label: "Notificações", 
        badge: unread, 
        action: () => { onClose(); setShowNotifications(true); } 
      },
      { icon: _jsx(IconTrash, {}),
        label: "Lixeiras",
        action: () => { onClose(); setShowTrashBins(true); } },
    ]: 
    []),
    { 
      icon: _jsx(IconMap, {}), 
      label: "Pontos de coleta", 
      action: () => handleNavigate("/map") 
    },
    { 
      icon: _jsx(IconSupport, {}), 
      label: "Suporte", 
      action: () => handleNavigate("/support") 
    },
    {
      icon: _jsx(IconLogin, {}),
      label: "Fazer login",
      action: () => handleNavigate("/login"),
    },
    {
      icon: _jsx(IconWhatsapp, {}),
      label: "Fale conosco",
      action: () => { onClose(); setShowFaleConosco(true); },
    },
    {
      icon: _jsx(IconLogout, {}),
      label: "Sair",
      action: () => { logout(); handleNavigate("/login"); },
      style: { color: "#B8502B" },
    },
  ];

  //  Ajuda
  const bottomItems = [
    {
      icon: _jsx(IconHelp, {}),
      label: "Ajuda",
      action: () => { onClose(); setShowAjuda(true); },
    },
  ];

  return _jsxs(_Fragment, { children: [

    // Overlay escuro
    isOpen && _jsx("div", {
      className: "absolute inset-0 z-40",
      style: { backgroundColor: "rgba(0,0,0,0.3)" },
      onClick: onClose,
    }),

    // Sidebar
    _jsxs("div", {
      className: "absolute top-0 left-0 h-full z-50 bg-white flex flex-col",
      style: {
        width: "260px",
        borderTopRightRadius: "12px",
        borderBottomRightRadius: "12px",
        transform: isOpen ? "translateX(0)" : "translateX(-100%)",
        transition: "transform 0.3s ease",
      },
      children: [

        // Topo com linha separadora
        _jsx("div", {
          className: "px-5 py-5 flex items-center",
          style: { borderBottom: "1px solid #f0f0f0", minHeight: "72px" },
          children: _jsx("p", {
            className: "font-semibold text-lg",
            style: { color: "#6F9A7C" },
            children: "GreenUp",
          }),
        }),

        // Menu items principais
        _jsx("div", {
          className: "flex-1 px-3 py-4 space-y-1 overflow-y-auto",
          children: menuItems.map(({ icon, label, action, style, badge }, i) =>
            _jsxs("button", {
              onClick: action,
              className: "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition hover:bg-gray-50 active:bg-gray-100",
              children: [
                icon,
                _jsx("span", {
                  className: "text-sm font-medium text-black",
                  style: style || {},
                  children: label,
                }),
                badge > 0 && _jsx("span", {
                  className: "ml-auto text-xs text-white px-2 py-0.5 rounded-full",
                  style: { background: "#B8502B" },
                  children: badge,
                }),
              ],
            }, i)
          ),
        }),

        // Linha separadora + Ajuda no rodapé
        _jsx("div", {
          className: "px-3 pb-6",
          style: { borderTop: "1px solid #f0f0f0" },
          children: bottomItems.map(({ icon, label, action }, i) =>
            _jsxs("button", {
              onClick: action,
              className: "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition hover:bg-gray-50 mt-2",
              children: [
                icon,
                _jsx("span", { className: "text-sm font-medium text-black", children: label }),
              ],
            }, i)
          ),
        }),
      ],
    }),

    // Animação
    _jsx("style", {
      children: `@keyframes fadeScale { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }`,
    }),

    // Modais
    showFaleConosco && _jsx(FaleConoscoModal, { onClose: () => setShowFaleConosco(false) }),
    showAjuda && _jsx(AjudaModal, { onClose: () => setShowAjuda(false) }),
    showNotifications && _jsx(NotificationsPopup, { onClose: () => setShowNotifications(false) }),
    showTrashBins && _jsx(TrashBinsPopup, { onClose: () => setShowTrashBins(false) }),

  ]});
}