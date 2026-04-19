import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import DisposalView from "../views/DisposalView";

const disposalCategories = [
  "Computadores",
  "Smartphones",
  "Tablets",
  "Fones",
  "Carregadores",
  "Outros",
];

export default function DisposalPage() {
  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [items, setItems] = useState("");
  const [photos, setPhotos] = useState([]);
  const [trashLevel, setTrashLevel] = useState(null);

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

    setTrashLevel("requesting");
    toast.success("Descarte registrado com sucesso!");
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
      trashLevel === "requesting" &&
        _jsx("div", {
          className:
            "fixed inset-0 bg-black/50 z-50 flex items-center justify-center",
          children: _jsx("div", {
            className: "bg-white rounded-lg p-6 w-80",
            children: _jsxs("div", {
              className: "space-y-4 text-center",
              children: [
                _jsx("h2", {
                  className: "text-xl font-bold",
                  children: "Qual é o nível da sua lixeira?",
                }),
                _jsxs("div", {
                  className: "flex gap-2 justify-center",
                  children: [
                    _jsx("button", {
                      onClick: () => {
                        setTrashLevel(null);
                        navigate("/main");
                      },
                      className: "flex-1 py-2 bg-blue-500 text-white rounded",
                      children: "Vazia",
                    }),
                    _jsx("button", {
                      onClick: () => {
                        setTrashLevel(null);
                        navigate("/main");
                      },
                      className: "flex-1 py-2 bg-yellow-500 text-white rounded",
                      children: "Meia",
                    }),
                    _jsx("button", {
                      onClick: () => {
                        setTrashLevel(null);
                        navigate("/main");
                      },
                      className: "flex-1 py-2 bg-red-500 text-white rounded",
                      children: "Cheia",
                    }),
                  ],
                }),
              ],
            }),
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
