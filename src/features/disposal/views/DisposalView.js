import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AppHeader from "../../../shared/components/AppHeader"; 

const MAX_CODE = 2;
const MAX_DESC = 200;
const MAX_FILES = 2;
const MAX_MB = 5;

export default function DisposalView({
  categories,
  selectedCategories,
  items,
  photos,
  trashCode,
  quantity,
  onCategoryToggle,
  onItemsChange,
  onTrashCodeChange,
  onTrashCodeBlur,
  onScanQr,
  onQuantityChange,
  onQuantityInvalid,
  onPhotoUpload,
  onRemovePhoto,
  onSubmit,
  onBack,
}) {
  return _jsxs("div", {
    className: "relative size-full bg-white overflow-hidden flex flex-col",
    children: [
      // AppHeader
      _jsx(AppHeader, {}),
      _jsx("div", { className: "h-[130px] shrink-0" }),
      // Header
      _jsxs("div", {
        className: "h-20 px-6 pt-4 flex items-center gap-4", 
        children: [
          _jsx("button", {
          onClick: onBack,
          className: "",
          children: "‹",
          style: { color: "#B8502B", fontSize: "60px" },
        }),
          _jsx("h1", {
            className: "text-x1 font-semibold text-black  mt-2", 
            children: "Registrar descarte",
          }),
        ],
      }),
      // 
      _jsx("div", {
        className: "flex-1 overflow-y-auto px-6 py-6 space-y-6",
        children: _jsxs("div", {
          className: "space-y-2",
          children: [
            // Codigo e QrCode da lixeira
            _jsxs("div", {
              children: [
                _jsx("p", {
                  className: "font-semibold text-black mb-2 text-sm",
                  children: "Código da lixeira (QR Code):",
                }),
                _jsxs("div", {
                  className: "flex items-start gap-2",
                  children: [
                    _jsxs("div", {
                      className: "flex-1 min-w-0 flex flex-col gap-1",
                      children: [
                        _jsx("input", {
                          value: trashCode,
                          maxLength: MAX_CODE,
                          onChange: (e) =>
                            onTrashCodeChange(e.target.value.toUpperCase()),
                          onBlur: onTrashCodeBlur,
                          placeholder: "Ex.: A1",
                          className:
                            "w-full p-3 border border-[#6F9A7C] rounded-lg text-sm text-gray-700 bg-white focus:outline-none focus:ring-0 focus:border-2 focus:border-[#6F9A7C]",
                        }),
                      ],
                    }),
                    // Qr Code
                    _jsx("button", {
                      type: "button",
                      onClick: onScanQr,
                      className:
                        "px-4 py-3 rounded-lg text-white text-sm font-medium whitespace-nowrap transition hover:opacity-90",
                      style: { backgroundColor: "#B8502B" },
                      children: "Ler QR Code",
                    }),
            ],
              }),
              ],
            }),
            // Categorias
            _jsxs("div", {
              children: [
                _jsx("p", {
                  className: "font-semibold text-black mb-3 text-sm", 
                  children: "Quais tipos de eletrônicos você está descartando?",
                }),
                _jsx("div", {
                  className: "space-y-3", 
                  children: categories.map((category) =>
                    _jsx(
                      "label",
                      {
                        className: "flex items-center gap-3 cursor-pointer",
                        children: _jsxs("div", {
                          className: "flex items-center gap-3",
                          children: [
                            _jsx("input", {
                              type: "checkbox",
                              checked: selectedCategories.includes(category),
                              onChange: () => onCategoryToggle(category),
                              className: "w-4 h-4 rounded-none border border-[#6F9A7C] accent-[#6F9A7C]",
                            }),
                            _jsx("span", {
                              className: "text-gray-800 text-sm ", 
                              children: category,
                            }),
                          ],
                        }),
                      },
                      category
                    )
                  ),
                }),
              ],
            }),
            // Descricao
            _jsxs("div", {
              children: [
                _jsx("p", {
                  className: "font-semibold text-black mb-2 text-sm", 
                  children: "Conte-nos quais eletrônicos você está descartando:",
                }),
                _jsx("input", {
                  value: items,
                  maxLength: MAX_DESC,
                  onChange: (e) => onItemsChange(e.target.value),
                  placeholder: "Lista de eletrônicos",
                  className:
                    "w-full p-3 border border-[#6F9A7C] rounded-lg text-sm text-gray-700 bg-white focus:outline-none focus:ring-0 focus:border-2 focus:border-[#6F9A7C]",
                }),
                _jsx("p", {
                  className: "mt-1 text-right text-xs text-gray-500 leading-none",
                  children: `${(items || "").length}/${MAX_DESC}`,
                }),
              ],
            }),
            // Quantidade de Itens
            _jsxs("div", {
              children: [
                _jsx("p", {
                  className: "font-semibold text-black mb-2 text-sm",
                  children: "Quantos itens no total?",
                }),
                _jsx("input", {
                  type: "number",
                  min: 1,
                  max: 5,
                  step: 1,
                  value: quantity,
                  onChange: (e) => {
                    const value = e.target.value;

                    onQuantityChange(value);

                    if (value !== "" && Number(value) > 5) {
                      onQuantityInvalid?.();
                    }
                  },
                  placeholder: "Digite de 1 a 5 itens",
                  className:
                    "w-full p-3 border border-[#6F9A7C] rounded-lg text-sm text-gray-700 bg-white focus:outline-none focus:ring-0 focus:border-2 focus:border-[#6F9A7C]",
                }),
              ],
            }),
            // Anexar Foto
            _jsxs("div", {
              children: [
                _jsx("p", {
                  className: "font-semibold text-black mb-2 text-sm",
                  children: "Registre esse momento com uma foto desses itens:",
                }),

                _jsx("label", {
                  className:
                    "block w-full text-center text-sm py-5 rounded-lg border-2 border-dashed border-[#6F9A7C] text-[#6F9A7C] bg-[#6F9A7C]/10 hover:bg-[#6F9A7C]/20 transition",
                  children: _jsxs("div", {
                    className: "flex flex-col items-center gap-2 text-[#6F9A7C]",
                    children: [
                      _jsx("p", {
                        className: "text-sm",
                        children: "Adicionar imagens",
                      }),
                      _jsx("input", {
                        type: "file",
                        multiple: true,
                        accept: "image/*",
                        onChange: onPhotoUpload,
                        className: "hidden",
                      }),
                    ],
                  }),
                }),

                _jsx("p", {
                  className: "text-xs text-gray-500 mt-1",
                  children: `Até ${MAX_FILES} arquivos de ${MAX_MB} MB cada`,
                }),

                photos.map((f, i) =>
                  _jsxs("div", {
                    className:
                      "flex items-center justify-between text-xs text-gray-600 mt-2 gap-2",
                    children: [
                      _jsx("span", {
                        className: "truncate",
                        children: f.name,
                      }),

                      _jsx("button", {
                          type: "button",
                          onClick: () => onRemovePhoto(i),
                          "aria-label": "Remover imagem",
                          className: "shrink-0 px-2 py-1",
                          style: {
                            color: "#B8502B",
                          },
                          children: "✕",
                        })
                    ],
                  }, i)
                ),
              ],
            })
          ],
        }),
      }),
      // Submit button
      _jsx("div", {
        className: "p-6 bg-white", 
        children: _jsx("button", {
          onClick: onSubmit,
          className:
            "w-full text-white py-3 rounded-xl font-semibold transition text-sm",
            style: { backgroundColor: "#6F9A7C" }, 
          children: "Confirmar descarte",
        }),
      }),
    ],
  });
}