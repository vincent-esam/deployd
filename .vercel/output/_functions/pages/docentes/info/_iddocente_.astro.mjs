import { c as createComponent, a as createAstro, r as renderTemplate, d as renderComponent, m as maybeRenderHead, g as addAttribute } from '../../../chunks/astro/server_DDyqfWY9.mjs';
import 'kleur/colors';
import { $ as $$LayoutForm } from '../../../chunks/LayoutForm_wNbaqqe1.mjs';
/* empty css                                             */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const $$idDocente = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$idDocente;
  const categoriasPredefinidas = ["carnet", "certificados", "diplomados", "doctorados", "maestr\xEDas", "tituloProvisionN"];
  const { idDocente } = Astro2.params;
  const apiUrl = `http://localhost:4321/api/docentes/${idDocente}`;
  let docenteData = null;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(
        `Error al obtener los datos del docente: ${response.statusText}`
      );
    }
    docenteData = await response.json();
  } catch (error) {
    console.error("Hubo un problema al obtener los datos del docente:", error);
  }
  if (!idDocente || !docenteData) {
    return Astro2.redirect("/404");
  }
  const archivosPorCategoria = docenteData.archivosDocente.reduce((acc, archivo) => {
    const categoria = archivo.tipoArchivo || "Sin categor\xEDa";
    if (!acc[categoria]) {
      acc[categoria] = [];
    }
    acc[categoria].push(archivo);
    return acc;
  }, {});
  categoriasPredefinidas.forEach((categoria) => {
    if (!archivosPorCategoria[categoria]) {
      archivosPorCategoria[categoria] = [];
    }
  });
  return renderTemplate`${renderComponent($$result, "LayoutForm", $$LayoutForm, { "title": `Archivos de ${docenteData.nombres}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="back-button-container"> <a href="/docentes" class="backbutton"> <img src="/images/iconos/back.png" alt="Regresar" class="back-icon"> </a> </div> <div class="docente-info"> <h1>Archivos Subidos por: ${docenteData.nombres}</h1> </div> <div class="archivos-container"> ${Object.entries(archivosPorCategoria).map(([categoria, archivos]) => renderTemplate`<section class="categoria"> <h2>${categoria}</h2> ${archivos.length > 0 ? renderTemplate`<ul class="archivo-lista"> ${archivos.map((archivo) => renderTemplate`<li> <a${addAttribute(archivo.rutaArchivo, "href")} target="_blank" class="archivo-link"> ${archivo.nombreArchivo} </a> <p class="archivo-fecha">
Subido el: ${new Date(archivo.fechaSubida).toLocaleString()} </p> </li>`)} </ul>` : renderTemplate`<p class="mensaje-vacio">Todavía no hay archivos subidos</p>`} </section>`)} </div> ` })}`;
}, "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/pages/docentes/info/[idDocente].astro", undefined);

const $$file = "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/pages/docentes/info/[idDocente].astro";
const $$url = "/docentes/info/[idDocente]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$idDocente,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
