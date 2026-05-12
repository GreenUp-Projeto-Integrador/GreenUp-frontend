import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AppHeader from "../../../shared/components/AppHeader"; // NOVO

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
      // AppHeader
      _jsx(AppHeader, {}),
      // NOVO: espaçador para empurrar conteúdo abaixo do AppHeader (que tem top-[71px] + h-[45px])
      _jsx("div", { className: "h-[130px] shrink-0" }),
      // Header
      _jsxs("div", {
        className: "h-20 px-6 pt-4 flex items-center gap-4", // MUDANÇA: removido "border-b"
        children: [
          _jsx("button", {
          onClick: onBack,
          className: "",
          children: "‹",
          style: { color: "#B8502B", fontSize: "60px" },
        }),
          _jsx("h1", {
            className: "text-x1 font-semibold text-black  mt-2", // MUDANÇA: era "font-bold" → "font-semibold" + mt-2
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
                  className: "font-semibold text-black mb-3 text-sm", // MUDANÇA: adicionado "text-sm"
                  children: "Quais tipos de eletrônicos você está descartando?",
                }),
                _jsx("div", {
                  className: "space-y-3", // MUDANÇA: era "space-y-2" → "space-y-3"
                  children: categories.map((category) =>
                    _jsx(
                      "label",
                      {
                        className: "flex items-center gap-3 cursor-pointer",
                        children: _jsxs("div", {
                          className: "flex items-center gap-3", // MUDANÇA: era "gap-2" → "gap-3"
                          children: [
                            _jsx("input", {
                              type: "checkbox",
                              checked: selectedCategories.includes(category),
                              onChange: () => onCategoryToggle(category),
                              className: "w-4 h-4 rounded-none border border-gray-400 accent-gray-600",
                              // MUDANÇA: era "w-5 h-5 rounded border-gray-400"
                              // → "w-4 h-4 rounded-none border border-gray-400 accent-gray-600"
                            }),
                            _jsx("span", {
                              className: "text-gray-800 text-sm", // MUDANÇA: era "text-gray-700" → "text-gray-800", adicionado "text-sm"
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
                  className: "font-semibold text-black mb-2 text-sm", // MUDANÇA: era "mb-3" → "mb-2", adicionado "text-sm"
                  children: "Conte-nos quais eletrônicos você está descartando:",
                }),
                // MUDANÇA: era "textarea" → "input" (1 linha)
                // className: removido "h-24 resize-none focus:ring-2 focus:ring-green-500", adicionado "text-gray-500"
                // placeholder: era "Ex: Smartphone..." → "Lista de eletrônicos"
                _jsx("input", {
                  value: items,
                  onChange: (e) => onItemsChange(e.target.value),
                  placeholder: "Lista de eletrônicos",
                  className:
                    "w-full p-3 border border-gray-300 rounded-lg focus:outline-none text-sm text-gray-500",
                }),
              ],
            }),
            // Photo upload
            _jsxs("div", {
              children: [
                _jsx("p", {
                  className: "font-semibold text-black mb-2 text-sm", // MUDANÇA: era "mb-3" → "mb-2", adicionado "text-sm"
                  children: "Registre esse momento com uma foto desses itens:",
                }),
                _jsx("label", {
                  className:
                    // MUDANÇA: era "border-green-400 p-8 hover:bg-green-50"
                    // → "border-teal-400 rounded-xl p-10 bg-teal-50/40 hover:bg-teal-50 flex items-center justify-center"
                    "w-full border-2 border-dashed border-teal-400 rounded-xl p-10 text-center cursor-pointer bg-teal-50/40 hover:bg-teal-50 transition flex items-center justify-center",
                  children: _jsxs("div", {
                    className: "flex items-center gap-2 text-teal-600",
                    // MUDANÇA: era "space-y-2" (vertical) → "flex items-center gap-2 text-teal-600" (horizontal)
                    children: [
                      _jsx("p", {
                        className: "text-sm",
                        children: "Toque para adicionar imagens",
                      }),
                      _jsx("span", {
                        className: "text-lg",
                        children: "⊕", // MUDANÇA: era "➕" → "⊕"
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
                    className: "mt-3 text-sm text-teal-600", // MUDANÇA: era "text-green-600" → "text-teal-600"
                    children: `${photos.length} imagem(ns) adicionada(s)`,
                  }),
              ],
            }),
          ],
        }),
      }),
      // Submit button
      _jsx("div", {
        className: "p-6 bg-white", // MUDANÇA: removido "border-t"
        children: _jsx("button", {
          onClick: onSubmit,
          className:
            // MUDANÇA: era "bg-green-600 rounded-lg hover:bg-green-700"
            // → "w-full text-white py-3 rounded-xl font-semibold transition text-sm"
            "w-full text-white py-3 rounded-xl font-semibold transition text-sm",
            style: { backgroundColor: "#6F9A7C" }, // cor adicionada
          children: "Confirmar descarte",
        }),
      }),
    ],
  });
}