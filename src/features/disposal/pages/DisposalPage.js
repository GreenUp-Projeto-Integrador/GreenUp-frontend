import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { toast, Toaster } from "sonner"; 
import DisposalView from "../views/DisposalView";
import { disposalApi } from "../../../shared/api/endpoints";
import { errorMessage } from "../../../shared/api/http";

const trashLevelOptions = [
  { value: "1", label: "Nível 1" },
  { value: "2", label: "Nível 2" },
  { value: "3", label: "Nível 3" },
  { value: "4", label: "Nível 4" },
];

export default function DisposalPage() {
  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [items, setItems] = useState("");
  const [photos, setPhotos] = useState([]);
  const [trashLevel, setTrashLevel] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(""); 

  const [searchParams] = useSearchParams();
  // O QR Code da lixeira abre /disposal?code=A1 e o código já vem preenchido
  const [trashCode, setTrashCode] = useState(searchParams.get("code") ?? "");
  const [quantity, setQuantity] = useState("1");
  const [categoryList, setCategoryList] = useState([]); 
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    disposalApi
      .categories()
      .then(setCategoryList)
      .catch((e) => toast.error(errorMessage(e)));
  }, []);

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

  const handleSubmit = async () => {
    if (trashCode.trim() === "") {
      toast.error("Informe o código da lixeira");
      return;
    }
    if (selectedCategories.length === 0) {
      toast.error("Selecione pelo menos uma categoria");
      return;
    }
    if (items.trim() === "") {
      toast.error("Descreva os itens");
      return;
    }
    if (Number(quantity) < 1) {
      toast.error("Informe a quantidade de itens");
      return;
    }
    if (photos.length === 0) {
      toast.error("Adicione pelo menos uma foto");
      return;
    }

    try {
      await disposalApi.trashByCode(trashCode.trim());
    } catch {
      toast.error("Lixeira não encontrada. Confira o código.");
      return;
    }

    setTrashLevel("requesting"); 
  };

  const handleConfirmLevel = async () => {
    if (!selectedLevel) {
      toast.error("Selecione o nível da lixeira");
      return;
    }
    if (submitting) return;

    const form = new FormData();
    form.append("trashCode", trashCode.trim());
    selectedCategories.forEach((name) => {
      const cat = categoryList.find((c) => c.name === name);
      if (cat) form.append("categories", cat.id);
    });
    form.append("quantity", quantity);
    form.append("items", items);
    form.append("trashLevel", selectedLevel);
    photos.forEach((file) => form.append("photos", file));

    try {
      setSubmitting(true);
      const disposal = await disposalApi.create(form);
      setTrashLevel(null);
      toast.success(`Registro feito com sucesso! +${disposal.points_awarded} pontos`);
      setTimeout(() => {
        navigate("/main");
      }, 1000);
    } catch (err) {
      toast.error(errorMessage(err));
    } finally {
      setSubmitting(false);
    }
  };

  const handleBack = () => {
    navigate("/main");
  };

  return _jsxs("div", {
    className: "relative size-full overflow-hidden bg-white",
    children: [

      trashLevel === "requesting" &&
        _jsx("div", {
          className: "fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-6",
          children: _jsxs("div", {
            className: "bg-white rounded-2xl p-6 w-full max-w-sm shadow-lg space-y-5",
            children: [

              // Título 
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

              // Select
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

              // Botão confirmar 
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
        categories: categoryList.map((c) => c.name),
        selectedCategories: selectedCategories,
        items: items,
        photos: photos,
        trashCode: trashCode,
        quantity: quantity,
        onCategoryToggle: handleCategoryToggle,
        onItemsChange: setItems,
        onTrashCodeChange: setTrashCode,
        onQuantityChange: setQuantity,
        onPhotoUpload: handlePhotoUpload,
        onSubmit: handleSubmit,
        onBack: handleBack,
      }),
    ],
  });
}