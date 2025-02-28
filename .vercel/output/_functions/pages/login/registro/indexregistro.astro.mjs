import { c as createComponent, d as renderComponent, r as renderTemplate } from '../../../chunks/astro/server_CdpYlLHK.mjs';
import 'kleur/colors';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { C as CountriesFormSelect, A as AreaForm } from '../../../chunks/AreaForm_2WRxHX5U.mjs';
/* empty css                                               */
export { renderers } from '../../../renderers.mjs';

const RegistroDocente = () => {
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
    const passwordRegex = /^(?=.*[0-9])(?=.{8,})/;
    if (!passwordRegex.test(formData.password)) {
      setMessage("La contraseña debe tener al menos 8 caracteres y contener al menos un número.");
      return;
    }
    const phoneRegex = /^[0-9]+$/;
    if (!phoneRegex.test(formData.telefono)) {
      setMessage("El número de contacto debe contener solo números.");
      return;
    }
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
        setMessage("Postulación enviada correctamente. Ya puede iniciar sesion con su usuario y contraseña");
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
  const handleLogin = () => {
    window.location.href = "/login";
  };
  return /* @__PURE__ */ jsxs("div", { className: "login-container", children: [
    /* @__PURE__ */ jsx("div", { className: "login-image" }),
    /* @__PURE__ */ jsxs("div", { className: "register-box", children: [
      /* @__PURE__ */ jsx("h1", { className: "login-title", children: "Formulario de Registro" }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "login-form", children: [
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
                width: "100",
                height: "100",
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
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            name: "usuario",
            placeholder: "Usuario",
            value: formData.usuario,
            onChange: handleChange,
            className: "login-input"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "form-group input__group", children: /* @__PURE__ */ jsxs("div", { className: "password-group", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: showPassword ? "text" : "password",
              name: "password",
              id: "password",
              placeholder: "Contraseña",
              value: formData.password,
              onChange: handleChange,
              className: "login-input"
            }
          ),
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
                  children: /* @__PURE__ */ jsx("path", { d: "M12 4.5C7.5 4.5 3.8 7.3 2 12c1.8 4.7 5.5 7.5 10 7.5s8.2-2.8 10-7.5c-1.8-4.7-5.5-7.5-10-7.5zm0 13c-3.1 0-5.6-2.5-5.6-5.5S8.9 6.5 12 6.5s5.6 2.5 5.6 5.5-2.5 5.5-5.6 5.5zm0-2.1c1.8 0 3.3-1.4 3.3-3.4s-1.4-3.4-3.3-3.4-3.3 1.4-3.3 3.4 1.4 3.4 3.3 3.4z" })
                }
              ) : /* @__PURE__ */ jsx(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  width: "24",
                  height: "24",
                  children: /* @__PURE__ */ jsx("path", { d: "M2 12c1.8 4.7 5.5 7.5 10 7.5 2.5 0 4.9-.9 6.9-2.5l2.4 2.4 1.4-1.4-19-19-1.4 1.4 2.4 2.4C3.1 7.1 2 9.4 2 12zm10-7.5c-2.5 0-4.9.9-6.9 2.5l9.9 9.9c2-.5 3.9-1.7 5.2-3.4-1.8-4.7-5.5-7.5-10-7.5zm-6 3.6 3.3 3.3C9.1 10.1 10 10 12 10c1.4 0 2.7.1 4 .4l1.7 1.7c-.4-.1-.9-.1-1.7-.1-2.1 0-4 .5-5.7 1.3L4.5 8.1z" })
                }
              )
            }
          )
        ] }) }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            name: "nombres",
            placeholder: "Nombres",
            value: formData.nombres,
            onChange: handleChange,
            className: "login-input"
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            name: "apellidoPaterno",
            placeholder: "Apellido Paterno",
            value: formData.apellidoPaterno,
            onChange: handleChange,
            className: "login-input"
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            name: "apellidoMaterno",
            placeholder: "Apellido Materno",
            value: formData.apellidoMaterno,
            onChange: handleChange,
            className: "login-input"
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "email",
            name: "correo",
            placeholder: "Correo",
            value: formData.correo,
            onChange: handleChange,
            className: "login-input"
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            name: "ciudadRadicacion",
            placeholder: "Ciudad de Radicación",
            value: formData.ciudadRadicacion,
            onChange: handleChange,
            className: "login-input"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "form-group input__group", children: /* @__PURE__ */ jsx("div", { className: "country-select-group", children: /* @__PURE__ */ jsx(
          CountriesFormSelect,
          {
            valueAndId: "idPais",
            onChange: (e) => setFormData((prev) => ({
              ...prev,
              idPais: e.target.value
            }))
          }
        ) }) }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            name: "telefono",
            placeholder: "Numero de contacto",
            className: "login-input",
            id: "telefono",
            value: formData.telefono,
            onChange: handleChange
          }
        ),
        /* @__PURE__ */ jsx("label", { htmlFor: "", className: "label-text", children: "Fecha de nacimiento" }),
        /* @__PURE__ */ jsxs("div", { className: "form-date-row", children: [
          /* @__PURE__ */ jsxs("div", { className: "form-date", children: [
            /* @__PURE__ */ jsxs(
              "select",
              {
                className: "date-select",
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
          /* @__PURE__ */ jsx("div", { className: "form-date", children: /* @__PURE__ */ jsxs(
            "select",
            {
              className: "date-select",
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
          ) }),
          /* @__PURE__ */ jsx("div", { className: "form-date", children: /* @__PURE__ */ jsxs(
            "select",
            {
              className: "date-select",
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
          ) })
        ] }),
        /* @__PURE__ */ jsx("label", { htmlFor: "", className: "label-text", children: "Area de interés de docencia" }),
        /* @__PURE__ */ jsx("div", { className: "area-interest-container", children: /* @__PURE__ */ jsx(
          AreaForm,
          {
            onChange: handleChange,
            selectedArea: formData.idAreaInteres,
            selectedSector: formData.idSector
          }
        ) }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "submit",
            className: "register-button",
            value: "Registrarse",
            name: "Registrarse",
            placeholder: "Registrarse"
          }
        ),
        message && /* @__PURE__ */ jsx("p", { className: "register-error", children: message }),
        /* @__PURE__ */ jsxs("p", { className: "register-message", children: [
          "¿Ya tienes una cuenta?",
          " ",
          /* @__PURE__ */ jsx("span", { className: "register-link", onClick: handleLogin, children: "Iniciar Sesion" })
        ] })
      ] })
    ] })
  ] });
};

const $$IndexRegistro = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Componente React para el formulario de registro -->${renderComponent($$result, "RegistroDocente", RegistroDocente, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/components/login/Registro", "client:component-export": "RegistroDocente" })}`;
}, "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/pages/login/registro/indexRegistro.astro", void 0);

const $$file = "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/pages/login/registro/indexRegistro.astro";
const $$url = "/login/registro/indexRegistro";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$IndexRegistro,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
