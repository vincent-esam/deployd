import { c as createComponent, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_DDyqfWY9.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BVg-EGxa.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { MoreVertical, Pencil, CheckCircle } from 'lucide-react';
/* empty css                                 */
/* empty css                                 */
import { M as Modal } from '../chunks/modale_uuPewxgq.mjs';
import { $ as $$HeroTitle } from '../chunks/HeroTitle_DeX6Rgca.mjs';
export { renderers } from '../renderers.mjs';

const ConvocatoriaFilter = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = () => {
    onSearch(searchTerm);
  };
  return /* @__PURE__ */ jsx("div", { className: "v-row", children: /* @__PURE__ */ jsxs("div", { className: "v-col", children: [
    /* @__PURE__ */ jsx("div", { className: "v-input v-input--horizontal", children: /* @__PURE__ */ jsx("div", { className: "v-input__control", children: /* @__PURE__ */ jsxs("div", { className: "v-field", children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "search-input", children: "Ingrese datos a buscar" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          id: "search-input",
          value: searchTerm,
          onChange: (e) => setSearchTerm(e.target.value),
          className: "v-field__input"
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsx("button", { type: "button", onClick: handleSearch, className: "v-btn", children: "Buscar" })
  ] }) });
};

const ResultadosConvocatorias = ({
  idConvocatoria,
  titulo,
  perfil,
  requisitos,
  fechaInicio,
  totalPostulantes,
  link,
  estadoInicial,
  onAbrir,
  onEditar
}) => {
  const [copiado, setCopiado] = useState(false);
  const [mostrarOpciones, setMostrarOpciones] = useState(false);
  const [estado, setEstado] = useState(estadoInicial);
  const handleCopyLink = () => {
    navigator.clipboard.writeText(link);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2e3);
  };
  const toggleOpciones = () => {
    setMostrarOpciones(!mostrarOpciones);
  };
  const handleFinalizar = async () => {
    const nuevoEstado = estado === "abierta" ? "cerrada" : "abierta";
    setEstado(nuevoEstado);
    try {
      const response = await fetch("/api/convocatorias/updateEstado", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ idConvocatoria, estado: nuevoEstado })
      });
      if (!response.ok) {
        throw new Error("Error al actualizar el estado");
      }
      console.log("Estado actualizado correctamente");
    } catch (error) {
      console.error(error);
      setEstado(estado);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "v-card v-theme--light v-card--density-default v-card--variant-elevated mb-4", children: [
    /* @__PURE__ */ jsx("div", { className: "v-card__loader", children: /* @__PURE__ */ jsxs(
      "div",
      {
        className: "v-progress-linear v-theme--light v-locale--is-ltr",
        role: "progressbar",
        "aria-hidden": "true",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        style: {
          top: "0px",
          height: "0px",
          left: "50%",
          transform: "translateX(-50%)"
        },
        children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "v-progress-linear__background",
              style: { width: "100%" }
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "v-progress-linear__indeterminate", children: [
            /* @__PURE__ */ jsx("div", { className: "v-progress-linear__indeterminate long" }),
            /* @__PURE__ */ jsx("div", { className: "v-progress-linear__indeterminate short" })
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "result-item", children: [
      /* @__PURE__ */ jsxs("div", { className: "menu-container", children: [
        /* @__PURE__ */ jsx("button", { onClick: toggleOpciones, className: "menu-button", children: /* @__PURE__ */ jsx(MoreVertical, { size: 24 }) }),
        mostrarOpciones && /* @__PURE__ */ jsxs("div", { className: "menu-options", children: [
          /* @__PURE__ */ jsxs("button", { className: "option-button", onClick: () => onEditar(idConvocatoria), children: [
            /* @__PURE__ */ jsx(Pencil, { size: 18 }),
            " Editar"
          ] }),
          /* @__PURE__ */ jsxs("button", { className: "option-button", onClick: handleFinalizar, children: [
            /* @__PURE__ */ jsx(CheckCircle, { size: 18, color: estado === "cerrada" ? "gray" : "green" }),
            estado === "cerrada" ? "Reabrir" : "Finalizar"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "v-card-content", children: [
        /* @__PURE__ */ jsx("div", { className: "v-card-title sub-title", children: titulo }),
        /* @__PURE__ */ jsxs("div", { className: "v-card-subtitle", children: [
          /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Perfil:" }),
            " ",
            perfil
          ] }),
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Requisitos:" }),
            " ",
            requisitos
          ] }),
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Fecha Inicio:" }),
            " ",
            fechaInicio
          ] }),
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Total Postulantes:" }),
            " ",
            totalPostulantes
          ] }),
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Link:" }),
            " ",
            /* @__PURE__ */ jsx("a", { href: link, target: "_blank", rel: "noopener noreferrer", children: link })
          ] }),
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("button", { className: "copy-button", onClick: handleCopyLink, children: "📋 Copiar Link" }),
          copiado && /* @__PURE__ */ jsx("span", { className: "copy-message", children: "¡Copiado!" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "v-card-actions", children: /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          className: "v-btn v-btn--slim v-theme--light v-btn--density-default v-btn--size-default v-btn--variant-text button-card",
          onClick: () => onAbrir(idConvocatoria),
          children: [
            /* @__PURE__ */ jsx("span", { className: "v-btn__overlay" }),
            /* @__PURE__ */ jsx("span", { className: "v-btn__underlay" }),
            /* @__PURE__ */ jsx("a", { children: "ABRIR" })
          ]
        }
      ) })
    ] })
  ] });
};

const FormularioConvocatoria = ({ onClose, convocatoriaToEdit }) => {
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  };
  const [formData, setFormData] = useState({
    titulo: convocatoriaToEdit?.titulo || "",
    perfil: convocatoriaToEdit?.perfil || "",
    fechaInicio: formatDate(convocatoriaToEdit?.fechaInicio),
    // Formatear fecha de inicio
    fechaFinal: formatDate(convocatoriaToEdit?.fechaFinal),
    // Formatear fecha final
    requisitos: convocatoriaToEdit?.requisitos || ""
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = new FormData();
      Object.keys(formData).forEach((key) => {
        form.append(key, formData[key]);
      });
      const url = convocatoriaToEdit ? `http://localhost:4321/api/convocatorias/updateConvocatorias/${convocatoriaToEdit.idConvocatoria}` : "http://localhost:4321/api/convocatorias/insert_convocatorias";
      const method = convocatoriaToEdit ? "PUT" : "POST";
      const response = await fetch(url, {
        method,
        body: form
        // Enviar FormData directamente
      });
      if (!response.ok) throw new Error("Error al guardar la convocatoria");
      alert(convocatoriaToEdit ? "Convocatoria actualizada con éxito" : "Convocatoria creada con éxito");
      onClose();
    } catch (error) {
      console.error("Error:", error);
      alert("Error al guardar la convocatoria");
    }
  };
  return /* @__PURE__ */ jsxs("form", { className: "create-form", onSubmit: handleSubmit, children: [
    /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "titulo", children: "Título" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          id: "titulo",
          name: "titulo",
          required: true,
          value: formData.titulo,
          onChange: handleInputChange
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "perfil", children: "Perfil" }),
      /* @__PURE__ */ jsx(
        "textarea",
        {
          id: "perfil",
          name: "perfil",
          required: true,
          rows: 4,
          value: formData.perfil,
          onChange: handleInputChange
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "form-group", children: /* @__PURE__ */ jsx("label", { htmlFor: "requisitos", children: "Requisitos" }) }),
    /* @__PURE__ */ jsxs("div", { className: "radio-group", children: [
      /* @__PURE__ */ jsxs("label", { children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "radio",
            name: "requisitos",
            value: "docente",
            checked: formData.requisitos === "docente",
            onChange: handleInputChange
          }
        ),
        "Docente"
      ] }),
      /* @__PURE__ */ jsxs("label", { children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "radio",
            name: "requisitos",
            value: "tutor",
            checked: formData.requisitos === "tutor",
            onChange: handleInputChange
          }
        ),
        "Tutor"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "form-group grid grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "fechaInicio", children: "Fecha de Inicio" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "date",
            id: "fechaInicio",
            name: "fechaInicio",
            required: true,
            value: formData.fechaInicio,
            onChange: handleInputChange
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "fechaFinal", children: "Fecha de Fin" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "date",
            id: "fechaFinal",
            name: "fechaFinal",
            required: true,
            value: formData.fechaFinal,
            onChange: handleInputChange
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("button", { type: "submit", className: "submit-button mt-4", children: "Guardar" })
  ] });
};

const ResultadosPostulantes = ({
  postulantes,
  onVolver
}) => {
  return /* @__PURE__ */ jsxs("div", { className: "results-container", children: [
    /* @__PURE__ */ jsx("h2", { children: "Postulantes" }),
    /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        className: "v-btn v-btn--slim v-theme--light v-btn--density-default v-btn--size-default v-btn--variant-text button-card",
        onClick: onVolver,
        children: [
          /* @__PURE__ */ jsx("span", { className: "v-btn__overlay" }),
          /* @__PURE__ */ jsx("span", { className: "v-btn__underlay" }),
          /* @__PURE__ */ jsx("a", { children: "Volver" })
        ]
      }
    ),
    postulantes.length > 0 ? postulantes.map((postulante) => /* @__PURE__ */ jsx(
      "div",
      {
        className: "v-card v-theme--light v-card--variant-elevated mb-4",
        children: /* @__PURE__ */ jsxs("div", { className: "result-item", children: [
          /* @__PURE__ */ jsxs("div", { className: "v-card-content", children: [
            /* @__PURE__ */ jsxs("div", { className: "v-card-title sub-title", children: [
              postulante.nombre,
              " ",
              postulante.apellidoPaterno,
              " ",
              postulante.apellidoMaterno
            ] }),
            /* @__PURE__ */ jsx("div", { className: "v-card-subtitle", children: /* @__PURE__ */ jsxs("p", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Fecha de Postulación:" }),
              " ",
              postulante.fechaPostulacion
            ] }) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "v-card-actions", children: /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              className: "v-btn v-btn--slim v-theme--light v-btn--density-default v-btn--size-default v-btn--variant-text button-card",
              children: [
                /* @__PURE__ */ jsx("span", { className: "v-btn__overlay" }),
                /* @__PURE__ */ jsx("span", { className: "v-btn__underlay" }),
                /* @__PURE__ */ jsx("a", { href: `/postulantes/info/${postulante.idDocente}`, children: "ABRIR" })
              ]
            }
          ) })
        ] })
      },
      postulante.idDocente
    )) : /* @__PURE__ */ jsx("p", { className: "no-results", children: "No hay postulantes para esta convocatoria." })
  ] });
};

const ConvocatoriasList = () => {
  const [convocatorias, setConvocatorias] = useState([]);
  const [filteredConvocatorias, setFilteredConvocatorias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [convocatoriaSeleccionada, setConvocatoriaSeleccionada] = useState(null);
  const [convocatoriaToEdit, setConvocatoriaToEdit] = useState(null);
  const [statusFilter, setStatusFilter] = useState("");
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  };
  useEffect(() => {
    const fetchConvocatorias = async () => {
      try {
        const response = await fetch(
          "http://localhost:4321/api/convocatorias/convocatorias"
        );
        if (!response.ok) throw new Error("Error al obtener las convocatorias");
        const data = await response.json();
        const formattedData = data.map((convocatoria) => ({
          ...convocatoria,
          fechaInicio: formatDate(convocatoria.fechaInicio),
          // Formatear fecha de inicio
          fechaFinal: formatDate(convocatoria.fechaFinal),
          // Formatear fecha final
          postulantes: convocatoria.postulantes.map((postulante) => ({
            ...postulante,
            fechaPostulacion: formatDate(postulante.fechaPostulacion)
            // Formatear fecha de postulación
          }))
        }));
        const convocatoriasAbiertas = formattedData.filter(
          (convocatoria) => convocatoria.estado.toLowerCase() === "abierta"
        );
        setConvocatorias(formattedData);
        setFilteredConvocatorias(convocatoriasAbiertas);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchConvocatorias();
  }, []);
  const handleSearch = (searchTerm) => {
    if (searchTerm.trim() === "") {
      setFilteredConvocatorias(convocatorias);
    } else {
      const searchLower = searchTerm.toLowerCase();
      const filtered = convocatorias.filter(
        (convocatoria) => convocatoria.titulo && convocatoria.titulo.toLowerCase().includes(searchLower) || convocatoria.perfil && convocatoria.perfil.toLowerCase().includes(searchLower) || convocatoria.requisitos && convocatoria.requisitos.toLowerCase().includes(searchLower)
      );
      setFilteredConvocatorias(filtered);
    }
  };
  const handleStatusChange = (status) => {
    setStatusFilter(status);
    let filtered = convocatorias;
    if (status === "abierta" || status === "cerrada") {
      filtered = filtered.filter(
        (convocatoria) => convocatoria.estado.toLowerCase() === status.toLowerCase()
      );
    }
    setFilteredConvocatorias(filtered);
  };
  const handleEditarConvocatoria = (idConvocatoria) => {
    const convocatoria = convocatorias.find((c) => c.idConvocatoria === idConvocatoria);
    if (convocatoria) {
      setConvocatoriaToEdit(convocatoria);
      setIsModalOpen(true);
    }
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setConvocatoriaToEdit(null);
  };
  const handleAbrirConvocatoria = (idConvocatoria) => {
    const convocatoria = convocatorias.find((c) => c.idConvocatoria === idConvocatoria);
    if (convocatoria) {
      setConvocatoriaSeleccionada(convocatoria);
    }
  };
  const handleVolver = () => {
    setConvocatoriaSeleccionada(null);
  };
  if (loading) return /* @__PURE__ */ jsx("div", { children: "Loading..." });
  if (error) return /* @__PURE__ */ jsxs("div", { children: [
    "Error: ",
    error
  ] });
  return /* @__PURE__ */ jsxs("div", { className: "docente-search-container", children: [
    convocatoriaSeleccionada ? /* @__PURE__ */ jsx(
      ResultadosPostulantes,
      {
        postulantes: convocatoriaSeleccionada.postulantes,
        onVolver: handleVolver
      }
    ) : /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("div", { className: "filters-container", children: [
        /* @__PURE__ */ jsx(ConvocatoriaFilter, { onSearch: handleSearch }),
        /* @__PURE__ */ jsx("label", { htmlFor: "estado-select", children: "Buscar por estado" }),
        /* @__PURE__ */ jsxs(
          "select",
          {
            className: "filter-select",
            value: statusFilter,
            onChange: (e) => handleStatusChange(e.target.value),
            children: [
              /* @__PURE__ */ jsx("option", { value: "", children: "Todas" }),
              /* @__PURE__ */ jsx("option", { value: "abierta", children: "Abierta" }),
              /* @__PURE__ */ jsx("option", { value: "cerrada", children: "Cerrada" })
            ]
          }
        ),
        /* @__PURE__ */ jsx("button", { className: "v-btn", onClick: () => setIsModalOpen(true), children: "Crear" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "results-container", children: filteredConvocatorias.length > 0 ? filteredConvocatorias.map((convocatoria) => /* @__PURE__ */ jsx(
        ResultadosConvocatorias,
        {
          idConvocatoria: convocatoria.idConvocatoria,
          titulo: convocatoria.titulo,
          perfil: convocatoria.perfil,
          requisitos: convocatoria.requisitos,
          fechaInicio: convocatoria.fechaInicio,
          totalPostulantes: convocatoria.totalPostulantes,
          link: convocatoria.link,
          estadoInicial: convocatoria.estado,
          onAbrir: handleAbrirConvocatoria,
          onEditar: handleEditarConvocatoria
        },
        convocatoria.idConvocatoria
      )) : /* @__PURE__ */ jsx("p", { className: "no-results", children: "No se encontraron resultados." }) })
    ] }),
    /* @__PURE__ */ jsx(Modal, { isOpen: isModalOpen, onClose: handleCloseModal, title: convocatoriaToEdit ? "Editar Convocatoria" : "Crear Convocatoria", children: /* @__PURE__ */ jsx(FormularioConvocatoria, { onClose: handleCloseModal, convocatoriaToEdit }) })
  ] });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "canonical": "https://academico-docentes.esam.edu.bo/", "description": "Sistema acad\xE9mico de ESAM para contrataci\xF3n y postulaci\xF3n de docentes.", "title": "Sistema Academico ESAM | Convocatorias" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroTitle", $$HeroTitle, { "titulo": "Convocatorias" })} ${renderComponent($$result2, "ConvocatoriasList", ConvocatoriasList, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/components/convocatorias/ConvocatoriasList", "client:component-export": "ConvocatoriasList" })} ` })}`;
}, "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/pages/convocatorias/index.astro", undefined);

const $$file = "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/pages/convocatorias/index.astro";
const $$url = "/convocatorias";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
