import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from "react-router";
import AppHeader from "./AppHeader";

export default function ScreenLayout({
  title,
  backTo = "/main",
  actions,
  children
}) {
  const navigate = useNavigate();
  return _jsxs("div", {
    className: "relative size-full bg-white overflow-hidden flex flex-col",
    children: [_jsx(AppHeader, {}), _jsx("div", {
      className: "h-[130px] shrink-0"
    }), _jsxs("div", {
      className: "h-16 px-6 pt-4 flex items-center gap-3 shrink-0",
      children: [_jsx("button", {
        onClick: () => navigate(backTo),
        "aria-label": "Voltar",
        className: "text-2xl",
        style: {
          color: "#B8502B",
          fontSize: "60px"
        },
        children: "‹"
      }), _jsx("h1", {
        className: "text-xl font-semibold text-black mt-2 flex-1",
        children: title
      }), actions]
    }), _jsx("div", {
      className: "flex-1 overflow-y-auto px-6 py-4 space-y-5",
      children: children
    })]
  });
}
