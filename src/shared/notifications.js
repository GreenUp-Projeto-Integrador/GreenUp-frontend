const TYPE_LABEL = { COLLECTION_REQUIRED: "Coleta necessária" };

export const notificationTitle = (n) =>
    `${TYPE_LABEL[n.notification_type] ?? "Notificação"} — lixeira ${n.trashCode}`;

export const RESTRICTED_MESSAGE =
    "Esta área é destinada a gestores (Telas de gestores em andamento).";