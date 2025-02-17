import { c as createComponent, r as renderTemplate, f as renderHead, d as renderComponent } from '../../../chunks/astro/server_DDyqfWY9.mjs';
import 'kleur/colors';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { M as Modal } from '../../../chunks/modale_uuPewxgq.mjs';
import jwt_decode from 'jwt-decode';
import { $ as $$LayoutDashboard } from '../../../chunks/LayoutDashboard_Dng2E6DV.mjs';
export { renderers } from '../../../renderers.mjs';

const UploadFile = ({ tipoArchivo }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [message, setMessage] = useState("");
  const [idDocente, setIdDocente] = useState(null);
  const [docenteNombre, setDocenteNombre] = useState(null);
  const [tiposArchivo, setTiposArchivo] = useState([]);
  const [selectedTipoArchivoId, setSelectedTipoArchivoId] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwt_decode(token);
        setIdDocente(decoded.idDocente);
        setDocenteNombre(decoded.nombre);
      } catch (error) {
        console.error("Error al decodificar el token:", error);
      }
    } else {
      console.error("Token no encontrado. Por favor, inicia sesión.");
    }
  }, []);
  useEffect(() => {
    const fetchTiposArchivo = async () => {
      try {
        const response = await fetch("/api/dashboard/get_tipos_archivos");
        const data = await response.json();
        if (response.ok) {
          setTiposArchivo(data);
          const tipoEncontrado = data.find(
            (tipo) => tipo.tipo.toLowerCase() === tipoArchivo.toLowerCase()
          );
          if (tipoEncontrado) {
            setSelectedTipoArchivoId(tipoEncontrado.id_ta);
          } else {
            setMessage(`No se encontró un tipo de archivo llamado '${tipoArchivo}'.`);
          }
        } else {
          console.error("Error al obtener tipos de archivo:", data.error);
        }
      } catch (error) {
        console.error("Error al llamar a la API:", error);
      }
    };
    fetchTiposArchivo();
  }, [tipoArchivo]);
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    validateFiles(files);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    validateFiles(files);
  };
  const validateFiles = (files) => {
    const maxSize = 2 * 1024 * 1024;
    const validFiles = files.filter((file) => file.size <= maxSize);
    const invalidFiles = files.filter((file) => file.size > maxSize);
    if (invalidFiles.length > 0) {
      setMessage("Algunos archivos superan el tamaño máximo de 2 MB y no se agregarán.");
    }
    setSelectedFiles((prevFiles) => [...prevFiles, ...validFiles]);
  };
  const handleUpload = async () => {
    if (!selectedFiles.length) {
      setMessage("Por favor, selecciona uno o más archivos válidos.");
      return;
    }
    if (!idDocente || !docenteNombre) {
      setMessage("No se pudo obtener la información del docente.");
      return;
    }
    if (!selectedTipoArchivoId) {
      setMessage("No se ha seleccionado un tipo de archivo válido.");
      return;
    }
    let successCount = 0;
    let errorCount = 0;
    for (const file of selectedFiles) {
      const formData = new FormData();
      formData.append("docente_id", idDocente);
      formData.append("docente_name", docenteNombre);
      formData.append("archivo", file);
      formData.append("idtipo_archivo", selectedTipoArchivoId);
      try {
        const response = await fetch("/api/insert_archivos", {
          method: "POST",
          body: formData
        });
        if (response.ok) {
          successCount++;
        } else {
          errorCount++;
        }
      } catch (error) {
        console.error("Error al subir archivo:", error);
        errorCount++;
      }
    }
    setMessage(
      `${successCount} archivo(s) subido(s) con éxito. ${errorCount} archivo(s) no pudieron ser subidos.`
    );
    setSelectedFiles([]);
  };
  return /* @__PURE__ */ jsxs("div", { style: { textAlign: "center", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }, children: [
    /* @__PURE__ */ jsxs("h3", { children: [
      "Subir ",
      tipoArchivo
    ] }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        onDragOver: (e) => e.preventDefault(),
        onDrop: handleDrop,
        style: {
          border: "2px dashed #ccc",
          padding: "100px",
          marginBottom: "20px",
          borderRadius: "8px",
          background: "#f9f9f9",
          cursor: "pointer"
        },
        children: [
          selectedFiles.length > 0 ? /* @__PURE__ */ jsx("ul", { children: selectedFiles.map((file, index) => /* @__PURE__ */ jsx("li", { children: file.name }, index)) }) : /* @__PURE__ */ jsx("p", { children: "Arrastra tus archivos aquí o haz clic para seleccionarlos" }),
          /* @__PURE__ */ jsx("input", { type: "file", onChange: handleFileChange, multiple: true, style: { display: "none" }, id: "file-input" }),
          /* @__PURE__ */ jsx("label", { htmlFor: "file-input", style: { color: "#007BFF", cursor: "pointer", fontSize: "21px" }, children: "Seleccionar archivos" })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("button", { onClick: handleUpload, disabled: !selectedFiles.length, children: [
      "Subir ",
      tipoArchivo
    ] }),
    message && /* @__PURE__ */ jsx("p", { style: { color: message.includes("Error") ? "red" : "green" }, children: message })
  ] });
};

const ProfileUpload = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("");
  const handleOpenModal = (section) => {
    setCurrentSection(section);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentSection("");
  };
  const styles = {
    container: {
      marginTop: "20px",
      width: "95%",
      marginLeft: "10px",
      padding: "20px",
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      maxHeight: "600px",
      overflowY: "auto"
    },
    title: {
      fontSize: "28px",
      fontWeight: "bold",
      color: "#002f6c",
      textAlign: "center",
      marginBottom: "20px"
    },
    sectionTitle: {
      fontSize: "23px",
      fontWeight: "bold",
      color: "#444",
      marginBottom: "10px"
    },
    paragraph: {
      margin: "5px 0",
      color: "#555",
      fontWeight: "bold"
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      marginBottom: "10px"
    }
  };
  return /* @__PURE__ */ jsxs("div", { style: styles.container, children: [
    /* @__PURE__ */ jsx("h1", { style: styles.title, children: "Archivos Docente" }),
    /* @__PURE__ */ jsxs("div", { style: { marginBottom: "20px" }, children: [
      /* @__PURE__ */ jsx("h2", { style: styles.sectionTitle, children: "Información Personal" }),
      /* @__PURE__ */ jsx("p", { style: styles.paragraph, children: "Carnet:" }),
      /* @__PURE__ */ jsx("button", { style: styles.button, onClick: () => handleOpenModal("carnet"), children: "Subir Carnet" }),
      /* @__PURE__ */ jsx("p", { style: styles.paragraph, children: "Titulo en provisión nacional:" }),
      /* @__PURE__ */ jsx(
        "button",
        {
          style: styles.button,
          onClick: () => handleOpenModal("tituloProvisionN"),
          children: "Subir Titulo Provisión Nacional"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { style: { marginBottom: "20px" }, children: [
      /* @__PURE__ */ jsx("h2", { style: styles.sectionTitle, children: "Certificados" }),
      /* @__PURE__ */ jsx(
        "button",
        {
          style: styles.button,
          onClick: () => handleOpenModal("certificados"),
          children: "Subir Certificado"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { style: { marginBottom: "20px" }, children: [
      /* @__PURE__ */ jsx("h2", { style: styles.sectionTitle, children: "Diplomados" }),
      /* @__PURE__ */ jsx(
        "button",
        {
          style: styles.button,
          onClick: () => handleOpenModal("diplomados"),
          children: "Subir Diplomado"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { style: { marginBottom: "20px" }, children: [
      /* @__PURE__ */ jsx("h2", { style: styles.sectionTitle, children: "Maestrías" }),
      /* @__PURE__ */ jsx(
        "button",
        {
          style: styles.button,
          onClick: () => handleOpenModal("maestrias"),
          children: "Subir Maestría"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { style: { marginBottom: "20px" }, children: [
      /* @__PURE__ */ jsx("h2", { style: styles.sectionTitle, children: "Doctorados" }),
      /* @__PURE__ */ jsx(
        "button",
        {
          style: styles.button,
          onClick: () => handleOpenModal("doctorados"),
          children: "Subir Doctorado"
        }
      )
    ] }),
    isModalOpen && /* @__PURE__ */ jsx(Modal, { isOpen: isModalOpen, onClose: handleCloseModal, title: `Subir ${currentSection}`, children: /* @__PURE__ */ jsx(UploadFile, { tipoArchivo: currentSection }) })
  ] });
};

const $$Archivos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Archivos del Docente</title>${renderHead()}</head> <body> ${renderComponent($$result, "LayoutDashboard", $$LayoutDashboard, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ProfileUpload", ProfileUpload, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/components/docentes/ProfileUpload", "client:component-export": "ProfileUpload" })} ` })} </body></html>`;
}, "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/pages/dashboardDoc/archivosDocentes/archivos.astro", undefined);

const $$file = "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/pages/dashboardDoc/archivosDocentes/archivos.astro";
const $$url = "/dashboardDoc/archivosDocentes/archivos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Archivos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
