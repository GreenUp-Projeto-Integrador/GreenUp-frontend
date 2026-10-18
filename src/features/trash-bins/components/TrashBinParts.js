import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { LEVEL_COLOR, STATUS_COLOR, STATUS_LABEL } from "../../../shared/trashBinStatus";

// Barra de ocupação com 4 segmentos (nível 1 a 4)
export function LevelBar({
  level
}) {
  return _jsxs("div", {
    className: "flex items-center gap-2",
    children: [_jsx("div", {
      className: "flex gap-1",
      children: [1, 2, 3, 4].map(n => _jsx("span", {
        style: {
          width: 22,
          height: 8,
          borderRadius: 4,
          background: n <= level ? LEVEL_COLOR[level] : "#e5e5e5"
        }
      }, n))
    }), _jsxs("span", {
      className: "text-xs text-gray-600",
      children: ["Nível ", level, " de 4"]
    })]
  });
}
export function StatusChip({
  status
}) {
  return _jsx("span", {
    className: "text-xs px-2 py-1 rounded-full text-white whitespace-nowrap",
    style: {
      background: STATUS_COLOR[status] ?? "#8A8A8A"
    },
    children: STATUS_LABEL[status] ?? status
  });
}
