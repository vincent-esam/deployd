import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';

function ModalidadesSelect({
  selectedModalidad,
  onModalidadChange,
  valueAndId,
  selected,
  selectedId
}) {
  const [modalidades, setModalidades] = useState([]);
  useEffect(() => {
    const fetchModalidades = async () => {
      try {
        const response = await fetch("/api/modalidades/modalidades");
        if (response.ok) {
          const data = await response.json();
          setModalidades(data);
        } else {
          console.error("Error al obtener las modalidades");
        }
      } catch (error) {
        console.error("Error al consumir la API:", error);
      }
    };
    fetchModalidades();
  }, []);
  return /* @__PURE__ */ jsxs("label", { children: [
    "Modalidad:",
    /* @__PURE__ */ jsxs(
      "select",
      {
        name: valueAndId,
        id: valueAndId,
        value: selectedModalidad?.id || "",
        onChange: (e) => {
          const selectedId2 = parseInt(e.target.value, 10);
          const modalidad = modalidades.find((m) => m.idModalidad === selectedId2);
          if (modalidad) {
            onModalidadChange({ id: modalidad.idModalidad, name: modalidad.tipo });
          }
        },
        children: [
          /* @__PURE__ */ jsx("option", { value: selectedId, selected: true, children: selected }),
          modalidades.map((modalidad) => /* @__PURE__ */ jsx("option", { value: modalidad.idModalidad, children: modalidad.tipo }, modalidad.idModalidad))
        ]
      }
    )
  ] });
}

function GradosSelect({
  selectedGrado,
  onGradoChange,
  valueAndId,
  selected,
  selectedId
}) {
  const [grados, setGrado] = useState([]);
  useEffect(() => {
    const fetchGrados = async () => {
      try {
        const response = await fetch("/api/grados/grados");
        if (response.ok) {
          const data = await response.json();
          setGrado(data);
        } else {
          console.error("Error al obtener los grados");
        }
      } catch (error) {
        console.error("Error al consumir la API:", error);
      }
    };
    fetchGrados();
  }, []);
  return /* @__PURE__ */ jsxs("label", { children: [
    "Grado:",
    /* @__PURE__ */ jsxs(
      "select",
      {
        name: valueAndId,
        id: valueAndId,
        value: selectedGrado?.id || "",
        onChange: (e) => {
          const selectedId2 = parseInt(e.target.value, 10);
          const grado = grados.find((m) => m.idGrado === selectedId2);
          if (grado) {
            onGradoChange({ id: grado.idGrado, name: grado.tipo });
          }
        },
        children: [
          /* @__PURE__ */ jsx("option", { value: selectedId, selected: true, children: selected }),
          grados.map((grado) => /* @__PURE__ */ jsx("option", { value: grado.idGrado, children: grado.tipo }, grado.idGrado))
        ]
      }
    )
  ] });
}

export { GradosSelect as G, ModalidadesSelect as M };
