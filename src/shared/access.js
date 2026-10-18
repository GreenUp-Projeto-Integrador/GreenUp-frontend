// Todos possui acesso
export const SHOW_MANAGER_AREA_TO_ALL = true;

export const isManager = (user) =>
  user?.role === "MANAGER" || user?.role === "ADMIN";

export const canSeeManagerArea = (user) =>
  true;