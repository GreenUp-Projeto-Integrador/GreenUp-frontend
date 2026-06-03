// NOVO: trashLevel, trashCode e image
export const mockDisposals = [
  {id: 1, date: "05/12/2024", type: "Eletrônicos", quantity: 5, items: "Smartphone, Fone, Carregador", trashLevel: "Cheia", trashCode: "A3", image: null}, 
  {id: 2, date: "04/12/2024", type: "Computadores", quantity: 2, items: "Teclado, Mouse", trashLevel: "Vazia", trashCode: "A2", image: null}, 
  {id: 3, date: "03/12/2024", type: "Tablets", quantity: 1, items: "iPad", trashLevel: "Meia", trashCode: "A1", image: null}, 
  {id: 4, date: "02/12/2024", type: "Câmeras", quantity: 3, items: "Câmera DSLR, Lente, Tripé", trashLevel: "Vazia", trashCode: "A1", image: null},
];

export const mockRanking = [
  { id: 1, name: "Maryana Melo", points: 1598, position: 1, avatar: "MM" },
  { id: 2, name: "Eduardo Hansel", points: 1468, position: 2, avatar: "EH" },
  { id: 3, name: "Andressa Resende", points: 1320, position: 3, avatar: "AR" },
  { id: 4, name: "Maria Carvalho", points: 1281, position: 4, avatar: "MC" },
  { id: 5, name: "Hellen Hansel", points: 987, position: 5, avatar: "HH" },
  { id: 6, name: "Renan Santiago", points: 852, position: 6, avatar: "RS" },
  { id: 7, name: "Marina Fernandes", points: 723, position: 7, avatar: "MF" },
];

export const mockUserData = {
  name: "Maryana Melo",
  email: "maryana@example.com",
  phone: "(11) 99999-9999",
  cpf: "123.456.789-00",
  address: "Rua das Flores, 123",
  city: "São Paulo",
  state: "SP",
  zipCode: "01310-100",
};

export const mockDashboardData = {
  disposals: [
    { month: "Jan", count: 30 },
    { month: "Fev", count: 18 },
    { month: "Mar", count: 40 },
    { month: "Abr", count: 35 },
    { month: "Mai", count: 50 },
    { month: "Jun", count: 20 },
  ],

  // MUDANÇA: categorias atualizadas conforme legenda do protótipo
  categories: [
    { name: "Informática e acessórios",  value: 23, color: "#2D6A6A" },
    { name: "Eletrodomésticos pequenos", value: 27, color: "#E8894A" },
    { name: "Áudio, vídeo e games",      value: 19, color: "#C14600" },
    { name: "Pilhas e baterias",         value: 15, color: "#F8C78D" },
    { name: "Lâmpadas e iluminação",     value: 7,  color: "#6F9A7C" },
    { name: "Peças e componentes",       value: 9,  color: "#A8D5B5" },
  ],

  // NOVO: dados para "Tempo médio para lixeiras atingirem nível 4"
  avgTimeToLevel4: {
    last6months: "12 dias",
    lastMonth:   "9 dias",
    last3months: "10 dias",
    lastTime:    "15 dias",
  },

  // NOVO: dados para "Tempo médio para coleta"
  avgTimeToCollect: {
    last6months: "2 dias",
    lastMonth:   "1 dia",
    last3months: "3 dias",
    lastTime:    "15 horas",
  },
};

export const mockAccount = {
  name: "Maryana Melo",
  email: "maryana@example.com",
  joinDate: "01/12/2023",
  points: 1598,
  level: "Ouro",
  disposalsCount: 45,
};