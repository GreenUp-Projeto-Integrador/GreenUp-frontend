import { tokens } from "./tokens";

const BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8000/api/v1";

export class ApiError extends Error {
  constructor(status, message, fields) {
    super(message);
    this.status = status;
    this.fields = fields;
  }
}

function firstText(value) {
  if (typeof value === "string") return value;

  if (value && typeof value === "object") {
    for (const item of Object.values(value)) {
      const found = firstText(item);
      if (found) return found;
    }
  }

  return null;
}

export function errorMessage(err) {
  if (err instanceof ApiError) {
    return firstText(err.fields) ?? err.message;
  }

  return "Não foi possível conectar ao servidor.";
}

let refreshing = null;
function refreshAccess() {
  if (!refreshing) {
    refreshing = (async () => {
      const res = await fetch(`${BASE_URL}/auth/token/refresh/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refresh: tokens.getRefresh() }),
      });
      if (!res.ok) throw new Error("refresh inválido");
      tokens.set(await res.json()); 
    })().finally(() => { refreshing = null; });
  }
  return refreshing;
}

export async function request(path, { method = "GET", body, auth = true } = {}) {
  const isForm = body instanceof FormData;
  const send = () => fetch(`${BASE_URL}${path}`, {
    method,
    headers: {
      ...(body && !isForm ? { "Content-Type": "application/json" } : {}),
      ...(auth && tokens.getAccess() ? { Authorization: `Bearer ${tokens.getAccess()}` } : {}),
    },
    body: body ? (isForm ? body : JSON.stringify(body)) : undefined,
  });

  let res = await send();
  if (res.status === 401 && auth && tokens.getRefresh()) {
    try { await refreshAccess(); res = await send(); }
    catch { tokens.clear(); window.dispatchEvent(new Event("greenup:logout")); }
  }
  if (res.status === 204) return null;
  const data = await res.json().catch(() => null);
  if (!res.ok) throw new ApiError(res.status, data?.error?.message ?? "Erro inesperado.", data?.error?.fields);
  return data;
}