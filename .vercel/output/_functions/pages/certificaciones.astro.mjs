import { c as createComponent, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_DX4HsqQu.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_D9Y1fe3o.mjs';
import { $ as $$HeroTitle } from '../chunks/HeroTitle_9g63LuIb.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "canonical": "https://academico-docentes.esam.edu.bo/", "description": "Sistema acad\xE9mico de ESAM para contrataci\xF3n y postulaci\xF3n de docentes.", "title": "Sistema Academico ESAM | Certificaciones" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroTitle", $$HeroTitle, { "titulo": "Certificaciones" })} ` })}`;
}, "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/pages/certificaciones/index.astro", undefined);

const $$file = "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/pages/certificaciones/index.astro";
const $$url = "/certificaciones";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
