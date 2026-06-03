import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// NOVO: importação do useState para controlar o estado local do formulário
import { useState } from "react";
import AppHeader from "../../../shared/components/AppHeader"; // NOVO: importação do AppHeader c

// NOVO: adicionados "type" e "placeholder"
const formFields = [
  { label: "Nome",     key: "name",    type: "text",  placeholder: "Seu nome completo" },
  { label: "E-mail",  key: "email",   type: "email", placeholder: "seu@email.com" },
  { label: "Telefone",key: "phone",   type: "tel",   placeholder: "(00) 00000-0000" },
  { label: "CPF",     key: "cpf",     type: "text",  placeholder: "000.000.000-00" },
  { label: "Endereço",key: "address", type: "text",  placeholder: "Rua, número, complemento" },
  { label: "Cidade",  key: "city",    type: "text",  placeholder: "Sua cidade" },
  { label: "Estado",  key: "state",   type: "text",  placeholder: "UF" },
  { label: "CEP",     key: "zipCode", type: "text",  placeholder: "00000-000" },
];

// NOVO: adicionado "onSave" para permitir que o componente pai receba os dados editados ao salvar
export default function UserDataView({ userData, onBack, onSave }) {

  // NOVO: estado local do formulário inicializado com os valores de userData (ou string vazia)
  const [formData, setFormData] = useState({
    name:    userData?.name    || "",
    email:   userData?.email   || "",
    phone:   userData?.phone   || "",
    cpf:     userData?.cpf     || "",
    address: userData?.address || "",
    city:    userData?.city    || "",
    state:   userData?.state   || "",
    zipCode: userData?.zipCode || "",
  });

  // NOVO: função que atualiza apenas o campo alterado no estado, mantendo os demais intactos
  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  // NOVO: função chamada ao clicar em "Salvar informações"
  // Dispara o callback onSave passando os dados atuais do formulário para o componente pai
  const handleSave = () => {
    if (onSave) onSave(formData);
  };

  return _jsxs("div", {
    // MUDANÇA: o original usava "relative size-full bg-white overflow-hidden flex flex-col"
    className: "relative size-full bg-white overflow-hidden flex flex-col",
    children: [
      // NOVO: AppHeader global no topo
      _jsx(AppHeader, {}),
      // NOVO: espaçador de 130px para empurrar o conteúdo abaixo do AppHeader
      _jsx("div", { className: "h-[130px] shrink-0" }),
      // Header
      _jsxs("div", {
        className: "flex items-center gap-2 px-4 pb-4",
        children: [
          _jsx("button", {
            onClick: onBack,
            className: "text-3xl text-black leading-none mr-1",
            children: "‹",
            style: { color: "#B8502B", fontSize: "60px" },
          }),
          _jsx("h1", {
            className: "text-xl font-bold text-black mt-2",
            children: "Dados do usuário",
          }),
        ],
      }),

      // NOVO: padding lateral reduzido para px-4 e vertical para pb-4, consistente com AccountView
      _jsx("div", {
        className: "flex-1 overflow-y-auto px-4 pb-4",
        children: _jsx("div", {
          className: "space-y-4",
          children: formFields.map((field) =>
            _jsxs(
              "div",
              {
                className: "flex flex-col gap-1",
                children: [
                  // NOVO: adicionado htmlFor={field.key} para acessibilidade (vincula label ao input)
                  _jsx("label", {
                    htmlFor: field.key,
                    className: "text-xs font-semibold text-gray-700 ml-1",
                    children: field.label,
                    
                  }),
                  // NOVO: <div> estática substituído por <input> editável com value controlado pelo estado (formData),
                  _jsx("input", {
                    id: field.key,
                    type: field.type,
                    value: formData[field.key],
                    placeholder: field.placeholder,
                    onChange: (e) => handleChange(field.key, e.target.value),
                    // MUDANÇA: o original usava "bg-gray-100 rounded-lg p-3 border border-gray-200"
                    // NOVO: fundo branco (bg-white), borda cinza padrão, rounded-xl mais arredondado,
                    className:
                      "w-full border border-[#DADADA] rounded-xl px-4 py-3 bg-white text-sm text-gray-800 placeholder-gray-400 min-h-[46px] outline-none focus:border-[#6F9A7C] focus:ring-1 focus:ring-[#6F9A7C] transition-colors",
                      
                  }),

                ],
              },
              field.key
            )
          ),
        }),
      }),

      // NOVO: padding ajustado para "px-4 py-4", bg-white explícito para não vazar o scroll por baixo
      _jsx("div", {
        className: "px-4 py-4 border-t border-gray-100 bg-white",
        children: _jsx("button", {
          // NOVO: onClick conectado ao handleSave que dispara onSave(formData)
          onClick: handleSave,
          // MUDANÇA: o original usava "bg-green-600 hover:bg-green-700 rounded-lg"
          // NOVO: verde levemente mais claro (bg-green-500), rounded-2xl mais arredondado,
          className:
            "w-full bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-semibold py-3 rounded-2xl text-sm transition-colors",
          style: { backgroundColor: "#6F9A7C" }, 
          children: "Salvar informações",
        }),
      }),

    ],
  });
}