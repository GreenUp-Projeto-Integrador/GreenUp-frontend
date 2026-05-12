import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { useNavigate } from "react-router";
import svgPaths from "../../features/dashboard/views/svg-ani2nrow18";

// ── Ícones reutilizáveis ──
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

function IconLogin() {
  return _jsx("div", { className: "relative size-[28px]", children:
    _jsx("svg", { className: "block size-full", fill: "none", viewBox: "0 0 21.5 24", children:
      _jsx("path", { d: svgPaths.pde9680, stroke: "#B8502B", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5" })
    })
  });
}

function IconWhatsapp() {
  return _jsx("div", { className: "relative size-[26px]", children:
    _jsx("svg", { className: "block size-full", fill: "none", viewBox: "0 0 26 26", children:
      _jsx("path", { d: svgPaths.p36088d00, stroke: "#B8502B", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: "10", strokeWidth: "1.5" })
    })
  });
}

function IconHelp() {
  return _jsx("div", { className: "relative size-[26px]", children:
    _jsx("svg", { className: "block size-full", fill: "none", viewBox: "0 0 24.8333 24.8333", children:
      _jsx("path", { d: svgPaths.p1dbfc000, stroke: "#B8502B", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5" })
    })
  });
}

function IconLogout() {
  return _jsx("div", { className: "relative size-[26px]", children:
    _jsx("svg", { className: "block size-full", fill: "none", viewBox: "0 0 22.5 22.5", children: _jsxs("g", { children: [
      _jsx("path", { d: svgPaths.p1c3a8d00, fill: "#B8502B" }),
      _jsx("path", { d: svgPaths.p2c6d6800, fill: "#B8502B" }),
    ]})})
  });
}

// ── Botão X verde ──
function CloseButton({ onClose }) {
  return _jsx("button", {
    onClick: onClose,
    className: "text-white text-sm font-bold flex items-center justify-center transition hover:opacity-80",
    style: { backgroundColor: "#6F9A7C", width: "32px", height: "32px", borderRadius: "50%", flexShrink: 0 },
    children: "✕",
  });
}

// ── Linha separadora ──
function Divider() {
  return _jsx("div", { style: { borderBottom: "1px solid #f0f0f0", margin: "4px 0" } });
}

// ── Modal "Fale Conosco" ──
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

// ── Modal "Ajuda" ──
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

// ── Componente principal ──
export default function SidebarMenu({ isOpen, onClose }) {
  const navigate = useNavigate();
  const [showFaleConosco, setShowFaleConosco] = useState(false);
  const [showAjuda, setShowAjuda] = useState(false);

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
      action: () => handleNavigate("/login"),
      style: { color: "#B8502B" },
    },
  ];

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
          children: menuItems.map(({ icon, label, action, style }, i) =>
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

  ]});
}