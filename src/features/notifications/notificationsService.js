
const CONFIG = {
  delayMs: 600,        
  simulateError: null  
};

const wait = (ms = CONFIG.delayMs) => new Promise(resolve => setTimeout(resolve, ms));

const makeError = (status, message) => {
  const err = new Error(message);
  err.status = status;
  return err;
};

const minutesAgo = min => new Date(Date.now() - min * 60 * 1000).toISOString();

let notifications = [
  {
    id: 1,
    notification_type: "COLLECTION_REQUIRED",
    trashCode: "A1",
    message: "A lixeira atingiu 95% da capacidade. Coleta necessária.",
    createdAt: minutesAgo(5),
    readAt: null
  },
  {
    id: 2,
    notification_type: "COLLECTION_REQUIRED",
    trashCode: "A2",
    message: "A lixeira atingiu 100% da capacidade. Coleta necessária.",
    createdAt: minutesAgo(32),
    readAt: null
  },
];

const sortedCopy = () =>
  [...notifications]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .map(n => ({ ...n }));

export const notificationApi = {

  async list() {
    await wait();

    if (CONFIG.simulateError === 403) {
      throw makeError(403, "Acesso negado às notificações.");
    }
    if (CONFIG.simulateError === 500) {
      throw makeError(500, "Erro interno do servidor.");
    }

    return sortedCopy();
  },

  async listRecent(limit = 1) {
    await wait(300);
    return sortedCopy().slice(0, limit);
  },

  async unreadCount() {
    await wait(150);
    return notifications.filter(n => !n.readAt).length;
  },

  async markRead(id) {
    await wait(300);

    const target = notifications.find(n => n.id === id);
    if (!target) {
      throw makeError(404, "Notificação não encontrada.");
    }
    if (!target.readAt) {
      target.readAt = new Date().toISOString();
    }
    return { ...target };
  },

  async markAllRead() {
    await wait(300);
    const now = new Date().toISOString();
    notifications = notifications.map(n => (n.readAt ? n : { ...n, readAt: now }));
    return sortedCopy();
  },

  async reset() {
    notifications = notifications.map(n => ({ ...n, readAt: null }));
  }
};

export default notificationApi;