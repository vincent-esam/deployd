import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
/* empty css                          */
import { C as CountrySelect } from './CountrySelect_B7mIVeYP.mjs';

const ProduccionesIntelectualesManager = () => {
  const [idDocente, setIdDocente] = useState(null);
  const [producciones, setProducciones] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newProduccion, setNewProduccion] = useState({
    nombre: "",
    enlaceEditorial: "",
    idTipoPublicacion: 0,
    idPais: 0,
    pais: "",
    fecha: ""
  });
  const [editingProduccion, setEditingProduccion] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
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
        setProducciones(data.publicacionesintelectuales || []);
      } catch (error) {
        console.error("Error al cargar datos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDocenteData();
  }, []);
  const openEditModal = (produccion) => {
    setEditingProduccion(produccion);
    setIsModalOpen(true);
  };
  const closeModals = () => {
    setIsModalOpen(false);
    setIsCreateModalOpen(false);
    setEditingProduccion(null);
  };
  const handleEdit = async () => {
    if (!idDocente || !editingProduccion) return;
    const body = JSON.stringify({
      idDocente,
      produccionesIntelectuales: [editingProduccion]
    });
    try {
      const response = await fetch(`/api/prodintelectual/prodintelput`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body
      });
      if (!response.ok) throw new Error("Error al actualizar producción intelectual");
      alert("Producción intelectual actualizada correctamente");
      setProducciones(
        (prev) => prev.map(
          (prod) => prod && prod.idProduccionIntelectual === editingProduccion.idProduccionIntelectual ? editingProduccion : prod
        )
      );
      closeModals();
    } catch (error) {
      console.error("Error en la actualización:", error);
    }
  };
  const handleCreate = async () => {
    if (!idDocente) return;
    const body = JSON.stringify({
      idDocente,
      produccionesIntelectuales: [newProduccion]
    });
    try {
      const response = await fetch(`/api/prodintelectual/prodintelpost`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body
      });
      if (!response.ok) throw new Error("Error al crear nueva producción intelectual");
      const createdData = await response.json();
      alert("Nueva producción intelectual creada");
      setProducciones([...producciones, createdData.publicacionesintelectuales[0]]);
      closeModals();
    } catch (error) {
      console.error("Error en la creación:", error);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "producciones-manager", children: [
    /* @__PURE__ */ jsx("h2", { children: "Gestión de Producciones Intelectuales" }),
    loading && /* @__PURE__ */ jsx("p", { children: "Cargando datos..." }),
    !loading && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "create-button",
          onClick: () => setIsCreateModalOpen(true),
          children: "Crear Nueva Producción"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "producciones-list", children: producciones.filter((prod) => prod !== null).map((produccion) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "produccion-item",
          children: [
            /* @__PURE__ */ jsx("h4", { children: produccion.nombre }),
            /* @__PURE__ */ jsxs("p", { children: [
              "Enlace Editorial:",
              " ",
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: produccion.enlaceEditorial,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: produccion.enlaceEditorial
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              "Tipo de Publicación: ",
              produccion.idTipoPublicacion
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              "País: ",
              produccion.pais
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              "Fecha: ",
              produccion.fecha
            ] }),
            /* @__PURE__ */ jsx("button", { onClick: () => openEditModal(produccion), children: "Editar" })
          ]
        },
        produccion.idProduccionIntelectual
      )) })
    ] }),
    isModalOpen && editingProduccion && /* @__PURE__ */ jsx("div", { className: "modal edit-modal", children: /* @__PURE__ */ jsxs("div", { className: "modal-content", children: [
      /* @__PURE__ */ jsx("h3", { children: "Editar Producción Intelectual" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          placeholder: "Nombre",
          value: editingProduccion.nombre,
          onChange: (e) => setEditingProduccion({ ...editingProduccion, nombre: e.target.value })
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          placeholder: "Enlace Editorial",
          value: editingProduccion.enlaceEditorial,
          onChange: (e) => setEditingProduccion({ ...editingProduccion, enlaceEditorial: e.target.value })
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "number",
          placeholder: "Tipo de Publicación",
          value: editingProduccion.idTipoPublicacion,
          onChange: (e) => setEditingProduccion({
            ...editingProduccion,
            idTipoPublicacion: parseInt(e.target.value)
          })
        }
      ),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        CountrySelect,
        {
          valueAndId: "idPais",
          selectedId: editingProduccion.idPais,
          selected: editingProduccion.pais,
          selectedCountry: {
            id: editingProduccion.idPais || 0,
            name: editingProduccion.pais || ""
          },
          onCountryChange: (selectedCountry) => {
            setEditingProduccion(
              (prev) => prev ? {
                ...prev,
                idPais: selectedCountry.id,
                pais: selectedCountry.name
              } : null
            );
          }
        }
      ) }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "date",
          value: editingProduccion.fecha,
          onChange: (e) => setEditingProduccion({ ...editingProduccion, fecha: e.target.value })
        }
      ),
      /* @__PURE__ */ jsx("button", { onClick: handleEdit, children: "Guardar Cambios" }),
      /* @__PURE__ */ jsx("button", { onClick: closeModals, children: "Cerrar" })
    ] }) }),
    isCreateModalOpen && /* @__PURE__ */ jsx("div", { className: "modal create-modal", children: /* @__PURE__ */ jsxs("div", { className: "modal-content", children: [
      /* @__PURE__ */ jsx("h3", { children: "Crear Nueva Producción Intelectual" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          placeholder: "Nombre",
          value: newProduccion.nombre,
          onChange: (e) => setNewProduccion({ ...newProduccion, nombre: e.target.value })
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          placeholder: "Enlace Editorial",
          value: newProduccion.enlaceEditorial,
          onChange: (e) => setNewProduccion({ ...newProduccion, enlaceEditorial: e.target.value })
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "number",
          placeholder: "Tipo de Publicación",
          value: newProduccion.idTipoPublicacion,
          onChange: (e) => setNewProduccion({
            ...newProduccion,
            idTipoPublicacion: parseInt(e.target.value)
          })
        }
      ),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        CountrySelect,
        {
          valueAndId: "idPais",
          selectedId: newProduccion.idPais,
          selected: newProduccion.pais || "",
          selectedCountry: {
            id: newProduccion.idPais || 0,
            name: newProduccion.pais || ""
          },
          onCountryChange: (selectedCountry) => {
            setNewProduccion((prev) => ({
              ...prev,
              idPais: selectedCountry.id,
              pais: selectedCountry.name
            }));
          }
        }
      ) }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "date",
          value: newProduccion.fecha,
          onChange: (e) => setNewProduccion({ ...newProduccion, fecha: e.target.value })
        }
      ),
      /* @__PURE__ */ jsx("button", { onClick: handleCreate, children: "Crear" }),
      /* @__PURE__ */ jsx("button", { onClick: closeModals, children: "Cerrar" })
    ] }) })
  ] });
};

export { ProduccionesIntelectualesManager as default };
