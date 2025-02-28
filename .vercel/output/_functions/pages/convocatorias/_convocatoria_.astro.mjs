import { c as createComponent, a as createAstro, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CdpYlLHK.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_DNV0txGe.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
/* empty css                                             */
export { renderers } from '../../renderers.mjs';

const PostulacionButton = ({ convocatoriaId }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [yaPostulado, setYaPostulado] = useState(false);
  useEffect(() => {
    const verificarPostulacion = async () => {
      if (!convocatoriaId) return;
      try {
        const idDocente = localStorage.getItem("idDocente");
        if (!idDocente) return;
        const response = await fetch(`/api/convocatorias/postulantes/${convocatoriaId}?idDocente=${idDocente}`);
        const data = await response.json();
        if (data.postulantes && Array.isArray(data.postulantes)) {
          setYaPostulado(data.postulantes.some((p) => p.idDocente === idDocente));
        }
      } catch (err) {
        console.error("Error al verificar postulación:", err);
      }
    };
    verificarPostulacion();
  }, [convocatoriaId]);
  const handlePostular = async () => {
    setLoading(true);
    setError(null);
    setSuccessMessage(null);
    const token = localStorage.getItem("token");
    const idDocente = localStorage.getItem("idDocente");
    if (!token || !idDocente) {
      alert("Debe iniciar sesión primero.");
      window.location.href = "/login";
      return;
    }
    try {
      const response = await fetch("/api/convocatorias/postulantes/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ idConvocatoria: convocatoriaId, idDocente })
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Error al realizar la postulación.");
      }
      setSuccessMessage("¡Postulación realizada con éxito!");
      setYaPostulado(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    yaPostulado ? /* @__PURE__ */ jsx("p", { style: { color: "green", fontWeight: "bold" }, children: "¡Ya postulado!!" }) : /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        className: "postulate-button",
        onClick: handlePostular,
        disabled: loading,
        children: loading ? "Enviando..." : "POSTULATE YA!"
      }
    ),
    error && /* @__PURE__ */ jsx("p", { style: { color: "red" }, children: error }),
    successMessage && /* @__PURE__ */ jsx("p", { style: { color: "green" }, children: successMessage }),
    /* @__PURE__ */ jsx("style", { jsx: true, children: `
        .postulate-button {
          display: inline-block;
          background: #0b5f9a;
          color: white;
          padding: 12px 20px;
          text-align: center;
          border-radius: 8px;
          font-size: 16px;
          text-decoration: none;
          transition: background 0.3s ease, transform 0.3s ease;
        }

        .postulate-button:hover {
          background: #095184;
          transform: scale(1.05);
        }

        .postulate-button:disabled {
          background: #b0c4de;
          cursor: not-allowed;
        }
      ` })
  ] });
};

const $$Astro = createAstro();
const $$convocatoria = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$convocatoria;
  const { convocatoria } = Astro2.params;
  const apiUrl = `http://localhost:4321/api/convocatorias/${convocatoria}`;
  let convocatoriaData = null;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Error al obtener los datos: ${response.statusText}`);
    }
    convocatoriaData = await response.json();
  } catch (error) {
    console.error("Error al obtener los datos de la convocatoria:", error);
  }
  if (!convocatoria || !convocatoriaData) {
    return Astro2.redirect("/404");
  }
  const requisitosDocente = [
    "Experiencia como docente m\xEDnimo 2 a\xF1os",
    "T\xEDtulo de maestr\xEDa avalado por la CEUB",
    "Diplomado en educaci\xF3n superior",
    "T\xEDtulo en provisi\xF3n nacional",
    "CV"
  ];
  const requisitosTutor = [
    "Publicaciones de art\xEDculos en revistas cient\xEDficas",
    "T\xEDtulo de doctorado",
    "T\xEDtulo de maestr\xEDa avalado por la CEUB",
    "Diplomado en metodolog\xEDa de investigaci\xF3n o investigaci\xF3n cient\xEDfica",
    "T\xEDtulo en provisi\xF3n nacional",
    "CV"
  ];
  const requisitos = convocatoriaData.requisitos === "docente" ? requisitosDocente : requisitosTutor;
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("es-BO", {
      weekday: "long",
      // Opcional: día de la semana
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };
  const fechaInicio = formatDate(convocatoriaData.fechaInicio);
  const fechaFinal = formatDate(convocatoriaData.fechaFinal);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Convocatoria: ${convocatoriaData.titulo}`, "description": convocatoriaData.descripcion, "data-astro-cid-7j6wxzuu": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-7j6wxzuu> <!-- Imagen a la izquierda --> <div class="image-container" data-astro-cid-7j6wxzuu> <img src="/images/esam-cover.jpeg" alt="Convocatoria" data-astro-cid-7j6wxzuu> </div> <!-- Información a la derecha --> <div class="content-container" data-astro-cid-7j6wxzuu> <h1 data-astro-cid-7j6wxzuu>${convocatoriaData.titulo}</h1> <p data-astro-cid-7j6wxzuu><strong data-astro-cid-7j6wxzuu>Perfil:</strong> ${convocatoriaData.perfil}</p> <p data-astro-cid-7j6wxzuu><strong data-astro-cid-7j6wxzuu>Requisitos:</strong></p> <ul data-astro-cid-7j6wxzuu> ${requisitos.map((item) => renderTemplate`<li data-astro-cid-7j6wxzuu>${item}</li>`)} </ul> <p data-astro-cid-7j6wxzuu><strong data-astro-cid-7j6wxzuu>Fecha Inicio:</strong> ${fechaInicio}</p> <p data-astro-cid-7j6wxzuu><strong data-astro-cid-7j6wxzuu>Fecha Final:</strong> ${fechaFinal}</p> <p data-astro-cid-7j6wxzuu>
Para postular primero debe Iniciar sesion en nuestro sistema. 
        Si no tienes una cuenta, <a href="/login/registro/indexRegistro" data-astro-cid-7j6wxzuu>REGISTRATE AQUI</a>.
</p> ${renderComponent($$result2, "PostulacionButton", PostulacionButton, { "client:load": true, "convocatoriaId": convocatoriaData.idConvocatoria, "client:component-hydration": "load", "client:component-path": "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/components/convocatorias/filters/PostulacionButton", "client:component-export": "default", "data-astro-cid-7j6wxzuu": true })} </div> </div>   ` })}`;
}, "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/pages/convocatorias/[convocatoria].astro", void 0);

const $$file = "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/pages/convocatorias/[convocatoria].astro";
const $$url = "/convocatorias/[convocatoria]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$convocatoria,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
