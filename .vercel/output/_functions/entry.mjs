import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BViYaROq.mjs';
import { manifest } from './manifest_B4QZuIr2.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/auth.astro.mjs');
const _page2 = () => import('./pages/api/dashboard/dashboard.astro.mjs');
const _page3 = () => import('./pages/api/docentes/agendas/insert_agendas.astro.mjs');
const _page4 = () => import('./pages/api/docentes/agendas/updatereunion.astro.mjs');
const _page5 = () => import('./pages/api/docentes/docente.astro.mjs');
const _page6 = () => import('./pages/api/docentes/grados.astro.mjs');
const _page7 = () => import('./pages/api/docentes/postulantes.astro.mjs');
const _page8 = () => import('./pages/api/docentes/prueba/_docente_.astro.mjs');
const _page9 = () => import('./pages/api/docentes/updateagendado.astro.mjs');
const _page10 = () => import('./pages/api/docentes/updateestadodocente.astro.mjs');
const _page11 = () => import('./pages/api/docentes/_postulante_backup.astro.mjs');
const _page12 = () => import('./pages/api/docentes/_postulante_.astro.mjs');
const _page13 = () => import('./pages/api/estudiossup.astro.mjs');
const _page14 = () => import('./pages/api/estudiossuppost.astro.mjs');
const _page15 = () => import('./pages/api/expdoc/expdocpost.astro.mjs');
const _page16 = () => import('./pages/api/expdoc/expdocput.astro.mjs');
const _page17 = () => import('./pages/api/grados/grados.astro.mjs');
const _page18 = () => import('./pages/api/idiomas/idiomas.astro.mjs');
const _page19 = () => import('./pages/api/idiomasdoc/idiomasdocpost.astro.mjs');
const _page20 = () => import('./pages/api/idiomasdoc/idiomasdocput.astro.mjs');
const _page21 = () => import('./pages/api/insert_postulante.astro.mjs');
const _page22 = () => import('./pages/api/modalidades/modalidades.astro.mjs');
const _page23 = () => import('./pages/api/paises/paises.astro.mjs');
const _page24 = () => import('./pages/api/prodintelectual/prodintelpost.astro.mjs');
const _page25 = () => import('./pages/api/prodintelectual/prodintelput.astro.mjs');
const _page26 = () => import('./pages/api/skill/skillpost.astro.mjs');
const _page27 = () => import('./pages/api/skill/skillput.astro.mjs');
const _page28 = () => import('./pages/api/tipoe/tipoe.astro.mjs');
const _page29 = () => import('./pages/api/update_postulante.astro.mjs');
const _page30 = () => import('./pages/api/_update_doc_.astro.mjs');
const _page31 = () => import('./pages/certificaciones.astro.mjs');
const _page32 = () => import('./pages/dashboarddoc.astro.mjs');
const _page33 = () => import('./pages/docentes/formulario-registro.astro.mjs');
const _page34 = () => import('./pages/docentes.astro.mjs');
const _page35 = () => import('./pages/login.astro.mjs');
const _page36 = () => import('./pages/perfil/editp/_iddocente_.astro.mjs');
const _page37 = () => import('./pages/perfil/index.astro.mjs');
const _page38 = () => import('./pages/postulantes/email/template.astro.mjs');
const _page39 = () => import('./pages/postulantes/info/_idpostulante_.astro.mjs');
const _page40 = () => import('./pages/postulantes.astro.mjs');
const _page41 = () => import('./pages/programas/_id_programa_/_id_modulo_.astro.mjs');
const _page42 = () => import('./pages/programas.astro.mjs');
const _page43 = () => import('./pages/prueba/prueba.astro.mjs');
const _page44 = () => import('./pages/registro-programas.astro.mjs');
const _page45 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/auth.ts", _page1],
    ["src/pages/api/dashboard/dashboard.ts", _page2],
    ["src/pages/api/docentes/agendas/insert_agendas.ts", _page3],
    ["src/pages/api/docentes/agendas/updateReunion.ts", _page4],
    ["src/pages/api/docentes/docente.ts", _page5],
    ["src/pages/api/docentes/grados.ts", _page6],
    ["src/pages/api/docentes/postulantes.ts", _page7],
    ["src/pages/api/docentes/prueba/[docente].ts", _page8],
    ["src/pages/api/docentes/updateAgendado.ts", _page9],
    ["src/pages/api/docentes/updateEstadoDocente.ts", _page10],
    ["src/pages/api/docentes/[postulante]backup.ts", _page11],
    ["src/pages/api/docentes/[postulante].ts", _page12],
    ["src/pages/api/estudiossup.ts", _page13],
    ["src/pages/api/estudiossuppost.ts", _page14],
    ["src/pages/api/expdoc/expdocpost.ts", _page15],
    ["src/pages/api/expdoc/expdocput.ts", _page16],
    ["src/pages/api/grados/grados.ts", _page17],
    ["src/pages/api/idiomas/idiomas.ts", _page18],
    ["src/pages/api/idiomasdoc/idiomasdocpost.ts", _page19],
    ["src/pages/api/idiomasdoc/idiomasdocput.ts", _page20],
    ["src/pages/api/insert_postulante.ts", _page21],
    ["src/pages/api/modalidades/modalidades.ts", _page22],
    ["src/pages/api/paises/paises.ts", _page23],
    ["src/pages/api/prodintelectual/prodintelpost.ts", _page24],
    ["src/pages/api/prodintelectual/prodintelput.ts", _page25],
    ["src/pages/api/skill/skillpost.ts", _page26],
    ["src/pages/api/skill/skillput.ts", _page27],
    ["src/pages/api/tipoe/tipoe.ts", _page28],
    ["src/pages/api/update_postulante.ts", _page29],
    ["src/pages/api/[update_doc].ts", _page30],
    ["src/pages/certificaciones/index.astro", _page31],
    ["src/pages/dashboardDoc/index.astro", _page32],
    ["src/pages/docentes/formulario-registro.astro", _page33],
    ["src/pages/docentes/index.astro", _page34],
    ["src/pages/login/index.astro", _page35],
    ["src/pages/perfil/editp/[idDocente].astro", _page36],
    ["src/pages/perfil/Index.astro", _page37],
    ["src/pages/postulantes/email/template.html", _page38],
    ["src/pages/postulantes/info/[idPostulante].astro", _page39],
    ["src/pages/postulantes/index.astro", _page40],
    ["src/pages/programas/[id_programa]/[id_modulo].astro", _page41],
    ["src/pages/programas/index.astro", _page42],
    ["src/pages/prueba/prueba.astro", _page43],
    ["src/pages/registro-programas/index.astro", _page44],
    ["src/pages/index.astro", _page45]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "df267eaf-6d95-4b53-bf3d-6a620c82d883",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
