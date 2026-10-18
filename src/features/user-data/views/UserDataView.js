import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import AppHeader from "../../../shared/components/AppHeader"; 

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

export default function UserDataView({ userData, onBack, onSave }) {

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

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    if (onSave) onSave(formData);
  };

  return _jsxs("div", {
    className: "relative size-full bg-white overflow-hidden flex flex-col",
    children: [
      // AppHeader
      _jsx(AppHeader, {}),
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
                  _jsx("label", {
                    htmlFor: field.key,
                    className: "text-xs font-semibold text-gray-700 ml-1",
                    children: field.label,
                    
                  }),

                  _jsx("input", {
                    id: field.key,
                    type: field.type,
                    value: formData[field.key],
                    placeholder: field.placeholder,
                    onChange: (e) => handleChange(field.key, e.target.value),
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

      _jsx("div", {
        className: "px-4 py-4 border-t border-gray-100 bg-white",
        children: _jsx("button", {
          onClick: handleSave,
          className:
            "w-full bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-semibold py-3 rounded-2xl text-sm transition-colors",
          style: { backgroundColor: "#6F9A7C" }, 
          children: "Salvar informações",
        }),
      }),

    ],
  });
}