import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

export default function DisposalView({
  categories,
  selectedCategories,
  items,
  photos,
  onCategoryToggle,
  onItemsChange,
  onPhotoUpload,
  onSubmit,
  onBack,
}) {
  return _jsxs("div", {
    className: "relative size-full bg-white overflow-hidden flex flex-col",
    children: [
      // Header
      _jsxs("div", {
        className: "h-20 px-6 pt-4 flex items-center gap-4 border-b",
        children: [
          _jsx("button", {
            onClick: onBack,
            className: "text-2xl text-orange-600",
            children: "‹",
          }),
          _jsx("h1", {
            className: "text-xl font-bold text-black",
            children: "Registrar descarte",
          }),
        ],
      }),
      // Content
      _jsx("div", {
        className: "flex-1 overflow-y-auto px-6 py-6 space-y-6",
        children: _jsxs("div", {
          className: "space-y-6",
          children: [
            // Categories
            _jsxs("div", {
              children: [
                _jsx("p", {
                  className: "font-semibold text-black mb-3",
                  children: "Quais tipos de eletrônicos você está descartando?",
                }),
                _jsx("div", {
                  className: "space-y-2",
                  children: categories.map((category) =>
                    _jsx(
                      "label",
                      {
                        className: "flex items-center gap-3 cursor-pointer",
                        children: _jsxs("div", {
                          className: "flex items-center gap-2",
                          children: [
                            _jsx("input", {
                              type: "checkbox",
                              checked: selectedCategories.includes(category),
                              onChange: () => onCategoryToggle(category),
                              className: "w-5 h-5 rounded border-gray-400",
                            }),
                            _jsx("span", {
                              className: "text-gray-700",
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
            // Items description
            _jsxs("div", {
              children: [
                _jsx("p", {
                  className: "font-semibold text-black mb-3",
                  children: "Conte-nos quais eletrônicos você está descartando:",
                }),
                _jsx("textarea", {
                  value: items,
                  onChange: (e) => onItemsChange(e.target.value),
                  placeholder: "Ex: Smartphone com tela quebrada, fone de ouvido...",
                  className:
                    "w-full h-24 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none",
                }),
              ],
            }),
            // Photo upload
            _jsxs("div", {
              children: [
                _jsx("p", {
                  className: "font-semibold text-black mb-3",
                  children: "Registre esse momento com uma foto desses itens:",
                }),
                _jsx("label", {
                  className:
                    "w-full border-2 border-dashed border-green-400 rounded-lg p-8 text-center cursor-pointer hover:bg-green-50 transition",
                  children: _jsxs("div", {
                    className: "space-y-2",
                    children: [
                      _jsx("div", {
                        className: "text-3xl",
                        children: "➕",
                      }),
                      _jsx("p", {
                        className: "text-gray-600 text-sm",
                        children: "Toque para adicionar imagens",
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
                photos.length > 0 &&
                  _jsx("div", {
                    className: "mt-3 text-sm text-green-600",
                    children: `${photos.length} imagem(ns) adicionada(s)`,
                  }),
              ],
            }),
          ],
        }),
      }),
      // Submit button
      _jsx("div", {
        className: "p-6 border-t bg-white",
        children: _jsx("button", {
          onClick: onSubmit,
          className:
            "w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition",
          children: "Confirmar descarte",
        }),
      }),
    ],
  });
}
