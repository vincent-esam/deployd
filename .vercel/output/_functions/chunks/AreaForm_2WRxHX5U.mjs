import { jsxs, jsx } from 'react/jsx-runtime';

const infoPaises = [
  {
    id: 1,
    pais: "Bolivia",
    codigo: "591",
  },
  {
    id: 2,
    pais: "Chile",
    codigo: "56",
  },
  {
    id: 3,
    pais: "Argentina",
    codigo: "54",
  },
  {
    id: 4,
    pais: "Colombia",
    codigo: "57",
  },
  {
    id: 5,
    pais: "Ecuador",
    codigo: "593",
  },
  {
    id: 6,
    pais: "Peru",
    codigo: "51",
  },

  {
    id: 7,
    pais: "Brasil",
    codigo: "55",
  },
  {
    id: 8,
    pais: "Cuba",
    codigo: "53",
  },
];

const CountriesFormSelect = ({
  onChange,
  valueAndId
}) => {
  return /* @__PURE__ */ jsxs(
    "select",
    {
      name: valueAndId,
      id: valueAndId,
      required: true,
      className: "country-item form-control",
      onChange,
      children: [
        /* @__PURE__ */ jsx("option", { value: "", children: "País" }),
        infoPaises.map((pais) => /* @__PURE__ */ jsx("option", { value: pais.id, children: pais.pais }, pais.id))
      ]
    }
  );
};

const infoAreas = [
  {
    id: 1,
    categoria: "Ciencias Empresariales",
  },
  {
    id: 2,
    categoria: "Ingeniería",
  },
  {
    id: 3,
    categoria: "Salud",
  },
  {
    id: 4,
    categoria: "Legal",
  },
  {
    id: 5,
    categoria: "Social",
  },
];

const infoSectores = [
  {
    id: 1,
    sector: "Salud y bienestar",
  },
  {
    id: 2,
    sector: "Tecnología",
  },
  {
    id: 3,
    sector: "Economía",
  },
  {
    id: 4,
    sector: "Social",
  },
  {
    id: 5,
    sector: "Educación",
  },
  {
    id: 6,
    sector: "Deportes",
  },
  {
    id: 7,
    sector: "Arte y cultura",
  },
  {
    id: 8,
    sector: "Startups e innovación",
  },
  {
    id: 9,
    sector: "Marketing y publicidad",
  },
  {
    id: 10,
    sector: "Agrario",
  },
];

const AreaForm = ({
  onChange,
  selectedArea,
  selectedSector
}) => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "form-group form-select-sm col-md-6 col-sm-12", children: [
      /* @__PURE__ */ jsxs(
        "select",
        {
          className: "country-item form-control",
          required: true,
          name: "idAreaInteres",
          id: "idAreaInteres",
          value: selectedArea,
          onChange,
          children: [
            /* @__PURE__ */ jsx("option", { value: "", children: "Área" }),
            infoAreas.map((area) => /* @__PURE__ */ jsx("option", { value: area.id, children: area.categoria }, area.id))
          ]
        }
      ),
      /* @__PURE__ */ jsx("span", { className: "error-text" }),
      /* @__PURE__ */ jsx("i", { className: "error-icon" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "form-group form-select-sm col-md-6 col-sm-12", children: [
      /* @__PURE__ */ jsxs(
        "select",
        {
          className: "country-item form-control",
          required: true,
          name: "idSector",
          id: "idSector",
          value: selectedSector,
          onChange,
          children: [
            /* @__PURE__ */ jsx("option", { value: "", children: "Sector" }),
            infoSectores.map((sector) => /* @__PURE__ */ jsx("option", { value: sector.id, children: sector.sector }, sector.id))
          ]
        }
      ),
      /* @__PURE__ */ jsx("span", { className: "error-text" }),
      /* @__PURE__ */ jsx("i", { className: "error-icon" })
    ] })
  ] });
};

export { AreaForm as A, CountriesFormSelect as C, infoPaises as i };
