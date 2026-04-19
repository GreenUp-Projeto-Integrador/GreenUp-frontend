import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function DashboardStatsView({ data, onBack }) {
  return _jsxs("div", {
    className: "relative size-full bg-white overflow-hidden flex flex-col",
    children: [
      // Header
      _jsxs("div", {
        className: "h-20 px-6 pt-4 flex items-center gap-4 border-b",
        children: [
          _jsx("button", {
            onClick: onBack,
            className: "text-2xl text-orange-600",
            children: "‹",
          }),
          _jsx("h1", {
            className: "text-2xl font-bold text-black",
            children: "Dashboard",
          }),
        ],
      }),
      // Content
      _jsx("div", {
        className: "flex-1 overflow-y-auto px-6 py-6 space-y-6",
        children: _jsxs("div", {
          className: "space-y-6",
          children: [
            // Line chart
            _jsxs("div", {
              children: [
                _jsx("h2", {
                  className: "text-lg font-bold text-black mb-4",
                  children: "Descartes realizados",
                }),
                _jsx("p", {
                  className: "text-sm text-gray-600 mb-4",
                  children: "Últimos 6 meses",
                }),
                _jsx(ResponsiveContainer, {
                  width: "100%",
                  height: 250,
                  children: _jsx(LineChart, {
                    data: data.disposals,
                    children: _jsxs("g", {
                      children: [
                        _jsx(CartesianGrid, {
                          strokeDasharray: "3 3",
                          stroke: "#e5e7eb",
                        }),
                        _jsx(XAxis, { dataKey: "month", stroke: "#6b7280" }),
                        _jsx(YAxis, { stroke: "#6b7280" }),
                        _jsx(Tooltip, {
                          contentStyle: {
                            backgroundColor: "#f3f4f6",
                            border: "1px solid #e5e7eb",
                            borderRadius: "8px",
                          },
                        }),
                        _jsx(Line, {
                          type: "monotone",
                          dataKey: "count",
                          stroke: "#f8c78d",
                          strokeWidth: 3,
                          dot: { fill: "#f8c78d", r: 5 },
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
            // Pie chart
            _jsxs("div", {
              children: [
                _jsx("h2", {
                  className: "text-lg font-bold text-black mb-4",
                  children: "Tipos mais frequentes",
                }),
                _jsx(ResponsiveContainer, {
                  width: "100%",
                  height: 250,
                  children: _jsx(PieChart, {
                    children: _jsxs("g", {
                      children: [
                        _jsx(Pie, {
                          data: data.categories,
                          cx: "50%",
                          cy: "50%",
                          innerRadius: 60,
                          outerRadius: 90,
                          paddingAngle: 5,
                          dataKey: "value",
                          children: data.categories.map((entry, index) =>
                            _jsx(Cell, { fill: entry.color }, index)
                          ),
                        }),
                        _jsx(Tooltip, {
                          contentStyle: {
                            backgroundColor: "#f3f4f6",
                            border: "1px solid #e5e7eb",
                            borderRadius: "8px",
                          },
                        }),
                      ],
                    }),
                  }),
                }),
                _jsx("div", {
                  className: "mt-4 space-y-2 text-sm",
                  children: data.categories.map((cat) =>
                    _jsxs(
                      "div",
                      {
                        className: "flex items-center gap-2",
                        children: [
                          _jsx("div", {
                            className: "w-3 h-3 rounded-full",
                            style: { backgroundColor: cat.color },
                          }),
                          _jsx("span", {
                            className: "text-gray-700",
                            children: `${cat.name} - ${cat.value}%`,
                          }),
                        ],
                      },
                      cat.name
                    )
                  ),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
