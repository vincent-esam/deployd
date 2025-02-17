import { useState } from "react";
import "../../../styles/crearConvocatoria.css";

interface FormularioConvocatoriaProps {
  onClose: () => void;
  convocatoriaToEdit?: any; // Ajusta el tipo según tu estructura de datos
}

export const FormularioConvocatoria: React.FC<FormularioConvocatoriaProps> = ({ onClose, convocatoriaToEdit }) => {
  const formatDate = (dateString: string) => {
    if (!dateString) return ""; // Si no hay fecha, retornar vacío
    const date = new Date(dateString);
    return date.toISOString().split("T")[0]; // Formato YYYY-MM-DD
  };

  // Estado inicial con fechas formateadas
  const [formData, setFormData] = useState({
    titulo: convocatoriaToEdit?.titulo || "",
    perfil: convocatoriaToEdit?.perfil || "",
    fechaInicio: formatDate(convocatoriaToEdit?.fechaInicio), // Formatear fecha de inicio
    fechaFinal: formatDate(convocatoriaToEdit?.fechaFinal), // Formatear fecha final
    requisitos: convocatoriaToEdit?.requisitos || "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Crear un objeto FormData
      const form = new FormData();

      // Agregar cada campo del formulario al FormData
      Object.keys(formData).forEach((key) => {
        form.append(key, formData[key as keyof typeof formData]);
      });

      // Determinar la URL y el método según si es una edición o creación
      const url = convocatoriaToEdit
        ? `http://localhost:4321/api/convocatorias/updateConvocatorias/${convocatoriaToEdit.idConvocatoria}`
        : "http://localhost:4321/api/convocatorias/insert_convocatorias";

      const method = convocatoriaToEdit ? "PUT" : "POST";

      // Enviar la solicitud con FormData
      const response = await fetch(url, {
        method,
        body: form, // Enviar FormData directamente
      });

      if (!response.ok) throw new Error("Error al guardar la convocatoria");

      alert(convocatoriaToEdit ? "Convocatoria actualizada con éxito" : "Convocatoria creada con éxito");
      onClose();
    } catch (error) {
      console.error("Error:", error);
      alert("Error al guardar la convocatoria");
    }
  };

  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="titulo">Título</label>
        <input
          type="text"
          id="titulo"
          name="titulo"
          required
          value={formData.titulo}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="perfil">Perfil</label>
        <textarea
          id="perfil"
          name="perfil"
          required
          rows={4}
          value={formData.perfil}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="requisitos">Requisitos</label>
      </div>
      <div className="radio-group">
        <label>
          <input
            type="radio"
            name="requisitos"
            value="docente"
            checked={formData.requisitos === "docente"}
            onChange={handleInputChange}
          />
          Docente
        </label>
        <label>
          <input
            type="radio"
            name="requisitos"
            value="tutor"
            checked={formData.requisitos === "tutor"}
            onChange={handleInputChange}
          />
          Tutor
        </label>
      </div>
      <div className="form-group grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="fechaInicio">Fecha de Inicio</label>
          <input
            type="date"
            id="fechaInicio"
            name="fechaInicio"
            required
            value={formData.fechaInicio}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="fechaFinal">Fecha de Fin</label>
          <input
            type="date"
            id="fechaFinal"
            name="fechaFinal"
            required
            value={formData.fechaFinal}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <button type="submit" className="submit-button mt-4">
        Guardar
      </button>
    </form>
  );
};