import { c as createComponent, d as renderComponent, r as renderTemplate } from '../chunks/astro/server_CdpYlLHK.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DNV0txGe.mjs';
import { $ as $$HeroTitle } from '../chunks/HeroTitle_D919oC3L.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { R as ResultadosDocentes } from '../chunks/ResultadosDocentes_CZ2od6YJ.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const DocenteFilter = ({ onSearch }) => {
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

const DocenteFilterByGrade = ({ onGradeChange }) => {
  const [selectedGrado, setSelectedGrado] = useState("");
  const [grados, setGrados] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchGrados = async () => {
      try {
        const response = await fetch("http://localhost:4321/api/docentes/grados");
        if (!response.ok) throw new Error("Error al obtener los grados");
        const data = await response.json();
        setGrados(data);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener los grados:", error);
        setLoading(false);
      }
    };
    fetchGrados();
  }, []);
  const handleGradeChange = (event) => {
    const grado = event.target.value;
    setSelectedGrado(grado);
    onGradeChange(grado);
  };
  if (loading) {
    return /* @__PURE__ */ jsx("p", { children: "Cargando grados..." });
  }
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("label", { htmlFor: "grado-select", children: "Nivel Académico" }),
    /* @__PURE__ */ jsxs("select", { id: "grado-select", value: selectedGrado, onChange: handleGradeChange, children: [
      /* @__PURE__ */ jsx("option", { value: "postulante", children: "Seleccionar Grado" }),
      grados.map((grado) => /* @__PURE__ */ jsx("option", { value: grado.tipo, children: grado.tipo }, grado.idGrado))
    ] })
  ] });
};

const DocenteSearch = () => {
  const [allDocentes, setAllDocentes] = useState([]);
  const [filteredDocentes, setFilteredDocentes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("");
  useEffect(() => {
    const fetchDocentes = async (searchTerm = "") => {
      try {
        const response = await fetch(
          `http://localhost:4321/api/docentes/postulantes?search=${searchTerm}`
        );
        if (!response.ok) throw new Error("Error al obtener los datos");
        const data = await response.json();
        setAllDocentes(data);
        setFilteredDocentes(data.filter((docente) => docente.estado === "postulante"));
        setLoading(false);
      } catch (error) {
        console.error("Error al conectar con la API:", error);
        setLoading(false);
      }
    };
    fetchDocentes();
  }, []);
  const handleSearch = (searchTerm) => {
    let filtered = allDocentes;
    if (searchTerm.trim() !== "") {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (docente) => (
          // Buscar por nombre, correo o documento
          docente.nombres && docente.nombres.toLowerCase().includes(searchLower) || docente.correo && docente.correo.toLowerCase().includes(searchLower) || docente.numeroDocumento && docente.numeroDocumento.toString().includes(searchTerm) || // Buscar por postgrado
          docente.estudiosuperiores && docente.estudiosuperiores.some(
            (estudio) => estudio.tipo === "postgrado" && estudio.nombre && estudio.nombre.toLowerCase().includes(searchLower)
          ) || // Buscar por cursos
          docente.cursos && docente.cursos.some(
            (curso) => curso.nombre && curso.nombre.toLowerCase().includes(searchLower)
          )
        )
      );
    } else {
      filtered = allDocentes.filter((docente) => docente.estado === "postulante");
    }
    setFilteredDocentes(filtered);
  };
  const handleGradeChange = (selectedGrado) => {
    const filtered = selectedGrado ? allDocentes.filter(
      (docente) => docente.estudiosuperiores.some(
        (estudio) => estudio.gradoTipo === selectedGrado
      )
    ) : allDocentes;
    setFilteredDocentes(filtered);
  };
  const handleStatusChange = (status) => {
    setStatusFilter(status);
    let filtered = allDocentes;
    if (status === "agendado") {
      filtered = allDocentes.filter((docente) => docente.agendado === 1 && docente.estado === "postulante");
    } else if (status === "aprobado" || status === "rechazado") {
      filtered = allDocentes.filter(
        (docente) => docente.estado.toLowerCase() === status.toLowerCase()
      );
    } else {
      filtered = allDocentes.filter((docente) => docente.estado === "postulante");
    }
    setFilteredDocentes(filtered);
  };
  if (loading) {
    return /* @__PURE__ */ jsx("p", { children: "Cargando datos..." });
  }
  return /* @__PURE__ */ jsxs("div", { className: "docente-search-container", children: [
    /* @__PURE__ */ jsxs("div", { className: "filters-container", children: [
      /* @__PURE__ */ jsx(DocenteFilter, { onSearch: handleSearch }),
      /* @__PURE__ */ jsx(DocenteFilterByGrade, { onGradeChange: handleGradeChange }),
      /* @__PURE__ */ jsx("label", { htmlFor: "estado-select", children: "Buscar por estado" }),
      /* @__PURE__ */ jsxs(
        "select",
        {
          className: "filter-select",
          value: statusFilter,
          onChange: (e) => handleStatusChange(e.target.value),
          children: [
            /* @__PURE__ */ jsx("option", { value: "postulante", children: "Todos" }),
            /* @__PURE__ */ jsx("option", { value: "agendado", children: "Agendados" }),
            /* @__PURE__ */ jsx("option", { value: "aprobado", children: "Aprobados" }),
            /* @__PURE__ */ jsx("option", { value: "rechazado", children: "Rechazados" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "results-container", children: filteredDocentes.length > 0 ? filteredDocentes.map((docente) => /* @__PURE__ */ jsx(
      ResultadosDocentes,
      {
        nombres: docente.nombres,
        correo: docente.correo,
        numeroDocumento: docente.numeroDocumento,
        telefono: docente.telefono,
        idDocente: docente.idDocente
      },
      docente.idDocente
    )) : /* @__PURE__ */ jsx("p", { className: "no-results", children: "No se encontraron resultados." }) })
  ] });
};

const $$DocenteSearchContainer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "DocenteSearch", DocenteSearch, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/components/docentes/DocenteSearch", "client:component-export": "DocenteSearch" })}`;
}, "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/components/docentes/DocenteSearchContainer.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sistema Academico ESAM | Postulantes", "canonical": "https://academico-docentes.esam.edu.bo/", "description": "Sistema acad\xE9mico de ESAM para contrataci\xF3n y postulaci\xF3n de docentes." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroTitle", $$HeroTitle, { "titulo": "Postulantes" })} ${renderComponent($$result2, "DocenteSearchContainer", $$DocenteSearchContainer, {})} ` })}`;
}, "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/pages/postulantes/index.astro", void 0);

const $$file = "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/pages/postulantes/index.astro";
const $$url = "/postulantes";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
