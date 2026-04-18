import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from "react-router";
import { Toaster } from "sonner";
import MobileFrame from "../shared/layouts/MobileFrame";
export default function Root() {
    return (_jsxs(_Fragment, { children: [_jsx(MobileFrame, { children: _jsx(Outlet, {}) }), _jsx(Toaster, { position: "top-center" })] }));
}
