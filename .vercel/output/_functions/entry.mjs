import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_C_idVno0.mjs';
import { manifest } from './manifest_LSfbprP2.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/auth.astro.mjs');
const _page2 = () => import('./pages/api/convocatorias/convocatorias.astro.mjs');
const _page3 = () => import('./pages/api/convocatorias/insert_convocatorias.astro.mjs');
const _page4 = () => import('./pages/api/convocatorias/postulantes/create.astro.mjs');
const _page5 = () => import('./pages/api/convocatorias/postulantes/_idconvocatoria_.astro.mjs');
const _page6 = () => import('./pages/api/convocatorias/updateconvocatorias/_idconvocatoria_.astro.mjs');
const _page7 = () => import('./pages/api/convocatorias/updateestado.astro.mjs');
const _page8 = () => import('./pages/api/convocatorias/_titulo_.astro.mjs');
const _page9 = () => import('./pages/api/dashboard/dashboard.astro.mjs');
const _page10 = () => import('./pages/api/docentes/agendas/insert_agendas.astro.mjs');
const _page11 = () => import('./pages/api/docentes/agendas/updatereunion.astro.mjs');
const _page12 = () => import('./pages/api/docentes/grados.astro.mjs');
const _page13 = () => import('./pages/api/docentes/postulantes.astro.mjs');
const _page14 = () => import('./pages/api/docentes/prueba/_docente_.astro.mjs');
const _page15 = () => import('./pages/api/docentes/updateagendado.astro.mjs');
const _page16 = () => import('./pages/api/docentes/updateestadodocente.astro.mjs');
const _page17 = () => import('./pages/api/docentes/_postulante_backup.astro.mjs');
const _page18 = () => import('./pages/api/docentes/_postulante_.astro.mjs');
const _page19 = () => import('./pages/api/estudiossup.astro.mjs');
const _page20 = () => import('./pages/api/estudiossuppost.astro.mjs');
const _page21 = () => import('./pages/api/expdoc/expdocpost.astro.mjs');
const _page22 = () => import('./pages/api/expdoc/expdocput.astro.mjs');
const _page23 = () => import('./pages/api/grados/grados.astro.mjs');
const _page24 = () => import('./pages/api/idiomas/idiomas.astro.mjs');
const _page25 = () => import('./pages/api/idiomasdoc/idiomasdocpost.astro.mjs');
const _page26 = () => import('./pages/api/idiomasdoc/idiomasdocput.astro.mjs');
const _page27 = () => import('./pages/api/insert_postulante.astro.mjs');
const _page28 = () => import('./pages/api/modalidades/modalidades.astro.mjs');
const _page29 = () => import('./pages/api/paises/paises.astro.mjs');
const _page30 = () => import('./pages/api/prodintelectual/prodintelpost.astro.mjs');
const _page31 = () => import('./pages/api/prodintelectual/prodintelput.astro.mjs');
const _page32 = () => import('./pages/api/skill/skillpost.astro.mjs');
const _page33 = () => import('./pages/api/skill/skillput.astro.mjs');
const _page34 = () => import('./pages/api/tipoe/tipoe.astro.mjs');
const _page35 = () => import('./pages/api/update_postulante.astro.mjs');
const _page36 = () => import('./pages/api/_update_doc_.astro.mjs');
const _page37 = () => import('./pages/certificaciones.astro.mjs');
const _page38 = () => import('./pages/convocatorias/_convocatoria_.astro.mjs');
const _page39 = () => import('./pages/convocatorias.astro.mjs');
const _page40 = () => import('./pages/dashboarddoc/archivosdocentes/archivos.astro.mjs');
const _page41 = () => import('./pages/dashboarddoc/convocatorias/convocatoria.astro.mjs');
const _page42 = () => import('./pages/dashboarddoc.astro.mjs');
const _page43 = () => import('./pages/docentes/formulario-registro.astro.mjs');
const _page44 = () => import('./pages/docentes/info/_iddocente_.astro.mjs');
const _page45 = () => import('./pages/docentes.astro.mjs');
const _page46 = () => import('./pages/login/registro/indexregistro.astro.mjs');
const _page47 = () => import('./pages/login.astro.mjs');
const _page48 = () => import('./pages/perfil/editp/_iddocente_.astro.mjs');
const _page49 = () => import('./pages/perfil/index.astro.mjs');
const _page50 = () => import('./pages/postulantes/email/template.astro.mjs');
const _page51 = () => import('./pages/postulantes/info/_idpostulante_.astro.mjs');
const _page52 = () => import('./pages/postulantes.astro.mjs');
const _page53 = () => import('./pages/programas/_id_programa_/_id_modulo_.astro.mjs');
const _page54 = () => import('./pages/programas.astro.mjs');
const _page55 = () => import('./pages/prueba/prueba.astro.mjs');
const _page56 = () => import('./pages/registro-programas.astro.mjs');
const _page57 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/auth.ts", _page1],
    ["src/pages/api/convocatorias/convocatorias.ts", _page2],
    ["src/pages/api/convocatorias/insert_convocatorias.ts", _page3],
    ["src/pages/api/convocatorias/postulantes/create.ts", _page4],
    ["src/pages/api/convocatorias/postulantes/[idConvocatoria].ts", _page5],
    ["src/pages/api/convocatorias/updateConvocatorias/[idConvocatoria].ts", _page6],
    ["src/pages/api/convocatorias/updateEstado.ts", _page7],
    ["src/pages/api/convocatorias/[titulo].ts", _page8],
    ["src/pages/api/dashboard/dashboard.ts", _page9],
    ["src/pages/api/docentes/agendas/insert_agendas.ts", _page10],
    ["src/pages/api/docentes/agendas/updateReunion.ts", _page11],
    ["src/pages/api/docentes/grados.ts", _page12],
    ["src/pages/api/docentes/postulantes.ts", _page13],
    ["src/pages/api/docentes/prueba/[docente].ts", _page14],
    ["src/pages/api/docentes/updateAgendado.ts", _page15],
    ["src/pages/api/docentes/updateEstadoDocente.ts", _page16],
    ["src/pages/api/docentes/[postulante]backup.ts", _page17],
    ["src/pages/api/docentes/[postulante].ts", _page18],
    ["src/pages/api/estudiossup.ts", _page19],
    ["src/pages/api/estudiossuppost.ts", _page20],
    ["src/pages/api/expdoc/expdocpost.ts", _page21],
    ["src/pages/api/expdoc/expdocput.ts", _page22],
    ["src/pages/api/grados/grados.ts", _page23],
    ["src/pages/api/idiomas/idiomas.ts", _page24],
    ["src/pages/api/idiomasdoc/idiomasdocpost.ts", _page25],
    ["src/pages/api/idiomasdoc/idiomasdocput.ts", _page26],
    ["src/pages/api/insert_postulante.ts", _page27],
    ["src/pages/api/modalidades/modalidades.ts", _page28],
    ["src/pages/api/paises/paises.ts", _page29],
    ["src/pages/api/prodintelectual/prodintelpost.ts", _page30],
    ["src/pages/api/prodintelectual/prodintelput.ts", _page31],
    ["src/pages/api/skill/skillpost.ts", _page32],
    ["src/pages/api/skill/skillput.ts", _page33],
    ["src/pages/api/tipoe/tipoe.ts", _page34],
    ["src/pages/api/update_postulante.ts", _page35],
    ["src/pages/api/[update_doc].ts", _page36],
    ["src/pages/certificaciones/index.astro", _page37],
    ["src/pages/convocatorias/[convocatoria].astro", _page38],
    ["src/pages/convocatorias/index.astro", _page39],
    ["src/pages/dashboardDoc/archivosDocentes/archivos.astro", _page40],
    ["src/pages/dashboardDoc/convocatorias/convocatoria.astro", _page41],
    ["src/pages/dashboardDoc/index.astro", _page42],
    ["src/pages/docentes/formulario-registro.astro", _page43],
    ["src/pages/docentes/info/[idDocente].astro", _page44],
    ["src/pages/docentes/index.astro", _page45],
    ["src/pages/login/registro/indexRegistro.astro", _page46],
    ["src/pages/login/index.astro", _page47],
    ["src/pages/perfil/editp/[idDocente].astro", _page48],
    ["src/pages/perfil/Index.astro", _page49],
    ["src/pages/postulantes/email/template.html", _page50],
    ["src/pages/postulantes/info/[idPostulante].astro", _page51],
    ["src/pages/postulantes/index.astro", _page52],
    ["src/pages/programas/[id_programa]/[id_modulo].astro", _page53],
    ["src/pages/programas/index.astro", _page54],
    ["src/pages/prueba/prueba.astro", _page55],
    ["src/pages/registro-programas/index.astro", _page56],
    ["src/pages/index.astro", _page57]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "3b4de206-f175-4e17-b457-4c52f1421170",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
