import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { toast } from "sonner";
import ScreenLayout from "../../../shared/components/ScreenLayout";
import { collectionApi, trashBinApi } from "../../../shared/api/endpoints";
import { errorMessage } from "../../../shared/api/http";
import { comingSoon } from "../../../shared/comingSoon";
import { STATUS_LABEL } from "../../../shared/trashBinStatus";
import { LevelBar, StatusChip } from "../components/TrashBinParts";
const FILTERS = [{
  value: "ALL",
  label: "Todas"
}, ...Object.entries(STATUS_LABEL).map(([value, label]) => ({
  value,
  label
}))];

// Tela do gestor: situação de cada lixeira e as ações de responsabilidade dele.
export default function TrashBinsPage() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [points, setPoints] = useState(null);
  const [filter, setFilter] = useState("ALL");
  const [query, setQuery] = useState(params.get("code") ?? "");
  const [busyId, setBusyId] = useState(null);

  // GET /collection-points/ já traz cada ponto com as suas lixeiras (código, nível e status)
  const load = useCallback(() => collectionApi.points().then(setPoints).catch(e => {
    toast.error(errorMessage(e));
    setPoints([]);
  }), []);
  useEffect(() => {
    load();
  }, [load]);
  const bins = useMemo(() => (points ?? []).flatMap(p => p.trashBins.map(b => ({
    ...b,
    pointName: p.name,
    address: p.address
  }))), [points]);
  const count = status => bins.filter(b => b.status === status).length;
  const visible = bins.filter(b => (filter === "ALL" || b.status === filter) && (!query || b.code.toLowerCase().includes(query.toLowerCase())));

  // PATCH /collection-points/trash-bins/<id>/ (só gestor/admin)
  const update = async (bin, payload, okMessage) => {
    try {
      setBusyId(bin.id);
      await trashBinApi.update(bin.id, payload);
      toast.success(okMessage);
      await load();
    } catch (err) {
      toast.error(err.status === 403 ? "Apenas gestores podem alterar lixeiras." : errorMessage(err));
    } finally {
      setBusyId(null);
    }
  };
  const pill = "text-xs px-3 py-2 rounded-full transition disabled:opacity-50";
  return _jsxs(ScreenLayout, {
    title: "Lixeiras",
    actions: _jsx("button", {
      onClick: () => comingSoon("Geração de relatórios"),
      className: "text-xs px-3 py-2 rounded-full text-white",
      style: {
        background: "#B8502B"
      },
      children: "Gerar relatório"
    }),
    children: [_jsx("div", {
      className: "grid grid-cols-2 gap-3",
      children: [{
        label: "Total de lixeiras",
        value: bins.length,
        color: "#04344A"
      }, {
        label: "Coleta necessária",
        value: count("COLLECTION_REQUIRED"),
        color: "#B8502B"
      }, {
        label: "Disponíveis",
        value: count("AVAILABLE"),
        color: "#6F9A7C"
      }, {
        label: "Em manutenção",
        value: count("MAINTENANCE"),
        color: "#8A8A8A"
      }].map(c => _jsxs("div", {
        className: "rounded-2xl p-3",
        style: {
          background: "#FCEEE1"
        },
        children: [_jsx("p", {
          className: "text-2xl font-bold",
          style: {
            color: c.color
          },
          children: points === null ? "…" : c.value
        }), _jsx("p", {
          className: "text-xs text-gray-600",
          children: c.label
        })]
      }, c.label))
    }), _jsx("input", {
      value: query,
      onChange: e => setQuery(e.target.value),
      maxLength: 30,
      placeholder: "Buscar pelo código da lixeira",
      className: "w-full p-3 border border-gray-300 rounded-lg focus:outline-none text-sm text-gray-600"
    }), _jsx("div", {
      className: "flex flex-wrap gap-2",
      children: FILTERS.map(f => _jsx("button", {
        onClick: () => setFilter(f.value),
        className: "text-xs px-3 py-2 rounded-full",
        style: {
          background: filter === f.value ? "#6F9A7C" : "#f3f3f3",
          color: filter === f.value ? "#fff" : "#555"
        },
        children: f.label
      }, f.value))
    }), points === null && _jsx("p", {
      className: "text-sm text-gray-500",
      children: "Carregando lixeiras…"
    }), points !== null && visible.length === 0 && _jsx("p", {
      className: "text-sm text-gray-500",
      children: "Nenhuma lixeira encontrada."
    }), visible.map(b => _jsxs("div", {
      className: "rounded-2xl p-4 border border-gray-200",
      "data-testid": `bin-${b.code}`,
      children: [_jsxs("div", {
        className: "flex items-start justify-between gap-2",
        children: [_jsxs("div", {
          children: [_jsxs("p", {
            className: "text-base font-semibold text-black",
            children: ["Lixeira ", b.code]
          }), _jsx("p", {
            className: "text-xs text-gray-600",
            children: b.pointName
          }), _jsx("p", {
            className: "text-xs text-gray-400",
            children: b.address
          })]
        }), _jsx(StatusChip, {
          status: b.status
        })]
      }), _jsx("div", {
        className: "mt-3",
        children: _jsx(LevelBar, {
          level: b.occupancyLevel
        })
      }), _jsxs("div", {
        className: "flex flex-wrap gap-2 mt-4",
        children: [(b.status === "COLLECTION_REQUIRED" || b.occupancyLevel >= 3) && _jsx("button", {
          disabled: busyId === b.id,
          onClick: () => update(b, {
            occupancyLevel: 1,
            status: "AVAILABLE"
          }, `Coleta confirmada na lixeira ${b.code}.`),
          className: `${pill} text-white`,
          style: {
            background: "#6F9A7C"
          },
          children: "Confirmar coleta"
        }), b.status === "MAINTENANCE" ? _jsx("button", {
          disabled: busyId === b.id,
          onClick: () => update(b, {
            status: "AVAILABLE"
          }, `Lixeira ${b.code} reativada.`),
          className: `${pill} bg-white border border-gray-300 text-gray-700`,
          children: "Reativar"
        }) : _jsx("button", {
          disabled: busyId === b.id,
          onClick: () => update(b, {
            status: "MAINTENANCE"
          }, `Lixeira ${b.code} em manutenção.`),
          className: `${pill} bg-white border border-gray-300 text-gray-700`,
          children: "Pôr em manutenção"
        }), _jsx("button", {
          onClick: () => navigate("/map"),
          className: `${pill} bg-white border border-gray-300 text-gray-700`,
          children: "Ver no mapa"
        }), _jsx("button", {
          onClick: () => comingSoon("Histórico de descartes da lixeira"),
          className: `${pill} bg-white border border-gray-300 text-gray-700`,
          children: "Histórico de descartes"
        }), _jsx("button", {
          onClick: () => comingSoon("Histórico de coletas"),
          className: `${pill} bg-white border border-gray-300 text-gray-700`,
          children: "Histórico de coletas"
        })]
      })]
    }, b.id))]
  });
}
