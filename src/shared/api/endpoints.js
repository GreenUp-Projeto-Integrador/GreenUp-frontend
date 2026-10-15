import { request } from "./http";
import { tokens } from "./tokens";

export const authApi = {
  async login(email, password) {
    tokens.set(await request("/auth/token/", { method: "POST", body: { email, password }, auth: false }));
  },
  register: (payload) => request("/auth/register/", { method: "POST", body: payload, auth: false }),
};

export const userApi = {
  me: () => request("/users/me/"),
  update: (payload) => request("/users/me/", { method: "PATCH", body: payload }),
  summary: () => request("/users/me/summary/"),
  changePassword: (payload) => request("/users/me/change-password/", { method: "POST", body: payload }),
};

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

export const rankingApi = { list: () => request("/ranking/", { auth: false }) };
export const dashboardApi = { statistics: (period) => request(`/dashboard/statistics/?period=${period}`) };