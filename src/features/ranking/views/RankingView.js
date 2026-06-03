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
        // MUDANÇA: era "h-32" → "h-36" para dar espaço ao troféu + título
        children: [
          _jsx("button", {
            onClick: onBack,
            style: { color: "#B8502B", fontSize: "60px" }, // MUDANÇA: era "text-orange-600" → cor exata
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
            // MUDANÇA: era "text-2xl font-bold" → "text-xl font-semibold"
            children: "Ranking",
          }),
        ],
      }),

      // Lista
      _jsx("div", {
        className: "absolute top-36 left-0 right-0 bottom-0 overflow-y-auto px-6 py-3 space-y-2",
        // MUDANÇA: era "top-32 py-6 space-y-3" → "top-36 py-3 space-y-2"
        children: ranking.map((user, index) =>
          _jsx("div", {
            className: "bg-white rounded-xl px-4 py-3 flex items-center gap-3",
            style: { borderBottom: "1px solid #f0f0f0" },
            // MUDANÇA: era "bg-gray-100 rounded-lg p-4" → fundo branco com separador
            children: _jsxs("div", {
              className: "flex-1 flex items-center gap-3",
              children: [

                // Posição / medalha
                _jsx("div", {
                  className: "text-lg font-bold w-6 text-center",
                  style: { color: "#B8502B" }, // MUDANÇA: número da posição na cor laranja
                  children:
                    user.position === 1 ? "🥇" :
                    user.position === 2 ? "🥈" :
                    user.position === 3 ? "🥉" :
                    _jsx("span", { className: "text-sm font-semibold", style: { color: "#999" }, children: user.position }),
                }),

                // Avatar
                _jsx("div", {
                  className: `${avatarColors[index % avatarColors.length]} rounded-full w-11 h-11 flex items-center justify-center text-white font-bold text-sm overflow-hidden`,
                  // MUDANÇA: era "w-12 h-12" → "w-11 h-11", adicionado "overflow-hidden"
                  children: user.avatar,
                }),

                // Nome — ocupa o espaço restante
                _jsx("p", {
                  className: "flex-1 font-semibold text-black text-sm",
                  // MUDANÇA: era dentro de div com pontos abaixo → agora nome e pontos na mesma linha
                  children: user.name,
                }),

                // Pontos à direita em azul/teal
                _jsx("p", {
                  className: "text-sm font-normal",
                  style: { color: "#5B8FA8" }, // MUDANÇA: era "text-gray-600" abaixo do nome → cor azul à direita
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