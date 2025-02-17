import { c as connectToDatabase } from '../../../../chunks/dbConect_Be3anmNA.mjs';
export { renderers } from '../../../../renderers.mjs';

const sanitizeValue = (value) => value === undefined ? null : value;
async function PUT({ request, params }) {
  try {
    const { idConvocatoria } = params;
    if (!idConvocatoria) {
      return new Response(
        JSON.stringify({ error: "Falta el ID de la convocatoria" }),
        { status: 400 }
      );
    }
    const formData = await request.formData();
    const titulo = formData.get("titulo");
    const perfil = formData.get("perfil");
    const fechaInicio = formData.get("fechaInicio");
    const fechaFinal = formData.get("fechaFinal");
    const requisitos = formData.get("requisitos");
    if (!titulo || !perfil || !fechaInicio || !fechaFinal || !requisitos) {
      return new Response(
        JSON.stringify({ error: "Faltan campos obligatorios" }),
        { status: 400 }
      );
    }
    const fechaInicioDate = new Date(fechaInicio);
    const fechaFinalDate = new Date(fechaFinal);
    if (isNaN(fechaInicioDate.getTime()) || isNaN(fechaFinalDate.getTime())) {
      return new Response(
        JSON.stringify({ error: "Formato de fecha inválido" }),
        { status: 400 }
      );
    }
    const link = `http://localhost:4321/convocatorias/${encodeURIComponent(titulo.trim())}`;
    const db = await connectToDatabase();
    const convocatoriaQuery = `
      UPDATE convocatorias
      SET titulo = ?, perfil = ?, fechaInicio = ?, fechaFinal = ?, requisitos = ?, link = ?
      WHERE idConvocatoria = ?;
    `;
    const convocatoriaValues = [
      sanitizeValue(titulo.trim()),
      sanitizeValue(perfil.trim()),
      sanitizeValue(fechaInicioDate.toISOString().split("T")[0]),
      sanitizeValue(fechaFinalDate.toISOString().split("T")[0]),
      sanitizeValue(requisitos.trim()),
      link,
      // Actualizar el campo link
      sanitizeValue(idConvocatoria)
      // El id de la convocatoria
    ];
    const [convocatoriaResult] = await db.execute(convocatoriaQuery, convocatoriaValues);
    console.log("Resultado de actualización de la convocatoria:", convocatoriaResult);
    db.end();
    return new Response(
      JSON.stringify({ message: "Convocatoria actualizada correctamente" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error en el servidor:", error);
    return new Response(
      JSON.stringify({ error: "Error al actualizar convocatoria" }),
      { status: 500 }
    );
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  PUT
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
