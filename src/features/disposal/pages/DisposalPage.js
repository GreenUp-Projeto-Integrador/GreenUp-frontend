import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { toast, Toaster } from "sonner"; 
import DisposalView from "../views/DisposalView";
import { disposalApi } from "../../../shared/api/endpoints";
import { errorMessage } from "../../../shared/api/http";
import { comingSoon } from "../../../shared/comingSoon";
import { CloseButton } from "../../../shared/components/SidebarMenu";

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
  const [levelOpen, setLevelOpen] = useState(false); 

  const [searchParams] = useSearchParams();
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

  const handleTrashCodeBlur = async () => {
  const code = trashCode.trim();

  if (!code) return;

  try {
    await disposalApi.trashByCode(code);
  } catch {
    toast.error("Lixeira não encontrada. Confira o código.");
  }
  };

  const handleQuantityInvalid = () => {
    toast.error("A quantidade máxima é de 5 itens");
  };

  const onRemovePhoto = (index) => {
    setPhotos((prev) => prev.filter((_, i) => i !== index));
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
    const amount = Number(quantity);

    if (!Number.isInteger(amount) || amount < 1 || amount > 5) {
      toast.error("A quantidade deve ser de 1 a 5 itens");
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
                className: "space-y-1",
                children: [
                  _jsxs("div", {
                    className: "flex items-center justify-between gap-2",
                    children: [
                      _jsx("h2", {
                        className: "text-lg font-semibold text-black",
                        children: "Só mais uma coisinha,",
                      }),
                      _jsx(CloseButton, {
                        onClose: () => setTrashLevel(null),
                      }),
                    ],
                  }),
                  _jsx("p", {
                    className: "text-sm text-gray-700",
                    children: "Qual é nível de ocupação da lixeira?",
                  }),
                ],
              }),
              // Select
              _jsxs("div", {
                className: "relative w-full",
                children: [
                  // Campo que abre o menu
                  _jsx("button", {
                    type: "button",
                    onClick: () => setLevelOpen((prev) => !prev),
                    className:
                      "w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-left bg-white flex items-center justify-between font-['Poppins'] font-normal",
                    children: [
                      _jsx("span", {
                        className: selectedLevel ? "text-gray-800" : "text-gray-500",
                        children:
                          trashLevelOptions.find(
                            (opt) => opt.value === selectedLevel
                          )?.label || "Selecione o nível",
                      }),
                      _jsx("span", {
                        children: "▾",
                      }),
                    ],
                  }),

                  // Opções do menu
                  levelOpen &&
                    _jsx("div", {
                      className:
                        "absolute left-0 top-full mt-1 w-full rounded-lg border border-gray-200 bg-white shadow-lg z-[60] overflow-hidden",
                      children: trashLevelOptions.map((opt) =>
                        _jsx(
                          "button",
                          {
                            type: "button",
                            onClick: () => {
                              setSelectedLevel(opt.value);
                              setLevelOpen(false);
                            },
                            className:
                              "w-full px-4 py-3 text-left text-sm text-gray-700 font-['Poppins'] font-normal hover:bg-[#6F9A7C] hover:text-white",
                            children: opt.label,
                          },
                          opt.value
                        )
                      ),
                    }),
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
        onTrashCodeBlur: handleTrashCodeBlur,
        onScanQr: () => comingSoon("Leitura de QR Code pela câmera"),
        onQuantityChange: setQuantity,
        onQuantityInvalid: handleQuantityInvalid,
        onPhotoUpload: handlePhotoUpload,
        onSubmit: handleSubmit,
        onBack: handleBack,
        onRemovePhoto
      }),
    ],
  });
}