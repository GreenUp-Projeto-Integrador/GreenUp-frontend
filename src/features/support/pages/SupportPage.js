import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import ScreenLayout from "../../../shared/components/ScreenLayout";
import { comingSoon } from "../../../shared/comingSoon";
import { formatDate, formatDateTime } from "../../../shared/formatDate";
import { SUPPORT_AVAILABLE, TICKET_CATEGORIES, TICKET_STATUS, TICKET_TYPES, listTickets } from "../supportService";

const MAX_TITLE = 100;
const MAX_DESC = 500;
const MAX_FILES = 3;
const MAX_MB = 5;
const field =
  "w-full p-3 border border-[#6F9A7C] rounded-lg text-sm text-gray-700 bg-white focus:outline-none focus:ring-0 focus:border-2 focus:border-[#6F9A7C]";

function StatusChip({
  status
}) {
  const s = TICKET_STATUS[status];
  return _jsx("span", {
    className: "text-xs px-2 py-1 rounded-full text-white whitespace-nowrap",
    style: {
      background: s.color
    },
    children: s.label
  });
}

export default function SupportPage() {
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState([]);
  const [tickets, setTickets] = useState(null);
  const [selected, setSelected] = useState(null);
  const [typeOpen, setTypeOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  useEffect(() => {
    listTickets().then(setTickets);
  }, []);

  const addFiles = e => {
    const chosen = Array.from(e.target.files);
    e.target.value = "";
    const accepted = [];
    for (const f of chosen) {
      const okType = f.type.startsWith("image/") || f.type === "application/pdf";
      if (!okType) return toast.error(`"${f.name}": envie imagem ou PDF.`);
      if (f.size > MAX_MB * 1024 * 1024) return toast.error(`"${f.name}" passa de ${MAX_MB} MB.`);
      accepted.push(f);
    }
    if (files.length + accepted.length > MAX_FILES) return toast.error(`Máximo de ${MAX_FILES} anexos.`);
    setFiles([...files, ...accepted]);
  };

  const submit = () => {
    if (!type) return toast.error("Selecione o tipo do chamado");
    if (!category) return toast.error("Selecione a categoria");
    if (title.trim().length < 5) return toast.error("Informe um título (mínimo de 5 caracteres)");
    if (description.trim().length < 10) return toast.error("Descreva o problema (mínimo de 10 caracteres)");
    // O back-end ainda não tem endpoint de suporte: avisamos que será implantado.
    if (!SUPPORT_AVAILABLE) return comingSoon("Abertura de chamados");
  };

  return _jsxs(ScreenLayout, {
    title: "Suporte",
    children: [_jsx("p", {
      className: "text-xs rounded-xl p-3",
      style: {
        background: "#FCEEE1",
        color: "#B8502B"
      },
      children: "Atendimento em desenvolvimento: o envio de chamados ainda será implantado e os chamados do histórico abaixo são exemplos ilustrativos."
    }), 
    // Abrir chamado
    _jsxs("div", {
      className: "space-y-3",
      children: [_jsx("h2", {
        className: "text-base font-semibold text-black",
        children: "Abrir chamado"
      }), 
      // Tipo/Categoria
      _jsxs("div", {
        className: "grid grid-cols-2 gap-3",
        children: [
          // Campo Tipo
          _jsxs("div", {
            className: "relative w-full",
            children: [
              _jsx("button", {
                type: "button",
                onClick: () => setTypeOpen((prev) => !prev),
                className:
                  `w-full border rounded-lg px-4 py-3 text-sm text-left bg-white flex items-center justify-between font-['Poppins'] font-normal transition-colors ${
                    typeOpen
                      ? "border-[#4F765C] ring-2 ring-[#6F9A7C]/40"
                      : "border-[#6F9A7C] hover:border-[#4F765C]"
                  }`,
                children: [
                  _jsx("span", {
                    className: type ? "text-gray-800" : "text-gray-500",
                    children: type || "Tipo",
                  }),
                  _jsx("span", {
                    children: "▾",
                  }),
                ],
              }),

              typeOpen &&
                _jsx("div", {
                  className:
                    "absolute left-0 top-full mt-1 w-full rounded-lg border-0 bg-white shadow-lg z-[60] overflow-hidden",
                  children: TICKET_TYPES.map((t) =>
                    _jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => {
                          setType(t);
                          setTypeOpen(false);
                        },
                        className:
                          "w-full px-4 py-3 text-left text-sm text-gray-700 font-['Poppins'] font-normal hover:bg-[#6F9A7C] hover:text-white focus:bg-[#6F9A7C] focus:text-white focus:outline-none",
                        children: t,
                      },
                      t
                    )
                  ),
                }),
            ],
          }),

          // Campo Categoria
          _jsxs("div", {
            className: "relative w-full",
            children: [
              _jsx("button", {
                type: "button",
                onClick: () => setCategoryOpen((prev) => !prev),
                className:
                  `w-full border rounded-lg px-4 py-3 text-sm text-left bg-white flex items-center justify-between font-['Poppins'] font-normal transition-colors ${
                    categoryOpen
                      ? "border-[#4F765C] ring-2 ring-[#6F9A7C]/40"
                      : "border-[#6F9A7C] hover:border-[#4F765C]"
                  }`,
                children: [
                  _jsx("span", {
                    className: category ? "text-gray-800" : "text-gray-500",
                    children: category || "Categoria",
                  }),
                  _jsx("span", {
                    children: "▾",
                  }),
                ],
              }),

              categoryOpen &&
                _jsx("div", {
                  className:
                    "absolute left-0 top-full mt-1 w-full rounded-lg border border-gray-200 bg-white shadow-lg z-[60] overflow-hidden",
                  children: TICKET_CATEGORIES.map((c) =>
                    _jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => {
                          setCategory(c);
                          setCategoryOpen(false);
                        },
                        className:
                          "w-full px-4 py-3 text-left text-sm text-gray-700 font-['Poppins'] font-normal hover:bg-[#6F9A7C] hover:text-white focus:bg-[#6F9A7C] focus:text-white focus:outline-none",
                        children: c,
                      },
                      c
                    )
                  ),
                }),
            ],
          }),
        ],
      }),
      // Titulo
      _jsxs("div", {
        children: [
          _jsx("input", {
          value: title,
          maxLength: MAX_TITLE,
          onChange: e => setTitle(e.target.value),
          placeholder: "Título",
          className: field
          }), 
          _jsxs("p", {
            className: "text-right text-[11px] text-gray-400",
            children: [title.length, "/", MAX_TITLE]
          })]
      }), 
      // Descricao
      _jsxs("div", {
        children: [
          _jsx("textarea", {
            value: description,
            maxLength: MAX_DESC,
            onChange: e => setDescription(e.target.value),
            placeholder: "Descreva o que aconteceu",
            rows: 4,
            className: `${field} resize-none`
          }),
          _jsxs("p", {
            className: "text-right text-[11px] text-gray-400",
            children: [description.length, "/", MAX_DESC]
        })]
      }),
      // Anexar arquivos
      _jsxs("div", {
        children: [
          _jsxs("label", {
            className: "block w-full text-center text-sm py-5 rounded-lg border-2 border-dashed border-[#6F9A7C] text-[#6F9A7C] bg-[#6F9A7C]/10 hover:bg-[#6F9A7C]/20 transition",
            children: ["Anexar arquivos", 
            _jsx("input", {
              type: "file",
              multiple: true,
              accept: "image/*,.pdf",
              onChange: addFiles,
              className: "hidden"
          })]
        }), 
        
        _jsxs("p", {
          className: "text-[11px] text-gray-400 mt-1",
          children: ["Imagens ou PDF · até ", MAX_FILES, " arquivos de ", MAX_MB, " MB"]
        }), files.map((f, i) => 
          _jsxs("div", {
          className: "flex items-center justify-between text-xs text-gray-600 mt-1",
          children: [
            _jsx("span", {
              className: "truncate",
              children: f.name
          }), 

          _jsx("button", {
            onClick: () => setFiles(files.filter((_, j) => j !== i)),
            "aria-label": "Remover anexo",
            style: {
              color: "#B8502B"
            },
            children: "✕"
          })]
        }, i))]
        }), 
        // Botao
      _jsx("button", {
        onClick: submit,
        className: "w-full text-white py-3 rounded-full font-semibold text-sm transition hover:opacity-90",
        style: {
          background: "#6F9A7C"
        },
        children: "Abrir chamado"
      })]
    }), 
    // Meus chamados
    _jsxs("div", {
      className: "space-y-2",
      children: [
        _jsx("h2", {
        className: "text-base font-semibold text-black",
        children: "Meus chamados"
      }), tickets === null && _jsx("p", {
        className: "text-sm text-gray-500",
        children: "Carregando…"
      }), (tickets ?? []).map(t => _jsxs("button", {
        onClick: () => setSelected(t),
        className: "w-full text-left flex items-center justify-between gap-3 rounded-xl p-3 border border-gray-200 transition hover:bg-gray-50 font-normal",
        children: [
          _jsxs("span", {
            className: "min-w-0",
            children: [
              _jsx("span", {
              className: "block text-sm font-medium text-black truncate",
              children: t.title
          }),
          _jsxs("span", {
            className: "block text-xs text-gray-500",
            children: ["#", t.id, " · ", formatDate(t.createdAt)]
          })]
        }), 
          _jsx(StatusChip, {
          status: t.status
        })]
      }, t.id))]
    }), 
    // Cards
    selected && _jsx("div", {
      className: "fixed inset-0 z-50 flex items-center justify-center px-6",
      style: {
        backgroundColor: "rgba(0,0,0,0.4)"
      },
      onClick: e => e.target === e.currentTarget && setSelected(null),
      role: "dialog",
      "aria-modal": "true",
      "aria-label": `Chamado ${selected.id}`,
      children: _jsxs("div", {
        className: "bg-white w-full max-w-sm rounded-2xl p-5 space-y-3",
        style: {
          maxHeight: "85vh",
          overflowY: "auto",
          boxShadow: "0 20px 60px rgba(0,0,0,.15)"
        },
        children: [
          _jsxs("div", {
          className: "flex items-start justify-between gap-3",
          children: [
            _jsxs("div", {
            children: [
              _jsxs("p", {
              className: "text-xs text-gray-500",
              children: ["Chamado #", selected.id]
            }), 
            _jsx("h3", {
              className: "text-base font-semibold text-black",
              children: selected.title
            })]
          }),
            _jsx("button", {
            onClick: () => setSelected(null),
            "aria-label": "Fechar",
            className: "text-white text-sm font-bold flex items-center justify-center shrink-0",
            style: {
              background: "#6F9A7C",
              width: 32,
              height: 32,
              borderRadius: "50%"
            },
            children: "✕"
          })]
        }), 
        _jsx(StatusChip, {
          status: selected.status
        }), 
        // Pop-up
        _jsxs("dl", {
          className: "text-sm space-y-2",
          children: [_jsxs("div", {
            children: [_jsx("dt", {
              className: "text-xs text-gray-500",
              children: "Tipo"
            }), 
            _jsx("dd", {
              children: selected.type
            })]
          }), 
          _jsxs("div", {
            children: [
              _jsx("dt", {
              className: "text-xs text-gray-500",
              children: "Categoria"
            }), 
            _jsx("dd", {
              children: selected.category
            })]
          }), 
          _jsxs("div", {
            children: [
              _jsx("dt", {
              className: "text-xs text-gray-500",
              children: "Aberto em"
            }), 
            _jsx("dd", {
              children: formatDateTime(selected.createdAt)
            })]
          }), 
          _jsxs("div", {
            children: [_jsx("dt", {
              className: "text-xs text-gray-500",
              children: "Descrição"
            }), 
            _jsx("dd", {
              children: selected.description
            })]
          }), 
          _jsxs("div", {
            children: [
              _jsx("dt", {
              className: "text-xs text-gray-500",
              children: "Anexos"
            }), 
            _jsxs("dd", {
              children: [selected.attachments, " arquivo(s)"]
            })]
          }), 
          _jsxs("div", {
            className: "rounded-xl p-3",
            style: {
              background: "#FCEEE1"
            },
            children: [_jsx("dt", {
              className: "text-xs text-gray-500",
              children: "Resposta da equipe"
            }), 
            _jsx("dd", {
              children: selected.answer
            })]
          })]
        })]
      })
    })]
  });
}
