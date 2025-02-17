import { c as createComponent, r as renderTemplate, f as renderHead, d as renderComponent, g as addAttribute } from '../../../chunks/astro/server_DDyqfWY9.mjs';
import 'kleur/colors';
import { $ as $$LayoutDashboard } from '../../../chunks/LayoutDashboard_Dng2E6DV.mjs';
/* empty css                                              */
export { renderers } from '../../../renderers.mjs';

const $$Convocatoria = createComponent(async ($$result, $$props, $$slots) => {
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  };
  const response = await fetch("http://localhost:4321/api/convocatorias/convocatorias");
  const convocatorias = await response.json();
  const convocatoriasAbiertas = convocatorias.filter((c) => c.estado === "abierta").map((c) => ({
    ...c,
    fechaInicio: formatDate(c.fechaInicio)
    // Formatear fecha de inicio
  }));
  return renderTemplate`<html lang="es" data-astro-cid-3plv5bdz> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Convocatorias</title>${renderHead()}</head> <body data-astro-cid-3plv5bdz> ${renderComponent($$result, "LayoutDashboard", $$LayoutDashboard, { "data-astro-cid-3plv5bdz": true }, { "default": ($$result2) => renderTemplate` <div class="container" data-astro-cid-3plv5bdz> <h1 data-astro-cid-3plv5bdz>Convocatorias Abiertas</h1> <div class="grid" data-astro-cid-3plv5bdz> ${convocatoriasAbiertas.map((convocatoria) => renderTemplate`<div class="card" data-astro-cid-3plv5bdz> <h2 data-astro-cid-3plv5bdz>${convocatoria.titulo}</h2> <p data-astro-cid-3plv5bdz><strong data-astro-cid-3plv5bdz>Fecha de inicio:</strong> ${convocatoria.fechaInicio}</p> <a${addAttribute(convocatoria.link, "href")} class="btn" data-astro-cid-3plv5bdz>Abrir</a> </div>`)} </div> </div> ` })}  </body> </html>`;
}, "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/pages/dashboardDoc/convocatorias/convocatoria.astro", undefined);

const $$file = "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/pages/dashboardDoc/convocatorias/convocatoria.astro";
const $$url = "/dashboardDoc/convocatorias/convocatoria";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Convocatoria,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
