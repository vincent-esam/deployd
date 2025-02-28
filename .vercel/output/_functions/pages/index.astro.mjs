import { c as createComponent, a as createAstro, m as maybeRenderHead, g as addAttribute, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_CdpYlLHK.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DNV0txGe.mjs';
import { $ as $$HeroTitle } from '../chunks/HeroTitle_D919oC3L.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$CardLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardLink;
  const { image, title, href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="cardLink" data-astro-cid-yzja64y2> <a${addAttribute(href, "href")} data-astro-cid-yzja64y2> <img class="boton"${addAttribute(image, "src")}${addAttribute(title, "alt")} height="250px" data-astro-cid-yzja64y2> </a> </div> `;
}, "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/components/CardLink.astro", void 0);

const variablesCardLink = [
  {
    titulo: "perfil personal",
    imagen: "/images/svg/boton1.svg",
    href: "/docentes/formulario-registro",
  },
  {
    titulo: "registro de programas",
    imagen: "/images/svg/boton2.svg",
    href: "/registro-programas/",
  },
  {
    titulo: "docentes",
    imagen: "/images/svg/boton5.svg",
    href: "/docentes/",
  },
  {
    titulo: "postulantes",
    imagen: "/images/svg/boton4.svg",
    href: "/postulantes/",
  },
  {
    titulo: "programas",
    imagen: "/images/svg/boton3.svg",
    href: "/programas/",
  },
  {
    titulo: "certificaciones",
    imagen: "/images/svg/boton6.svg",
    href: "/certificaciones/",
  },
];

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sistema Academico ESAM", "canonical": "https://academico-docentes.esam.edu.bo/", "description": "Sistema acad\xE9mico de ESAM para contrataci\xF3n y postulaci\xF3n de docentes.", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroTitle", $$HeroTitle, { "titulo": "Men\xFA Principal", "data-astro-cid-j7pv25f6": true })} ${maybeRenderHead()}<div class="contenidoCentral" data-astro-cid-j7pv25f6> ${variablesCardLink.map((boton) => renderTemplate`${renderComponent($$result2, "CardLink", $$CardLink, { "title": boton.titulo, "image": boton.imagen, "href": boton.href, "data-astro-cid-j7pv25f6": true })}`)} </div> ` })} `;
}, "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/pages/index.astro", void 0);

const $$file = "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
