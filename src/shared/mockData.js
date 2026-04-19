export const mockDisposals = [
  { id: 1, date: "05/12/2024", type: "Eletrônicos", quantity: 5, items: ["Smartphone", "Fone", "Carregador"] },
  { id: 2, date: "04/12/2024", type: "Computadores", quantity: 2, items: ["Teclado", "Mouse"] },
  { id: 3, date: "03/12/2024", type: "Tablets", quantity: 1, items: ["iPad"] },
  { id: 4, date: "02/12/2024", type: "Câmeras", quantity: 3, items: ["Câmera DSLR", "Lente", "Tripé"] },
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
  categories: [
    { name: "Eletrônicos", value: 30, color: "#1a3a3d" },
    { name: "Plásticos", value: 25, color: "#6f9a7c" },
    { name: "Metais", value: 25, color: "#f8c78d" },
    { name: "Vidro", value: 20, color: "#c14600" },
  ],
};

export const mockAccount = {
  name: "Maryana Melo",
  email: "maryana@example.com",
  joinDate: "01/12/2023",
  points: 1598,
  level: "Ouro",
  disposalsCount: 45,
};
