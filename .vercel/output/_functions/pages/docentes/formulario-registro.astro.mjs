import { c as createComponent, d as renderComponent, r as renderTemplate } from '../../chunks/astro/server_CdpYlLHK.mjs';
import 'kleur/colors';
import { $ as $$LayoutForm } from '../../chunks/LayoutForm_BIHhal3Z.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { i as infoPaises, C as CountriesFormSelect, A as AreaForm } from '../../chunks/AreaForm_2WRxHX5U.mjs';
/* empty css                                                  */
export { renderers } from '../../renderers.mjs';

const CountryCodeForm = ({ valueAndId }) => {
  return /* @__PURE__ */ jsx("div", { className: "pw-ui-phone-input__list", children: /* @__PURE__ */ jsx("ul", { className: "pw-ui-phone-input__bottom-list", id: valueAndId, children: infoPaises.map((pais) => /* @__PURE__ */ jsxs(
    "li",
    {
      className: "pw-ui-phone-input__list-item pw-ui-js-phone-input-option",
      "data-value": pais.codigo,
      "data-text": pais.codigo,
      id: "phone-bottom-list-item",
      children: [
        /* @__PURE__ */ jsxs("span", { className: "pw-ui-phone-input__number phone-code", children: [
          "+",
          pais.codigo
        ] }),
        /* @__PURE__ */ jsx("span", { className: "pw-ui-phone-input__country phone-country", children: pais.pais })
      ]
    },
    pais.id
  )) }) });
};

const SingleForm = () => {
  const [formData, setFormData] = useState({
    usuario: "",
    password: "",
    nombres: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    correo: "",
    ciudadRadicacion: "",
    idPais: "",
    telefono: "",
    diaNacimiento: "",
    mesNacimiento: "",
    anioNacimiento: "",
    idAreaInteres: "",
    idSector: ""
  });
  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const togglePasswordVisibility = () => {
    setShowPassword((prevShow) => !prevShow);
  };
  const handleImageSelect = (event) => {
    const file = event.target.files?.[0] || null;
    setProfileImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
    console.log("Imagen seleccionada:", file);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fechaNacimiento = `${formData.anioNacimiento}-${formData.mesNacimiento}-${formData.diaNacimiento}`;
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });
    formDataToSend.append("fechaNacimiento", fechaNacimiento);
    if (profileImage) {
      console.log("Imagen a enviar:", profileImage);
      formDataToSend.append("fotografia", profileImage);
    } else {
      console.warn("No se seleccionó ninguna imagen");
    }
    formDataToSend.forEach((value, key) => {
      console.log(`${key}:`, value);
    });
    try {
      const response = await fetch("/api/insert_postulante", {
        method: "POST",
        body: formDataToSend
      });
      const result = await response.json();
      if (response.ok) {
        setMessage("Postulación enviada correctamente.");
        setFormData({
          usuario: "",
          // Nuevo campo
          password: "",
          nombres: "",
          apellidoPaterno: "",
          apellidoMaterno: "",
          correo: "",
          ciudadRadicacion: "",
          idPais: "",
          telefono: "",
          diaNacimiento: "",
          mesNacimiento: "",
          anioNacimiento: "",
          idAreaInteres: "",
          idSector: ""
        });
        setProfileImage(null);
      } else {
        setMessage(result.error || "Error al enviar la postulación.");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      setMessage("Error en la conexión al servidor.");
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "page-content ", children: /* @__PURE__ */ jsx("div", { className: "page-content page-content--index", children: /* @__PURE__ */ jsx("section", { className: "consultation", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
    /* @__PURE__ */ jsxs("div", { className: "col-md-6 col-sm-12", children: [
      /* @__PURE__ */ jsx("h1", { className: "title-homepage title-homepage--lg", children: "Formulario Registro Docentes" }),
      /* @__PURE__ */ jsxs("div", { className: "consultation__description", children: [
        /* @__PURE__ */ jsx("p", { className: "text-homepage text-homepage--lg", children: /* @__PURE__ */ jsx("b", { children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quibusdam a odit reprehenderit, quam deleniti, suscipit accusamus consequuntur, nulla minima aliquid non optio maxime facilis! Animi consequuntur ipsam voluptates suscipit." }) }),
        /* @__PURE__ */ jsx("p", { className: "text-homepage text-homepage--sm", children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nobis ratione enim deleniti molestiae inventore quasi rerum? Quidem, obcaecati a provident illo magnam quod consequuntur, at recusandae itaque nulla eveniet." }),
        /* @__PURE__ */ jsx("br", {})
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "col-md-6 col-sm-12", children: [
      /* @__PURE__ */ jsxs("form", { encType: "multipart/form-data", onSubmit: handleSubmit, children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              marginTop: "15px",
              textAlign: "center",
              marginBottom: "15px"
            },
            children: /* @__PURE__ */ jsx(
              "img",
              {
                src: imagePreview || "/images/perfil-docente-pordefecto.png",
                alt: "Previsualización",
                width: "150",
                height: "150",
                style: {
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  objectFit: "cover"
                }
              }
            )
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "form-row", style: { marginBottom: "10px" }, children: /* @__PURE__ */ jsx(
          "input",
          {
            type: "file",
            accept: "image/*",
            onChange: handleImageSelect
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "form-row", children: [
          /* @__PURE__ */ jsxs("div", { className: "form-group input__group", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                name: "usuario",
                id: "usuario",
                className: "form-control js-control-input",
                value: formData.usuario,
                onChange: handleChange
              }
            ),
            /* @__PURE__ */ jsx("label", { htmlFor: "usuario", children: "Usuario" }),
            /* @__PURE__ */ jsx("span", { className: "error-text" }),
            /* @__PURE__ */ jsx("i", { className: "error-icon" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "form-group input__group", children: /* @__PURE__ */ jsxs("div", { className: "password-group", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: showPassword ? "text" : "password",
                name: "password",
                id: "password",
                className: "form-control js-control-input",
                value: formData.password,
                onChange: handleChange
              }
            ),
            /* @__PURE__ */ jsx("label", { htmlFor: "password", children: "Contraseña" }),
            /* @__PURE__ */ jsx("span", { className: "error-text" }),
            /* @__PURE__ */ jsx("i", { className: "error-icon" }),
            /* @__PURE__ */ jsx(
              "span",
              {
                className: "toggle-password",
                onClick: togglePasswordVisibility,
                title: showPassword ? "Ocultar contraseña" : "Mostrar contraseña",
                children: showPassword ? /* @__PURE__ */ jsx(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "24",
                    height: "24",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        d: "M12 4.5C7.5 4.5 3.8 7.3 2 12c1.8 4.7 5.5 7.5 10 7.5s8.2-2.8 10-7.5c-1.8-4.7-5.5-7.5-10-7.5zm0 13c-3.1 0-5.6-2.5-5.6-5.5S8.9 6.5 12 6.5s5.6 2.5 5.6 5.5-2.5 5.5-5.6 5.5zm0-2.1c1.8 0 3.3-1.4 3.3-3.4s-1.4-3.4-3.3-3.4-3.3 1.4-3.3 3.4 1.4 3.4 3.3 3.4z"
                      }
                    )
                  }
                ) : /* @__PURE__ */ jsx(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "24",
                    height: "24",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        d: "M2 12c1.8 4.7 5.5 7.5 10 7.5 2.5 0 4.9-.9 6.9-2.5l2.4 2.4 1.4-1.4-19-19-1.4 1.4 2.4 2.4C3.1 7.1 2 9.4 2 12zm10-7.5c-2.5 0-4.9.9-6.9 2.5l9.9 9.9c2-.5 3.9-1.7 5.2-3.4-1.8-4.7-5.5-7.5-10-7.5zm-6 3.6 3.3 3.3C9.1 10.1 10 10 12 10c1.4 0 2.7.1 4 .4l1.7 1.7c-.4-.1-.9-.1-1.7-.1-2.1 0-4 .5-5.7 1.3L4.5 8.1z"
                      }
                    )
                  }
                )
              }
            ),
            /* @__PURE__ */ jsx("style", { children: `
        .password-group {
          position: relative;
        }

        .password-group input {
          padding-right: 40px; /* Espacio para el icono */
        }

        .password-group .toggle-password {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
          font-size: 18px;
        }
      ` })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "form-group input__group", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                name: "nombres",
                id: "nombres",
                className: "form-control js-control-input",
                value: formData.nombres,
                onChange: handleChange
              }
            ),
            /* @__PURE__ */ jsx("label", { htmlFor: "nombres", children: "Nombres" }),
            /* @__PURE__ */ jsx("span", { className: "error-text" }),
            /* @__PURE__ */ jsx("i", { className: "error-icon" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "form-row row", children: [
          /* @__PURE__ */ jsxs("div", { className: "form-group col-md-6 col-sm-12 input__group", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                name: "apellidoPaterno",
                id: "apellidoPaterno",
                className: "form-control js-control-input",
                value: formData.apellidoPaterno,
                onChange: handleChange
              }
            ),
            /* @__PURE__ */ jsx("label", { htmlFor: "apellidoPaterno", children: "Apellido paterno" }),
            /* @__PURE__ */ jsx("span", { className: "error-text" }),
            /* @__PURE__ */ jsx("i", { className: "error-icon" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "form-group col-md-6 col-sm-12 input__group", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                name: "apellidoMaterno",
                id: "apellidoMaterno",
                className: "form-control js-control-input",
                value: formData.apellidoMaterno,
                onChange: handleChange
              }
            ),
            /* @__PURE__ */ jsx("label", { htmlFor: "apellidoMaterno", children: "Apellido Materno" }),
            /* @__PURE__ */ jsx("span", { className: "error-text" }),
            /* @__PURE__ */ jsx("i", { className: "error-icon" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "form-row", children: /* @__PURE__ */ jsxs("div", { className: "form-group input__group", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              name: "correo",
              id: "correo",
              className: "form-control js-control-input",
              value: formData.correo,
              onChange: handleChange
            }
          ),
          /* @__PURE__ */ jsx("label", { htmlFor: "correoElectronico", children: "Correo electrónico" }),
          /* @__PURE__ */ jsx("span", { className: "error-text" }),
          /* @__PURE__ */ jsx("i", { className: "error-icon" })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "form-row", children: /* @__PURE__ */ jsxs("div", { className: "form-group input__group", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              name: "ciudadRadicacion",
              id: "ciudadRadicacion",
              className: "form-control js-control-input",
              value: formData.ciudadRadicacion,
              onChange: handleChange
            }
          ),
          /* @__PURE__ */ jsx("label", { htmlFor: "ciudadRadicacion", children: "Ciudad de radicación" }),
          /* @__PURE__ */ jsx("span", { className: "error-text" }),
          /* @__PURE__ */ jsx("i", { className: "error-icon" })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "form-row", children: /* @__PURE__ */ jsxs(
          "div",
          {
            id: "country_wrapper",
            className: "form-group form-select",
            children: [
              /* @__PURE__ */ jsx(
                CountriesFormSelect,
                {
                  valueAndId: "idPais",
                  onChange: (e) => setFormData((prev) => ({
                    ...prev,
                    idPais: e.target.value
                  }))
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "error-text" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "form-row", children: /* @__PURE__ */ jsx("div", { className: "pw-ui-control form-group", children: /* @__PURE__ */ jsxs("div", { className: "pw-ui-phone-input", children: [
          /* @__PURE__ */ jsx("div", { className: "pw-ui-control", children: /* @__PURE__ */ jsxs("div", { className: "pw-ui-control-input__wrapper", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                name: "telefono",
                className: "pw-ui-control-input__field pw-ui-js-control-input no-arrows",
                id: "telefono",
                value: formData.telefono,
                onChange: handleChange
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "pw-ui-control-placeholder", children: "Número de contacto" }),
            /* @__PURE__ */ jsx("span", { className: "error-text" }),
            /* @__PURE__ */ jsx("i", { className: "error-icon" })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "pw-ui-phone-input__pseudo-field pw-ui-js-phone-input-toggler", children: [
            /* @__PURE__ */ jsx("div", { className: "pw-ui-phone-input__value pw-ui-js-phone-input-show", children: "+" }),
            /* @__PURE__ */ jsx(
              "svg",
              {
                width: "12",
                height: "5",
                className: "pw-ui-phone-input__arrow",
                children: /* @__PURE__ */ jsx("use", { xlinkHref: "#pw-ui-ico-chevron" })
              }
            )
          ] }),
          /* @__PURE__ */ jsx(CountryCodeForm, { valueAndId: "codigo" })
        ] }) }) }),
        /* @__PURE__ */ jsxs("div", { className: "form-row row", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "", className: "datePicker-label", children: "Fecha de nacimiento" }),
          /* @__PURE__ */ jsxs("div", { className: "form-group form-select-sm col-md-4 col-sm-12", children: [
            /* @__PURE__ */ jsxs(
              "select",
              {
                className: "country-item form-control",
                id: "diaNacimiento",
                name: "diaNacimiento",
                value: formData.diaNacimiento,
                onChange: handleChange,
                required: true,
                children: [
                  /* @__PURE__ */ jsx("option", { value: "", children: "Día" }),
                  Array.from({ length: 31 }, (_, i) => /* @__PURE__ */ jsx("option", { value: i + 1, children: i + 1 }, i + 1))
                ]
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "error-text" }),
            /* @__PURE__ */ jsx("i", { className: "error-icon" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "form-group form-select-sm col-md-4 col-sm-12", children: [
            /* @__PURE__ */ jsxs(
              "select",
              {
                className: "country-item form-control",
                id: "mesNacimiento",
                name: "mesNacimiento",
                value: formData.mesNacimiento,
                onChange: handleChange,
                required: true,
                children: [
                  /* @__PURE__ */ jsx("option", { value: "", children: "Mes" }),
                  [
                    "Enero",
                    "Febrero",
                    "Marzo",
                    "Abril",
                    "Mayo",
                    "Junio",
                    "Julio",
                    "Agosto",
                    "Septiembre",
                    "Octubre",
                    "Noviembre",
                    "Diciembre"
                  ].map((mes, i) => /* @__PURE__ */ jsx("option", { value: i + 1, children: mes }, i + 1))
                ]
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "error-text" }),
            /* @__PURE__ */ jsx("i", { className: "error-icon" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "form-group form-select-sm col-md-4 col-sm-12", children: [
            /* @__PURE__ */ jsxs(
              "select",
              {
                className: "country-item form-control",
                id: "anioNacimiento",
                name: "anioNacimiento",
                value: formData.anioNacimiento,
                onChange: handleChange,
                required: true,
                children: [
                  /* @__PURE__ */ jsx("option", { value: "", children: "Año" }),
                  Array.from({ length: 100 }, (_, i) => /* @__PURE__ */ jsx("option", { value: 2023 - i, children: 2023 - i }, 2023 - i))
                ]
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "error-text" }),
            /* @__PURE__ */ jsx("i", { className: "error-icon" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "form-row row", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "", className: "datePicker-label", children: "Área de interés de docencia" }),
          /* @__PURE__ */ jsx(
            AreaForm,
            {
              onChange: handleChange,
              selectedArea: formData.idAreaInteres,
              selectedSector: formData.idSector
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            style: { display: "none" },
            children: /* @__PURE__ */ jsx("symbol", { id: "pw-ui-ico-chevron", viewBox: "0 0 10 5", children: /* @__PURE__ */ jsx(
              "path",
              {
                fill: "none",
                fillRule: "evenodd",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M9 0L4.999625 4.285714 1 0"
              }
            ) })
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "form-row", children: /* @__PURE__ */ jsx("div", { className: "form-group input__group", children: /* @__PURE__ */ jsx(
          "input",
          {
            type: "submit",
            className: "btn btn-primary",
            value: "Registrarse",
            name: "Registrarse"
          }
        ) }) })
      ] }),
      message && /* @__PURE__ */ jsx("p", { children: message })
    ] })
  ] }) }) }) }) });
};

const $$FormularioRegistro = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$LayoutForm, { "title": "Formulario de registro Docentes ESAM", "data-astro-cid-prbgqysy": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SingleForm", SingleForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/components/formdoc/SingleForm", "client:component-export": "SingleForm", "data-astro-cid-prbgqysy": true })} ` })} `;
}, "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/pages/docentes/formulario-registro.astro", void 0);

const $$file = "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/pages/docentes/formulario-registro.astro";
const $$url = "/docentes/formulario-registro";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$FormularioRegistro,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
