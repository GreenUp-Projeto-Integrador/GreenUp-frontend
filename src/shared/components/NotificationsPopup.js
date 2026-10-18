import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { errorMessage } from "../api/http";
import { notificationApi } from "../api/endpoints";
import { formatDateTime } from "../formatDate";
import { RESTRICTED_MESSAGE, notificationTitle } from "../notifications";

export default function NotificationsPopup({
  onClose
}) {
  const navigate = useNavigate();
  const [items, setItems] = useState(null); 
  const [error, setError] = useState("");
  useEffect(() => {
    notificationApi.list().then(setItems).catch(err => {
      setItems([]);
      setError(err.status === 403 ? RESTRICTED_MESSAGE : errorMessage(err));
    });
  }, []);
  useEffect(() => {
    const onKey = e => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  const openAll = () => {
    onClose();
    navigate("/notifications");
  };
  const openOne = n => {
    if (!n.readAt) notificationApi.markRead(n.id).catch(() => {});
    openAll();
  };
  return _jsx("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center px-6",
    style: {
      backgroundColor: "rgba(0,0,0,0.4)"
    },
    onClick: e => e.target === e.currentTarget && onClose(),
    role: "dialog",
    "aria-modal": "true",
    "aria-label": "Notificações",
    children: _jsxs("div", {
      className: "bg-white w-full max-w-sm overflow-hidden",
      style: {
        borderRadius: 20,
        boxShadow: "0 20px 60px rgba(0,0,0,.15)",
        animation: "fadeScale 0.3s ease-out"
      },
      children: [_jsxs("div", {
        className: "flex items-center justify-between px-5 py-4",
        style: {
          borderBottom: "1px solid #f0f0f0"
        },
        children: [_jsx("h2", {
          className: "text-base font-semibold",
          style: {
            color: "#6F9A7C"
          },
          children: "Notificações"
        }), _jsx("button", {
          onClick: onClose,
          "aria-label": "Fechar",
          className: "text-white text-sm font-bold flex items-center justify-center",
          style: {
            backgroundColor: "#6F9A7C",
            width: 32,
            height: 32,
            borderRadius: "50%"
          },
          children: "✕"
        })]
      }), 
      _jsxs("div", {
        className: "px-3 py-2",
        style: {
          maxHeight: "55vh",
          overflowY: "auto"
        },
        children: [items === null && _jsx("p", {
          className: "text-sm text-gray-500 p-3",
          children: "Carregando…"
        }), items !== null && error && _jsx("p", {
          className: "text-sm p-3",
          style: {
            color: "#B8502B"
          },
          children: error
        }), items !== null && !error && items.length === 0 && _jsx("p", {
          className: "text-sm text-gray-500 p-3",
          children: "Você não tem notificações."
        }), items !== null && !error && _jsx("p", {
          className: "text-xs text-gray-500 px-3 pb-2",
          children: RESTRICTED_MESSAGE
        }), (items ?? []).slice(0, 5).map(n => _jsxs("button", {
          onClick: () => openOne(n),
          className: "w-full text-left flex items-start gap-3 px-3 py-3 rounded-xl transition hover:bg-gray-50 font-normal",
          children: [_jsx("span", {
            className: "mt-1.5 shrink-0",
            style: {
              width: 9,
              height: 9,
              borderRadius: "50%",
              background: n.readAt ? "#d4d4d4" : "#B8502B"
            }
          }),
          _jsxs("span", {
            children: [_jsx("span", {
              className: "block text-sm font-medium text-black",
              children: notificationTitle(n)
            }), _jsx("span", {
              className: "block text-xs text-gray-500",
              children: formatDateTime(n.createdAt)
            })]
          })]
        }, n.id))]
      }), _jsx("div", {
        className: "p-4",
        style: {
          borderTop: "1px solid #f0f0f0"
        },
        children: _jsx("button", {
          onClick: openAll,
          className: "w-full text-white py-3 rounded-full font-semibold text-sm transition hover:opacity-90",
          style: {
            backgroundColor: "#6F9A7C"
          },
          children: "Ver todas as notificações"
        })
      })]
    })
  });
}
