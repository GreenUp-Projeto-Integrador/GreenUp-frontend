import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast, Toaster } from "sonner"; // NOVO: Toaster
import DisposalView from "../views/DisposalView";

const disposalCategories = [
  "Computadores",
  "Smartphones",
  "Tablets",
  "Fones",
  "Carregadores",
  "Outros",
];

// MUDANÇA: opções do select em vez de 3 botões separados
const trashLevelOptions = [
  { value: "nivel1", label: "Nível 1" },
  { value: "nivel2", label: "Nível 2" },
  { value: "nivel3", label: "Nível 3" },
  { value: "nivel4", label: "Nível 4" },
];

export default function DisposalPage() {
  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [items, setItems] = useState("");
  const [photos, setPhotos] = useState([]);
  const [trashLevel, setTrashLevel] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(""); // MUDANÇA: estado para o select

  const handleCategoryToggle = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    setPhotos((prev) => [...prev, ...files]);
  };

  const handleSubmit = () => {
    if (selectedCategories.length === 0) {
      toast.error("Selecione pelo menos uma categoria");
      return;
    }
    if (items.trim() === "") {
      toast.error("Descreva os itens");
      return;
    }
    if (photos.length === 0) {
      toast.error("Adicione pelo menos uma foto");
      return;
    }

    setTrashLevel("requesting"); // MUDANÇA: abre o popup
  };

  // MUDANÇA: confirmação separada do handleSubmit
  const handleConfirmLevel = () => {
    if (!selectedLevel) {
      toast.error("Selecione o nível da lixeira");
      return;
    }
    setTrashLevel(null);
    toast.success("Registro feito com sucesso");
    setTimeout(() => {
      navigate("/main");
    }, 1000);
  };

  const handleBack = () => {
    navigate("/main");
  };

  return _jsxs("div", {
    className: "relative size-full overflow-hidden bg-white",
    children: [

      // POPUP — MUDANÇA: layout completamente reestilizado conforme protótipo
      trashLevel === "requesting" &&
        _jsx("div", {
          className: "fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-6",
          children: _jsxs("div", {
            className: "bg-white rounded-2xl p-6 w-full max-w-sm shadow-lg space-y-5",
            children: [

              // Título — MUDANÇA: era "text-center font-bold" → alinhado à esquerda, estilo protótipo
              _jsxs("div", {
                children: [
                  _jsx("h2", {
                    className: "text-lg font-semibold text-black",
                    children: "Só mais uma coisinha,",
                  }),
                  _jsx("p", {
                    className: "text-sm text-gray-700 mt-1",
                    children: "Qual é nível de ocupação da lixeira?",
                  }),
                ],
              }),

              // Select — MUDANÇA: era 3 botões coloridos → dropdown "Selecione o nível"
              _jsxs("select", {
                value: selectedLevel,
                onChange: (e) => setSelectedLevel(e.target.value),
                className: "w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-500 focus:outline-none appearance-none bg-white",
                children: [
                  _jsx("option", { value: "", disabled: true, children: "Selecione o nível" }),
                  ...trashLevelOptions.map((opt) =>
                    _jsx("option", { value: opt.value, children: opt.label }, opt.value)
                  ),
                ],
              }),

              // Botão confirmar — MUDANÇA: era múltiplos botões coloridos → 1 botão verde
              _jsx("button", {
                onClick: handleConfirmLevel,
                className: "w-full text-white py-3 rounded-full font-semibold text-sm transition hover:opacity-90",
                style: { backgroundColor: "#6F9A7C" },
                children: "Confirmar",
              }),
            ],
          }),
        }),

      _jsx(DisposalView, {
        categories: disposalCategories,
        selectedCategories: selectedCategories,
        items: items,
        photos: photos,
        onCategoryToggle: handleCategoryToggle,
        onItemsChange: setItems,
        onPhotoUpload: handlePhotoUpload,
        onSubmit: handleSubmit,
        onBack: handleBack,
      }),
    ],
  });
}