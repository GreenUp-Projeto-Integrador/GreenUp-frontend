import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

const formFields = [
  { label: "Nome", key: "name" },
  { label: "E-mail", key: "email" },
  { label: "Telefone", key: "phone" },
  { label: "CPF", key: "cpf" },
  { label: "Endereço", key: "address" },
  { label: "Cidade", key: "city" },
  { label: "Estado", key: "state" },
  { label: "CEP", key: "zipCode" },
];

export default function UserDataView({ userData, onBack }) {
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
            className: "text-2xl font-bold text-black",
            children: "Dados do usuário",
          }),
        ],
      }),
      // Content
      _jsx("div", {
        className: "flex-1 overflow-y-auto px-6 py-6",
        children: _jsx("div", {
          className: "space-y-4",
          children: formFields.map((field) =>
            _jsxs(
              "div",
              {
                className: "space-y-2",
                children: [
                  _jsx("label", {
                    className: "text-sm font-semibold text-black",
                    children: field.label,
                  }),
                  _jsx("div", {
                    className:
                      "bg-gray-100 rounded-lg p-3 border border-gray-200",
                    children: _jsx("p", {
                      className: "text-gray-700",
                      children: userData[field.key] || "—",
                    }),
                  }),
                ],
              },
              field.key
            )
          ),
        }),
      }),
      // Edit button
      _jsx("div", {
        className: "p-6 border-t",
        children: _jsx("button", {
          className:
            "w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700",
          children: "Editar dados",
        }),
      }),
    ],
  });
}
