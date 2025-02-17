import { c as createComponent, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_DDyqfWY9.mjs';
import 'kleur/colors';
import { $ as $$LayoutDashboard } from '../chunks/LayoutDashboard_Dng2E6DV.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import React, { useState, useEffect, Suspense } from 'react';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const DashboardDoc = () => {
  const [idDocente, setIdDocente] = useState(null);
  const [loading, setLoading] = useState(false);
  const [docenteData, setDocenteData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);
  const formatDate = (date) => {
    const [day, month, year] = date.split("/");
    return `${year}-${month}-${day}`;
  };
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setPreviewURL(URL.createObjectURL(file));
    }
  };
  const handleSaveInfo = async (newInfo) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("idDocente", newInfo.idDocente.toString());
      formData.append("apellidoMaterno", newInfo.apellidoMaterno || "");
      formData.append("apellidoPaterno", newInfo.apellidoPaterno || "");
      formData.append("nombres", newInfo.nombres || "");
      formData.append("numeroReferencia", newInfo.numeroReferencia || "");
      formData.append("correo", newInfo.correo || "");
      formData.append("telefono", newInfo.telefono || "");
      formData.append("numeroDocumento", newInfo.numeroDocumento || "");
      formData.append("fechaNacimiento", newInfo.fechaNacimiento || "");
      formData.append("ciudadRadicacion", newInfo.ciudadRadicacion || "");
      formData.append("genero", newInfo.genero || "");
      formData.append("direccion", newInfo.direccion || "");
      formData.append("estado", newInfo.estado || "");
      if (selectedFile) {
        formData.append("fotografia", selectedFile);
      } else if (docenteData?.fotografia) {
        formData.append("fotografia", docenteData.fotografia);
      }
      const response = await fetch("/api/update_postulante", {
        method: "POST",
        body: formData
      });
      if (response.ok) {
        const updatedData = await response.json();
        console.log("Datos actualizados:", updatedData);
        alert("Datos actualizados con éxito");
      } else {
        const errorData = await response.json();
        console.error("Error del servidor:", errorData);
        alert("Hubo un error al actualizar los datos");
      }
    } catch (error) {
      console.error("Error en el cliente:", error);
      alert("Hubo un error al actualizar los datos");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    const fetchDocenteData = async () => {
      const docenteId = localStorage.getItem("idDocente");
      if (!docenteId) {
        alert("No se encontró el ID del docente en localStorage");
        return;
      }
      setIdDocente(docenteId);
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:4321/api/docentes/${docenteId}`
        );
        if (!response.ok) throw new Error("Error al obtener datos del docente");
        const data = await response.json();
        setDocenteData(data);
      } catch (error) {
        console.error("Error al cargar datos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDocenteData();
  }, []);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDocenteData((prev) => prev ? { ...prev, [name]: value } : null);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (docenteData) {
      handleSaveInfo(docenteData);
      setIsEditing(false);
    }
  };
  const EstudiosSuperioresList = React.lazy(
    () => import('../chunks/PostDegreeForm_CcnPsHDP.mjs')
  );
  const ExperienciaDocenteManager = React.lazy(
    () => import('../chunks/CourseForm_C4FIagFX.mjs')
  );
  const HabilidadesBlandasManager = React.lazy(
    () => import('../chunks/SkillForm_CxMCB4Zp.mjs')
  );
  const IdiomasManager = React.lazy(() => import('../chunks/IdiomasManager_DgKe7RHo.mjs'));
  const ProduccionesIntelectualesManager = React.lazy(
    () => import('../chunks/DocentesIntel_2mGs8-dk.mjs')
  );
  const openModal = (content) => {
    setModalContent(content);
  };
  const closeModal = () => {
    setModalContent(null);
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "Prueba", children: /* @__PURE__ */ jsxs("div", { className: "contenedor2", children: [
      /* @__PURE__ */ jsx("h1", { className: "perfil", children: " Perfil" }),
      /* @__PURE__ */ jsxs("div", { className: "contenedor2-1", children: [
        /* @__PURE__ */ jsx("h1", { className: "form-title" }),
        /* @__PURE__ */ jsxs("div", { className: "contenedor1", children: [
          docenteData?.fotografia && !previewURL && /* @__PURE__ */ jsx(
            "img",
            {
              src: docenteData.fotografia,
              alt: "Fotografía del docente",
              style: { width: "150px", height: "150px" }
            }
          ),
          previewURL && /* @__PURE__ */ jsx(
            "img",
            {
              src: previewURL,
              alt: "Preview de la foto",
              style: { width: "150px", height: "150px" }
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "contenedor2-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "profile-info-edit-container", children: [
          docenteData && /* @__PURE__ */ jsx("div", { className: "profile-info", children: /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("p", { className: "profile-info-name", children: [
              docenteData.nombres,
              " ",
              docenteData.apellidoPaterno,
              " ",
              docenteData.apellidoMaterno
            ] }),
            /* @__PURE__ */ jsx("p", { className: "profile-info-email", children: docenteData.correo }),
            /* @__PURE__ */ jsx("p", { className: "profile-info-phone", children: docenteData.telefono }),
            /* @__PURE__ */ jsx("p", { className: "profile-info-city", children: docenteData.ciudadRadicacion })
          ] }) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "edit-button1",
              onClick: () => setIsEditing(true)
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "profile-container", children: /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h1", { children: "Agregar Información" }),
          /* @__PURE__ */ jsxs("div", { className: "buttons-container-perfil", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "animated-button-estudios",
                onClick: () => openModal("estudios"),
                children: "Ver Estudios Superiores"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "animated-button-experiencia",
                onClick: () => openModal("experiencia"),
                children: "Ver Experiencia Docente"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "animated-button-habilidades",
                onClick: () => openModal("habilidades"),
                children: "Ver Habilidades Blandas"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "animated-button-idiomas",
                onClick: () => openModal("idiomas"),
                children: "Ver Idiomas"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "animated-button-producciones",
                onClick: () => openModal("producciones"),
                children: "Ver Producciones Intelectuales"
              }
            )
          ] }),
          modalContent && /* @__PURE__ */ jsx("div", { className: "modaldash", children: /* @__PURE__ */ jsxs("div", { className: "modaldash-content", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: closeModal,
                className: "modaldash-close-button",
                children: "Cerrar"
              }
            ),
            /* @__PURE__ */ jsxs(Suspense, { fallback: /* @__PURE__ */ jsx("p", { children: "Cargando..." }), children: [
              modalContent === "estudios" && /* @__PURE__ */ jsx(EstudiosSuperioresList, {}),
              modalContent === "experiencia" && /* @__PURE__ */ jsx(ExperienciaDocenteManager, {}),
              modalContent === "habilidades" && /* @__PURE__ */ jsx(HabilidadesBlandasManager, {}),
              modalContent === "idiomas" && /* @__PURE__ */ jsx(IdiomasManager, {}),
              modalContent === "producciones" && /* @__PURE__ */ jsx(ProduccionesIntelectualesManager, {})
            ] })
          ] }) })
        ] }) })
      ] })
    ] }) }),
    isEditing && /* @__PURE__ */ jsx("div", { className: "modaldash", children: /* @__PURE__ */ jsxs("div", { className: "modaldash-content", children: [
      /* @__PURE__ */ jsx("h2", { children: "Editar Información" }),
      /* @__PURE__ */ jsxs("form", { className: "profile-form", onSubmit: handleSubmit, children: [
        [
          { label: "Nombres", name: "nombres" },
          { label: "Apellido Paterno", name: "apellidoPaterno" },
          { label: "Apellido Materno", name: "apellidoMaterno" },
          { label: "Número de Referencia", name: "numeroReferencia" },
          { label: "Correo", name: "correo", type: "email" },
          { label: "Teléfono", name: "telefono" },
          { label: "Número de Documento", name: "numeroDocumento" },
          { label: "Ciudad de Radicación", name: "ciudadRadicacion" },
          { label: "Género", name: "genero" },
          { label: "Dirección", name: "direccion" },
          { label: "Estado", name: "estado" }
        ].map((field) => /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxs("label", { className: "form-label", children: [
            field.label,
            ":"
          ] }),
          /* @__PURE__ */ jsx(
            "input",
            {
              className: "form-input",
              type: field.type || "text",
              name: field.name,
              value: docenteData[field.name] || "",
              onChange: handleInputChange
            }
          )
        ] }, field.name)),
        /* @__PURE__ */ jsxs("div", { className: "fotografi-cont", children: [
          /* @__PURE__ */ jsx("label", { className: "form-label", children: "Fotografía:" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              className: "form-input",
              type: "file",
              accept: "image/*",
              onChange: handleFileChange
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsx("label", { className: "form-label", children: "Fecha de Nacimiento:" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              className: "form-input",
              type: "date",
              name: "fechaNacimiento",
              value: docenteData?.fechaNacimiento ? formatDate(docenteData.fechaNacimiento) : "",
              onChange: handleInputChange
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "button-guardar", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              className: "submit-button",
              disabled: loading,
              children: loading ? "Guardando..." : "Guardar"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              className: "cancel-button1",
              onClick: () => setIsEditing(false),
              children: "Cancelar"
            }
          )
        ] })
      ] })
    ] }) })
  ] });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LayoutDashboard", $$LayoutDashboard, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "DashboardDoc", DashboardDoc, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/components/login/DashboardDoc", "client:component-export": "DashboardDoc" })} ` })}`;
}, "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/pages/dashboardDoc/index.astro", undefined);

const $$file = "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/pages/dashboardDoc/index.astro";
const $$url = "/dashboardDoc";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
