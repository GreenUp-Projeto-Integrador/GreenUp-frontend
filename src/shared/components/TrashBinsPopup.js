import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { collectionApi } from "../api/endpoints";
import { errorMessage } from "../api/http";
import { LEVEL_COLOR } from "../trashBinStatus";

const MANAGER_NOTICE = "Esta área é destinada a gestores (Telas de gestores em andamento).";

export default function TrashBinsPopup({
  onClose
}) {
  const navigate = useNavigate();
  const [bins, setBins] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    collectionApi.points().then(points => {
      const list = (points ?? []).flatMap(p => p.trashBins ?? []);
      setBins(list);
    }).catch(err => {
      setBins([]);
      setError(errorMessage(err));
    });
  }, []);
  useEffect(() => {
    const onKey = e => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  const openAll = () => {
    onClose();
    navigate("/trash-bins");
  };
  const openOne = b => {
    onClose();
    navigate(`/trash-bins?code=${encodeURIComponent(b.code)}`);
  };
  return _jsx("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center px-6",
    style: {
      backgroundColor: "rgba(0,0,0,0.4)"
    },
    onClick: e => e.target === e.currentTarget && onClose(),
    role: "dialog",
    "aria-modal": "true",
    "aria-label": "Lixeiras",
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
          children: "Lixeiras"
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
      }), _jsxs("div", {
        className: "px-3 py-2",
        style: {
          maxHeight: "55vh",
          overflowY: "auto"
        },
        children: [_jsx("p", {
          className: "text-xs text-gray-500 px-3 pt-1 pb-2",
          children: MANAGER_NOTICE
        }), bins === null && _jsx("p", {
          className: "text-sm text-gray-500 p-3",
          children: "Carregando…"
        }), bins !== null && error && _jsx("p", {
          className: "text-sm p-3",
          style: {
            color: "#B8502B"
          },
          children: error
        }), bins !== null && !error && bins.length === 0 && _jsx("p", {
          className: "text-sm text-gray-500 p-3",
          children: "Nenhuma lixeira encontrada."
        }), (bins ?? []).slice(0, 5).map(b => _jsxs("button", {
          onClick: () => openOne(b),
          className: "w-full text-left flex items-center gap-3 px-3 py-3 rounded-xl transition hover:bg-gray-50 font-normal",
          children: [_jsx("span", {
            className: "shrink-0",
            style: {
              width: 9,
              height: 9,
              borderRadius: "50%",
              background: LEVEL_COLOR[b.occupancyLevel] ?? "#d4d4d4"
            }
          }), _jsxs("span", {
            className: "block text-sm font-medium text-black",
            children: [b.code, " - Nível ", b.occupancyLevel]
          })]
        }, b.id))]
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
          children: "Ver todas as lixeiras"
        })
      })]
    })
  });
}