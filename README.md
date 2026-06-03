# GreenUp-frontend


## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  


## Estrutura do projeto

src/
├── assets/
│   └── Imagens e ícones exportados do Figma (avatares, logos, mapas)
│
├── features/                        # Cada pasta = uma funcionalidade do app
│
│   ├── account/                     # Tela de perfil do usuário
│   │   ├── pages/AccountPage.js     # Lógica: controla popup de alterar senha
│   │   └── views/AccountView.js     # Visual: exibe dados do perfil (nome, email, etc)
│
│   ├── auth/                        # Autenticação (login e cadastro)
│   │   ├── components/
│   │   │   ├── InteractiveLogin.js      # Componente interativo do formulário de login
│   │   │   └── InteractiveCadastro.js   # Componente interativo do formulário de cadastro
│   │   ├── pages/
│   │   │   ├── LoginPage.js         # Lógica: valida campos, navega para /main
│   │   │   └── CadastroPage.js      # Lógica: valida campos, cria conta
│   │   └── views/
│   │       ├── Login.js             # Visual: tela de login
│   │       ├── Cadastro.js          # Visual: tela de cadastro
│   │       ├── PopUpLogin.js        # Visual: popup de erro/aviso no login
│   │       ├── PopUpCadastro.js     # Visual: popup de erro/aviso no cadastro
│   │       ├── svg-khmxef6mc7.js    # SVG paths da tela de login (exportado do Figma)
│   │       ├── svg-t929zus66l.js    # SVG paths da tela de cadastro
│   │       ├── svg-u99sw0wamg.js    # SVG paths auxiliares de auth
│   │       └── svg-uyo7dsva7d.js    # SVG paths auxiliares de auth
│
│   ├── dashboard/                   # Tela principal do app (home)
│   │   ├── pages/MainPage.js        # Lógica: navegação entre cards, controle do sidebar
│   │   └── views/
│   │       ├── TelaPrinciapal.js    # Visual: 4 cards (descarte, histórico, ranking, dashboard) + mapa
│   │       ├── Sidebar.js           # Visual estático do Figma — não usado
│   │       ├── svg-bfct7an0b4.js    # SVG paths da tela principal (cards, logo, ícones)
│   │       └── svg-ani2nrow18.js    # SVG paths do sidebar original do Figma
│
│   ├── dashboard-stats/             # Tela de estatísticas e gráficos
│   │   ├── pages/DashboardStatsPage.js  # Lógica: carrega dados, controla filtro de intervalo
│   │   └── views/DashboardStatsView.js  # Visual: gráfico de linha, pizza, blocos de tempo médio
│
│   ├── disposal/                    # Tela de registrar descarte
│   │   ├── pages/DisposalPage.js    # Lógica: valida formulário, controla popup de nível da lixeira
│   │   └── views/DisposalView.js    # Visual: checkboxes de categoria, input, upload de foto, botão confirmar
│
│   ├── history/                     # Tela de histórico de descartes
│   │   ├── pages/HistoryPage.js     # Lógica: controla qual disposal está no modal "Ver mais"
│   │   └── views/HistoryView.js     # Visual: lista de descartes, botão "Ver mais", modal de detalhes
│
│   ├── ranking/                     # Tela de ranking de usuários
│   │   ├── pages/RankingPage.js     # Lógica: carrega lista do ranking
│   │   └── views/RankingView.js     # Visual: lista com medalhas, nome e pontuação
│
│   └── user-data/                   # Tela de dados do usuário (endereço, CPF, etc)
│       ├── pages/UserDataPage.js    # Lógica: controla edição dos dados pessoais
│       └── views/UserDataView.js    # Visual: formulário com campos de dados pessoais
│
├── imports/
│   └── TelaPrincipal.js             # Versão estática exportada do Figma — não usada
│
├── pages/
│   └── Root.js                      # Componente raiz que envolve toda a aplicação
│
├── routes/
│   └── Index.js                     # Define todas as rotas: /login, /main, /disposal, /history, etc
│
├── shared/                          # Código reutilizável entre todas as features
│   ├── components/
│   │   ├── AppHeader.js             # Header reutilizável: hamburguer + logo GreenUp + avatar
│   │   └── SidebarMenu.js           # Menu lateral: navegação + modais "Fale Conosco" e "Ajuda"
│   ├── layouts/
│   │   └── MobileFrame.js           # Container mobile 430px: envolve todas as telas, contém o SidebarMenu
│   └── mockData.js                  # Dados falsos para desenvolvimento: disposals, ranking, dashboard, usuário
│
└── styles/
    ├── fonts.css                    # Import da fonte Poppins (400, 500, 600) do Google Fonts
    ├── index.css                    # Estilos globais: variáveis CSS, tipografia (h1-h4, button, input)
    ├── tailwind.css                 # Configuração base do Tailwind
    └── theme.css                   # Tokens de design: cores, espaçamentos, border-radius

App.js                               # Componente principal: inicializa rotas e layout global
main.js                              # Ponto de entrada do React: renderiza o App no DOM
index.html                           # HTML base da aplicação (Vite entry point)
vite.config.js                       # Configuração do bundler Vite
package.json                         # Dependências e scripts do projeto