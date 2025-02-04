import { c as createComponent, a as createAstro, r as renderTemplate, m as maybeRenderHead, b as addAttribute, e as renderHead, f as renderSlot, g as renderComponent } from '../chunks/astro/server_Cthrito7.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const astroLogo = new Proxy({"src":"/_astro/astro.Dm8K3lV8.svg","width":115,"height":48,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/assets/astro.svg";
							}
							
							return target[name];
						}
					});

const background = new Proxy({"src":"/_astro/background.BPKAcmfN.svg","width":1440,"height":1024,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/assets/background.svg";
							}
							
							return target[name];
						}
					});

const $$Astro$2 = createAstro();
const $$Welcome = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Welcome;
  return renderTemplate`${maybeRenderHead()}<div id="container" data-astro-cid-mmc7otgs> <img id="background"${addAttribute(background.src, "src")} alt="" fetchpriority="high" data-astro-cid-mmc7otgs> <main data-astro-cid-mmc7otgs> <section id="hero" data-astro-cid-mmc7otgs> <a href="https://astro.build" data-astro-cid-mmc7otgs><img${addAttribute(astroLogo.src, "src")} width="115" height="48" alt="Astro Homepage" data-astro-cid-mmc7otgs></a> <h1 data-astro-cid-mmc7otgs>
To get started, open the <code data-astro-cid-mmc7otgs><pre data-astro-cid-mmc7otgs>src/pages</pre></code> directory in your project.
</h1> <section id="links" data-astro-cid-mmc7otgs> <a class="button" href="https://docs.astro.build" data-astro-cid-mmc7otgs>Read our docs</a> <a href="https://astro.build/chat" data-astro-cid-mmc7otgs>Join our Discord <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36" data-astro-cid-mmc7otgs><path fill="currentColor" d="M107.7 8.07A105.15 105.15 0 0 0 81.47 0a72.06 72.06 0 0 0-3.36 6.83 97.68 97.68 0 0 0-29.11 0A72.37 72.37 0 0 0 45.64 0a105.89 105.89 0 0 0-26.25 8.09C2.79 32.65-1.71 56.6.54 80.21a105.73 105.73 0 0 0 32.17 16.15 77.7 77.7 0 0 0 6.89-11.11 68.42 68.42 0 0 1-10.85-5.18c.91-.66 1.8-1.34 2.66-2a75.57 75.57 0 0 0 64.32 0c.87.71 1.76 1.39 2.66 2a68.68 68.68 0 0 1-10.87 5.19 77 77 0 0 0 6.89 11.1 105.25 105.25 0 0 0 32.19-16.14c2.64-27.38-4.51-51.11-18.9-72.15ZM42.45 65.69C36.18 65.69 31 60 31 53s5-12.74 11.43-12.74S54 46 53.89 53s-5.05 12.69-11.44 12.69Zm42.24 0C78.41 65.69 73.25 60 73.25 53s5-12.74 11.44-12.74S96.23 46 96.12 53s-5.04 12.69-11.43 12.69Z" data-astro-cid-mmc7otgs></path></svg> </a> </section> </section> </main> <a href="https://astro.build/blog/astro-5/" id="news" class="box" data-astro-cid-mmc7otgs> <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-mmc7otgs><path d="M24.667 12c1.333 1.414 2 3.192 2 5.334 0 4.62-4.934 5.7-7.334 12C18.444 28.567 18 27.456 18 26c0-4.642 6.667-7.053 6.667-14Zm-5.334-5.333c1.6 1.65 2.4 3.43 2.4 5.333 0 6.602-8.06 7.59-6.4 17.334C13.111 27.787 12 25.564 12 22.666c0-4.434 7.333-8 7.333-16Zm-6-5.333C15.111 3.555 16 5.556 16 7.333c0 8.333-11.333 10.962-5.333 22-3.488-.774-6-4-6-8 0-8.667 8.666-10 8.666-20Z" fill="#111827" data-astro-cid-mmc7otgs></path></svg> <h2 data-astro-cid-mmc7otgs>What's New in Astro 5.0?</h2> <p data-astro-cid-mmc7otgs>
From content layers to server islands, click to learn more about the new features and
			improvements in Astro 5.0
</p> </a> </div> `;
}, "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/components/Welcome.astro", undefined);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro Basics</title>${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/layouts/Layout.astro", undefined);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Welcome", $$Welcome, {})} ` })}`;
}, "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/pages/index.astro", undefined);

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
