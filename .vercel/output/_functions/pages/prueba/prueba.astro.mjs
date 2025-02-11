import { c as createComponent, r as renderTemplate, d as renderComponent } from '../../chunks/astro/server_DX4HsqQu.mjs';
import 'kleur/colors';
import ProduccionesIntelectualesManager from '../../chunks/DocentesIntel_C57n9-61.mjs';
export { renderers } from '../../renderers.mjs';

const $$Prueba = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ProduccionesIntelectualesManager", ProduccionesIntelectualesManager, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/components/formdoc/DocentesIntel", "client:component-export": "default" })}`;
}, "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/pages/prueba/prueba.astro", undefined);

const $$file = "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/pages/prueba/prueba.astro";
const $$url = "/prueba/prueba";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Prueba,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
