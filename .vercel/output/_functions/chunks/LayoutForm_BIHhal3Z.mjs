import { c as createComponent, a as createAstro, r as renderTemplate, b as renderScript, d as renderComponent, e as renderSlot, f as renderHead, g as addAttribute } from './astro/server_CdpYlLHK.mjs';
import 'kleur/colors';
import { $ as $$Footer, a as $$Header, b as $$ClientRouter } from './ClientRouter_domMXmnW.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$LayoutForm = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LayoutForm;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css"><link rel="stylesheet" href="/css/PW20_styles.css"><link rel="stylesheet" href="/css/PW20_media.css"><link rel="stylesheet" href="/css/PW20_consultation.css"><link rel="stylesheet" type="text/css" href="/css/countrySelect.min.css"><link rel="stylesheet" type="text/css" href="/css/PW20_header_separate.css"><link rel="stylesheet" href="/css/pw-ui.min.css"><meta name="generator"', "><title>", "</title>", "", "</head> <body> ", ' <main class="contenidoPrincipal"> <div class="mainContent"> ', " </div> </main> ", ' <script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"><\/script> ', " ", " ", " ", " </body> </html>"])), addAttribute(Astro2.generator, "content"), title, renderComponent($$result, "ViewTransitions", $$ClientRouter, {}), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}), renderScript($$result, "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/layouts/LayoutForm.astro?astro&type=script&index=0&lang.ts"), renderScript($$result, "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/layouts/LayoutForm.astro?astro&type=script&index=1&lang.ts"), renderScript($$result, "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/layouts/LayoutForm.astro?astro&type=script&index=2&lang.ts"), renderScript($$result, "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/layouts/LayoutForm.astro?astro&type=script&index=3&lang.ts"));
}, "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/layouts/LayoutForm.astro", void 0);

export { $$LayoutForm as $ };
