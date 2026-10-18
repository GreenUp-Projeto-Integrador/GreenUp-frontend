import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AppHeader from "../../../shared/components/AppHeader"; 

export default function AccountView({ account, onBack, onViewUserData, onChangePassword }) {
  return _jsxs("div", {
    className: "relative size-full bg-white overflow-hidden flex flex-col",
    children: [
      _jsx(AppHeader, {}),
      _jsx("div", { className: "h-[130px] shrink-0" }),
      _jsxs("div", {
        className: "flex items-center gap-2 px-4 pb-4",
        children: [
          _jsx("button", {
            onClick: onBack,
            className: "text-3xl text-black leading-none mr-1",
            children: "‹",
            style: { color: "#B8502B", fontSize: "60px" },
          }),
          _jsx("h1", {
            className: "text-xl font-bold text-black mt-2",
            children: "Informações da conta",
          }),
        ],
      }),

      _jsx("div", {
        className: "flex-1 overflow-y-auto px-4",
        children: _jsxs("div", {
          className: "divide-y divide-gray-100",
          children: [
            _jsx("button", {
              onClick: onViewUserData,
              className:
                "w-full flex items-center gap-3 py-4 hover:bg-gray-50 transition-colors",
              children: _jsxs("div", {
                className: "flex items-center gap-3 w-full",
                children: [
                  _jsx("div", {
                    className:
                      "w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shrink-0",
                    children: _jsx("span", {
                      className: "text-white text-sm font-bold",
                      children: account?.name
                        ? account.name
                            .split(" ")
                            .slice(0, 2)
                            .map((n) => n[0])
                            .join("")
                            .toUpperCase()
                        : "U",
                    }),
                  }),

                  _jsxs("div", {
                    className: "flex-1 text-left",
                    children: [
                      _jsx("p", {
                        className: "text-sm font-semibold text-gray-900",
                        children: account?.name || "—",
                      }),
                      _jsx("p", {
                        className: "text-xs text-gray-500",
                        children: account?.email || "—",
                      }),
                    ],
                  }),

                  _jsx("span", {
                    className: "text-gray-400 text-xl leading-none",
                    children: "›",
                  }),
                ],
              }),
            }),

            _jsxs("button", {
              onClick: onChangePassword,
              className:
                "w-full flex items-center gap-3 py-4 hover:bg-gray-50 transition-colors",
              children: [

                _jsx("div", {
                  className:
                    "w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0",
                  children: _jsx("span", {
                    className: "text-gray-500 text-base",
                    children: "🔒",
                  }),
                }),

                _jsx("span", {
                  className: "flex-1 text-left text-sm font-semibold text-gray-900",
                  children: "Alterar senha",
                }),

                _jsx("span", {
                  className: "text-gray-400 text-xl leading-none",
                  children: "›",
                }),
              ],
            }),
          ],
        }),
      }),

    ],
  });
}