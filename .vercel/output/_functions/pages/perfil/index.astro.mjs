import { c as createComponent, r as renderTemplate, d as renderComponent } from '../../chunks/astro/server_DDyqfWY9.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BVg-EGxa.mjs';
import { $ as $$HeroTitle } from '../../chunks/HeroTitle_DeX6Rgca.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sistema Academico ESAM | Perfil Personal", "canonical": "https://academico-docentes.esam.edu.bo/", "description": "Sistema acad\xE9mico de ESAM para contrataci\xF3n y postulaci\xF3n de docentes." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroTitle", $$HeroTitle, { "titulo": "Perfil Personal" })}
z
` })}`;
}, "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/pages/perfil/Index.astro", undefined);

const $$file = "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/pages/perfil/Index.astro";
const $$url = "/perfil/Index";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
