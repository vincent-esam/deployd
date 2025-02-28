import { c as createComponent, a as createAstro, m as maybeRenderHead, r as renderTemplate } from './astro/server_CdpYlLHK.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$HeroTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeroTitle;
  const { titulo } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h1 class="title-principal" data-astro-cid-nwahxn3r>${titulo}</h1> `;
}, "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/components/ui/HeroTitle.astro", void 0);

export { $$HeroTitle as $ };
