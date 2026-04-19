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
      // Header with trophy
      _jsxs("div", {
        className: "absolute top-0 left-0 right-0 h-32 px-6 pt-4",
        children: [
          _jsx("button", {
            onClick: onBack,
            className: "text-2xl text-orange-600 mb-2",
            children: "‹",
          }),
          _jsx("div", {
            className: "flex flex-col items-center gap-2",
            children: _jsx("div", {
              className: "text-4xl",
              children: "🏆",
            }),
          }),
          _jsx("h1", {
            className: "text-2xl font-bold text-center text-black",
            children: "Ranking",
          }),
        ],
      }),
      // Ranking list
      _jsx("div", {
        className: "absolute top-32 left-0 right-0 bottom-0 overflow-y-auto px-6 py-6 space-y-3",
        children: ranking.map((user, index) =>
          _jsx(
            "div",
            {
              className: "bg-gray-100 rounded-lg p-4 flex items-center gap-3",
              children: _jsxs("div", {
                className: "flex-1 flex items-center gap-4",
                children: [
                  _jsx("div", {
                    className: "text-lg font-bold text-gray-600 w-6",
                    children:
                      user.position === 1 ? "🥇" : user.position === 2 ? "🥈" : user.position === 3 ? "🥉" : user.position,
                  }),
                  _jsx("div", {
                    className: `${avatarColors[index % avatarColors.length]} rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-sm`,
                    children: user.avatar,
                  }),
                  _jsxs("div", {
                    className: "flex-1",
                    children: [
                      _jsx("p", {
                        className: "font-semibold text-black",
                        children: user.name,
                      }),
                      _jsx("p", {
                        className: "text-sm text-gray-600",
                        children: `${user.points} pts`,
                      }),
                    ],
                  }),
                ],
              }),
            },
            user.id
          )
        ),
      }),
    ],
  });
}
