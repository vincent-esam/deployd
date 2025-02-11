import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';

function CountrySelect({
  selectedCountry,
  onCountryChange,
  valueAndId,
  selected,
  selectedId
}) {
  const [paises, setPaises] = useState([]);
  useEffect(() => {
    const fetchPaises = async () => {
      try {
        const response = await fetch("/api/paises/paises");
        if (response.ok) {
          const data = await response.json();
          setPaises(data);
        } else {
          console.error("Error al obtener los países");
        }
      } catch (error) {
        console.error("Error al consumir la API:", error);
      }
    };
    fetchPaises();
  }, []);
  return /* @__PURE__ */ jsxs("label", { children: [
    "País:",
    /* @__PURE__ */ jsxs(
      "select",
      {
        name: valueAndId,
        id: valueAndId,
        value: selectedCountry?.id || "",
        onChange: (e) => {
          const selectedId2 = parseInt(e.target.value, 10);
          const country = paises.find((p) => p.idPais === selectedId2);
          if (country) {
            onCountryChange({ id: country.idPais, name: country.nombre });
          }
        },
        children: [
          /* @__PURE__ */ jsx("option", { value: selectedId, selected: true, children: selected }),
          paises.map((pais) => /* @__PURE__ */ jsx("option", { value: pais.idPais, children: pais.nombre }, pais.idPais))
        ]
      }
    )
  ] });
}

export { CountrySelect as C };
