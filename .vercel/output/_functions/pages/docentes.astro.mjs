import { c as createComponent, d as renderComponent, r as renderTemplate } from '../chunks/astro/server_CdpYlLHK.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DNV0txGe.mjs';
import { $ as $$HeroTitle } from '../chunks/HeroTitle_D919oC3L.mjs';
import { jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
/* empty css                                 */
import { R as ResultadosDocentes } from '../chunks/ResultadosDocentes_CZ2od6YJ.mjs';
export { renderers } from '../renderers.mjs';

const BuscarDocente = () => {
  const [approvedDocentes, setApprovedDocentes] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchApprovedDocentes = async (searchTerm = "") => {
      try {
        const response = await fetch(
          `http://localhost:4321/api/docentes/postulantes?search=${searchTerm}`
        );
        if (!response.ok) throw new Error("Error al obtener los datos");
        const data = await response.json();
        const filteredData = data.filter(
          (docente) => docente.estado.toLowerCase() === "aprobado"
        );
        setApprovedDocentes(filteredData);
        setLoading(false);
      } catch (error) {
        console.error("Error al conectar con la API:", error);
        setLoading(false);
      }
    };
    fetchApprovedDocentes();
  }, []);
  if (loading) {
    return /* @__PURE__ */ jsx("p", { children: "Cargando datos..." });
  }
  return /* @__PURE__ */ jsx("div", { className: "docente-search-container", children: /* @__PURE__ */ jsx("div", { className: "results-container", children: approvedDocentes.length > 0 ? approvedDocentes.map((docente) => /* @__PURE__ */ jsx(
    ResultadosDocentes,
    {
      nombres: docente.nombres,
      correo: docente.correo,
      numeroDocumento: docente.numeroDocumento,
      telefono: docente.telefono,
      idDocente: docente.idDocente
    },
    docente.idDocente
  )) : /* @__PURE__ */ jsx("p", { className: "no-results", children: "No se encontraron docentes aprobados." }) }) });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sistema Academico ESAM | Docentes", "canonical": "https://academico-docentes.esam.edu.bo/", "description": "Sistema acad\xE9mico de ESAM para contrataci\xF3n y postulaci\xF3n de docentes." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroTitle", $$HeroTitle, { "titulo": "Docentes" })} ${renderComponent($$result2, "BuscarDocente", BuscarDocente, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/components/docentes/docentesAprobados/BuscarDocentes", "client:component-export": "BuscarDocente" })} ` })}`;
}, "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/pages/docentes/index.astro", void 0);

const $$file = "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/pages/docentes/index.astro";
const $$url = "/docentes";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
