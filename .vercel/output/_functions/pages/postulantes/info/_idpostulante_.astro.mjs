import { c as createComponent, a as createAstro, r as renderTemplate, m as maybeRenderHead, g as addAttribute, d as renderComponent } from '../../../chunks/astro/server_DX4HsqQu.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                                */
import { $ as $$LayoutForm } from '../../../chunks/LayoutForm_C-xMX3aa.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$PostulanteInfo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostulanteInfo;
  const { postulante } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="container"> <div class="left-column"> <div class="profile-pic"> <img${addAttribute(postulante.fotografia, "src")} alt="profile"> </div> <div class="icon-container"> <h2><img src="/images/iconos/usuario (1).png" alt="User Icon" class="icon"> ${postulante.nombres}</h2> <p> <img src="/images/iconos/carnet-de-identidad.png" alt="Address CardIcon" class="icon">${postulante.numeroDocumento}</p> <p> <img src="/images/iconos/pastel.png" alt="Birthday Cake Icon" class="icon"> </p> <p> <img src="/images/iconos/sobre-de-papel-blanco.png" alt="Email  Icon" class="icon"> ${postulante.correo}</p> <p> <img src="/images/iconos/telefono.png" alt="Phone Icon" class="icon">${postulante.telefono}</p> <p> <img src="/images/iconos/genero.png" alt="Gender  Icon" class="icon"></p> <p> <img src="/images/iconos/mapa.png" alt="Map  Icon" class="icon"> </p> <p> <img src="/images/iconos/ubicacion (2).png" alt="Map Marker Icon" class="icon"> </p> </div> </div> <div class="right-column"> <h2>Estudios Pregrado</h2> ${postulante.estudiossuperiores && renderTemplate`<ul> ${postulante.estudiossuperiores.filter((estudios) => estudios.tipo === "pregrado").map((estudios) => renderTemplate`<li> <p><strong>Carrera:</strong> ${estudios.carrera}</p> <p><strong>Universidad:</strong> ${estudios.universidad}</p> <p><strong>País:</strong> ${estudios.pais}</p> <p><strong>Año:</strong> ${estudios.fecha}</p> <p><strong>Modalidad:</strong> ${estudios.modalidad}</p> </li>`)} </ul>`} <h2>Estudios Postgrado</h2> ${postulante.estudiossuperiores && renderTemplate`<ul> ${postulante.estudiossuperiores.filter((estudios) => estudios.tipo === "postgrado").map((estudios) => renderTemplate`<li> <p><strong>Nombre:</strong> ${estudios.nombre}</p> <p><strong>Universidad:</strong> ${estudios.universidad}</p> <p><strong>País:</strong> ${estudios.pais}</p> <p><strong>Año:</strong> ${estudios.fecha}</p> <p><strong>Modalidad:</strong> ${estudios.modalidad}</p> </li>`)} </ul>`} <h2>Cursos</h2> ${postulante.cursos && postulante.cursos.length > 0 && renderTemplate`<ul> ${postulante.cursos.map((cursos) => renderTemplate`<li> <p><strong>Nombre:</strong> ${cursos.nombre}</p> <p><strong>Universidad:</strong> ${cursos.universidad}</p> <p><strong>País:</strong> ${cursos.pais}</p> <p><strong>Año:</strong> ${cursos.anio}</p> </li>`)} </ul>`} </div> </div>`;
}, "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/components/docentes/PostulanteInfo.astro", undefined);

const $$Astro = createAstro();
const $$idPostulante = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$idPostulante;
  const { idPostulante } = Astro2.params;
  const apiUrl = `http://localhost:4321/api/docentes/${idPostulante}`;
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
  if (!idPostulante) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "LayoutForm", $$LayoutForm, { "title": `Sistema Acad\xE9mico ESAM | ${docenteData.nombres}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="back-button-container"> <a href="/postulantes" class="backbutton"> <img src="/images/iconos/back.png" alt="Regresar" class="back-icon"> </a> </div>  <div class="buttons-container"> <!-- Columna izquierda: Descargar PDF y Agendar Reunión --> <div class="left-buttons"> <div class="download-pdf"> ${renderComponent($$result2, "PostulantePDF", null, { "client:only": "react", "postulante": docenteData, "client:component-hydration": "only", "client:component-path": "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/components/docentes/PostulantePDF", "client:component-export": "PostulantePDF" })} </div> ${docenteData.agendado === 0 && renderTemplate`${renderComponent($$result2, "ScheduleMeetingButton", null, { "client:only": "react", "telefono": docenteData.telefono, "email": docenteData.correo, "idDocente": docenteData.idDocente, "client:component-hydration": "only", "client:component-path": "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/components/docentes/agendarReu/ScheduleMeetingButton", "client:component-export": "ScheduleMeetingButton" })}`} ${docenteData.agendado === 1 && docenteData.detalles && docenteData.detalles.length > 0 && renderTemplate`<div class="meeting-details"> <h2>Reunión Agendada</h2> <p> <strong>Fecha:</strong>${" "} ${docenteData.detalles[0].fecha || "Sin informaci\xF3n"} </p> <p> <strong>Link de Zoom:</strong>${" "} ${docenteData.detalles[0].link ? renderTemplate`<a${addAttribute(docenteData.detalles[0].link, "href")} target="_blank" rel="noopener noreferrer">
Ingrese aquí
</a>` : "No disponible"} </p> ${renderComponent($$result2, "ReprogramMeetingButton", null, { "client:only": "react", "telefono": docenteData.telefono, "email": docenteData.email, "fecha": docenteData.detalles[0].fecha || null, "link": docenteData.detalles[0].link || "", "idDocente": docenteData.idDocente, "client:component-hydration": "only", "client:component-path": "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/components/docentes/ReprogramMeetingButton", "client:component-export": "ReprogramMeetingButton" })} </div>`} </div> <!-- Columna derecha: Aprobar y Rechazar --> <div class="right-buttons"> ${renderComponent($$result2, "AprobarRechazarDocente", null, { "client:only": "react", "postulanteId": docenteData.idDocente, "client:component-hydration": "only", "client:component-path": "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/components/docentes/AprobarRechazarDocente", "client:component-export": "AprobarRechazarDocente" })} </div> </div> <section class="container"> <!-- Información del postulante --> ${renderComponent($$result2, "PostulanteInfo", $$PostulanteInfo, { "postulante": docenteData })} </section> ` })}`;
}, "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/pages/postulantes/info/[idPostulante].astro", undefined);

const $$file = "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/pages/postulantes/info/[idPostulante].astro";
const $$url = "/postulantes/info/[idPostulante]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$idPostulante,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
