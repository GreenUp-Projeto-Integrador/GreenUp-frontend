import { request } from "./http";
import { tokens } from "./tokens";

// Autenticação
export const authApi = {
  async login(email, password) {
    tokens.set(await request("/auth/token/", { method: "POST", body: { email, password }, auth: false }));
  },
  register: (payload) => request("/auth/register/", { method: "POST", body: payload, auth: false }),
};

// Usuários
export const userApi = {
  me: () => request("/users/me/"),
  update: (payload) => request("/users/me/", { method: "PATCH", body: payload }),
  summary: () => request("/users/me/summary/"),
  changePassword: (payload) => request("/users/me/change-password/", { method: "POST", body: payload }),
};

// Registrar descarte
export const disposalApi = {
  categories: () => request("/disposals/categories/", { auth: false }),
  trashByCode: (code) => request(`/collection-points/trash-bins/by-code/${encodeURIComponent(code)}/`),
  create: (formData) => request("/disposals/", { method: "POST", body: formData }),
  async list() { 
    const all = [];
    for (let page = 1; ; page++) {
      const d = await request(`/disposals/?page=${page}`);
      all.push(...d.results);
      if (!d.next) return all;
    }
  },
};

// Ranking
export const rankingApi = { 
  list: () => request("/ranking/", { auth: false }) 
};

// Dashboard
export const dashboardApi = { 
  statistics: (period) => request(`/dashboard/statistics/?period=${period}`) 
};

async function fetchAll(path, options) {
  const all = [];
  for (let page = 1; ; page++) {
    const sep = path.includes("?") ? "&" : "?";
    const d = await request(`${path}${sep}page=${page}`, options);
    all.push(...d.results);
    if (!d.next) return all;
  }
}

// Lixeiras
export const collectionApi = {
  points: () => fetchAll("/collection-points/", { auth: false }),
};

// Lixeira
export const trashBinApi = {
  update: (id, payload) =>
    request(`/collection-points/trash-bins/${id}/`, { method: "PATCH", body: payload }),
};

// Notificações
const READ_KEY = "greenup:readBinAlerts";

const loadReadBins = () => {
  try {
    return JSON.parse(localStorage.getItem(READ_KEY) ?? "[]");
  } catch {
    return [];
  }
};

const saveReadBins = (codes) => {
  try {
    localStorage.setItem(READ_KEY, JSON.stringify(codes));
  } catch {}
};

export const notificationApi = {
  // Uma notificação para cada lixeira que está no nível 4
  list: async () => {
    const points = await collectionApi.points();

    const fullBins = (points ?? [])
      .flatMap((p) => p.trashBins ?? [])
      .filter((b) => b.occupancyLevel === 4);

    // Só lembra como "lida" a lixeira que continua no nível 4
    const readBins = loadReadBins().filter((code) =>
      fullBins.some((b) => b.code === code)
    );
    saveReadBins(readBins);

    const now = new Date().toISOString();

    return fullBins.map((b) => ({
      id: `bin-${b.code}`,
      notification_type: "COLLECTION_REQUIRED",
      message: `A lixeira ${b.code} atingiu o nível 4 e precisa de coleta.`,
      trashCode: b.code,
      createdAt: now,
      readAt: readBins.includes(b.code) ? now : null,
    }));
  },

  // "Marcar como lida" fica salvo no navegador
  markRead: async (id) => {
    const code = String(id).replace(/^bin-/, "");
    const readBins = loadReadBins();
    if (!readBins.includes(code)) saveReadBins([...readBins, code]);
    return null;
  },
};