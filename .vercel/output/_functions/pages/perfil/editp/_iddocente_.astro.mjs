import { c as createComponent, a as createAstro, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../../../chunks/astro/server_DDyqfWY9.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../../chunks/Layout_BVg-EGxa.mjs';
import { $ as $$HeroTitle } from '../../../chunks/HeroTitle_DeX6Rgca.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { C as CountrySelect } from '../../../chunks/CountrySelect_B7mIVeYP.mjs';
import { G as GradosSelect, M as ModalidadesSelect } from '../../../chunks/GradosSelect_rk6_XOt7.mjs';
/* empty css                                             */
export { renderers } from '../../../renderers.mjs';

const ImageUpload = ({
  onImageSelect,
  containerClass,
  labelClass,
  avatarClass,
  buttonClass,
  iconClass
}) => {
  const [imagePreview, setImagePreview] = useState(null);
  const handleImageChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
      onImageSelect(file);
    } else {
      setImagePreview(null);
      onImageSelect(null);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: containerClass, children: [
    " ",
    /* @__PURE__ */ jsx("div", { className: "v-col d-flex justify-center align-center", children: /* @__PURE__ */ jsxs(
      "div",
      {
        style: {
          color: "rgb(255, 255, 255)",
          caretColor: "rgb(255, 255, 255)",
          width: "150px",
          height: "150px"
        },
        children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              className: avatarClass,
              "data-name": "imagen",
              src: imagePreview || "/images/perfil-docente-pordefecto.png",
              width: "150",
              height: "150",
              alt: "Avatar"
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "v-avatar__underlay" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { style: { marginTop: "20px", textAlign: "center" }, children: [
      /* @__PURE__ */ jsxs("label", { htmlFor: "image-upload", className: labelClass, children: [
        " ",
        "SELECCIONA UNA IMAGEN FORMAL"
      ] }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "file",
          id: "image-upload",
          accept: "image/*",
          onChange: handleImageChange,
          className: buttonClass,
          style: { display: "block", margin: "10px auto" }
        }
      )
    ] })
  ] });
};

const EditDocente = ({ idDocente }) => {
  const [loading, setLoading] = useState(false);
  const [docenteData, setDocenteData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [estudioSuperiorData, setEstudioSuperiorData] = useState(null);
  const handleAddSectionClick = () => setIsModalOpen(true);
  useEffect(() => {
    const fetchDocenteData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:4321/api/docentes/${idDocente}`
        );
        if (!response.ok)
          throw new Error("No se pudo obtener los datos del docente");
        const data = await response.json();
        setDocenteData(data);
        if (data.estudiossuperiores && data.estudiossuperiores.length > 0) {
          setEstudioSuperiorData(data.estudiossuperiores[0]);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchDocenteData();
  }, [idDocente]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!docenteData || !estudioSuperiorData) return;
    setLoading(true);
    try {
      const response = await fetch("/api/update_postulante", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          idDocente: docenteData.idDocente,
          apellidoMaterno: docenteData.apellidoMaterno,
          apellidoPaterno: docenteData.apellidoPaterno,
          nombres: docenteData.nombres,
          numeroReferencia: docenteData.numeroReferencia,
          correo: docenteData.correo,
          estudiossuperiores: [
            {
              idEstudio: estudioSuperiorData.idEstudio,
              universidad: estudioSuperiorData.universidad,
              carrera: estudioSuperiorData.carrera,
              fecha: estudioSuperiorData.fecha,
              nombre: estudioSuperiorData.nombre,
              idPais: estudioSuperiorData.idPais,
              idGrado: estudioSuperiorData.idGrado,
              idModalidad: estudioSuperiorData.idModalidad,
              idTipoEstudios: estudioSuperiorData.idTipoEstudios
            }
          ]
        })
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
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDocenteData((prev) => prev ? { ...prev, [name]: value } : null);
  };
  const handleEstudioSuperiorChange = (e) => {
    const { name, value } = e.target;
    setEstudioSuperiorData(
      (prev) => prev ? { ...prev, [name]: value } : null
    );
  };
  return /* @__PURE__ */ jsx("div", { className: "profile-container", children: loading ? /* @__PURE__ */ jsx("p", { className: "loading-text", children: "Cargando..." }) : /* @__PURE__ */ jsxs("form", { className: "profile-form", onSubmit: handleSubmit, children: [
    /* @__PURE__ */ jsx("div", { className: "profile-photo", children: /* @__PURE__ */ jsx(
      ImageUpload,
      {
        containerClass: "profile-image-container",
        labelClass: "profile-image-label",
        avatarClass: "profile-avatar",
        buttonClass: "custom-upload-button",
        iconClass: "custom-upload-icon",
        onImageSelect: (file) => console.log(file ? `Imagen seleccionada: ${file.name}` : "No se seleccionó ninguna imagen.")
      }
    ) }),
    /* @__PURE__ */ jsx("h2", { className: "form-title", children: "Actualizar Docente" }),
    docenteData && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "hidden",
          name: "idDocente",
          value: docenteData.idDocente
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsx("label", { className: "form-label", children: "Apellido Materno:" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            className: "form-input",
            type: "text",
            name: "apellidoMaterno",
            value: docenteData.apellidoMaterno,
            onChange: handleInputChange
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsx("label", { className: "form-label", children: "Apellido Paterno:" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            className: "form-input",
            type: "text",
            name: "apellidoPaterno",
            value: docenteData.apellidoPaterno,
            onChange: handleInputChange
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsx("label", { className: "form-label", children: "Nombres:" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            className: "form-input",
            type: "text",
            name: "nombres",
            value: docenteData.nombres,
            onChange: handleInputChange
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsx("label", { className: "form-label", children: "Número de Referencia:" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            className: "form-input",
            type: "text",
            name: "numeroReferencia",
            value: docenteData.numeroReferencia,
            onChange: handleInputChange
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsx("label", { className: "form-label", children: "Correo:" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            className: "form-input",
            type: "email",
            name: "correo",
            value: docenteData.correo,
            onChange: handleInputChange
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("h2", { className: "form-title", children: "Actualizar Estudio Superior" }),
    estudioSuperiorData && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsx("label", { className: "form-label", children: "Tipo de estudio:" }),
        /* @__PURE__ */ jsx("div", { className: "form-input", children: estudioSuperiorData.tipoEstudios })
      ] }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "hidden",
          name: "idEstudio",
          value: estudioSuperiorData.idEstudio
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsx("label", { className: "form-label", children: "Universidad:" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            className: "form-input",
            type: "text",
            name: "universidad",
            value: estudioSuperiorData.universidad,
            onChange: handleEstudioSuperiorChange
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsx("label", { className: "form-label", children: "Carrera:" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            className: "form-input",
            type: "text",
            name: "carrera",
            value: estudioSuperiorData.carrera,
            onChange: handleEstudioSuperiorChange
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsx("label", { className: "form-label", children: "Fecha:" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            className: "form-input",
            type: "date",
            name: "fecha",
            value: estudioSuperiorData.fecha,
            onChange: handleEstudioSuperiorChange
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsx("label", { className: "form-label", children: "Nombre del Estudio:" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            className: "form-input",
            type: "text",
            name: "nombre",
            value: estudioSuperiorData.nombre,
            onChange: handleEstudioSuperiorChange
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "form-group", children: /* @__PURE__ */ jsx(
        CountrySelect,
        {
          valueAndId: "idPais",
          selectedId: estudioSuperiorData.idPais,
          selected: estudioSuperiorData?.pais,
          selectedCountry: {
            id: estudioSuperiorData?.idPais || 0,
            name: ""
          },
          onCountryChange: (selectedCountry) => {
            setEstudioSuperiorData(
              (prev) => prev ? { ...prev, idPais: selectedCountry.id } : null
            );
          }
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "form-group", children: /* @__PURE__ */ jsx(
        GradosSelect,
        {
          valueAndId: "idGrado",
          selectedId: estudioSuperiorData.idGrado,
          selected: estudioSuperiorData?.gradoTipo,
          selectedGrado: {
            id: estudioSuperiorData?.idGrado || 0,
            name: ""
          },
          onGradoChange: (selectedGrado) => {
            setEstudioSuperiorData(
              (prev) => prev ? { ...prev, idGrado: selectedGrado.id } : null
            );
          }
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "form-group", children: /* @__PURE__ */ jsx(
        ModalidadesSelect,
        {
          valueAndId: "idModalidad",
          selectedId: estudioSuperiorData.idModalidad,
          selected: estudioSuperiorData?.modalidad,
          selectedModalidad: {
            id: estudioSuperiorData?.idModalidad || 0,
            name: ""
          },
          onModalidadChange: (selectedModalidad) => {
            setEstudioSuperiorData(
              (prev) => prev ? { ...prev, idModalidad: selectedModalidad.id } : null
            );
          }
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("button", { className: "submit-button", type: "submit", disabled: loading, children: loading ? "Actualizando..." : "Actualizar" }),
    /* @__PURE__ */ jsx("button", { type: "button", className: "add-section-button", onClick: handleAddSectionClick, children: "Agregar Sección" })
  ] }) });
};

const $$Astro = createAstro();
const $$idDocente = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$idDocente;
  const params = Astro2.params;
  const idDocente = Number(params.idDocente);
  const docenteId = Number(idDocente);
  if (isNaN(docenteId)) {
    throw new Error("El ID del docente debe ser un n\xFAmero");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sistema Academico ESAM | Programas", "canonical": "https://academico-docentes.esam.edu.bo/", "description": "Sistema acad\xE9mico de ESAM para contrataci\xF3n y postulaci\xF3n de docentes." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroTitle", $$HeroTitle, { "titulo": "Perfil" })} ${maybeRenderHead()}<div id="docente-info"> ${renderComponent($$result2, "EditDocente", EditDocente, { "idDocente": idDocente, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/components/perfil-doc/EditDocente", "client:component-export": "default" })} </div> ` })}`;
}, "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/pages/perfil/editp/[idDocente].astro", undefined);

const $$file = "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/pages/perfil/editp/[idDocente].astro";
const $$url = "/perfil/editp/[idDocente]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$idDocente,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
