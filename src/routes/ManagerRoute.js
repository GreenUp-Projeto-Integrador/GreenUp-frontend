import { jsx as _jsx } from "react/jsx-runtime";
import { Navigate, Outlet } from "react-router";
import { useAuth } from "../features/auth/AuthContext";
import { canSeeManagerArea } from "../shared/access";

export default function ManagerRoute() {
    const {
        user
    } = useAuth();
    if (!canSeeManagerArea(user)) return _jsx(Navigate, {
        to: "/main",
        replace: true
    });
    return _jsx(Outlet, {});
}