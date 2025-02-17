import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
/* empty css                         */

const ExperienciaDocenteManager = () => {
  const [idDocente, setIdDocente] = useState(null);
  const [experienciasDocente, setExperienciasDocente] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newExperiencia, setNewExperiencia] = useState({
    idExperiencia: 0,
    materia: "",
    calidad: "",
    universidad: "",
    concluidoEl: ""
  });
  const [editingExperiencia, setEditingExperiencia] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);
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
        console.log("Datos recibidos de la API:", data);
        if (data.experienciasdocentes && Array.isArray(data.experienciasdocentes)) {
          setExperienciasDocente(data.experienciasdocentes);
        } else {
          console.error("Formato de datos incorrecto:", data);
          alert("No se encontraron experiencias docentes o el formato es incorrecto.");
        }
      } catch (error) {
        console.error("Error al cargar datos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDocenteData();
  }, []);
  const handleSaveInfo = async () => {
    if (idDocente === null) {
      alert("ID del docente no encontrado");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("/api/expdoc/expdocpost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          idDocente,
          experienciasDocente: [newExperiencia]
        })
      });
      if (response.ok) {
        const updatedData = await response.json();
        setExperienciasDocente(updatedData.experienciasDocente);
        alert("Nueva experiencia docente agregada con éxito");
        setNewExperiencia({
          idExperiencia: 0,
          materia: "",
          calidad: "",
          universidad: "",
          concluidoEl: ""
        });
        setIsModalOpen(false);
      } else {
        const errorData = await response.json();
        console.error("Error del servidor:", errorData);
        alert("Hubo un error al agregar la experiencia docente");
      }
    } catch (error) {
      console.error("Error en el cliente:", error);
      alert("Hubo un error al agregar la experiencia docente");
    } finally {
      setLoading(false);
    }
  };
  const handleUpdateInfo = async () => {
    if (idDocente === null || editingExperiencia === null) {
      alert("No se puede actualizar la experiencia docente");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("/api/expdoc/expdocput", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          idDocente,
          experienciasDocente: [
            {
              idExperienciaDocente: editingExperiencia.idExperiencia,
              materia: editingExperiencia.materia,
              calidad: editingExperiencia.calidad,
              universidad: editingExperiencia.universidad,
              concluidoEl: editingExperiencia.concluidoEl
            }
          ]
        })
      });
      if (response.ok) {
        const updatedData = await response.json();
        setExperienciasDocente(updatedData.experienciasDocente);
        alert("Experiencia docente actualizada con éxito");
        setEditingExperiencia(null);
        setIsModalOpen(false);
      } else {
        const errorData = await response.json();
        console.error("Error del servidor:", errorData);
        alert("Hubo un error al actualizar la experiencia docente");
      }
    } catch (error) {
      console.error("Error en el cliente:", error);
      alert("Hubo un error al actualizar la experiencia docente");
    } finally {
      setLoading(false);
    }
  };
  const handleOpenModal = (exp) => {
    if (exp) {
      setEditingExperiencia(exp);
      setIsEditModal(true);
    } else {
      setIsEditModal(false);
      setNewExperiencia({
        idExperiencia: 0,
        materia: "",
        calidad: "",
        universidad: "",
        concluidoEl: ""
      });
    }
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingExperiencia(null);
  };
  return /* @__PURE__ */ jsxs("div", { className: "experiencia-docente-container", children: [
    /* @__PURE__ */ jsx("h1", { className: "experiencia-docente-title", children: "Gestión de Experiencia Docente" }),
    loading && /* @__PURE__ */ jsx("p", { className: "experiencia-docente-loading", children: "Cargando..." }),
    /* @__PURE__ */ jsx("h2", { className: "experiencia-docente-subtitle", children: "Experiencias actuales" }),
    experienciasDocente.filter((exp) => exp !== null).length > 0 ? /* @__PURE__ */ jsx("ul", { className: "experiencia-docente-list", children: experienciasDocente.filter((exp) => exp !== null).map((exp, index) => (
      // Como ya filtramos, 'exp' ya es no nulo
      /* @__PURE__ */ jsxs("li", { className: "experiencia-docente-item", children: [
        /* @__PURE__ */ jsx("strong", { children: "Materia:" }),
        " ",
        exp.materia,
        ", ",
        /* @__PURE__ */ jsx("strong", { children: "Calidad:" }),
        " ",
        exp.calidad,
        ",",
        " ",
        /* @__PURE__ */ jsx("strong", { children: "Universidad:" }),
        " ",
        exp.universidad,
        ", ",
        /* @__PURE__ */ jsx("strong", { children: "Concluido el:" }),
        " ",
        new Date(exp.concluidoEl).toLocaleDateString(),
        " ",
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "experiencia-docente-button editar-button",
            onClick: () => handleOpenModal(exp),
            children: "Editar"
          }
        )
      ] }, exp.idExperiencia)
    )) }) : /* @__PURE__ */ jsx("p", { className: "experiencia-docente-empty", children: "No hay experiencias docentes registradas." }),
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "experiencia-docente-button agregar-button",
        onClick: () => handleOpenModal(),
        children: "Agregar nueva experiencia"
      }
    ),
    isModalOpen && /* @__PURE__ */ jsx("div", { className: "modal", children: /* @__PURE__ */ jsxs("div", { className: "modal-content", children: [
      /* @__PURE__ */ jsx("h2", { className: "modal-title", children: isEditModal ? "Editar experiencia docente" : "Agregar nueva experiencia docente" }),
      /* @__PURE__ */ jsxs(
        "form",
        {
          className: "experiencia-docente-form",
          onSubmit: (e) => {
            e.preventDefault();
            isEditModal ? handleUpdateInfo() : handleSaveInfo();
          },
          children: [
            /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
              /* @__PURE__ */ jsx("label", { className: "form-label", children: "Materia:" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  className: "form-input",
                  type: "text",
                  value: isEditModal ? editingExperiencia?.materia : newExperiencia.materia,
                  onChange: (e) => {
                    const value = e.target.value;
                    isEditModal ? setEditingExperiencia((prev) => prev && { ...prev, materia: value }) : setNewExperiencia((prev) => ({ ...prev, materia: value }));
                  },
                  required: true
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
              /* @__PURE__ */ jsx("label", { className: "form-label", children: "Calidad:" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  className: "form-input",
                  type: "text",
                  value: isEditModal ? editingExperiencia?.calidad : newExperiencia.calidad,
                  onChange: (e) => {
                    const value = e.target.value;
                    isEditModal ? setEditingExperiencia((prev) => prev && { ...prev, calidad: value }) : setNewExperiencia((prev) => ({ ...prev, calidad: value }));
                  },
                  required: true
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
              /* @__PURE__ */ jsx("label", { className: "form-label", children: "Universidad:" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  className: "form-input",
                  type: "text",
                  value: isEditModal ? editingExperiencia?.universidad : newExperiencia.universidad,
                  onChange: (e) => {
                    const value = e.target.value;
                    isEditModal ? setEditingExperiencia((prev) => prev && { ...prev, universidad: value }) : setNewExperiencia((prev) => ({ ...prev, universidad: value }));
                  },
                  required: true
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
              /* @__PURE__ */ jsx("label", { className: "form-label", children: "Fecha de conclusión:" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  className: "form-input",
                  type: "date",
                  value: isEditModal ? editingExperiencia?.concluidoEl : newExperiencia.concluidoEl,
                  onChange: (e) => {
                    const value = e.target.value;
                    isEditModal ? setEditingExperiencia((prev) => prev && { ...prev, concluidoEl: value }) : setNewExperiencia((prev) => ({ ...prev, concluidoEl: value }));
                  },
                  required: true
                }
              )
            ] }),
            /* @__PURE__ */ jsx("button", { className: "experiencia-docente-button guardar-button", type: "submit", children: isEditModal ? "Actualizar" : "Guardar" }),
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "experiencia-docente-button cancelar-button",
                type: "button",
                onClick: handleCloseModal,
                children: "Cancelar"
              }
            )
          ]
        }
      )
    ] }) })
  ] });
};

export { ExperienciaDocenteManager as default };
