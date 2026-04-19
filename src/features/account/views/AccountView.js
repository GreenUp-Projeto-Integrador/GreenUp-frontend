import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

export default function AccountView({ account, onBack, onViewUserData }) {
  return _jsxs("div", {
    className: "relative size-full bg-white overflow-hidden",
    children: [
      // Header
      _jsxs("div", {
        className: "absolute top-0 left-0 right-0 h-24 px-6 pt-4",
        children: [
          _jsx("button", {
            onClick: onBack,
            className: "text-2xl text-orange-600 mb-2",
            children: "‹",
          }),
          _jsx("h1", {
            className: "text-2xl font-bold text-black",
            children: "Informações da conta",
          }),
        ],
      }),
      // Content
      _jsx("div", {
        className: "absolute top-24 left-0 right-0 bottom-0 overflow-y-auto px-6 py-6 space-y-4",
        children: _jsxs("div", {
          className: "space-y-6",
          children: [
            // Profile card
            _jsx("div", {
              className: "bg-gradient-to-r from-green-400 to-green-600 rounded-lg p-6 text-white",
              children: _jsxs("div", {
                className: "space-y-2",
                children: [
                  _jsx("h2", {
                    className: "text-2xl font-bold",
                    children: account.name,
                  }),
                  _jsx("p", {
                    className: "text-sm opacity-90",
                    children: account.email,
                  }),
                ],
              }),
            }),
            // Stats
            _jsxs("div", {
              className: "grid grid-cols-2 gap-4",
              children: [
                _jsx("div", {
                  className: "bg-orange-100 rounded-lg p-4",
                  children: _jsxs("div", {
                    className: "space-y-1",
                    children: [
                      _jsx("p", {
                        className: "text-xs text-gray-600 uppercase font-semibold",
                        children: "Pontos",
                      }),
                      _jsx("p", {
                        className: "text-2xl font-bold text-orange-600",
                        children: account.points,
                      }),
                    ],
                  }),
                }),
                _jsx("div", {
                  className: "bg-purple-100 rounded-lg p-4",
                  children: _jsxs("div", {
                    className: "space-y-1",
                    children: [
                      _jsx("p", {
                        className: "text-xs text-gray-600 uppercase font-semibold",
                        children: "Nível",
                      }),
                      _jsx("p", {
                        className: "text-2xl font-bold text-purple-600",
                        children: account.level,
                      }),
                    ],
                  }),
                }),
                _jsx("div", {
                  className: "bg-blue-100 rounded-lg p-4",
                  children: _jsxs("div", {
                    className: "space-y-1",
                    children: [
                      _jsx("p", {
                        className: "text-xs text-gray-600 uppercase font-semibold",
                        children: "Descartes",
                      }),
                      _jsx("p", {
                        className: "text-2xl font-bold text-blue-600",
                        children: account.disposalsCount,
                      }),
                    ],
                  }),
                }),
                _jsx("div", {
                  className: "bg-green-100 rounded-lg p-4",
                  children: _jsxs("div", {
                    className: "space-y-1",
                    children: [
                      _jsx("p", {
                        className: "text-xs text-gray-600 uppercase font-semibold",
                        children: "Membro desde",
                      }),
                      _jsx("p", {
                        className: "text-lg font-bold text-green-600",
                        children: account.joinDate,
                      }),
                    ],
                  }),
                }),
              ],
            }),
            // View user data button
            _jsx("button", {
              onClick: onViewUserData,
              className: "w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700",
              children: "Ver dados do usuário",
            }),
          ],
        }),
      }),
    ],
  });
}
