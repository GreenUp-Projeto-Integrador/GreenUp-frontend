import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import DashboardStatsView from "../views/DashboardStatsView";
import { errorMessage } from "../../../shared/api/http";
import { dashboardApi, userApi, collectionApi } from "../../../shared/api/endpoints";
import DashboardManager from "../components/DashboardManager";

const COLORS = [ "#2D6A6A", "#E8894A", "#C14600", "#F8C78D", "#6F9A7C", "#A8D5B5",];
const MONTHS = { Jan: "Jan", Feb: "Fev", Mar: "Mar", Apr: "Abr", May: "Mai", Jun: "Jun", Jul: "Jul", Aug: "Ago", Sep: "Set", Oct: "Out", Nov: "Nov", Dec: "Dez",};
const NO_DATA = { last6months: "—", lastMonth: "—", last3months: "—", lastTime: "—",};

const adapt = (raw) => ({
  totals: raw.totals, 
  disposals: (raw.disposals ?? []).map((d) => ({
    ...d,
    month: MONTHS[d.month] ?? d.month,
  })),

  categories: (raw.categories ?? []).map((c, i) => ({
    ...c,
    color: COLORS[i % COLORS.length],
  })),

  avgTimeToLevel4: NO_DATA,
  avgTimeToCollect: NO_DATA,
});

export default function DashboardStatsPage() {
  const navigate = useNavigate();

  const [period, setPeriod] = useState("6months");
  const [summary, setSummary] = useState(null);
  const [points, setPoints] = useState(null);

    // Integração
  useEffect(() => {
    userApi.summary().then(setSummary).catch(() => {});
    collectionApi.points().then(setPoints).catch(() => {});
  }, []);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    let active = true;

    setLoading(true);
    setLoadError(false);

    dashboardApi
      .statistics(period)
      .then((raw) => {
        if (active) {
          setData(adapt(raw));
        }
      })
      .catch((err) => {
        if (active) {
          toast.error(errorMessage(err));
          setLoadError(true);
        }
      })
      .finally(() => {
        if (active) {
          setLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, [period]);

  const handleBack = () => {
    navigate("/main");
  };

  if (loading && !data) {
    return _jsx("p", {
      className: "p-6 text-sm",
      children: "Carregando estatísticas…",
    });
  }

  if (loadError && !data) {
    return _jsxs("div", {
      className: "p-6",
      children: [
        _jsx("p", {
          className: "text-sm text-red-600 mb-4",
          children: "Não foi possível carregar as estatísticas.",
        }),
        _jsx("button", {
          onClick: handleBack,
          children: "Voltar",
        }),
      ],
    });
  }

  return _jsxs("div", {
    className: "relative size-full overflow-hidden bg-white",
    children: [
      _jsx(DashboardStatsView, {
        data: data,
        onBack: handleBack,
        onIntervalChange: setPeriod,
        footer: _jsx(DashboardManager, { totals: data.totals, summary, points }),
      }),
    ],
  });
}