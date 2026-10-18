import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import ScreenLayout from "../../../shared/components/ScreenLayout";
import { notificationApi } from "../../../shared/api/endpoints"
import { errorMessage } from "../../../shared/api/http";
import { formatDateTime } from "../../../shared/formatDate";
import { RESTRICTED_MESSAGE, notificationTitle } from "../../../shared/notifications";

export default function NotificationsPage() {
  const navigate = useNavigate();
  const [items, setItems] = useState(null);
  const [error, setError] = useState("");
  const [onlyUnread, setOnlyUnread] = useState(false);

  // 

const load = useCallback(async () => {
  try {
    const list = await notificationApi.list();
    setItems(Array.isArray(list) ? list : []);
    setError("");
  } catch (err) {
    console.error("Erro ao carregar notificações:", err);

    setItems([]);
    setError(
      err?.status === 403
        ? "Esta área é destinada a gestores (Telas de gestores em andamento)."
        : errorMessage(err)
    );
  }
}, []);

  useEffect(() => {
    load();
  }, [load]);
  const markRead = async n => {
    try {
      await notificationApi.markRead(n.id); 
      setItems(prev => prev.map(x => x.id === n.id ? {
        ...x,
        readAt: new Date().toISOString()
      } : x));
    } catch (err) {
      toast.error(errorMessage(err));
    }
  };
  const markAllRead = async () => {
    const unread = (items ?? []).filter(n => !n.readAt);
    try {
      await Promise.all(unread.map(n => notificationApi.markRead(n.id)));
      toast.success("Todas as notificações foram marcadas como lidas.");
      load();
    } catch (err) {
      toast.error(errorMessage(err));
    }
  };
  const unreadCount = (items ?? []).filter(n => !n.readAt).length;
  const visible = (items ?? []).filter(n => !onlyUnread || !n.readAt);
  return _jsxs(ScreenLayout, {
    title: "Notificações",
    children: [error && _jsx("p", {
      className: "text-sm rounded-2xl p-4",
      style: {
        background: "#FCEEE1",
        color: "#B8502B"
      },
      children: error
    }), _jsxs("div", {
      className: "flex items-center justify-between gap-2",
      children: [_jsx("div", {
        className: "flex gap-2",
        children: [{
          label: "Todas",
          value: false
        }, {
          label: `Não lidas (${unreadCount})`,
          value: true
        }].map(t => _jsx("button", {
          onClick: () => setOnlyUnread(t.value),
          className: "text-xs px-3 py-2 rounded-full transition",
          style: {
            background: onlyUnread === t.value ? "#6F9A7C" : "#f3f3f3",
            color: onlyUnread === t.value ? "#fff" : "#555"
          },
          children: t.label
        }, t.label))
      }), unreadCount > 0 && _jsx("button", {
        onClick: markAllRead,
        className: "text-xs underline",
        style: {
          color: "#B8502B"
        },
        children: "Marcar todas como lidas"
      })]
    
    }), items === null && _jsx("p", {
      className: "text-sm text-gray-500",
      children: "Carregando…"
    }), items !== null && visible.length === 0 && _jsx("p", {
      className: "text-sm text-gray-500",
      children: "Nenhuma notificação por aqui."
    }), (items ?? []).filter(n => !onlyUnread || !n.readAt).map(n => _jsxs("div", {
      className: "rounded-2xl p-4",
      style: {
        background: "#FCEEE1",
        borderLeft: `5px solid ${n.readAt ? "#d4d4d4" : "#B8502B"}`
      },
      children: [
      _jsx("p", {
        className: "text-sm font-semibold text-black",
        children: notificationTitle(n)
      }), 
      _jsx("p", {
        className: "text-xs text-gray-700 mt-1",
        children: n.message
      }), 
      _jsx("p", {
        className: "text-xs text-gray-500 mt-1",
        children: formatDateTime(n.createdAt)
      }), 
      _jsxs("div", {
        className: "flex gap-2 mt-3",
        children: [
          _jsx("button", {
          onClick: () => navigate(`/trash-bins?code=${encodeURIComponent(n.trashCode)}`),
          className: "text-xs px-3 py-2 rounded-full text-white",
          style: {
            background: "#6F9A7C"
          },
          children: "Ver lixeira"
        }), !n.readAt && 
        _jsx("button", {
          onClick: () => markRead(n),
          className: "text-xs px-3 py-2 rounded-full bg-white border border-gray-300 text-gray-700",
          children: "Marcar como lida"
        })]
      })]
    }, n.id))]
  });
}
