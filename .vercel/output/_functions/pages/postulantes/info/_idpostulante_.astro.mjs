import { c as createComponent, a as createAstro, r as renderTemplate, m as maybeRenderHead, g as addAttribute, d as renderComponent } from '../../../chunks/astro/server_DDyqfWY9.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                                */
import { $ as $$LayoutForm } from '../../../chunks/LayoutForm_wNbaqqe1.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$PostulanteInfo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostulanteInfo;
  const { postulante } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="container"> <div class="left-column"> <div class="profile-pic"> <img${addAttribute(postulante.fotografia, "src")} alt="profile"> </div> <div class="icon-container"> <h2><img src="/images/iconos/usuario (1).png" alt="User Icon" class="icon"> ${postulante.nombres}</h2> <p> <img src="/images/iconos/carnet-de-identidad.png" alt="Address CardIcon" class="icon">${postulante.numeroDocumento}</p> <p> <img src="/images/iconos/pastel.png" alt="Birthday Cake Icon" class="icon"> </p> <p> <img src="/images/iconos/sobre-de-papel-blanco.png" alt="Email  Icon" class="icon"> ${postulante.correo}</p> <p> <img src="/images/iconos/telefono.png" alt="Phone Icon" class="icon">${postulante.telefono}</p> <p> <img src="/images/iconos/genero.png" alt="Gender  Icon" class="icon"></p> <p> <img src="/images/iconos/mapa.png" alt="Map  Icon" class="icon"> </p> <p> <img src="/images/iconos/ubicacion (2).png" alt="Map Marker Icon" class="icon"> </p> </div> </div> <div class="right-column"> <h2>Estudios Pregrado</h2> ${postulante.estudiosuperiores && postulante.estudiosuperiores.length > 0 && renderTemplate`<ul> ${postulante.estudiosuperiores.filter((estudios) => estudios.tipo?.toLowerCase() === "pregrado").map((estudios) => renderTemplate`<li> <p><strong>Carrera:</strong> ${estudios.carrera}</p> <p><strong>Universidad:</strong> ${estudios.universidad}</p> <p><strong>País:</strong> ${estudios.pais}</p> <p><strong>Año:</strong> ${estudios.fecha}</p> <p><strong>Modalidad:</strong> ${estudios.modalidad}</p> </li>`)} </ul>`} <h2>Estudios Postgrado</h2> ${postulante.estudiosuperiores && postulante.estudiosuperiores.length > 0 && renderTemplate`<ul> ${postulante.estudiosuperiores.filter((estudios) => estudios.tipo?.toLowerCase() === "postgrado").map((estudios) => renderTemplate`<li> <p><strong>Nombre:</strong> ${estudios.nombre}</p> <p><strong>Universidad:</strong> ${estudios.universidad}</p> <p><strong>País:</strong> ${estudios.pais}</p> <p><strong>Año:</strong> ${estudios.fecha}</p> <p><strong>Modalidad:</strong> ${estudios.modalidad}</p> </li>`)} </ul>`} ${postulante.cursos && postulante.cursos.length > 0 && renderTemplate`<h2>Cursos</h2>
          <ul> ${postulante.cursos.map((cursos) => renderTemplate`<li> <p><strong>Nombre:</strong> ${cursos.nombre}</p> <p><strong>Universidad:</strong> ${cursos.universidad}</p> <p><strong>País:</strong> ${cursos.pais}</p> <p><strong>Año:</strong> ${cursos.anio}</p> </li>`)} </ul>`} ${postulante.experienciasdocentes && postulante.experienciasdocentes.length > 0 && renderTemplate`<h2>Experiencias Docentes</h2>
             <ul> ${postulante.experienciasdocentes.map((experienciasd) => renderTemplate`<li> <p> <strong>Calidad:</strong> ${experienciasd.calidad} </p> <p> <strong>Materia:</strong> ${experienciasd.materia} </p> <p> <strong>Concluido:</strong> ${experienciasd.concluidoEl} </p> <p> <strong>Universidad:</strong> ${experienciasd.universidad} </p> </li>`)} </ul>`} ${postulante.idiomas && postulante.idiomas.length > 0 && renderTemplate`<h2>Idiomas</h2>
               <ul> ${postulante.idiomas.map((idiomas) => renderTemplate`<li> <p> <strong>Idioma:</strong> ${idiomas.idioma} </p> <p> <strong>Oral:</strong> ${idiomas.oral} </p> <p> <strong>Escucha:</strong> ${idiomas.escucha} </p> <p> <strong>Lectura:</strong> ${idiomas.lectura} </p> <p> <strong>Escritura:</strong> ${idiomas.escritura} </p> </li>`)} </ul>`} ${postulante.experienciaslaborales && postulante.experienciaslaborales.length > 0 && renderTemplate`<h2>Experiencia Laboral</h2>
                <ul> ${postulante.experienciaslaborales.map((experienciasL) => renderTemplate`<li> <p> <strong>Empresa:</strong> ${experienciasL.nombreEmpresa} </p> <p> <strong>Cargo:</strong> ${experienciasL.cargo} </p> <p> <strong>Ciudad:</strong> ${experienciasL.ciudad} </p> <p> <strong>Fecha de Inicio:</strong> ${experienciasL.fechaInicio} </p> <p> <strong>Fecha Final:</strong> ${experienciasL.fechaFinal} </p> <p> <strong>Pais:</strong> ${experienciasL.pais} </p> <p> <strong>Descripcion:</strong> ${experienciasL.descripcion} </p> <p> <strong>Referencias: </strong> </p> <p> <strong>Nombre de referencia:</strong> ${experienciasL.nombreCompleto} </p> <p> <strong>Cargo:</strong> ${experienciasL.cargoR} </p> <p> <strong>Numero:</strong> ${experienciasL.numeroContacto} </p> </li>`)} </ul>`} ${postulante.habilidades_blandas && postulante.habilidades_blandas.length > 0 && renderTemplate`<h2>Habilidades Blandas</h2>
                  <ul> ${postulante.habilidades_blandas.map((habilidadesB) => renderTemplate`<li> <p><strong>Habilidad:</strong> ${habilidadesB.habilidad}</p> </li>`)} </ul>`} ${postulante.publicacionesintelectuales && postulante.publicacionesintelectuales.length > 0 && renderTemplate`<h2>Publicaciones Intelectuales</h2>
                  <ul> ${postulante.publicacionesintelectuales.map((publicacionesI) => renderTemplate`<li> <p><strong>Nombre:</strong> ${publicacionesI.nombre}</p> <p><strong>Enlace de editorial:</strong> ${publicacionesI.enlaceEditorial}</p> <p><strong>País:</strong> ${publicacionesI.pais}</p> <p><strong>Fecha:</strong> ${publicacionesI.fecha}</p> <p><strong>Tipo de publicacion:</strong> ${publicacionesI.tipoPublicacion}</p> </li>`)} </ul>`} </div> </div>`;
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
