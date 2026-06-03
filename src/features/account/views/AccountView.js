import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AppHeader from "../../../shared/components/AppHeader"; // NOVO: importação do AppHeader

// MUDANÇA: adicionado "onChangePassword" nos props
// NOVO: prop usada para abrir o modal de alterar senha, controlado pelo AccountPage
export default function AccountView({ account, onBack, onViewUserData, onChangePassword }) {
  return _jsxs("div", {
    // NOVO: adicionado "flex flex-col" para empilhar AppHeader + conteúdo verticalmente
    className: "relative size-full bg-white overflow-hidden flex flex-col",
    children: [
      // NOVO: AppHeader global no topo 
      _jsx(AppHeader, {}),
      // NOVO: espaçador de 130px para empurrar o conteúdo abaixo do AppHeader
      _jsx("div", { className: "h-[130px] shrink-0" }),
      // Header
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

      // NOVO: substituído por uma lista de rows separados por divisor (divide-y),
      // seguindo o padrão visual da imagem de referência (estilo configurações do iOS/Android)
      _jsx("div", {
        className: "flex-1 overflow-y-auto px-4",
        children: _jsxs("div", {
          // NOVO: divide-y divide-gray-100 cria a linha separadora entre os itens da lista
          className: "divide-y divide-gray-100",
          children: [

            // MUDANÇA: o botão original era um simples "Ver dados do usuário" verde no final da tela
            // NOVO: transformado em um row de lista com avatar circular + nome/email + chevron ›
            // Clicar neste row ainda chama onViewUserData, mantendo o comportamento original
            _jsx("button", {
              onClick: onViewUserData,
              className:
                "w-full flex items-center gap-3 py-4 hover:bg-gray-50 transition-colors",
              children: _jsxs("div", {
                className: "flex items-center gap-3 w-full",
                children: [

                  // NOVO: avatar circular verde com as iniciais do nome do usuário (até 2 letras)
                  _jsx("div", {
                    className:
                      "w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shrink-0",
                    children: _jsx("span", {
                      className: "text-white text-sm font-bold",
                      // NOVO: lógica para extrair iniciais: divide o nome por espaço,
                      // pega as 2 primeiras partes, extrai a 1ª letra de cada e converte para maiúsculo
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

                  // NOVO: bloco com nome e email em duas linhas, alinhado à esquerda
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

                  // NOVO: chevron › indicando que o row é navegável
                  _jsx("span", {
                    className: "text-gray-400 text-xl leading-none",
                    children: "›",
                  }),
                ],
              }),
            }),

            // NOVO: row "Alterar senha" com ícone de cadeado + chevron
            // MUDANÇA: adicionado onClick={onChangePassword} para abrir o modal no AccountPage
            _jsxs("button", {
              onClick: onChangePassword,
              className:
                "w-full flex items-center gap-3 py-4 hover:bg-gray-50 transition-colors",
              children: [

                // NOVO: ícone de cadeado dentro de círculo cinza claro
                _jsx("div", {
                  className:
                    "w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0",
                  children: _jsx("span", {
                    className: "text-gray-500 text-base",
                    children: "🔒",
                  }),
                }),

                // NOVO: label do row
                _jsx("span", {
                  className: "flex-1 text-left text-sm font-semibold text-gray-900",
                  children: "Alterar senha",
                }),

                // NOVO: chevron › no final do row
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