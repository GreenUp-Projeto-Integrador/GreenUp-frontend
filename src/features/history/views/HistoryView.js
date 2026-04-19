import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

export default function HistoryView({ disposals, onBack }) {
  return _jsxs("div", {
    className: "relative size-full bg-white overflow-hidden",
    children: [
      // Header
      _jsxs("div", {
        className: "absolute top-0 left-0 right-0 h-24 px-6 pt-4 flex items-center gap-4",
        children: [
          _jsx("button", {
            onClick: onBack,
            className: "text-2xl text-orange-600",
            children: "‹",
          }),
          _jsx("h1", {
            className: "text-2xl font-bold text-black",
            children: "Histórico de registros",
          }),
        ],
      }),
      // Content
      _jsx("div", {
        className: "absolute top-24 left-0 right-0 bottom-0 overflow-y-auto px-6 py-6 space-y-3",
        children: disposals.map((disposal) =>
          _jsx(
            "div",
            {
              className:
                "bg-gray-100 rounded-lg p-4 flex justify-between items-center",
              children: _jsxs("div", {
                className: "flex-1",
                children: [
                  _jsx("p", {
                    className: "font-semibold text-black",
                    children: disposal.date,
                  }),
                  _jsx("p", {
                    className: "text-sm text-gray-600",
                    children: disposal.type,
                  }),
                ],
              }),
            },
            disposal.id
          )
        ),
      }),
    ],
  });
}
