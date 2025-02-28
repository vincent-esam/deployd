import { c as connectToDatabase } from '../../../chunks/dbConect_BXvRdf3y.mjs';
export { renderers } from '../../../renderers.mjs';

const sanitizeValue = (value) => value === void 0 ? null : value;
async function PUT({ request }) {
  try {
    const data = await request.json();
    console.log("Datos recibidos para modificación:", data);
    const { idDocente, experienciasDocente } = data;
    if (!idDocente || !experienciasDocente || experienciasDocente.length === 0) {
      return new Response(
        JSON.stringify({ error: "Faltan campos obligatorios o experiencias docentes" }),
        { status: 400 }
      );
    }
    const db = await connectToDatabase();
    const [docenteResult] = await db.execute(
      `SELECT COUNT(*) AS count FROM docentes WHERE idDocente = ?`,
      [idDocente]
    );
    if (docenteResult[0].count === 0) {
      return new Response(JSON.stringify({ error: "Docente no encontrado" }), { status: 404 });
    }
    for (const experiencia of experienciasDocente) {
      const { idExperienciaDocente, materia, calidad, universidad, concluidoEl } = experiencia;
      if (!idExperienciaDocente) {
        return new Response(
          JSON.stringify({ error: "Falta el ID de la experiencia docente para actualizar" }),
          { status: 400 }
        );
      }
      const [experienciaResult] = await db.execute(
        `SELECT COUNT(*) AS count FROM experienciadocente WHERE idExperienciaDocente = ?`,
        [idExperienciaDocente]
      );
      if (experienciaResult[0].count === 0) {
        return new Response(
          JSON.stringify({ error: `La experiencia con ID ${idExperienciaDocente} no existe` }),
          { status: 404 }
        );
      }
      const updateQuery = `
        UPDATE experienciadocente
        SET materia = ?, calidad = ?, universidad = ?, concluidoEl = ?
        WHERE idExperienciaDocente = ?
      `;
      const updateValues = [
        sanitizeValue(materia?.trim()),
        sanitizeValue(calidad?.trim()),
        sanitizeValue(universidad?.trim()),
        sanitizeValue(concluidoEl?.trim()),
        idExperienciaDocente
      ];
      console.log("Ejecutando actualización con valores:", updateValues);
      await db.execute(updateQuery, updateValues);
    }
    db.end();
    return new Response(
      JSON.stringify({ message: "Experiencias docentes actualizadas correctamente" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error en el servidor:", error);
    return new Response(
      JSON.stringify({ error: "Error al actualizar experiencias docentes" }),
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
