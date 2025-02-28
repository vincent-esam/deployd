import { c as connectToDatabase } from '../../../chunks/dbConect_BXvRdf3y.mjs';
export { renderers } from '../../../renderers.mjs';

const sanitizeValue = (value) => value === void 0 ? null : value;
async function PUT({ request }) {
  try {
    const data = await request.json();
    console.log("Datos recibidos para modificación:", data);
    const { idDocente, produccionesIntelectuales } = data;
    if (!idDocente || !produccionesIntelectuales || produccionesIntelectuales.length === 0) {
      return new Response(
        JSON.stringify({
          error: "Faltan campos obligatorios o producciones intelectuales"
        }),
        { status: 400 }
      );
    }
    const db = await connectToDatabase();
    const [docenteResult] = await db.execute(
      `SELECT COUNT(*) AS count FROM docentes WHERE idDocente = ?`,
      [idDocente]
    );
    if (docenteResult[0].count === 0) {
      return new Response(JSON.stringify({ error: "Docente no encontrado" }), {
        status: 404
      });
    }
    for (const produccion of produccionesIntelectuales) {
      const {
        idProduccionIntelectual,
        nombre,
        enlaceEditorial,
        idTipoPublicacion,
        idPais,
        fecha
      } = produccion;
      if (!idProduccionIntelectual) {
        return new Response(
          JSON.stringify({
            error: "Falta el ID de la producción intelectual para actualizar"
          }),
          { status: 400 }
        );
      }
      const [produccionResult] = await db.execute(
        `SELECT COUNT(*) AS count FROM produccionesintelectuales WHERE idProduccionIntelectual = ?`,
        [idProduccionIntelectual]
      );
      if (produccionResult[0].count === 0) {
        return new Response(
          JSON.stringify({
            error: `La producción intelectual con ID ${idProduccionIntelectual} no existe`
          }),
          { status: 404 }
        );
      }
      const updateQuery = `
        UPDATE produccionesintelectuales
        SET nombre = ?, enlaceEditorial = ?, idTipoPublicacion = ?, idPais = ?, fecha = ?
        WHERE idProduccionIntelectual = ?
      `;
      const updateValues = [
        sanitizeValue(nombre?.trim()),
        sanitizeValue(enlaceEditorial?.trim()),
        sanitizeValue(idTipoPublicacion),
        sanitizeValue(idPais),
        sanitizeValue(fecha?.trim()),
        idProduccionIntelectual
      ];
      console.log("Ejecutando actualización con valores:", updateValues);
      await db.execute(updateQuery, updateValues);
    }
    db.end();
    return new Response(
      JSON.stringify({
        message: "Producciones intelectuales actualizadas correctamente"
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error en el servidor:", error);
    return new Response(
      JSON.stringify({
        error: "Error al actualizar producciones intelectuales"
      }),
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
