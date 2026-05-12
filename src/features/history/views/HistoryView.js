import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AppHeader from "../../../shared/components/AppHeader"; // NOVO

export default function HistoryView({ disposals, onBack, onViewMore, selectedDisposal, onCloseModal }) {

  return _jsxs("div", {
    className: "relative size-full bg-white overflow-hidden flex flex-col",
    children: [

      // AppHeader
      _jsx(AppHeader, {}),

      // Espaçador do AppHeader
      _jsx("div", { className: "h-[130px] shrink-0" }),

      // Header da tela
      _jsxs("div", {
        className: "px-6 flex items-center gap-4",
        children: [
          _jsx("button", {
            onClick: onBack,
            style: { color: "#B8502B", fontSize: "60px" },
            className: "text-2xl",
            children: "‹",
          }),
          _jsx("h1", {
            className: "text-xl font-semibold text-black mt-2", // MUDANÇA: era "text-2xl font-bold" → "text-xl font-semibold"
            children: "Histórico de registros",
          }),
        ],
      }),

      // Lista
      _jsx("div", {
        className: "flex-1 overflow-y-auto px-6 py-4 space-y-3", // MUDANÇA: era "absolute top-24..." → "flex-1 overflow-y-auto"
        children: disposals.map((disposal) =>
          _jsx("div", {
            style: { backgroundColor: "#EBE8E380" }, // MUDANÇA: era "bg-gray-100" → cor exata #EBE8E380
            className: "rounded-xl px-4 py-4 flex justify-between items-center", // MUDANÇA: era "rounded-lg p-4" → "rounded-xl px-4 py-4"
            children: _jsxs("div", {
              className: "flex-1 flex justify-between items-center", // MUDANÇA: era "flex-1" → adicionado justify-between
              children: [

                _jsxs("div", { // MUDANÇA: agora coluna com data + tipo
                  className: "flex flex-col gap-0.5",
                  children: [
                    _jsx("p", {
                      className: "font-semibold text-black text-sm", // MUDANÇA: adicionado text-sm
                      children: disposal.date,
                    }),
                    _jsx("p", {
                      className: "text-xs font-normal text-gray-500", // MUDANÇA: era text-sm text-gray-600
                      children: disposal.type,
                    }),
                  ],
                }),

                // NOVO: botão "Ver mais" que abre o modal
                _jsx("button", {
                  onClick: () => onViewMore(disposal),
                  className: "text-white text-xs font-semibold px-4 py-1.5 rounded-full transition",
                  style: { backgroundColor: "#B8502B" },
                  children: "Ver mais",
                }),

              ],
            }),
          }, disposal.id)
        ),
      }),

      // NOVO: Modal
      selectedDisposal && _jsx("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center px-6",
        style: {
          backgroundColor: "rgba(0,0,0,0.45)",
          backdropFilter: "blur(3px)"
        },
        children: _jsxs("div", {
          className: "bg-white w-full max-w-sm overflow-hidden",
          style: {
            borderRadius: "20px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
            animation: "fadeScale 0.2s ease-out",
          },
          children: [

            // NOVO: Cabeçalho do modal
            _jsxs("div", {
              className: "flex items-center justify-between px-5 py-4",
              style: { borderBottom: "1px solid #f0f0f0" },
              children: [
                _jsx("h2", {
                  className: "text-base font-semibold text-black",
                  children: "Detalhes da Coleta",
                }),

                // NOVO: Botão X circular verde
                _jsx("button", {
                  onClick: onCloseModal,
                  className: "text-white text-sm font-bold flex items-center justify-center transition",
                  style: {
                    backgroundColor: "#6F9A7C",
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%"
                  },
                  onMouseEnter: (e) =>
                    e.target.style.backgroundColor = "#5c856b",
                  onMouseLeave: (e) =>
                    e.target.style.backgroundColor = "#6F9A7C",
                  children: "✕",
                }),
              ],
            }),

            // NOVO: Campos com ícone + label + valor
            _jsxs("div", {
              className: "px-5 py-4 space-y-3",
              children: [

                ...[
                  { icon: "📅", label: "Data da coleta",     value: selectedDisposal.date },
                  { icon: "📦", label: "Tipo de eletrônico", value: selectedDisposal.type },
                  { icon: "🗑️", label: "Itens descartados",  value: selectedDisposal.items },
                  { icon: "📊", label: "Nível da lixeira",   value: selectedDisposal.trashLevel },
                  { icon: "📍", label: "Código da lixeira",  value: selectedDisposal.trashCode },
                ].map(({ icon, label, value }) =>
                  _jsxs("div", {
                    className: "flex items-start gap-2 pb-3",
                    style: { borderBottom: "1px solid #f5f5f5" },
                    children: [
                      _jsx("span", { className: "text-sm mt-0.5", children: icon }),
                      _jsxs("div", {
                        className: "flex flex-col gap-0.5",
                        children: [
                          _jsx("span", {
                            className: "text-xs font-semibold",
                            style: { color: "#555" },
                            children: label,
                          }),
                          _jsx("span", {
                            className: "text-sm font-normal text-black",
                            children: value,
                          }),
                        ],
                      }),
                    ],
                  }, label)
                ),

                // NOVO: Imagem ou mensagem de ausência
                selectedDisposal.image
                  ? _jsxs("div", {
                      className: "flex flex-col gap-2 pt-1",
                      children: [
                        _jsxs("div", {
                          className: "flex items-center gap-2",
                          children: [
                            _jsx("span", { className: "text-sm", children: "📷" }),
                            _jsx("span", {
                              className: "text-xs font-semibold",
                              style: { color: "#555" },
                              children: "Imagem da coleta",
                            }),
                          ],
                        }),
                        _jsx("img", {
                          src: selectedDisposal.image,
                          alt: "Imagem do descarte",
                          className: "w-full object-cover",
                          style: {
                            borderRadius: "12px",
                            maxHeight: "160px",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                          },
                        }),
                      ],
                    })
                  : _jsxs("div", {
                      className: "flex items-center gap-2 pt-1",
                      children: [
                        _jsx("span", { className: "text-sm", children: "📷" }),
                        _jsxs("div", {
                          className: "flex flex-col gap-0.5",
                          children: [
                            _jsx("span", {
                              className: "text-xs font-semibold",
                              style: { color: "#555" },
                              children: "Imagem da coleta",
                            }),
                            _jsx("span", {
                              className: "text-sm text-gray-400 italic",
                              children: "Nenhuma imagem anexada",
                            }),
                          ],
                        }),
                      ],
                    }),
              ],
            }),
          ],
        }),
      }),

      // NOVO: Animação de entrada do modal
      _jsx("style", {
        children: `
          @keyframes fadeScale {
            from { opacity: 0; transform: scale(0.95); }
            to   { opacity: 1; transform: scale(1); }
          }
        `,
      }),

    ],
  });
}