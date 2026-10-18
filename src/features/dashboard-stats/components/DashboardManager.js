import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useNavigate } from "react-router";
import { comingSoon } from "../../../shared/comingSoon";
import { LevelBar, StatusChip } from "../../trash-bins/components/TrashBinParts";

const card = {
  background: "#FCEEE1",
  
  borderRadius: 16,
  padding: 12
};
function Stat({
  label,
  value
}) {
  return _jsxs("div", {
    style: card,
    children: [_jsx("p", {
      className: "text-xl font-bold",
      style: {
        color: "#04344A"
      },
      children: value ?? "—"
    }), _jsx("p", {
      className: "text-xs text-gray-600",
      children: label
    })]
  });
}


export default function DashboardManager({
  totals,
  summary,
  points
}) {
  const navigate = useNavigate();
  const bins = (points ?? []).flatMap(p => p.trashBins.map(b => ({
    ...b,
    pointName: p.name
  })));
  const avg = totals?.averageQuantity;
  return _jsxs(_Fragment, {
    children: [_jsxs("div", {
      children: [_jsx("h2", {
        className: "text-base font-semibold text-black mb-3",
        children: "Resumo do período"
      }), _jsxs("div", {
        className: "grid grid-cols-2 gap-3",
        children: [_jsx(Stat, {
          label: "Total de descartes",
          value: totals?.disposals
        }), _jsx(Stat, {
          label: "Média de itens por descarte",
          value: avg != null ? Number(avg).toLocaleString("pt-BR", {
            maximumFractionDigits: 1
          }) : null
        })]
      })]
    }), _jsxs("div", {
      children: [_jsx("h2", {
        className: "text-base font-semibold text-black mb-3",
        children: "Seu desempenho"
      }), _jsxs("div", {
        className: "grid grid-cols-3 gap-3",
        children: [_jsx(Stat, {
          label: "Pontos",
          value: summary?.points
        }), _jsx(Stat, {
          label: "Nível",
          value: summary?.level
        }), _jsx(Stat, {
          label: "Descartes",
          value: summary?.disposalsCount
        })]
      })]
    }), _jsxs("div", {
      children: [_jsxs("div", {
        className: "flex items-center justify-between mb-3",
        children: [_jsx("h2", {
          className: "text-base font-semibold text-black",
          children: "Lixeiras"
        }), _jsx("button", {
          onClick: () => navigate("/trash-bins"),
          className: "text-xs underline",
          style: {
            color: "#B8502B"
          },
          children: "Gerenciar lixeiras"
        })]
      }), bins.length === 0 && _jsx("p", {
        className: "text-sm text-gray-500",
        children: "Nenhuma lixeira cadastrada."
      }), _jsx("div", {
        className: "space-y-3",
        children: bins.map(b => _jsxs("div", {
          className: "rounded-2xl p-3 border border-gray-200",
          children: [_jsxs("div", {
            className: "flex items-center justify-between",
            children: [_jsxs("p", {
              className: "text-sm font-semibold text-black",
              children: [b.code, " ", _jsxs("span", {
                className: "text-xs font-normal text-gray-500",
                children: ["· ", b.pointName]
              })]
            }), _jsx(StatusChip, {
              status: b.status
            })]
          }), _jsx("div", {
            className: "mt-2",
            children: _jsx(LevelBar, {
              level: b.occupancyLevel
            })
          }), _jsx("button", {
            onClick: () => comingSoon("Histórico de descartes da lixeira"),
            className: "mt-2 text-xs underline text-gray-600",
            children: "Histórico de descartes"
          })]
        }, b.id))
      })]
    }), _jsx("div", {
      children: _jsx("button", {
        onClick: () => comingSoon("Geração de relatórios"),
        className: "w-full text-white py-3 rounded-full font-semibold text-sm transition hover:opacity-90",
        style: {
          background: "#B8502B"
        },
        children: "Gerar relatório"
      })
    })]
  });
}
