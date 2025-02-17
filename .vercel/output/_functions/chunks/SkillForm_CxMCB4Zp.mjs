import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
/* empty css                         */

const HabilidadesBlandasManager = () => {
  const [idDocente, setIdDocente] = useState(null);
  const [habilidadesBlandas, setHabilidadesBlandas] = useState([]);
  const [editingHabilidad, setEditingHabilidad] = useState(null);
  const [newHabilidades, setNewHabilidades] = useState([]);
  const [modalType, setModalType] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchDocenteData = async () => {
      const docenteId = localStorage.getItem("idDocente");
      if (!docenteId) {
        alert("No se encontró el ID del docente en localStorage");
        return;
      }
      setIdDocente(Number(docenteId));
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:4321/api/docentes/${docenteId}`);
        if (!response.ok) throw new Error("Error al obtener datos del docente");
        const data = await response.json();
        setHabilidadesBlandas(data.habilidades_blandas || []);
      } catch (error) {
        console.error("Error al obtener las habilidades blandas:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDocenteData();
  }, []);
  const handleEdit = (habilidad) => {
    setEditingHabilidad(habilidad);
    setModalType("edit");
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!idDocente || !editingHabilidad) return;
    try {
      const response = await fetch(`/api/skill/skillput`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          idDocente,
          habilidadesBlandas: [editingHabilidad]
        })
      });
      if (!response.ok) throw new Error("Error al actualizar la habilidad");
      setHabilidadesBlandas(
        (prev) => prev.map(
          (h) => h && h.idHabilidadBlanda === editingHabilidad.idHabilidadBlanda ? { ...h, habilidad: editingHabilidad.habilidad } : h
        )
      );
      setModalType(null);
      alert("Habilidad actualizada correctamente");
    } catch (error) {
      console.error("Error al actualizar la habilidad:", error);
    }
  };
  const handleAddNewHabilidad = async (e) => {
    e.preventDefault();
    if (!idDocente || newHabilidades.length === 0) {
      alert("Debe agregar al menos una habilidad válida.");
      return;
    }
    try {
      const response = await fetch(`/api/skill/skillpost`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          idDocente,
          habilidadesBlandas: newHabilidades
        })
      });
      if (!response.ok) throw new Error("Error al agregar la nueva habilidad");
      const newHabilidadesIds = await response.json();
      const newSkills = newHabilidades.map((habilidad, index) => ({
        idHabilidadBlanda: newHabilidadesIds[index],
        habilidad
      }));
      setHabilidadesBlandas((prev) => [...prev, ...newSkills]);
      setNewHabilidades([]);
      setModalType(null);
      alert("Habilidades agregadas correctamente");
    } catch (error) {
      console.error("Error al agregar habilidades:", error);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "habilidades-manager", children: [
    /* @__PURE__ */ jsx("h1", { children: "Gestión de Habilidades Blandas" }),
    loading ? /* @__PURE__ */ jsx("p", { children: "Cargando..." }) : /* @__PURE__ */ jsx("div", { className: "habilidades-container", children: habilidadesBlandas.filter((h) => h !== null).map((habilidad) => /* @__PURE__ */ jsxs("div", { className: "habilidad-card", children: [
      /* @__PURE__ */ jsx("p", { children: habilidad.habilidad }),
      /* @__PURE__ */ jsx("button", { className: "edit-btn", onClick: () => handleEdit(habilidad), children: "Editar" })
    ] }, habilidad.idHabilidadBlanda)) }),
    /* @__PURE__ */ jsx("button", { className: "add-btn", onClick: () => setModalType("add"), children: "Agregar Habilidades" }),
    modalType === "edit" && editingHabilidad && /* @__PURE__ */ jsx("div", { className: "modal", children: /* @__PURE__ */ jsxs("div", { className: "modal-content", children: [
      /* @__PURE__ */ jsx("h2", { children: "Editar Habilidad" }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleUpdate, children: [
        /* @__PURE__ */ jsxs("label", { children: [
          "Habilidad:",
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              value: editingHabilidad.habilidad,
              onChange: (e) => setEditingHabilidad({ ...editingHabilidad, habilidad: e.target.value })
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "modal-actions", children: [
          /* @__PURE__ */ jsx("button", { type: "submit", children: "Guardar" }),
          /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setModalType(null), children: "Cancelar" })
        ] })
      ] })
    ] }) }),
    modalType === "add" && /* @__PURE__ */ jsx("div", { className: "modal", children: /* @__PURE__ */ jsxs("div", { className: "modal-content", children: [
      /* @__PURE__ */ jsx("h2", { children: "Agregar Habilidades" }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleAddNewHabilidad, children: [
        newHabilidades.map((habilidad, index) => /* @__PURE__ */ jsxs("div", { className: "new-habilidad", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              value: habilidad,
              onChange: (e) => {
                const updatedHabilidades = [...newHabilidades];
                updatedHabilidades[index] = e.target.value;
                setNewHabilidades(updatedHabilidades);
              }
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => {
                const updatedHabilidades = newHabilidades.filter((_, i) => i !== index);
                setNewHabilidades(updatedHabilidades);
              },
              children: "Eliminar"
            }
          )
        ] }, index)),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => setNewHabilidades([...newHabilidades, ""]),
            children: "Agregar Más"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "modal-actions", children: [
          /* @__PURE__ */ jsx("button", { type: "submit", children: "Guardar" }),
          /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setModalType(null), children: "Cancelar" })
        ] })
      ] })
    ] }) })
  ] });
};

export { HabilidadesBlandasManager as default };
