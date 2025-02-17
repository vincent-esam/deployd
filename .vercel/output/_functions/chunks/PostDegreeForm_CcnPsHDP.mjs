import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
/* empty css                         */
import { C as CountrySelect } from './CountrySelect_B7mIVeYP.mjs';
import { G as GradosSelect, M as ModalidadesSelect } from './GradosSelect_rk6_XOt7.mjs';

function TypesSelect({
  selectedTypes,
  onTypesChange,
  valueAndId
}) {
  const [tipos, setTipos] = useState([]);
  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const response = await fetch("/api/tipoe/tipoe");
        if (response.ok) {
          const data = await response.json();
          const pregrado = data.filter((tipo) => tipo.idTipoEstudio === 1);
          const posgrado = data.filter((tipo) => tipo.idTipoEstudio === 2);
          setTipos([...pregrado, ...posgrado]);
        } else {
          console.error("Error al obtener los Tipos de estudios");
        }
      } catch (error) {
        console.error("Error al consumir la API:", error);
      }
    };
    fetchTypes();
  }, []);
  return /* @__PURE__ */ jsxs("label", { children: [
    "Tipo de estudio:",
    /* @__PURE__ */ jsxs(
      "select",
      {
        name: valueAndId,
        id: valueAndId,
        value: selectedTypes.id || "",
        onChange: (e) => {
          const selectedId = parseInt(e.target.value, 10);
          const selectedType = tipos.find((tipo) => tipo.idTipoEstudio === selectedId);
          if (selectedType) {
            onTypesChange({ id: selectedType.idTipoEstudio, name: selectedType.tipo });
          }
        },
        children: [
          /* @__PURE__ */ jsx("option", { value: "", disabled: true, children: "Selecciona un tipo de estudio" }),
          tipos.map((tipo) => /* @__PURE__ */ jsx("option", { value: tipo.idTipoEstudio, children: tipo.tipo }, tipo.idTipoEstudio))
        ]
      }
    )
  ] });
}

const FormularioDocente = () => {
  const [docenteData, setDocenteData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [selectedEstudio, setSelectedEstudio] = useState(null);
  useEffect(() => {
    const fetchDocenteData = async () => {
      const docenteId = localStorage.getItem("idDocente");
      if (!docenteId) {
        console.error("No se encontró el idDocente en el localStorage.");
        return;
      }
      try {
        const response = await fetch(`http://localhost:4321/api/docentes/${docenteId}`);
        if (!response.ok) {
          throw new Error("Error al obtener datos del docente");
        }
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
  if (loading) {
    return /* @__PURE__ */ jsx("p", { children: "Cargando datos..." });
  }
  if (!docenteData) {
    return /* @__PURE__ */ jsx("p", { children: "Error: No se pudieron cargar los datos del docente." });
  }
  const { idDocente, estudiossuperiores } = docenteData;
  const handleChange = (e, field) => {
    if (selectedEstudio) {
      setSelectedEstudio({
        ...selectedEstudio,
        [field]: e.target.value
      });
    }
  };
  const handleSave = async () => {
    if (!selectedEstudio) return;
    try {
      if (selectedEstudio.idEstudio === null) {
        const response = await fetch(`/api/estudiossuppost`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            idDocente,
            // Incluimos el ID del docente
            estudiossuperiores: [
              {
                universidad: selectedEstudio.universidad,
                carrera: selectedEstudio.carrera,
                fecha: selectedEstudio.fecha,
                nombre: selectedEstudio.nombre,
                idPais: Number(selectedEstudio.idPais),
                idGrado: Number(selectedEstudio.idGrado),
                idModalidad: Number(selectedEstudio.idModalidad),
                idTipoEstudio: Number(selectedEstudio.idTipoEstudios)
              }
            ]
          })
        });
        if (!response.ok) {
          throw new Error("Error al crear el estudio");
        }
        const result = await response.json();
        setMessage(result.message || "Estudio creado correctamente");
        setDocenteData(
          (prevData) => prevData ? {
            ...prevData,
            estudiossuperiores: prevData.estudiossuperiores.map(
              (e) => e === selectedEstudio ? { ...selectedEstudio, idEstudio: result.idEstudio } : e
            )
          } : null
        );
      } else {
        const response = await fetch(`/api/estudiossup`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            idDocente,
            idEstudioSuperior: selectedEstudio.idEstudio,
            updateFields: {
              universidad: selectedEstudio.universidad,
              carrera: selectedEstudio.carrera,
              fecha: selectedEstudio.fecha,
              nombre: selectedEstudio.nombre,
              idPais: selectedEstudio.idPais,
              idGrado: selectedEstudio.idGrado,
              idModalidad: selectedEstudio.idModalidad,
              idTipoEstudio: selectedEstudio.idTipoEstudios
            }
          })
        });
        if (!response.ok) {
          throw new Error("Error al actualizar el estudio");
        }
        const result = await response.json();
        setMessage(result.message || "Estudio actualizado correctamente");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error al guardar el estudio");
    } finally {
      setSelectedEstudio(null);
    }
  };
  const handleCreate = () => {
    const nuevoEstudio = {
      idEstudio: null,
      // null indica que es un nuevo registro no guardado en la base de datos
      universidad: "",
      carrera: "",
      fecha: "",
      nombre: "",
      idPais: 0,
      pais: "",
      idGrado: 0,
      gradoTipo: "",
      idModalidad: 0,
      modalidad: "",
      idTipoEstudios: 0,
      tipoEstudios: ""
    };
    setSelectedEstudio(nuevoEstudio);
  };
  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };
  return /* @__PURE__ */ jsxs("div", { className: "postdegreeform-container", children: [
    /* @__PURE__ */ jsx("h3", { className: "form-title", children: "Información del Docente" }),
    estudiossuperiores.length > 3 && /* @__PURE__ */ jsx("button", { className: "toggle-button1", onClick: toggleShowAll, children: showAll ? "Mostrar menos" : "Mostrar más" }),
    /* @__PURE__ */ jsx("button", { className: "create-button1", onClick: handleCreate, children: "Crear Nuevo Estudio" }),
    /* @__PURE__ */ jsxs("p", { hidden: true, children: [
      "ID Docente: ",
      idDocente
    ] }),
    estudiossuperiores.filter((estudio) => estudio !== null).length === 0 ? /* @__PURE__ */ jsx("p", { children: "No hay estudios para mostrar. Por favor, crea uno nuevo." }) : estudiossuperiores.filter((estudio) => estudio !== null).slice(0, showAll ? estudiossuperiores.length : 2).map((estudio, index) => /* @__PURE__ */ jsxs("div", { className: "study-card", children: [
      /* @__PURE__ */ jsxs("h4", { className: `study-title ${estudio.idEstudio ? "hidden" : ""}`, children: [
        "Estudio Superior #",
        estudio.idEstudio || "Nuevo"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "study-fields", children: [
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Universidad:" }),
          " ",
          estudio.universidad
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Carrera:" }),
          " ",
          estudio.carrera
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Fecha:" }),
          " ",
          estudio.fecha
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Nombre:" }),
          " ",
          estudio.nombre
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("strong", { children: "País:" }),
          " ",
          estudio.pais
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Grado:" }),
          " ",
          estudio.gradoTipo
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Modalidad:" }),
          " ",
          estudio.modalidad
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Tipo de Estudios:" }),
          " ",
          estudio.tipoEstudios
        ] })
      ] }),
      /* @__PURE__ */ jsx("button", { className: "edit-button2", onClick: () => setSelectedEstudio(estudio), children: "Editar" })
    ] }, index)),
    message && /* @__PURE__ */ jsx("p", { className: "message-text", children: message }),
    selectedEstudio && /* @__PURE__ */ jsx("div", { className: "modal", children: /* @__PURE__ */ jsxs("div", { className: "modal-content", children: [
      /* @__PURE__ */ jsx("div", { className: "modal-title", children: /* @__PURE__ */ jsx("h4", { children: "Editar Estudio" }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { children: "Universidad:" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            className: "custom-input",
            type: "text",
            value: selectedEstudio.universidad,
            onChange: (e) => handleChange(e, "universidad")
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { children: "Carrera:" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            className: "custom-input",
            type: "text",
            value: selectedEstudio.carrera,
            onChange: (e) => handleChange(e, "carrera")
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { children: "Fecha:" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            className: "custom-input",
            type: "date",
            value: selectedEstudio.fecha,
            onChange: (e) => handleChange(e, "fecha")
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { children: "Nombre:" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            className: "custom-input",
            type: "text",
            value: selectedEstudio.nombre,
            onChange: (e) => handleChange(e, "nombre")
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        CountrySelect,
        {
          valueAndId: "idPais",
          selectedId: selectedEstudio.idPais,
          selected: selectedEstudio.pais,
          selectedCountry: {
            id: selectedEstudio.idPais,
            name: selectedEstudio.pais
          },
          onCountryChange: (selectedCountry) => {
            setSelectedEstudio(
              (prev) => prev ? {
                ...prev,
                idPais: selectedCountry.id,
                pais: selectedCountry.name
              } : null
            );
          }
        }
      ) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        GradosSelect,
        {
          valueAndId: "idGrado",
          selectedId: selectedEstudio.idGrado,
          selected: selectedEstudio.gradoTipo,
          selectedGrado: {
            id: selectedEstudio.idGrado,
            name: selectedEstudio.gradoTipo
          },
          onGradoChange: (selectedGrado) => {
            setSelectedEstudio(
              (prev) => prev ? {
                ...prev,
                idGrado: selectedGrado.id,
                gradoTipo: selectedGrado.name
              } : null
            );
          }
        }
      ) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        ModalidadesSelect,
        {
          valueAndId: "idModalidad",
          selectedId: selectedEstudio.idModalidad,
          selected: selectedEstudio.modalidad,
          selectedModalidad: {
            id: selectedEstudio.idModalidad,
            name: selectedEstudio.modalidad
          },
          onModalidadChange: (selectedModalidad) => {
            setSelectedEstudio(
              (prev) => prev ? {
                ...prev,
                idModalidad: selectedModalidad.id,
                modalidad: selectedModalidad.name
              } : null
            );
          }
        }
      ) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        TypesSelect,
        {
          valueAndId: "idTipoEstudio",
          selectedTypes: {
            id: selectedEstudio.idTipoEstudios,
            name: selectedEstudio.tipoEstudios
          },
          onTypesChange: (selectedType) => {
            setSelectedEstudio(
              (prev) => prev ? {
                ...prev,
                idTipoEstudios: selectedType.id,
                tipoEstudios: selectedType.name
              } : null
            );
          }
        }
      ) }),
      /* @__PURE__ */ jsx("button", { className: "save-button", onClick: handleSave, children: "Guardar" }),
      /* @__PURE__ */ jsx("button", { className: "cancel-button", onClick: () => setSelectedEstudio(null), children: "Cancelar" })
    ] }) })
  ] });
};

export { FormularioDocente as default };
