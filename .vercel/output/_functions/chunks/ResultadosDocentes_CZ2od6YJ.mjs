import { jsxs, jsx } from 'react/jsx-runtime';
import 'react';
/* empty css                         */

const ResultadosDocentes = ({
  idDocente,
  nombres,
  correo,
  numeroDocumento,
  telefono
}) => {
  return /* @__PURE__ */ jsxs("div", { className: "v-card v-theme--light v-card--density-default v-card--variant-elevated mb-4", children: [
    /* @__PURE__ */ jsx("div", { className: "v-card__loader", children: /* @__PURE__ */ jsxs(
      "div",
      {
        className: "v-progress-linear v-theme--light v-locale--is-ltr",
        role: "progressbar",
        "aria-hidden": "true",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
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
    /* @__PURE__ */ jsxs("div", { className: "result-item", children: [
      /* @__PURE__ */ jsxs("div", { className: "v-card-content", children: [
        /* @__PURE__ */ jsx("div", { className: "v-card-title sub-title", children: nombres }),
        /* @__PURE__ */ jsxs("div", { className: "v-card-subtitle", children: [
          /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Correo:" }),
            " ",
            correo
          ] }),
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("strong", { children: "CI:" }),
            " ",
            numeroDocumento
          ] }),
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Teléfono:" }),
            " ",
            telefono
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "v-card-actions", children: /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          className: "v-btn v-btn--slim v-theme--light v-btn--density-default v-btn--size-default v-btn--variant-text button-card",
          children: [
            /* @__PURE__ */ jsx("span", { className: "v-btn__overlay" }),
            /* @__PURE__ */ jsx("span", { className: "v-btn__underlay" }),
            /* @__PURE__ */ jsx("a", { href: `/postulantes/info/${idDocente}`, children: "ABRIR" })
          ]
        }
      ) })
    ] })
  ] });
};

export { ResultadosDocentes as R };
