import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
/* empty css                         */

function IdiomasSelect({
  selectedIdioma,
  onIdiomaChange,
  valueAndId,
  selected,
  selectedId
}) {
  const [idiomas, setIdioma] = useState([]);
  useEffect(() => {
    const fetchGrados = async () => {
      try {
        const response = await fetch("/api/idiomas/idiomas");
        if (response.ok) {
          const data = await response.json();
          setIdioma(data);
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
    "Idiomas:",
    /* @__PURE__ */ jsxs(
      "select",
      {
        name: valueAndId,
        id: valueAndId,
        value: selectedIdioma?.id || "",
        onChange: (e) => {
          const selectedId2 = parseInt(e.target.value, 10);
          const idioma = idiomas.find((m) => m.idIdioma === selectedId2);
          if (idioma) {
            onIdiomaChange({ id: idioma.idIdioma, name: idioma.idioma });
          }
        },
        children: [
          /* @__PURE__ */ jsx("option", { value: selectedId, selected: true, children: selected }),
          idiomas.map((idioma) => /* @__PURE__ */ jsx("option", { value: idioma.idIdioma, children: idioma.idioma }, idioma.idIdioma))
        ]
      }
    )
  ] });
}

const IdiomasManager = () => {
  const [docenteData, setDocenteData] = useState(null);
  const [newIdioma, setNewIdioma] = useState({
    idIdioma: "",
    idioma: "",
    // Agregar campo idioma
    escritura: 1,
    // Valor predeterminado (Bajo)
    oral: 1,
    // Valor predeterminado (Bajo)
    lectura: 1,
    // Valor predeterminado (Bajo)
    escucha: 1
    // Valor predeterminado (Bajo)
  });
  const [selectedIdioma, setSelectedIdioma] = useState(null);
  const [idDocente, setIdDocente] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  useEffect(() => {
    const fetchDocenteData = async () => {
      const docenteId = localStorage.getItem("idDocente");
      if (!docenteId) {
        alert("No se encontró el ID del docente en localStorage");
        return;
      }
      setIdDocente(docenteId);
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:4321/api/docentes/${docenteId}`
        );
        if (!response.ok) throw new Error("Error al obtener datos del docente");
        const data = await response.json();
        setDocenteData(data);
      } catch (error) {
        console.error("Error al cargar datos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDocenteData();
  }, []);
  const handleNewIdiomaChange = (e) => {
    const { name, value } = e.target;
    setNewIdioma({ ...newIdioma, [name]: parseInt(value) });
  };
  const handleEditIdiomaChange = (e) => {
    if (selectedIdioma) {
      const { name, value } = e.target;
      setSelectedIdioma({ ...selectedIdioma, [name]: parseInt(value) });
    }
  };
  const openAddModal = () => {
    setNewIdioma({
      idioma: "",
      // Agregar campo idioma
      idIdioma: "",
      escritura: 1,
      // Valor predeterminado (Bajo)
      oral: 1,
      // Valor predeterminado (Bajo)
      lectura: 1,
      // Valor predeterminado (Bajo)
      escucha: 1
      // Valor predeterminado (Bajo)
    });
    setShowAddModal(true);
  };
  const closeAddModal = () => {
    setShowAddModal(false);
  };
  const openEditModal = (idioma) => {
    setSelectedIdioma(idioma);
    setShowEditModal(true);
  };
  const closeEditModal = () => {
    setShowEditModal(false);
  };
  const handleAddIdioma = async () => {
    if (!idDocente) {
      alert("No se encontró el ID del docente");
      return;
    }
    try {
      const response = await fetch("/api/idiomasdoc/idiomasdocpost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          idDocente,
          idiomas: [newIdioma]
        })
      });
      if (!response.ok) throw new Error("Error al crear el idioma");
      alert("Idioma creado con éxito");
      setNewIdioma({
        idioma: "",
        // Agregar campo idioma
        idIdioma: "",
        escritura: 1,
        oral: 1,
        lectura: 1,
        escucha: 1
      });
      const updatedData = await response.json();
      setDocenteData(updatedData);
      closeAddModal();
    } catch (error) {
      console.error("Error al agregar idioma:", error);
    }
  };
  const handleUpdateIdioma = async () => {
    if (!idDocente || !selectedIdioma) {
      alert("No se encontró el ID del docente o el idioma seleccionado");
      return;
    }
    try {
      const response = await fetch("/api/idiomasdoc/idiomasdocput", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          idDocente,
          idiomas: [selectedIdioma]
        })
      });
      if (!response.ok) throw new Error("Error al actualizar el idioma");
      alert("Idioma actualizado con éxito");
      const updatedData = await response.json();
      setDocenteData(updatedData);
      closeEditModal();
    } catch (error) {
      console.error("Error al actualizar idioma:", error);
    }
  };
  const getLevelText = (level) => {
    const numLevel = Number(level);
    switch (numLevel) {
      case 3:
        return "Alto";
      case 2:
        return "Medio";
      case 1:
        return "Bajo";
      default:
        return "No especificado";
    }
  };
  if (loading) {
    return /* @__PURE__ */ jsx("p", { children: "Cargando datos..." });
  }
  return /* @__PURE__ */ jsxs("div", { className: "idiomas-manager", children: [
    /* @__PURE__ */ jsx("h1", { children: "Gestión de Idiomas" }),
    /* @__PURE__ */ jsx("button", { onClick: openAddModal, className: "button add-button", children: "Agregar Idioma" }),
    /* @__PURE__ */ jsx("div", { className: "idiomas-list", children: docenteData?.idiomas.map((idioma) => /* @__PURE__ */ jsxs("div", { className: "idioma-card", children: [
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Idioma:" }),
        " ",
        idioma.idioma
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Escritura:" }),
        " ",
        getLevelText(idioma.escritura)
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Oral:" }),
        " ",
        getLevelText(idioma.oral)
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Lectura:" }),
        " ",
        getLevelText(idioma.lectura)
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Escucha:" }),
        " ",
        getLevelText(idioma.escucha)
      ] }),
      /* @__PURE__ */ jsx("button", { onClick: () => openEditModal(idioma), className: "button edit-button", children: "Editar" })
    ] }, idioma.idIdiomaDocente)) }),
    showAddModal && /* @__PURE__ */ jsx("div", { className: "modal-overlay", children: /* @__PURE__ */ jsxs("div", { className: "modal", children: [
      /* @__PURE__ */ jsx("h2", { children: "Agregar Nuevo Idioma" }),
      /* @__PURE__ */ jsx(
        IdiomasSelect,
        {
          selectedIdioma: { id: parseInt(newIdioma.idIdioma), name: newIdioma.idioma },
          onIdiomaChange: (selected) => setNewIdioma({ ...newIdioma, idIdioma: selected.id.toString(), idioma: selected.name }),
          valueAndId: "idIdioma",
          selected: newIdioma.idioma,
          selectedId: parseInt(newIdioma.idIdioma)
        }
      ),
      ["escritura", "oral", "lectura", "escucha"].map((field) => /* @__PURE__ */ jsxs("div", { className: "checkbox-group", children: [
        /* @__PURE__ */ jsx("label", { children: field.charAt(0).toUpperCase() + field.slice(1) }),
        ["Alto", "Medio", "Bajo"].map((level, index) => /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "radio",
              name: field,
              value: 3 - index,
              checked: newIdioma[field] === 3 - index,
              onChange: handleNewIdiomaChange
            }
          ),
          /* @__PURE__ */ jsx("label", { children: level })
        ] }, index))
      ] }, field)),
      /* @__PURE__ */ jsx("button", { onClick: handleAddIdioma, children: "Agregar" }),
      /* @__PURE__ */ jsx("button", { onClick: closeAddModal, children: "Cerrar" })
    ] }) }),
    showEditModal && selectedIdioma && /* @__PURE__ */ jsx("div", { className: "modal-overlay", children: /* @__PURE__ */ jsxs("div", { className: "modal", children: [
      /* @__PURE__ */ jsx("h2", { children: "Editar Idioma" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          name: "idIdioma",
          placeholder: "ID Idioma",
          value: selectedIdioma.idIdioma,
          onChange: handleEditIdiomaChange,
          disabled: true
        }
      ),
      ["escritura", "oral", "lectura", "escucha"].map((field) => /* @__PURE__ */ jsxs("div", { className: "checkbox-group", children: [
        /* @__PURE__ */ jsx("label", { children: field.charAt(0).toUpperCase() + field.slice(1) }),
        ["Alto", "Medio", "Bajo"].map((level, index) => /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "radio",
              name: field,
              value: 3 - index,
              checked: selectedIdioma[field] === 3 - index,
              onChange: handleEditIdiomaChange
            }
          ),
          /* @__PURE__ */ jsx("label", { children: level })
        ] }, index))
      ] }, field)),
      /* @__PURE__ */ jsx("button", { onClick: handleUpdateIdioma, children: "Actualizar" }),
      /* @__PURE__ */ jsx("button", { onClick: closeEditModal, children: "Cerrar" })
    ] }) })
  ] });
};

export { IdiomasManager as default };
