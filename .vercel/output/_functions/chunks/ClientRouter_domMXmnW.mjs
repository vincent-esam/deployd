import { c as createComponent, m as maybeRenderHead, r as renderTemplate, a as createAstro, g as addAttribute, b as renderScript } from './astro/server_CdpYlLHK.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-3ef6ksr2> <a id="logoEsam" href="/" data-astro-cid-3ef6ksr2></a> <h1 id="titulo" data-astro-cid-3ef6ksr2>SISTEMA ACADÉMICO</h1> <a id="logoEsamMobile" href="/" data-astro-cid-3ef6ksr2> <h1 id="tituloMobile" data-astro-cid-3ef6ksr2>SISTEMA ACADÉMICO</h1> </a> </header> <div class="barraAmarilla" data-astro-cid-3ef6ksr2></div> `;
}, "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte> <div class="piePagina" data-astro-cid-sz7xmlte> <div data-astro-cid-sz7xmlte> <div class="redesSociales" data-astro-cid-sz7xmlte> <a href="https://www.facebook.com/esamcochabambasucursal" target="_blank" data-astro-cid-sz7xmlte><img class="ico" src="/images/svg/facebook.svg" alt="" width="25px" data-astro-cid-sz7xmlte></a> <a href="https://www.instagram.com/esamcochabambasucursal/" target="_blank" data-astro-cid-sz7xmlte><img class="ico" src="/images/svg/instagram.svg" alt="" width="28px" data-astro-cid-sz7xmlte></a> <a href="https://bo.linkedin.com/company/esamcochabambasucursal" target="_blank" data-astro-cid-sz7xmlte><img class="ico" src="/images/svg/linkedin.svg" alt="" width="25px" data-astro-cid-sz7xmlte></a> </div> </div> <div data-astro-cid-sz7xmlte> <h5 data-astro-cid-sz7xmlte>©2024 ESAM COCHABAMBA SUCURSAL</h5> <h5 data-astro-cid-sz7xmlte>TELEFONO: 44521541 - 71315551</h5> </div> </div> </footer> `;
}, "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/node_modules/astro/components/ClientRouter.astro", void 0);

export { $$Footer as $, $$Header as a, $$ClientRouter as b };
