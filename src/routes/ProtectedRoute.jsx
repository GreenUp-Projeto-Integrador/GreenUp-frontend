import { Navigate, Outlet, useLocation } from "react-router";
import { useAuth } from "../features/auth/AuthContext";

export default function ProtectedRoute() {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();
  if (loading) return <p className="p-6 text-sm">Carregando…</p>;
  if (!isAuthenticated) return <Navigate to="/login" replace state={{ from: location }} />;
  return <Outlet />;
}