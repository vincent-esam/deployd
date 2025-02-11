import { c as createComponent, r as renderTemplate, f as renderHead, d as renderComponent, e as renderSlot } from '../chunks/astro/server_DX4HsqQu.mjs';
import 'kleur/colors';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import React, { useState, useEffect, Suspense } from 'react';
import jwt_decode from 'jwt-decode';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const HeaderDash = () => {
  const [idDocente, setidDocente] = useState(null);
  const [docenteNombre, setDocenteNombre] = useState(null);
  const [docenteApellidoPaterno, setDocenteApellidoPaterno] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
      return;
    }
    try {
      const decodedToken = jwt_decode(token);
      const { idDocente: idDocente2, nombre, apellidoPaterno } = decodedToken;
      localStorage.setItem("idDocente", idDocente2);
      localStorage.setItem("docenteNombre", nombre);
      localStorage.setItem("docenteApellidoPaterno", apellidoPaterno);
      setidDocente(idDocente2);
      setDocenteNombre(nombre);
      setDocenteApellidoPaterno(apellidoPaterno);
    } catch (error) {
      console.error("Error al decodificar el token:", error);
      window.location.href = "/login";
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("idDocente");
    localStorage.removeItem("docenteNombre");
    localStorage.removeItem("docenteApellidoPaterno");
    window.location.href = "/login";
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("a", { id: "logoEsam", href: "/dashboard", children: " " }),
      /* @__PURE__ */ jsx("h1", { id: "titulo-head", children: "Docente Plataform" }),
      /* @__PURE__ */ jsx("a", { id: "logoEsamMobile", href: "/dashboard", children: /* @__PURE__ */ jsx("h1", { id: "tituloMobile", children: "Docente Plataform" }) }),
      /* @__PURE__ */ jsx("button", { className: "logout-button", onClick: handleLogout, children: "Cerrar Sesión" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "barraAmarilla" })
  ] });
};

const Footerdash = () => {
  return /* @__PURE__ */ jsx("footer", { children: /* @__PURE__ */ jsx("div", { className: "piePagina", children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "redesSociales", children: /* @__PURE__ */ jsxs("ul", { className: "example-2", children: [
    /* @__PURE__ */ jsxs("li", { className: "icon-content", children: [
      /* @__PURE__ */ jsxs(
        "a",
        {
          "data-social": "whatsapp",
          "aria-label": "Whatsapp",
          href: "https://api.whatsapp.com/send?phone=+112067101079&text=Save%20this%20to%20your%20Favorites%20-%20@wilsondesouza",
          children: [
            /* @__PURE__ */ jsx("div", { className: "filled" }),
            /* @__PURE__ */ jsx(
              "svg",
              {
                viewBox: "0 0 24 24",
                className: "bi bi-whatsapp",
                fill: "currentColor",
                height: "24",
                width: "24",
                xmlns: "http://www.w3.org/2000/svg",
                children: /* @__PURE__ */ jsx(
                  "path",
                  {
                    fill: "currentColor",
                    d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                  }
                )
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "tooltip", children: "Whatsapp" })
    ] }),
    /* @__PURE__ */ jsxs("li", { className: "icon-content", children: [
      /* @__PURE__ */ jsxs(
        "a",
        {
          "data-social": "facebook",
          "aria-label": "Facebook",
          href: "https://www.facebook.com/",
          children: [
            /* @__PURE__ */ jsx("div", { className: "filled" }),
            /* @__PURE__ */ jsx(
              "svg",
              {
                viewBox: "0 0 24 24",
                className: "bi bi-facebook",
                fill: "currentColor",
                height: "24",
                width: "24",
                xmlns: "http://www.w3.org/2000/svg",
                children: /* @__PURE__ */ jsx(
                  "path",
                  {
                    fill: "currentColor",
                    d: "M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"
                  }
                )
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "tooltip", children: "Facebook" })
    ] }),
    /* @__PURE__ */ jsxs("li", { className: "icon-content", children: [
      /* @__PURE__ */ jsxs(
        "a",
        {
          "data-social": "instagram",
          "aria-label": "Instagram",
          href: "https://www.instagram.com/",
          children: [
            /* @__PURE__ */ jsx("div", { className: "filled" }),
            /* @__PURE__ */ jsx(
              "svg",
              {
                viewBox: "0 0 16 16",
                className: "bi bi-instagram",
                fill: "currentColor",
                height: "16",
                width: "16",
                xmlns: "http://www.w3.org/2000/svg",
                children: /* @__PURE__ */ jsx(
                  "path",
                  {
                    fill: "currentColor",
                    d: "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.333 2.667 2.667 0 0 1 0-5.333z"
                  }
                )
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "tooltip", children: "Instagram" })
    ] })
  ] }) }) }) }) });
};

const Slidebar = () => {
  const [docenteNombre, setDocenteNombre] = useState(null);
  const [docenteApellidoPaterno, setDocenteApellidoPaterno] = useState(null);
  useEffect(() => {
    const nombre = localStorage.getItem("docenteNombre");
    const apellidoPaterno = localStorage.getItem("docenteApellidoPaterno");
    if (nombre && apellidoPaterno) {
      setDocenteNombre(nombre);
      setDocenteApellidoPaterno(apellidoPaterno);
    }
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "slidebar", children: [
    /* @__PURE__ */ jsx("div", { className: "welcome-section", children: /* @__PURE__ */ jsxs("h3", { className: "admin-name", children: [
      "Bienvenido,",
      " ",
      /* @__PURE__ */ jsx("span", { id: "docenteNombre", children: docenteNombre && docenteApellidoPaterno ? `${docenteNombre} ${docenteApellidoPaterno}` : "Cargando..." })
    ] }) }),
    /* @__PURE__ */ jsxs("ul", { className: "menu", children: [
      /* @__PURE__ */ jsx("li", { className: "menu-item", children: "Perfil" }),
      /* @__PURE__ */ jsx("li", { className: "menu-item", children: "Configuración" }),
      /* @__PURE__ */ jsx("li", { className: "menu-item", children: "subir archivos" })
    ] })
  ] });
};

const $$LayoutDashboard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head><title>Dashboard</title>${renderHead()}</head> <body> ${renderComponent($$result, "HeaderDash", HeaderDash, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/layouts/layoutsDash/HeaderDash", "client:component-export": "default" })} <div class="layout"> ${renderComponent($$result, "Slidebar", Slidebar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/layouts/layoutsDash/Slidebar", "client:component-export": "default" })} <main class="contenidoPrincipal"> ${renderSlot($$result, $$slots["default"])} </main> </div> ${renderComponent($$result, "Footerdash", Footerdash, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/layouts/layoutsDash/FooterDash", "client:component-export": "default" })} </body></html>`;
}, "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/layouts/LayoutDashboard.astro", undefined);

const Dashboard = () => {
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
    () => import('../chunks/PostDegreeForm_B590P6f5.mjs')
  );
  const ExperienciaDocenteManager = React.lazy(
    () => import('../chunks/CourseForm_CbtA9Gzx.mjs')
  );
  const HabilidadesBlandasManager = React.lazy(
    () => import('../chunks/SkillForm_WVi3iJ1T.mjs')
  );
  const IdiomasManager = React.lazy(() => import('../chunks/IdiomasManager_CKsp28MA.mjs'));
  const ProduccionesIntelectualesManager = React.lazy(
    () => import('../chunks/DocentesIntel_C57n9-61.mjs')
  );
  const openModal = (content) => {
    setModalContent(content);
  };
  const closeModal = () => {
    setModalContent(null);
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "Prueba", children: /* @__PURE__ */ jsxs("div", { className: "contenedor2", children: [
      /* @__PURE__ */ jsx("h1", { children: " contenedor 2" }),
      /* @__PURE__ */ jsxs("div", { className: "contenedor2-1", children: [
        /* @__PURE__ */ jsx("h1", { className: "form-title", children: "contenedor2-1" }),
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
  return renderTemplate`${renderComponent($$result, "LayoutDashboard", $$LayoutDashboard, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Dashboard", Dashboard, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/components/login/dashboard", "client:component-export": "Dashboard" })} ` })}`;
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
