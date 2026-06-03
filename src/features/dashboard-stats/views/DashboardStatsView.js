import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import AppHeader from "../../../shared/components/AppHeader"; // NOVO

// NOVO: opções do filtro de intervalo
const intervalOptions = [
  { label: "Último ano",    value: "year" },
  { label: "Últimos 6 meses", value: "6months" },
  { label: "Últimos 3 meses", value: "3months" },
  { label: "Último mês",    value: "month" },
  { label: "Todos os tempos", value: "all" },
];

// NOVO: componente reutilizável para os cards de tempo médio
function StatGrid({ items }) {
  return _jsx("div", {
    className: "grid grid-cols-2 gap-3",
    children: items.map(({ label, value }) =>
      _jsxs("div", {
        className: "bg-white rounded-2xl px-4 py-4",
        style: { boxShadow: "0 2px 12px rgba(0,0,0,0.07)" },
        children: [
          _jsx("p", {
            className: "text-xs text-gray-500 mb-1",
            children: label,
          }),
          _jsx("p", {
            className: "text-2xl font-semibold",
            style: { color: "#B8502B"}, // cor laranja dos valores
            children: value,
          }),
        ],
      }, label)
    ),
  });
}

export default function DashboardStatsView({ data, onBack }) {
  // NOVO: estado para controlar o intervalo selecionado e dropdown aberto
  const [selectedInterval, setSelectedInterval] = useState("6months");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const selectedLabel = intervalOptions.find(o => o.value === selectedInterval)?.label;

  return _jsxs("div", {
    className: "relative size-full bg-white overflow-hidden flex flex-col",
    children: [
      // AppHeader
      _jsx(AppHeader, {}),
      // NOVO: espaçador para empurrar conteúdo abaixo do AppHeader (que tem top-[71px] + h-[45px])
      _jsx("div", { className: "h-[130px] shrink-0" }),
      // Header
      _jsxs("div", {
        className: "h-16 px-6 pt-4 flex items-center gap-4",
        // MUDANÇA: era "h-20 border-b" → "h-16" sem borda
        children: [
          _jsx("button", {
            onClick: onBack,
            style: { color: "#B8502B", fontSize: "60px" }, // MUDANÇA: era "text-orange-600" → cor exata
            className: "text-2xl",
            children: "‹",
          }),
          _jsx("h1", {
            className: "text-xl font-semibold text-black mt-2", // MUDANÇA: era "text-2xl font-bold"
            children: "Dashboard",
          }),
        ],
      }),

      // Conteúdo
      _jsx("div", {
        className: "flex-1 overflow-y-auto px-6 py-4 space-y-8",
        children: _jsxs("div", {
          className: "space-y-8",
          children: [

            // ── Bloco 1: Gráfico de linha ──
            _jsxs("div", {
              children: [
                _jsx("h2", {
                  className: "text-base font-semibold text-black mb-3",
                  // MUDANÇA: era "text-lg font-bold"
                  children: "Descartes realizados",
                }),

                // NOVO: dropdown de intervalo
                _jsxs("div", {
                  className: "relative mb-4",
                  children: [
                    _jsx("button", {
                      onClick: () => setDropdownOpen(!dropdownOpen),
                      className: "flex items-center justify-between w-36 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 bg-white",
                      children: _jsxs("span", {
                        className: "flex items-center justify-between w-full gap-2",
                        children: [
                          _jsx("span", { children: "Intervalo" }),
                          _jsx("span", { children: dropdownOpen ? "∧" : "∨" }),
                        ],
                      }),
                    }),
                    dropdownOpen && _jsx("div", {
                      className: "absolute top-10 left-0 bg-white border border-gray-200 rounded-xl shadow-lg z-10 w-48 overflow-hidden",
                      children: intervalOptions.map(opt =>
                        _jsx("button", {
                          onClick: () => { setSelectedInterval(opt.value); setDropdownOpen(false); },
                          className: "w-full text-left px-4 py-2.5 text-sm transition",
                          style: opt.value === selectedInterval
                            ? { backgroundColor: "#2D6A6A", color: "white" }
                            : { color: "#333" },
                          children: opt.label,
                        }, opt.value)
                      ),
                    }),
                  ],
                }),

                _jsx(ResponsiveContainer, {
                  width: "100%",
                  height: 220,
                  children: _jsxs(LineChart, {
                    data: data.disposals,
                    children: [
                      _jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#f0f0f0" }),
                      _jsx(XAxis, { dataKey: "month", stroke: "#aaa", tick: { fontSize: 12 } }),
                      _jsx(YAxis, { stroke: "#aaa", tick: { fontSize: 12 } }),
                      _jsx(Tooltip, {
                        contentStyle: { backgroundColor: "#fff", border: "1px solid #eee", borderRadius: "8px" },
                      }),
                      _jsx(Line, {
                        type: "monotone",
                        dataKey: "count",
                        stroke: "#B8502B", // MUDANÇA: era "#f8c78d" → laranja mais escuro
                        strokeWidth: 2,
                        dot: { fill: "#B8502B", r: 4 },
                      }),
                    ],
                  }),
                }),
              ],
            }),

            // ── Bloco 2: Gráfico de pizza ──
            _jsxs("div", {
              children: [
                _jsx("h2", {
                  className: "text-base font-semibold text-black mb-4",
                  // MUDANÇA: era "text-lg font-bold"
                  children: "Tipos mais frequentes",
                }),
                _jsx(ResponsiveContainer, {
                  width: "100%",
                  height: 220,
                  children: _jsxs(PieChart, {
                    children: [
                      _jsx(Pie, {
                        data: data.categories,
                        cx: "50%",
                        cy: "50%",
                        innerRadius: 0, // MUDANÇA: era "60" (donut) → "0" (pizza sólida como no protótipo)
                        outerRadius: 90,
                        paddingAngle: 2,
                        dataKey: "value",
                        children: data.categories.map((entry, index) =>
                          _jsx(Cell, { fill: entry.color }, index)
                        ),
                      }),
                      _jsx(Tooltip, {
                        contentStyle: { backgroundColor: "#fff", border: "1px solid #eee", borderRadius: "8px" },
                        formatter: (value) => [`${value}%`],
                      }),
                    ],
                  }),
                }),
                // Legenda
                _jsx("div", {
                  className: "mt-4 grid grid-cols-2 gap-x-4 gap-y-2",
                  // MUDANÇA: era "space-y-2" → grid 2 colunas como no protótipo
                  children: data.categories.map((cat) =>
                    _jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        _jsx("div", {
                          className: "w-3 h-3 rounded-full flex-shrink-0",
                          style: { backgroundColor: cat.color },
                        }),
                        _jsx("span", {
                          className: "text-xs text-gray-700",
                          // MUDANÇA: era "text-sm" → "text-xs"
                          children: cat.name,
                        }),
                      ],
                    }, cat.name)
                  ),
                }),
              ],
            }),

            // ── NOVO Bloco 3: Tempo médio para lixeiras atingirem nível 4 ──
            _jsxs("div", {
              children: [
                _jsx("h2", {
                  className: "text-base font-semibold text-black mb-3",
                  children: "Tempo médio para que as lixeiras atinjam o nível 4",
                }),
                _jsx(StatGrid, {
                  items: [
                    { label: "Últimos 6 meses", value: data.avgTimeToLevel4.last6months },
                    { label: "Mês passado",     value: data.avgTimeToLevel4.lastMonth },
                    { label: "Últimos 3 meses", value: data.avgTimeToLevel4.last3months },
                    { label: "Última vez",      value: data.avgTimeToLevel4.lastTime },
                  ],
                }),
              ],
            }),

            // ── NOVO Bloco 4: Tempo médio para coleta ──
            _jsxs("div", {
              children: [
                _jsx("h2", {
                  className: "text-base font-semibold text-black mb-1",
                  children: "Tempo médio para coleta",
                }),
                _jsx("p", {
                  className: "text-xs text-gray-400 mb-3",
                  children: "A partir do momento que a lixeira atinge o nível 4",
                }),
                _jsx(StatGrid, {
                  items: [
                    { label: "Últimos 6 meses", value: data.avgTimeToCollect.last6months },
                    { label: "Mês passado",     value: data.avgTimeToCollect.lastMonth },
                    { label: "Últimos 3 meses", value: data.avgTimeToCollect.last3months },
                    { label: "Última vez",      value: data.avgTimeToCollect.lastTime },
                  ],
                }),
              ],
            }),

          ],
        }),
      }),
    ],
  });
}