import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DDyqfWY9.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BVg-EGxa.mjs';
import { $ as $$HeroTitle } from '../chunks/HeroTitle_DeX6Rgca.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { gql, request } from 'graphql-request';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const infoAcademicos = [
  {
    id: 1,
    contacto: "Numero de Contacto",
    ref: "Número de Referencia",
    correo: "Correo Electrónico",
  },
  {
    id: 2,
    nombres: "Alejandra",
    apellido_paterno: "Camacho",
    apellido_materno: "Ferrel",
    correo: "alejandra.camacho@esam.edu.bo",
  },
  {
    id: 3,
    nombres: "María Celeste",
    apellido_paterno: "Aparicio",
    apellido_materno: "Mogro",
    correo: "maria.aparicio@esam.edu.bo",
  },
  {
    id: 4,
    nombres: "Camila",
    apellido_paterno: "Torrico",
    apellido_materno: "Montaño",
    correo: "camila.torrico@esam.edu.bo",
  },
  {
    id: 5,
    nombres: "Rosemary",
    apellido_paterno: "Lopez",
    apellido_materno: "Zapata",
    correo: "rosemary.lopez@esam.edu.bo",
  },
  {
    id: 6,
    nombres: "María Olurcia",
    apellido_paterno: "Maire",
    apellido_materno: "Alcocer",
    correo: "maria.maire@esam.edu.bo",
  },
  {
    id: 7,
    nombres: "Anahí Daniela",
    apellido_paterno: "Vega",
    apellido_materno: "Rojas",
    correo: "anahi.vega@esam.edu.bo",
  },
];

const AcademicFilter = () => {
  const [selectAcademico, setSelectAcademico] = useState(null);
  const handleChange = (event) => {
    const selectedName = event.target.value;
    const academicoEcontrado = infoAcademicos.find(
      (academic) => academic.nombres === selectedName
    );
    setSelectAcademico(academicoEcontrado);
  };
  return /* @__PURE__ */ jsxs("div", { className: "v-row", children: [
    /* @__PURE__ */ jsx("h3", { children: "Coordinador" }),
    /* @__PURE__ */ jsxs("div", { className: "v-container v-locale--is-ltr", children: [
      /* @__PURE__ */ jsx("label", { className: "v-label", children: "Nota: Ingrese el nombre del coordinador/a" }),
      /* @__PURE__ */ jsxs("div", { className: "v-input v-input--horizontal v-input--center-affix v-input--density-default v-locale--is-ltr v-text-field", children: [
        /* @__PURE__ */ jsx("div", { className: "v-input__control", children: /* @__PURE__ */ jsxs("div", { className: "v-field v-field--center-affix v-field--variant-outlined v-theme--light v-locale--is-ltr", children: [
          /* @__PURE__ */ jsx("div", { className: "v-field__overlay" }),
          /* @__PURE__ */ jsx("div", { className: "v-field__loader", children: /* @__PURE__ */ jsxs(
            "div",
            {
              className: "v-progress-linear v-theme--light v-locale--is-ltr",
              role: "progressbar",
              "aria-hidden": "true",
              "aria-valuemin": "0",
              "aria-valuemax": "100",
              style: {
                top: "0px",
                height: "0px",
                left: "50%",
                transform: "translateX(-50%)"
              },
              children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "v-progress-linear__background",
                    style: { width: "100%" }
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "v-progress-linear__indeterminate", children: [
                  /* @__PURE__ */ jsx("div", { className: "v-progress-linear__indeterminate long" }),
                  /* @__PURE__ */ jsx("div", { className: "v-progress-linear__indeterminate short" })
                ] })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "v-field__field", "data-no-activator": "", children: [
            /* @__PURE__ */ jsx("label", { className: "v-label v-field-label", htmlFor: "input-16", children: "Nombre" }),
            /* @__PURE__ */ jsxs(
              "select",
              {
                onChange: handleChange,
                name: "nombre_coordinador",
                id: "input-16",
                children: [
                  /* @__PURE__ */ jsx("option", { value: "", children: "Seleccionar" }),
                  infoAcademicos.map((academico) => /* @__PURE__ */ jsx("option", { value: academico.nombres, children: academico.nombres }, academico.id))
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "v-field__outline", children: [
            /* @__PURE__ */ jsx("div", { className: "v-field__outline__start" }),
            /* @__PURE__ */ jsx("div", { className: "v-field__outline__end" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "v-input__details", children: /* @__PURE__ */ jsx(
          "div",
          {
            className: "v-messages",
            role: "alert",
            "aria-live": "polite",
            id: "input-16-messages"
          }
        ) })
      ] }),
      selectAcademico && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "v-input v-input--horizontal v-input--center-affix v-input--density-default v-locale--is-ltr v-text-field", children: [
          /* @__PURE__ */ jsx("div", { className: "v-input__control", children: /* @__PURE__ */ jsxs("div", { className: "v-field v-field--center-affix v-field--variant-outlined v-theme--light v-locale--is-ltr", children: [
            /* @__PURE__ */ jsx("div", { className: "v-field__overlay" }),
            /* @__PURE__ */ jsx("div", { className: "v-field__loader", children: /* @__PURE__ */ jsxs(
              "div",
              {
                className: "v-progress-linear v-theme--light v-locale--is-ltr",
                role: "progressbar",
                "aria-hidden": "true",
                "aria-valuemin": "0",
                "aria-valuemax": "100",
                style: {
                  top: "0px",
                  height: "0px",
                  left: "50%",
                  transform: "translateX(-50%)"
                },
                children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "v-progress-linear__background",
                      style: { width: "100%" }
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "v-progress-linear__indeterminate", children: [
                    /* @__PURE__ */ jsx("div", { className: "v-progress-linear__indeterminate long" }),
                    /* @__PURE__ */ jsx("div", { className: "v-progress-linear__indeterminate short" })
                  ] })
                ]
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "v-field__field", "data-no-activator": "", children: [
              /* @__PURE__ */ jsx("label", { className: "v-label v-field-label", htmlFor: "input-18", children: "Nombres" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  size: "1",
                  type: "text",
                  id: "input-18",
                  "aria-describedby": "input-18-messages",
                  required: "",
                  className: "v-field__input",
                  value: selectAcademico.nombres
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "v-field__outline", children: [
              /* @__PURE__ */ jsx("div", { className: "v-field__outline__start" }),
              /* @__PURE__ */ jsx("div", { className: "v-field__outline__notch", children: /* @__PURE__ */ jsx(
                "label",
                {
                  className: "v-label v-field-label v-field-label--floating",
                  "aria-hidden": "true",
                  htmlFor: "input-18",
                  children: "Nombres"
                }
              ) }),
              /* @__PURE__ */ jsx("div", { className: "v-field__outline__end" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "v-input__details", children: /* @__PURE__ */ jsx(
            "div",
            {
              className: "v-messages",
              role: "alert",
              "aria-live": "polite",
              id: "input-18-messages"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "v-input v-input--horizontal v-input--center-affix v-input--density-default v-locale--is-ltr v-text-field", children: [
          /* @__PURE__ */ jsx("div", { className: "v-input__control", children: /* @__PURE__ */ jsxs("div", { className: "v-field v-field--center-affix v-field--variant-outlined v-theme--light v-locale--is-ltr", children: [
            /* @__PURE__ */ jsx("div", { className: "v-field__overlay" }),
            /* @__PURE__ */ jsx("div", { className: "v-field__loader", children: /* @__PURE__ */ jsxs(
              "div",
              {
                className: "v-progress-linear v-theme--light v-locale--is-ltr",
                role: "progressbar",
                "aria-hidden": "true",
                "aria-valuemin": "0",
                "aria-valuemax": "100",
                style: {
                  top: "0px",
                  height: "0px",
                  left: "50%",
                  transform: "translateX(-50%)"
                },
                children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "v-progress-linear__background",
                      style: { width: "100%" }
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "v-progress-linear__indeterminate", children: [
                    /* @__PURE__ */ jsx("div", { className: "v-progress-linear__indeterminate long" }),
                    /* @__PURE__ */ jsx("div", { className: "v-progress-linear__indeterminate short" })
                  ] })
                ]
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "v-field__field", "data-no-activator": "", children: [
              /* @__PURE__ */ jsx("label", { className: "v-label v-field-label", htmlFor: "input-20", children: "Apellidos" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  size: "1",
                  type: "text",
                  id: "input-20",
                  "aria-describedby": "input-20-messages",
                  required: "",
                  className: "v-field__input",
                  value: selectAcademico.apellido_paterno
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "v-field__outline", children: [
              /* @__PURE__ */ jsx("div", { className: "v-field__outline__start" }),
              /* @__PURE__ */ jsx("div", { className: "v-field__outline__notch", children: /* @__PURE__ */ jsx(
                "label",
                {
                  className: "v-label v-field-label v-field-label--floating",
                  "aria-hidden": "true",
                  htmlFor: "input-20",
                  children: "Apellidos"
                }
              ) }),
              /* @__PURE__ */ jsx("div", { className: "v-field__outline__end" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "v-input__details", children: /* @__PURE__ */ jsx(
            "div",
            {
              className: "v-messages",
              role: "alert",
              "aria-live": "polite",
              id: "input-20-messages"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "v-input v-input--horizontal v-input--center-affix v-input--density-default v-locale--is-ltr v-text-field", children: [
          /* @__PURE__ */ jsx("div", { className: "v-input__control", children: /* @__PURE__ */ jsxs("div", { className: "v-field v-field--center-affix v-field--variant-outlined v-theme--light v-locale--is-ltr", children: [
            /* @__PURE__ */ jsx("div", { className: "v-field__overlay" }),
            /* @__PURE__ */ jsx("div", { className: "v-field__loader", children: /* @__PURE__ */ jsxs(
              "div",
              {
                className: "v-progress-linear v-theme--light v-locale--is-ltr",
                role: "progressbar",
                "aria-hidden": "true",
                "aria-valuemin": "0",
                "aria-valuemax": "100",
                style: {
                  top: "0px",
                  height: "0px",
                  left: "50%",
                  transform: "translateX(-50%)"
                },
                children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "v-progress-linear__background",
                      style: { width: "100%" }
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "v-progress-linear__indeterminate", children: [
                    /* @__PURE__ */ jsx("div", { className: "v-progress-linear__indeterminate long" }),
                    /* @__PURE__ */ jsx("div", { className: "v-progress-linear__indeterminate short" })
                  ] })
                ]
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "v-field__field", "data-no-activator": "", children: [
              /* @__PURE__ */ jsx("label", { className: "v-label v-field-label", htmlFor: "input-20", children: "Correo" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  size: "1",
                  type: "text",
                  id: "input-20",
                  "aria-describedby": "input-20-messages",
                  required: "",
                  className: "v-field__input",
                  value: selectAcademico.correo
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "v-field__outline", children: [
              /* @__PURE__ */ jsx("div", { className: "v-field__outline__start" }),
              /* @__PURE__ */ jsx("div", { className: "v-field__outline__notch", children: /* @__PURE__ */ jsx(
                "label",
                {
                  className: "v-label v-field-label v-field-label--floating",
                  "aria-hidden": "true",
                  htmlFor: "input-20",
                  children: "Correo"
                }
              ) }),
              /* @__PURE__ */ jsx("div", { className: "v-field__outline__end" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "v-input__details", children: /* @__PURE__ */ jsx(
            "div",
            {
              className: "v-messages",
              role: "alert",
              "aria-live": "polite",
              id: "input-20-messages"
            }
          ) })
        ] })
      ] })
    ] })
  ] });
};

const LoadedDataComponent = ({ title, data }) => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h4", { children: title }),
    /* @__PURE__ */ jsx("span", { children: data })
  ] });
};

const GET_PROGRAM_BY_ID = gql`
  query GetProgramById($id: Int!) {
    programa(id: $id) {
      id
      nombre_compuesto
      fecha_inicio
      fecha_fin
      sede {
        nombre
      }
      postgrado {
        area {
          nombre
        }
      }
    }
  }
`;
const ProgramForm = () => {
  const [programId, setProgramId] = useState("");
  const [programData, setProgramData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchProgramData = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const data = await request(
        "https://webapitest.esam.edu.bo/graphql",
        GET_PROGRAM_BY_ID,
        { id: parseInt(id) }
      );
      setProgramData(data.programa);
    } catch (err) {
      setError("Error al obtener el programa");
    } finally {
      setLoading(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (programId) {
      fetchProgramData(programId);
    }
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h2", { children: "Buscar Programa por ID" }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "programId", children: "ID del Programa:" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          id: "programId",
          value: programId,
          onChange: (e) => setProgramId(e.target.value),
          placeholder: "Ingresa el ID del programa",
          required: true
        }
      ),
      /* @__PURE__ */ jsx("button", { type: "submit", children: "Buscar" })
    ] }),
    loading && /* @__PURE__ */ jsx("p", { children: "Cargando..." }),
    error && /* @__PURE__ */ jsx("p", { children: error }),
    programData && /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h3", { children: "Datos del Programa:" }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Nombre:" }),
        " ",
        programData.nombre_compuesto
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Fecha de Inicio:" }),
        " ",
        programData.fecha_inicio
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Fecha de Fin:" }),
        " ",
        programData.fecha_fin
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Sede:" }),
        " ",
        programData.sede.nombre
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Área de Postgrado:" }),
        " ",
        programData.postgrado.area.nombre
      ] })
    ] })
  ] });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sistema Academico ESAM | Registro de Programas", "data-astro-cid-6ali6lcd": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroTitle", $$HeroTitle, { "titulo": "Registro de Programas", "data-astro-cid-6ali6lcd": true })} ${maybeRenderHead()}<form class="v-form program-main" novalidate="" data-astro-cid-6ali6lcd> <div class="v-container v-locale--is-ltr program-form" data-astro-cid-6ali6lcd> <div class="v-col" data-astro-cid-6ali6lcd> ${renderComponent($$result2, "ProgramForm", ProgramForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/components/ui-react-components/ProgramForm", "client:component-export": "ProgramForm", "data-astro-cid-6ali6lcd": true })} ${renderComponent($$result2, "LoadedDataComponent", LoadedDataComponent, { "title": "Nombre", "data": "Datos del portal", "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/components/ui-react-components/LoadedDataComponent", "client:component-export": "LoadedDataComponent", "data-astro-cid-6ali6lcd": true })} ${renderComponent($$result2, "LoadedDataComponent", LoadedDataComponent, { "title": "Cronograma", "data": "Datos del portal", "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/components/ui-react-components/LoadedDataComponent", "client:component-export": "LoadedDataComponent", "data-astro-cid-6ali6lcd": true })} ${renderComponent($$result2, "LoadedDataComponent", LoadedDataComponent, { "title": "Sede", "data": "Datos del portal", "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/components/ui-react-components/LoadedDataComponent", "client:component-export": "LoadedDataComponent", "data-astro-cid-6ali6lcd": true })} ${renderComponent($$result2, "LoadedDataComponent", LoadedDataComponent, { "title": "Tipo", "data": "Datos del portal", "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/components/ui-react-components/LoadedDataComponent", "client:component-export": "LoadedDataComponent", "data-astro-cid-6ali6lcd": true })} ${renderComponent($$result2, "LoadedDataComponent", LoadedDataComponent, { "title": "Area", "data": "Datos del portal", "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/components/ui-react-components/LoadedDataComponent", "client:component-export": "LoadedDataComponent", "data-astro-cid-6ali6lcd": true })} <div class="v-row" data-astro-cid-6ali6lcd> <h3 data-astro-cid-6ali6lcd>Código de Programa</h3> <div class="v-container v-locale--is-ltr" data-astro-cid-6ali6lcd> <label class="v-label" data-astro-cid-6ali6lcd>
Ingrese el código del programa que se obtiene del portal.
</label><div class="v-input v-input--horizontal v-input--center-affix v-input--density-default v-locale--is-ltr v-text-field" data-astro-cid-6ali6lcd> <div class="v-input__control" data-astro-cid-6ali6lcd> <div class="v-field v-field--center-affix v-field--variant-outlined v-theme--light v-locale--is-ltr" data-astro-cid-6ali6lcd> <div class="v-field__overlay" data-astro-cid-6ali6lcd></div><div class="v-field__loader" data-astro-cid-6ali6lcd> <div class="v-progress-linear v-theme--light v-locale--is-ltr" role="progressbar" aria-hidden="true" aria-valuemin="0" aria-valuemax="100" style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);" data-astro-cid-6ali6lcd> <div class="v-progress-linear__background" style="width: 100%;" data-astro-cid-6ali6lcd></div><div class="v-progress-linear__indeterminate" data-astro-cid-6ali6lcd> <div class="v-progress-linear__indeterminate long" data-astro-cid-6ali6lcd></div><div class="v-progress-linear__indeterminate short" data-astro-cid-6ali6lcd></div> </div> </div> </div><div class="v-field__field" data-no-activator="" data-astro-cid-6ali6lcd> <label class="v-label v-field-label" for="input-1" style="" data-astro-cid-6ali6lcd>Código del Programa</label> <input type="text" id="input-1" aria-describedby="input-1-messages" required="" class="v-field__input" placeholder="Ej: MBT-15041-24" data-astro-cid-6ali6lcd> </div><div class="v-field__outline" data-astro-cid-6ali6lcd> <div class="v-field__outline__start" data-astro-cid-6ali6lcd></div><div class="v-field__outline__end" data-astro-cid-6ali6lcd></div> </div> </div> </div><div class="v-input__details" data-astro-cid-6ali6lcd> <div class="v-messages" role="alert" aria-live="polite" id="input-1-messages" data-astro-cid-6ali6lcd></div> </div> </div> </div> <div class="v-container v-locale--is-ltr" data-astro-cid-6ali6lcd> <div class="v-input v-input--horizontal v-input--center-affix v-input--density-default v-locale--is-ltr v-text-field" data-astro-cid-6ali6lcd> <div class="v-input__control" data-astro-cid-6ali6lcd> <div class="v-field v-field--center-affix v-field--variant-outlined v-theme--light v-locale--is-ltr" data-astro-cid-6ali6lcd> <div class="v-field__overlay" data-astro-cid-6ali6lcd></div><div class="v-field__loader" data-astro-cid-6ali6lcd> <div class="v-progress-linear v-theme--light v-locale--is-ltr" role="progressbar" aria-hidden="true" aria-valuemin="0" aria-valuemax="100" style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);" data-astro-cid-6ali6lcd> <div class="v-progress-linear__background" style="width: 100%;" data-astro-cid-6ali6lcd></div><div class="v-progress-linear__indeterminate" data-astro-cid-6ali6lcd> <div class="v-progress-linear__indeterminate long" data-astro-cid-6ali6lcd></div><div class="v-progress-linear__indeterminate short" data-astro-cid-6ali6lcd></div> </div> </div> </div><div class="v-field__outline" data-astro-cid-6ali6lcd> <div class="v-field__outline__start" data-astro-cid-6ali6lcd></div><div class="v-field__outline__notch" data-astro-cid-6ali6lcd> <label class="v-label v-field-label v-field-label--floating" aria-hidden="true" for="input-3" data-astro-cid-6ali6lcd>ID del Programa</label> </div><div class="v-field__outline__end" data-astro-cid-6ali6lcd></div> </div> </div> </div><div class="v-input__details" data-astro-cid-6ali6lcd> <div class="v-messages" role="alert" aria-live="polite" id="input-3-messages" data-astro-cid-6ali6lcd></div> </div> </div> </div> </div><div class="v-row" data-astro-cid-6ali6lcd> <h3 data-astro-cid-6ali6lcd>Nombre del Programa</h3><div class="v-container v-locale--is-ltr" data-astro-cid-6ali6lcd> <label class="v-label" data-astro-cid-6ali6lcd>
Nota: Escriba el nombre completo del programa, tome en cuenta la
              ortografía.
</label><div class="v-input v-input--horizontal v-input--center-affix v-input--density-default v-locale--is-ltr v-text-field" data-astro-cid-6ali6lcd> <div class="v-input__control" data-astro-cid-6ali6lcd> <div class="v-field v-field--center-affix v-field--variant-outlined v-theme--light v-locale--is-ltr" data-astro-cid-6ali6lcd> <div class="v-field__overlay" data-astro-cid-6ali6lcd></div><div class="v-field__loader" data-astro-cid-6ali6lcd> <div class="v-progress-linear v-theme--light v-locale--is-ltr" role="progressbar" aria-hidden="true" aria-valuemin="0" aria-valuemax="100" style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);" data-astro-cid-6ali6lcd> <div class="v-progress-linear__background" style="width: 100%;" data-astro-cid-6ali6lcd></div><div class="v-progress-linear__indeterminate" data-astro-cid-6ali6lcd> <div class="v-progress-linear__indeterminate long" data-astro-cid-6ali6lcd></div><div class="v-progress-linear__indeterminate short" data-astro-cid-6ali6lcd></div> </div> </div> </div><div class="v-field__field" data-no-activator="" data-astro-cid-6ali6lcd> <label class="v-label v-field-label" for="input-5" data-astro-cid-6ali6lcd>Nombre del Programa</label><input size="1" type="text" id="input-5" aria-describedby="input-5-messages" required="" class="v-field__input" data-astro-cid-6ali6lcd> </div><div class="v-field__outline" data-astro-cid-6ali6lcd> <div class="v-field__outline__start" data-astro-cid-6ali6lcd></div><div class="v-field__outline__notch" data-astro-cid-6ali6lcd> <label class="v-label v-field-label v-field-label--floating" aria-hidden="true" for="input-5" data-astro-cid-6ali6lcd>Nombre del Programa</label> </div><div class="v-field__outline__end" data-astro-cid-6ali6lcd></div> </div> </div> </div><div class="v-input__details" data-astro-cid-6ali6lcd> <div class="v-messages" role="alert" aria-live="polite" id="input-5-messages" data-astro-cid-6ali6lcd></div> </div> </div> </div> </div><div class="v-row" data-astro-cid-6ali6lcd> <h3 data-astro-cid-6ali6lcd>Cronograma</h3><div class="v-container v-locale--is-ltr" data-astro-cid-6ali6lcd> <label class="v-label" data-astro-cid-6ali6lcd>
Nota: Ingrese la fecha de inicio y la fecha de finalización.
</label><div class="dp__main dp__theme_light" data-astro-cid-6ali6lcd> <div data-astro-cid-6ali6lcd> <div class="dp__input_wrap" data-astro-cid-6ali6lcd> <input class="dp__pointer dp__input_readonly dp__input dp__input_icon_pad dp__input_reg" inputmode="none" placeholder="Inicio y Fin" autocomplete="off" aria-label="Datepicker input" data-astro-cid-6ali6lcd><div data-astro-cid-6ali6lcd> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" class="dp__icon dp__input_icon dp__input_icons" data-astro-cid-6ali6lcd><path d="M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z" data-astro-cid-6ali6lcd></path><path d="M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" data-astro-cid-6ali6lcd></path><path d="M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" data-astro-cid-6ali6lcd></path><path d="M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z" data-astro-cid-6ali6lcd></path></svg> </div> </div> </div> </div> </div> </div><div class="v-row" data-astro-cid-6ali6lcd> <h3 data-astro-cid-6ali6lcd>Sede</h3><div class="v-container v-locale--is-ltr" data-astro-cid-6ali6lcd> <label class="v-label mb-2" data-astro-cid-6ali6lcd>
Nota: Seleccione la sucursal a la que corresponde el programa.
</label><div class="v-input v-input--horizontal v-input--center-affix v-input--density-default v-locale--is-ltr v-text-field v-select v-select--single v-select--selected" data-astro-cid-6ali6lcd> <div class="v-input__control" data-astro-cid-6ali6lcd> <div class="v-field v-field--active v-field--appended v-field--center-affix v-field--dirty v-field--variant-outlined v-theme--light v-locale--is-ltr" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-owns="v-menu-9" data-astro-cid-6ali6lcd> <div class="v-field__overlay" data-astro-cid-6ali6lcd></div><div class="v-field__loader" data-astro-cid-6ali6lcd> <div class="v-progress-linear v-theme--light v-locale--is-ltr" role="progressbar" aria-hidden="true" aria-valuemin="0" aria-valuemax="100" style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);" data-astro-cid-6ali6lcd> <div class="v-progress-linear__background" style="width: 100%;" data-astro-cid-6ali6lcd></div><div class="v-progress-linear__indeterminate" data-astro-cid-6ali6lcd> <div class="v-progress-linear__indeterminate long" data-astro-cid-6ali6lcd></div><div class="v-progress-linear__indeterminate short" data-astro-cid-6ali6lcd></div> </div> </div> </div><div class="v-field__field" data-no-activator="" data-astro-cid-6ali6lcd> <label class="v-label v-field-label" for="input-7" data-astro-cid-6ali6lcd>Sede del Programa</label><div class="v-field__input" data-no-activator="" data-astro-cid-6ali6lcd> <div class="v-select__selection" data-astro-cid-6ali6lcd> <span class="v-select__selection-text" data-astro-cid-6ali6lcd></span> </div><input size="1" type="text" id="input-7" aria-describedby="input-7-messages" inputmode="none" aria-label="Open" title="Open" required="" data-astro-cid-6ali6lcd> </div> </div><div class="v-field__append-inner" data-astro-cid-6ali6lcd> <i class="mdi-menu-down mdi v-icon notranslate v-theme--light v-icon--size-default v-select__menu-icon" aria-hidden="true" data-astro-cid-6ali6lcd></i> </div><div class="v-field__outline" data-astro-cid-6ali6lcd> <div class="v-field__outline__start" data-astro-cid-6ali6lcd></div><div class="v-field__outline__notch" data-astro-cid-6ali6lcd> <label class="v-label v-field-label v-field-label--floating" aria-hidden="true" for="input-7" data-astro-cid-6ali6lcd>Sede del Programa</label> </div><div class="v-field__outline__end" data-astro-cid-6ali6lcd></div> </div> </div> </div><div class="v-input__details" data-astro-cid-6ali6lcd> <div class="v-messages" role="alert" aria-live="polite" id="input-7-messages" data-astro-cid-6ali6lcd></div> </div> </div> </div> </div><div class="v-row" data-astro-cid-6ali6lcd> <h3 data-astro-cid-6ali6lcd>Tipo de Programa</h3><div class="v-container v-locale--is-ltr" data-astro-cid-6ali6lcd> <label class="v-label mb-2" data-astro-cid-6ali6lcd>
Nota: Seleccione el tipo de programa.
</label><div class="v-input v-input--horizontal v-input--center-affix v-input--density-default v-locale--is-ltr v-text-field v-select v-select--single v-select--selected" data-astro-cid-6ali6lcd> <div class="v-input__control" data-astro-cid-6ali6lcd> <div class="v-field v-field--active v-field--appended v-field--center-affix v-field--dirty v-field--variant-outlined v-theme--light v-locale--is-ltr" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-owns="v-menu-12" data-astro-cid-6ali6lcd> <div class="v-field__overlay" data-astro-cid-6ali6lcd></div><div class="v-field__loader" data-astro-cid-6ali6lcd> <div class="v-progress-linear v-theme--light v-locale--is-ltr" role="progressbar" aria-hidden="true" aria-valuemin="0" aria-valuemax="100" style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);" data-astro-cid-6ali6lcd> <div class="v-progress-linear__background" style="width: 100%;" data-astro-cid-6ali6lcd></div><div class="v-progress-linear__indeterminate" data-astro-cid-6ali6lcd> <div class="v-progress-linear__indeterminate long" data-astro-cid-6ali6lcd></div><div class="v-progress-linear__indeterminate short" data-astro-cid-6ali6lcd></div> </div> </div> </div><div class="v-field__field" data-no-activator="" data-astro-cid-6ali6lcd> <label class="v-label v-field-label" for="input-10" data-astro-cid-6ali6lcd>Tipo de Programa</label><div class="v-field__input" data-no-activator="" data-astro-cid-6ali6lcd> <div class="v-select__selection" data-astro-cid-6ali6lcd> <span class="v-select__selection-text" data-astro-cid-6ali6lcd></span> </div><input size="1" type="text" id="input-10" aria-describedby="input-10-messages" inputmode="none" aria-label="Open" title="Open" data-astro-cid-6ali6lcd> </div> </div><div class="v-field__append-inner" data-astro-cid-6ali6lcd> <i class="mdi-menu-down mdi v-icon notranslate v-theme--light v-icon--size-default v-select__menu-icon" aria-hidden="true" data-astro-cid-6ali6lcd></i> </div><div class="v-field__outline" data-astro-cid-6ali6lcd> <div class="v-field__outline__start" data-astro-cid-6ali6lcd></div><div class="v-field__outline__notch" data-astro-cid-6ali6lcd> <label class="v-label v-field-label v-field-label--floating" aria-hidden="true" for="input-10" data-astro-cid-6ali6lcd>Tipo de Programa</label> </div><div class="v-field__outline__end" data-astro-cid-6ali6lcd></div> </div> </div> </div><div class="v-input__details" data-astro-cid-6ali6lcd> <div class="v-messages" role="alert" aria-live="polite" id="input-10-messages" data-astro-cid-6ali6lcd></div> </div> </div> </div> </div><div class="v-row" data-astro-cid-6ali6lcd> <h3 data-astro-cid-6ali6lcd>Area del Programa</h3><div class="v-container v-locale--is-ltr" data-astro-cid-6ali6lcd> <label class="v-label mb-2" data-astro-cid-6ali6lcd>
Nota: Seleccione el area a la que pertenece el programa.
</label><div class="v-input v-input--horizontal v-input--center-affix v-input--density-default v-locale--is-ltr v-text-field v-select v-select--single v-select--selected" data-astro-cid-6ali6lcd> <div class="v-input__control" data-astro-cid-6ali6lcd> <div class="v-field v-field--active v-field--appended v-field--center-affix v-field--dirty v-field--variant-outlined v-theme--light v-locale--is-ltr" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-owns="v-menu-15" data-astro-cid-6ali6lcd> <div class="v-field__overlay" data-astro-cid-6ali6lcd></div><div class="v-field__loader" data-astro-cid-6ali6lcd> <div class="v-progress-linear v-theme--light v-locale--is-ltr" role="progressbar" aria-hidden="true" aria-valuemin="0" aria-valuemax="100" style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);" data-astro-cid-6ali6lcd> <div class="v-progress-linear__background" style="width: 100%;" data-astro-cid-6ali6lcd></div><div class="v-progress-linear__indeterminate" data-astro-cid-6ali6lcd> <div class="v-progress-linear__indeterminate long" data-astro-cid-6ali6lcd></div><div class="v-progress-linear__indeterminate short" data-astro-cid-6ali6lcd></div> </div> </div> </div><div class="v-field__field" data-no-activator="" data-astro-cid-6ali6lcd> <label class="v-label v-field-label" for="input-13" data-astro-cid-6ali6lcd>Area</label><div class="v-field__input" data-no-activator="" data-astro-cid-6ali6lcd> <div class="v-select__selection" data-astro-cid-6ali6lcd> <span class="v-select__selection-text" data-astro-cid-6ali6lcd></span> </div><input size="1" type="text" id="input-13" aria-describedby="input-13-messages" inputmode="none" aria-label="Open" title="Open" data-astro-cid-6ali6lcd> </div> </div><div class="v-field__append-inner" data-astro-cid-6ali6lcd> <i class="mdi-menu-down mdi v-icon notranslate v-theme--light v-icon--size-default v-select__menu-icon" aria-hidden="true" data-astro-cid-6ali6lcd></i> </div><div class="v-field__outline" data-astro-cid-6ali6lcd> <div class="v-field__outline__start" data-astro-cid-6ali6lcd></div><div class="v-field__outline__notch" data-astro-cid-6ali6lcd> <label class="v-label v-field-label v-field-label--floating" aria-hidden="true" for="input-13" data-astro-cid-6ali6lcd>Area</label> </div><div class="v-field__outline__end" data-astro-cid-6ali6lcd></div> </div> </div> </div><div class="v-input__details" data-astro-cid-6ali6lcd> <div class="v-messages" role="alert" aria-live="polite" id="input-13-messages" data-astro-cid-6ali6lcd></div> </div> </div> </div> </div> ${renderComponent($$result2, "AcademicFilter", AcademicFilter, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/components/filters/AcademicFilter", "client:component-export": "AcademicFilter", "data-astro-cid-6ali6lcd": true })} <div class="v-row" data-astro-cid-6ali6lcd> <h3 data-astro-cid-6ali6lcd>Módulos</h3><div class="v-container v-locale--is-ltr" data-astro-cid-6ali6lcd> <h4 data-astro-cid-6ali6lcd>Nombre de módulo:</h4><label class="v-label" data-astro-cid-6ali6lcd>
Nota: Ingrese el nombre del módulo, tome en cuenta la
                ortografía.
</label><div class="v-input v-input--horizontal v-input--center-affix v-input--density-default v-locale--is-ltr v-text-field" data-astro-cid-6ali6lcd> <div class="v-input__control" data-astro-cid-6ali6lcd> <div class="v-field v-field--center-affix v-field--variant-outlined v-theme--light v-locale--is-ltr" data-astro-cid-6ali6lcd> <div class="v-field__overlay" data-astro-cid-6ali6lcd></div><div class="v-field__loader" data-astro-cid-6ali6lcd> <div class="v-progress-linear v-theme--light v-locale--is-ltr" role="progressbar" aria-hidden="true" aria-valuemin="0" aria-valuemax="100" style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);" data-astro-cid-6ali6lcd> <div class="v-progress-linear__background" style="width: 100%;" data-astro-cid-6ali6lcd></div><div class="v-progress-linear__indeterminate" data-astro-cid-6ali6lcd> <div class="v-progress-linear__indeterminate long" data-astro-cid-6ali6lcd></div><div class="v-progress-linear__indeterminate short" data-astro-cid-6ali6lcd></div> </div> </div> </div><div class="v-field__field" data-no-activator="" data-astro-cid-6ali6lcd> <label class="v-label v-field-label" for="input-22" data-astro-cid-6ali6lcd>Nombre del Módulo</label><input size="1" type="text" id="input-22" aria-describedby="input-22-messages" class="v-field__input" data-astro-cid-6ali6lcd> </div><div class="v-field__outline" data-astro-cid-6ali6lcd> <div class="v-field__outline__start" data-astro-cid-6ali6lcd></div><div class="v-field__outline__notch" data-astro-cid-6ali6lcd> <label class="v-label v-field-label v-field-label--floating" aria-hidden="true" for="input-22" data-astro-cid-6ali6lcd>Nombre del Módulo</label> </div><div class="v-field__outline__end" data-astro-cid-6ali6lcd></div> </div> </div> </div><div class="v-input__details" data-astro-cid-6ali6lcd> <div class="v-messages" role="alert" aria-live="polite" id="input-22-messages" data-astro-cid-6ali6lcd></div> </div> </div><h4 class="mb-2" data-astro-cid-6ali6lcd>Requerimientos:</h4><div class="v-input v-input--horizontal v-input--center-affix v-input--density-default v-locale--is-ltr v-text-field v-select v-select--single v-select--selected" data-astro-cid-6ali6lcd> <div class="v-input__control" data-astro-cid-6ali6lcd> <div class="v-field v-field--active v-field--appended v-field--center-affix v-field--dirty v-field--variant-outlined v-theme--light v-locale--is-ltr" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-owns="v-menu-26" data-astro-cid-6ali6lcd> <div class="v-field__overlay" data-astro-cid-6ali6lcd></div><div class="v-field__loader" data-astro-cid-6ali6lcd> <div class="v-progress-linear v-theme--light v-locale--is-ltr" role="progressbar" aria-hidden="true" aria-valuemin="0" aria-valuemax="100" style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);" data-astro-cid-6ali6lcd> <div class="v-progress-linear__background" style="width: 100%;" data-astro-cid-6ali6lcd></div><div class="v-progress-linear__indeterminate" data-astro-cid-6ali6lcd> <div class="v-progress-linear__indeterminate long" data-astro-cid-6ali6lcd></div><div class="v-progress-linear__indeterminate short" data-astro-cid-6ali6lcd></div> </div> </div> </div><div class="v-field__field" data-no-activator="" data-astro-cid-6ali6lcd> <label class="v-label v-field-label" for="input-24" data-astro-cid-6ali6lcd>Docente</label><div class="v-field__input" data-no-activator="" data-astro-cid-6ali6lcd> <div class="v-select__selection" data-astro-cid-6ali6lcd> <span class="v-select__selection-text" data-astro-cid-6ali6lcd></span> </div><input size="1" type="text" id="input-24" aria-describedby="input-24-messages" inputmode="none" aria-label="Open" title="Open" data-astro-cid-6ali6lcd> </div> </div><div class="v-field__append-inner" data-astro-cid-6ali6lcd> <i class="mdi-menu-down mdi v-icon notranslate v-theme--light v-icon--size-default v-select__menu-icon" aria-hidden="true" data-astro-cid-6ali6lcd></i> </div><div class="v-field__outline" data-astro-cid-6ali6lcd> <div class="v-field__outline__start" data-astro-cid-6ali6lcd></div><div class="v-field__outline__notch" data-astro-cid-6ali6lcd> <label class="v-label v-field-label v-field-label--floating" aria-hidden="true" for="input-24" data-astro-cid-6ali6lcd>Docente</label> </div><div class="v-field__outline__end" data-astro-cid-6ali6lcd></div> </div> </div> </div><div class="v-input__details" data-astro-cid-6ali6lcd> <div class="v-messages" role="alert" aria-live="polite" id="input-24-messages" data-astro-cid-6ali6lcd></div> </div> </div><div class="v-input v-input--horizontal v-input--center-affix v-input--density-default v-locale--is-ltr v-text-field v-select v-select--single v-select--selected" data-astro-cid-6ali6lcd> <div class="v-input__control" data-astro-cid-6ali6lcd> <div class="v-field v-field--active v-field--appended v-field--center-affix v-field--dirty v-field--variant-outlined v-theme--light v-locale--is-ltr" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-owns="v-menu-29" data-astro-cid-6ali6lcd> <div class="v-field__overlay" data-astro-cid-6ali6lcd></div><div class="v-field__loader" data-astro-cid-6ali6lcd> <div class="v-progress-linear v-theme--light v-locale--is-ltr" role="progressbar" aria-hidden="true" aria-valuemin="0" aria-valuemax="100" style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);" data-astro-cid-6ali6lcd> <div class="v-progress-linear__background" style="width: 100%;" data-astro-cid-6ali6lcd></div><div class="v-progress-linear__indeterminate" data-astro-cid-6ali6lcd> <div class="v-progress-linear__indeterminate long" data-astro-cid-6ali6lcd></div><div class="v-progress-linear__indeterminate short" data-astro-cid-6ali6lcd></div> </div> </div> </div><div class="v-field__field" data-no-activator="" data-astro-cid-6ali6lcd> <label class="v-label v-field-label" for="input-27" data-astro-cid-6ali6lcd>Facturación</label><div class="v-field__input" data-no-activator="" data-astro-cid-6ali6lcd> <div class="v-select__selection" data-astro-cid-6ali6lcd> <span class="v-select__selection-text" data-astro-cid-6ali6lcd></span> </div><input size="1" type="text" id="input-27" aria-describedby="input-27-messages" inputmode="none" aria-label="Open" title="Open" data-astro-cid-6ali6lcd> </div> </div><div class="v-field__append-inner" data-astro-cid-6ali6lcd> <i class="mdi-menu-down mdi v-icon notranslate v-theme--light v-icon--size-default v-select__menu-icon" aria-hidden="true" data-astro-cid-6ali6lcd></i> </div><div class="v-field__outline" data-astro-cid-6ali6lcd> <div class="v-field__outline__start" data-astro-cid-6ali6lcd></div><div class="v-field__outline__notch" data-astro-cid-6ali6lcd> <label class="v-label v-field-label v-field-label--floating" aria-hidden="true" for="input-27" data-astro-cid-6ali6lcd>Facturación</label> </div><div class="v-field__outline__end" data-astro-cid-6ali6lcd></div> </div> </div> </div><div class="v-input__details" data-astro-cid-6ali6lcd> <div class="v-messages" role="alert" aria-live="polite" id="input-27-messages" data-astro-cid-6ali6lcd></div> </div> </div><h4 data-astro-cid-6ali6lcd>Monto a pagar</h4><label class="v-label" data-astro-cid-6ali6lcd>Definir monto a pagar</label><div class="v-input v-input--horizontal v-input--center-affix v-input--density-default v-locale--is-ltr v-text-field v-text-field--prefixed" data-astro-cid-6ali6lcd> <div class="v-input__control" data-astro-cid-6ali6lcd> <div class="v-field v-field--center-affix v-field--variant-outlined v-theme--light v-locale--is-ltr" data-astro-cid-6ali6lcd> <div class="v-field__overlay" data-astro-cid-6ali6lcd></div><div class="v-field__loader" data-astro-cid-6ali6lcd> <div class="v-progress-linear v-theme--light v-locale--is-ltr" role="progressbar" aria-hidden="true" aria-valuemin="0" aria-valuemax="100" style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);" data-astro-cid-6ali6lcd> <div class="v-progress-linear__background" style="width: 100%;" data-astro-cid-6ali6lcd></div><div class="v-progress-linear__indeterminate" data-astro-cid-6ali6lcd> <div class="v-progress-linear__indeterminate long" data-astro-cid-6ali6lcd></div><div class="v-progress-linear__indeterminate short" data-astro-cid-6ali6lcd></div> </div> </div> </div><div class="v-field__field" data-no-activator="" data-astro-cid-6ali6lcd> <label class="v-label v-field-label" for="input-30" data-astro-cid-6ali6lcd>Salario</label><span class="v-text-field__prefix" data-astro-cid-6ali6lcd><span class="v-text-field__prefix__text" data-astro-cid-6ali6lcd>$</span></span><input size="1" type="text" id="input-30" aria-describedby="input-30-messages" class="v-field__input" data-astro-cid-6ali6lcd> </div><div class="v-field__outline" data-astro-cid-6ali6lcd> <div class="v-field__outline__start" data-astro-cid-6ali6lcd></div><div class="v-field__outline__notch" data-astro-cid-6ali6lcd> <label class="v-label v-field-label v-field-label--floating" aria-hidden="true" for="input-30" data-astro-cid-6ali6lcd>Salario</label> </div><div class="v-field__outline__end" data-astro-cid-6ali6lcd></div> </div> </div> </div><div class="v-input__details" data-astro-cid-6ali6lcd> <div class="v-messages" role="alert" aria-live="polite" id="input-30-messages" data-astro-cid-6ali6lcd></div> </div> </div><h4 data-astro-cid-6ali6lcd>Fecha y hora de clases:</h4><label class="v-label" data-astro-cid-6ali6lcd>
Nota: Seleccione todas las fechas en las cuales se llevara a
                cabo el módulo.
</label><div class="dp__main dp__theme_light" data-astro-cid-6ali6lcd> <div data-astro-cid-6ali6lcd> <div class="dp__input_wrap" data-astro-cid-6ali6lcd> <input class="dp__pointer dp__input_readonly dp__input dp__input_icon_pad dp__input_reg" inputmode="none" placeholder="Fechas de clases" autocomplete="off" aria-label="Datepicker input" data-astro-cid-6ali6lcd><div data-astro-cid-6ali6lcd> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" class="dp__icon dp__input_icon dp__input_icons" data-astro-cid-6ali6lcd><path d="M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z" data-astro-cid-6ali6lcd></path><path d="M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" data-astro-cid-6ali6lcd></path><path d="M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" data-astro-cid-6ali6lcd></path><path d="M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z" data-astro-cid-6ali6lcd></path></svg> </div> </div> </div> </div><br data-astro-cid-6ali6lcd><label class="v-label" data-astro-cid-6ali6lcd>
Nota: Seleccione la hora de inicio y la hora de finalización del
                módulo.
</label><div class="dateTime" data-astro-cid-6ali6lcd> <div data-astro-cid-6ali6lcd> <label class="v-label" data-astro-cid-6ali6lcd>Hora de inicio</label><div class="dp__main dp__theme_light" data-astro-cid-6ali6lcd> <div data-astro-cid-6ali6lcd> <div class="dp__input_wrap" data-astro-cid-6ali6lcd> <input class="dp__pointer dp__input_readonly dp__input dp__input_icon_pad dp__input_reg" inputmode="none" placeholder="Hora Inicio" autocomplete="off" aria-label="Datepicker input" data-astro-cid-6ali6lcd><div data-astro-cid-6ali6lcd> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" class="dp__icon dp__input_icon dp__input_icons" data-astro-cid-6ali6lcd><path d="M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z" data-astro-cid-6ali6lcd></path><path d="M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" data-astro-cid-6ali6lcd></path><path d="M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" data-astro-cid-6ali6lcd></path><path d="M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z" data-astro-cid-6ali6lcd></path></svg> </div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" class="dp__icon dp__clear_icon dp__input_icons" data-astro-cid-6ali6lcd><path d="M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z" data-astro-cid-6ali6lcd></path><path d="M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z" data-astro-cid-6ali6lcd></path></svg> </div> </div> </div> </div><div data-astro-cid-6ali6lcd> <label class="v-label" data-astro-cid-6ali6lcd>Hora de finalización</label><div class="dp__main dp__theme_light" data-astro-cid-6ali6lcd> <div data-astro-cid-6ali6lcd> <div class="dp__input_wrap" data-astro-cid-6ali6lcd> <input class="dp__pointer dp__input_readonly dp__input dp__input_icon_pad dp__input_reg" inputmode="none" placeholder="Hora Fin" autocomplete="off" aria-label="Datepicker input" data-astro-cid-6ali6lcd><div data-astro-cid-6ali6lcd> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" class="dp__icon dp__input_icon dp__input_icons" data-astro-cid-6ali6lcd><path d="M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z" data-astro-cid-6ali6lcd></path><path d="M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" data-astro-cid-6ali6lcd></path><path d="M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" data-astro-cid-6ali6lcd></path><path d="M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z" data-astro-cid-6ali6lcd></path></svg> </div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" class="dp__icon dp__clear_icon dp__input_icons" data-astro-cid-6ali6lcd><path d="M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z" data-astro-cid-6ali6lcd></path><path d="M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z" data-astro-cid-6ali6lcd></path></svg> </div> </div> </div> </div> </div><br data-astro-cid-6ali6lcd><h4 data-astro-cid-6ali6lcd>Contenido:</h4><label class="v-label" data-astro-cid-6ali6lcd>
Nota: Ingrese el contenido tentativo para el desarrollo del
                módulo.
</label><div class="v-input v-input--horizontal v-input--density-default v-locale--is-ltr v-textarea v-text-field" data-astro-cid-6ali6lcd> <div class="v-input__control" data-astro-cid-6ali6lcd> <div class="v-field v-field--variant-outlined v-theme--light v-locale--is-ltr" data-astro-cid-6ali6lcd> <div class="v-field__overlay" data-astro-cid-6ali6lcd></div><div class="v-field__loader" data-astro-cid-6ali6lcd> <div class="v-progress-linear v-theme--light v-locale--is-ltr" role="progressbar" aria-hidden="true" aria-valuemin="0" aria-valuemax="100" style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);" data-astro-cid-6ali6lcd> <div class="v-progress-linear__background" style="width: 100%;" data-astro-cid-6ali6lcd></div><div class="v-progress-linear__indeterminate" data-astro-cid-6ali6lcd> <div class="v-progress-linear__indeterminate long" data-astro-cid-6ali6lcd></div><div class="v-progress-linear__indeterminate short" data-astro-cid-6ali6lcd></div> </div> </div> </div><div class="v-field__field" data-no-activator="" data-astro-cid-6ali6lcd> <label class="v-label v-field-label" for="input-32" data-astro-cid-6ali6lcd>Contenido del Módulo</label><textarea class="v-field__input" rows="5" id="input-32" aria-describedby="input-32-messages" data-astro-cid-6ali6lcd></textarea> </div><div class="v-field__outline" data-astro-cid-6ali6lcd> <div class="v-field__outline__start" data-astro-cid-6ali6lcd></div><div class="v-field__outline__notch" data-astro-cid-6ali6lcd> <label class="v-label v-field-label v-field-label--floating" aria-hidden="true" for="input-32" data-astro-cid-6ali6lcd>Contenido del Módulo</label> </div><div class="v-field__outline__end" data-astro-cid-6ali6lcd></div> </div> </div> </div><div class="v-input__details" data-astro-cid-6ali6lcd> <div class="v-messages" role="alert" aria-live="polite" id="input-32-messages" data-astro-cid-6ali6lcd></div> </div> </div> </div> </div><div class="v-row" data-astro-cid-6ali6lcd> <div class="v-container v-locale--is-ltr" data-astro-cid-6ali6lcd> <h4 data-astro-cid-6ali6lcd>Archivo:</h4><label class="v-label mb-2" data-astro-cid-6ali6lcd>
Nota: Seleccione el documento del proyecto.
</label><div class="v-input v-input--horizontal v-input--center-affix v-input--density-default v-locale--is-ltr v-file-input v-file-input--chips" data-astro-cid-6ali6lcd> <div class="v-input__prepend" data-astro-cid-6ali6lcd> <i class="mdi-paperclip mdi v-icon notranslate v-theme--light v-icon--size-default v-icon--clickable" role="button" aria-hidden="false" aria-label="Subir proyecto prepended action" data-astro-cid-6ali6lcd></i> </div><div class="v-input__control" data-astro-cid-6ali6lcd> <div class="v-field v-field--appended v-field--center-affix v-field--variant-outlined v-theme--light v-locale--is-ltr" prepend-icon="$file" data-astro-cid-6ali6lcd> <div class="v-field__overlay" data-astro-cid-6ali6lcd></div><div class="v-field__loader" data-astro-cid-6ali6lcd> <div class="v-progress-linear v-theme--light v-locale--is-ltr" role="progressbar" aria-hidden="true" aria-valuemin="0" aria-valuemax="100" style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);" data-astro-cid-6ali6lcd> <div class="v-progress-linear__background" style="width: 100%;" data-astro-cid-6ali6lcd></div><div class="v-progress-linear__indeterminate" data-astro-cid-6ali6lcd> <div class="v-progress-linear__indeterminate long" data-astro-cid-6ali6lcd></div><div class="v-progress-linear__indeterminate short" data-astro-cid-6ali6lcd></div> </div> </div> </div><div class="v-field__field" data-no-activator="" data-astro-cid-6ali6lcd> <label class="v-label v-field-label" for="input-34" data-astro-cid-6ali6lcd>Subir proyecto</label><input type="file" id="input-34" aria-describedby="input-34-messages" accept="application/pdf" data-astro-cid-6ali6lcd><div class="v-field__input" data-astro-cid-6ali6lcd></div> </div><div class="v-field__clearable" style="display: none;" data-astro-cid-6ali6lcd> <i class="mdi-close-circle mdi v-icon notranslate v-theme--light v-icon--size-default v-icon--clickable" role="button" aria-hidden="false" aria-label="Clear Subir proyecto" data-astro-cid-6ali6lcd></i> </div><div class="v-field__append-inner" data-astro-cid-6ali6lcd></div><div class="v-field__outline" data-astro-cid-6ali6lcd> <div class="v-field__outline__start" data-astro-cid-6ali6lcd></div><div class="v-field__outline__notch" data-astro-cid-6ali6lcd> <label class="v-label v-field-label v-field-label--floating" aria-hidden="true" for="input-34" data-astro-cid-6ali6lcd>Subir proyecto</label> </div><div class="v-field__outline__end" data-astro-cid-6ali6lcd></div> </div> </div> </div><div class="v-input__details" data-astro-cid-6ali6lcd> <div class="v-messages" role="alert" aria-live="polite" id="input-34-messages" data-astro-cid-6ali6lcd></div> </div> </div> </div> </div> </div><br data-astro-cid-6ali6lcd><button type="button" class="v-btn v-theme--light v-btn--density-default v-btn--size-default v-btn--variant-outlined" data-astro-cid-6ali6lcd><span class="v-btn__overlay" data-astro-cid-6ali6lcd></span><span class="v-btn__underlay" data-astro-cid-6ali6lcd></span><span class="v-btn__content" data-no-activator="" data-astro-cid-6ali6lcd>
Guardar Programa</span></button> </div></form> ` })} `;
}, "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/pages/registro-programas/index.astro", undefined);

const $$file = "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/pages/registro-programas/index.astro";
const $$url = "/registro-programas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
