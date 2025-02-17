import { c as createComponent, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_DDyqfWY9.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BVg-EGxa.mjs';
import { $ as $$HeroTitle } from '../chunks/HeroTitle_DeX6Rgca.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { i as infoProgramas } from '../chunks/infoModulosPrueba_B9lxFZqF.mjs';
export { renderers } from '../renderers.mjs';

const ProgramSearch = () => {
  const [selectedProgramId, setSelectedProgramId] = useState(null);
  const handleProgramClick = (id) => {
    setSelectedProgramId(id === selectedProgramId ? null : id);
  };
  return /* @__PURE__ */ jsx("div", { children: infoProgramas.map((programa) => /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h2", { onClick: () => handleProgramClick(programa.id_programa), children: `ID Programa: ${programa.id_programa}` }),
    selectedProgramId === programa.id_programa && /* @__PURE__ */ jsx("div", { children: programa.modulos.map((modulo) => /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { children: `Módulo: ${modulo.nombre}` }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          className: "v-btn v-btn--slim v-theme--light v-btn--density-default v-btn--size-default v-btn--variant-text button-card",
          children: [
            /* @__PURE__ */ jsx("span", { className: "v-btn__overlay" }),
            /* @__PURE__ */ jsx("span", { className: "v-btn__underlay" }),
            /* @__PURE__ */ jsx("a", { href: `/programas/${programa.id_programa}/${modulo.id}`, children: "Invitación" })
          ]
        }
      )
    ] }, modulo.id)) })
  ] }, programa.id_programa)) });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sistema Academico ESAM | Programas", "canonical": "https://academico-docentes.esam.edu.bo/", "description": "Sistema acad\xE9mico de ESAM para contrataci\xF3n y postulaci\xF3n de docentes." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroTitle", $$HeroTitle, { "titulo": "Programas" })} ${renderComponent($$result2, "ProgramSearch", ProgramSearch, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/components/programas/ProgramSearch", "client:component-export": "ProgramSearch" })} ` })}`;
}, "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/pages/programas/index.astro", undefined);

const $$file = "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/pages/programas/index.astro";
const $$url = "/programas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
