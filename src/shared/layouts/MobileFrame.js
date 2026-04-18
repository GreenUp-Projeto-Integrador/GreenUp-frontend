import { jsx as _jsx } from "react/jsx-runtime";
export default function MobileFrame({ children }) {
    return (_jsx("div", { className: "flex items-center justify-center min-h-screen bg-gradient-to-br from-[#6f9a7c]/10 to-[#f8c78d]/10", children: _jsx("div", { className: "relative w-full max-w-[430px] h-[932px] bg-white shadow-2xl overflow-hidden", children: children }) }));
}
