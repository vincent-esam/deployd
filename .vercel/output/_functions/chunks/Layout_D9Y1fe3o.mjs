import { c as createComponent, r as renderTemplate, u as unescapeHTML, a as createAstro, g as addAttribute, d as renderComponent, b as renderScript, f as renderHead, e as renderSlot } from './astro/server_DX4HsqQu.mjs';
import 'kleur/colors';
import { b as $$ClientRouter, a as $$Header, $ as $$Footer } from './ClientRouter_CF-6FQQy.mjs';
import 'clsx';
/* empty css                         */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$RichResults = createComponent(($$result, $$props, $$slots) => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    url: "https://lavelada.es",
    image: "https://cdn.lavelada.dev/og.jpg",
    sameAs: [
      "https://www.instagram.com/infolavelada",
      "https://x.com/infoLaVelada",
      "https://github.com/midudev/la-velada-web-oficial"
    ],
    logo: "https://cdn.lavelada.dev/og.jpg",
    name: "La Velada del A\xF1o 4",
    alternateName: "La Velada del A\xF1o IV",
    description: "Sistema acad\xE9mico para ESAM Cochabamba"
  };
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "La Velada del A\xF1o 4",
    startDate: "2024-07-13T19:00:00",
    endDate: "2024-07-13T22:00:00",
    eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
    // https://schema.org/EventAttendanceModeEnumeration
    eventStatus: "https://schema.org/EventScheduled",
    // https://schema.org/EventStatusType
    location: {
      "@type": "Place",
      name: "Estadio Santiago Bernab\xE9u",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Av. de Concha Espina, 1",
        addressLocality: "Chamart\xEDn",
        postalCode: "28036",
        addressRegion: "Madrid",
        addressCountry: "ES"
      }
    },
    image: ["https://cdn.lavelada.dev/og.jpg"],
    description: "La Velada del A\xF1o es un evento de boxeo aficionado entre streamers, creadores de contenido y celebridades, organizado por Ibai Llanos.",
    /* "offers": {}, // Añadir cuando las entradas estén disponibles https://schema.org/Offer */
    organizer: {
      "@type": "Person",
      name: "Ibai Llanos",
      url: "https://www.twitch.tv/ibai"
    }
  };
  const FAQs = [
    {
      question: "\xBFQui\xE9n va a participar en La Velada del A\xF1o 4?",
      answer: `Los participantes de esta edici\xF3n ser\xE1n:`
    },
    {
      question: "\xBFCu\xE1ndo tendr\xE1 lugar La Velada del A\xF1o 4?",
      answer: "La Velada del A\xF1o 4 tendr\xE1 lugar el <strong>s\xE1bado 13 de julio de 2024</strong> en el Estadio Santiago Bernab\xE9u"
    },
    {
      question: "\xBFC\xF3mo puedo postularme?",
      answer: "Llenando nuestro formulario de registro tendr\xE1s acceso a un perfil en el cual podr\xE1s subir toda tu informaci\xF3n acad\xE9mica <strong>y postularte a los diferentes cargos de docencia que se van lanzando.</strong>"
    }
  ];
  const FAQSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      FAQs.map(({ answer, question }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer
        }
      }))
    ]
  };
  return renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', '<\/script> <script type="application/ld+json">', '<\/script> <script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(organizationSchema)), unescapeHTML(JSON.stringify(eventSchema)), unescapeHTML(JSON.stringify(FAQSchema)));
}, "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/components/seo/RichResults.astro", undefined);

const $$Astro$1 = createAstro();
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SEO;
  const {
    title,
    description,
    preload,
    canonical,
    image = "https://cdn.lavelada.dev/og.jpg"
  } = Astro2.props;
  const determineCanonicalURL = () => {
    if (Astro2.url.host.includes("localhost")) return "http://localhost:4321";
    return canonical || Astro2.url.pathname;
  };
  const canonicalURL = new URL(determineCanonicalURL(), Astro2.site);
  return renderTemplate`<title>${title}</title><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><link rel="preload"${addAttribute("https://cdn.lavelada.dev/fonts/font-atomic.woff2", "href")} as="font" type="font/woff2" crossorigin>${preload?.map(({ href, as, type, rel = "preload", crossorigin }) => renderTemplate`<link${addAttribute(rel, "rel")}${addAttribute(href, "href")}${addAttribute(as, "as")}${addAttribute(type, "type")}${addAttribute(crossorigin, "crossorigin")}>`)}<link rel="canonical"${addAttribute(canonicalURL, "href")}><meta name="viewport" content="width=device-width"><meta name="theme-color" content="#d5ff00"><meta name="keywords" content="academico, ESAM, posgrado, postgrado, unsxx, universidad nacional siglo xx"><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:site_name" content="Académico Docentes ESAM"><meta property="og:type" content="website"><meta property="og:locale" content="es_ES"><meta name="robots" content="index, follow"><meta name="googlebot" content="index, follow"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="apple-touch-icon" href="/img/icons/apple-touch-icon.png"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="msapplication-config" content="/browserconfig.xml">${renderComponent($$result, "RichResults", $$RichResults, {})}`;
}, "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/components/seo/SEO.astro", undefined);

const $$Toast = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderScript($$result, "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/components/ui/Toast.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/components/ui/Toast.astro", undefined);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, preload, canonical, image } = Astro2.props;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "SEO", $$SEO, { "canonical": canonical, "description": description, "image": image, "preload": preload, "title": title })}${renderComponent($$result, "ViewTransitions", $$ClientRouter, {})}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main class="contenidoPrincipal"> <div class="mainContent"> ${renderSlot($$result, $$slots["default"])} </div> </main> ${renderComponent($$result, "Footer", $$Footer, {})} ${renderComponent($$result, "Toast", $$Toast, {})} </body></html>`;
}, "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/layouts/Layout.astro", undefined);

export { $$Layout as $ };
