import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

const avatarColors = [
  "bg-yellow-400",
  "bg-purple-400",
  "bg-pink-400",
  "bg-green-400",
  "bg-blue-400",
  "bg-orange-400",
  "bg-indigo-400",
];

export default function RankingView({ ranking, onBack }) {
  return _jsxs("div", {
    className: "relative size-full bg-white overflow-hidden",
    children: [

      // Header
      _jsxs("div", {
        className: "absolute top-0 left-0 right-0 h-36 px-6 pt-4",
        children: [
          _jsx("button", {
            onClick: onBack,
            style: { color: "#B8502B", fontSize: "60px" },
            className: "text-2xl mb-2",
            children: "‹",
          }),
          _jsx("div", {
            className: "flex flex-col items-center",
            children: _jsx("div", {
              className: "text-4xl",
              children: "🏆",
            }),
          }),
          _jsx("h1", {
            className: "text-xl font-semibold text-center text-black mt-1",
            children: "Ranking",
          }),
        ],
      }),

      // Lista
      _jsx("div", {
        className: "absolute top-36 left-0 right-0 bottom-0 overflow-y-auto px-6 py-3 space-y-2",
        children: ranking.map((user, index) =>
          _jsx("div", {
            className: "bg-white rounded-xl px-4 py-3 flex items-center gap-3",
            style: { borderBottom: "1px solid #f0f0f0" },
            children: _jsxs("div", {
              className: "flex-1 flex items-center gap-3",
              children: [

                _jsx("div", {
                  className: "text-lg font-bold w-6 text-center",
                  style: { color: "#B8502B" }, 
                  children:
                    user.position === 1 ? "🥇" :
                    user.position === 2 ? "🥈" :
                    user.position === 3 ? "🥉" :
                    _jsx("span", { className: "text-sm font-semibold", style: { color: "#999" }, children: user.position }),
                }),

                // Avatar
                _jsx("div", {
                  className: `${avatarColors[index % avatarColors.length]} rounded-full w-11 h-11 flex items-center justify-center text-white font-bold text-sm overflow-hidden`,
                  children: user.avatar,
                }),

                _jsx("p", {
                  className: "flex-1 font-semibold text-black text-sm",
                  children: user.name,
                }),

                _jsx("p", {
                  className: "text-sm font-normal",
                  style: { color: "#5B8FA8" },
                  children: `${user.points} pts`,
                }),

              ],
            }),
          }, user.id)
        ),
      }),
    ],
  });
}