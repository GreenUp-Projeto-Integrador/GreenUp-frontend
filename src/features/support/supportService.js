// Quando o back tiver as rotas (ex.: GET/POST /support/tickets/), troque SOMENTE este arquivo
// (e coloque SUPPORT_AVAILABLE = true) que a tela continua igual.
export const SUPPORT_AVAILABLE = false;

export const TICKET_TYPES = ["Dúvida", "Problema técnico", "Sugestão", "Reclamação"];
export const TICKET_CATEGORIES = [
        "Conta e acesso",
        "Registro de descarte",
        "Pontos e ranking",
        "Lixeiras e coleta",
        "Outros",
    ];

    export const TICKET_STATUS = {
        IN_PROGRESS: { label: "Em andamento", color: "#F5AA45" },
        DONE: { label: "Concluído", color: "#6F9A7C" },
        CANCELED: { label: "Cancelado", color: "#8A8A8A" },
    };

    const SAMPLE_TICKETS = [
    {
        id: 1043,
        title: "Não consigo anexar a foto no descarte",
        type: "Problema técnico",
        category: "Registro de descarte",
        description: "Ao escolher a foto do celular, o sistema informa que o formato não é aceito.",
        createdAt: "2026-10-12T14:20:00-03:00",
        status: "IN_PROGRESS",
        attachments: 1,
        answer: "Recebemos o seu chamado e a equipe está analisando o formato da imagem.",
    },
    {
        id: 1031,
        title: "Como altero o e-mail da minha conta?",
        type: "Dúvida",
        category: "Conta e acesso",
        description: "Preciso trocar o e-mail cadastrado.",
        createdAt: "2026-10-05T09:05:00-03:00",
        status: "DONE",
        attachments: 0,
        answer: "Acesse Conta > Dados do usuário e altere o campo e-mail.",
    },
    {
        id: 1018,
        title: "Sugestão: mostrar a lixeira mais próxima",
        type: "Sugestão",
        category: "Lixeiras e coleta",
        description: "Seria útil ver a lixeira mais próxima de onde estou.",
        createdAt: "2026-09-28T17:40:00-03:00",
        status: "CANCELED",
        attachments: 0,
        answer: "Chamado cancelado a pedido do solicitante.",
    },
    ];

    export async function listTickets() {
    return SAMPLE_TICKETS;
    }