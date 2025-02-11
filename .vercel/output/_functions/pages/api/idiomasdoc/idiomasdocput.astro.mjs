import { c as connectToDatabase } from '../../../chunks/dbConect_Be3anmNA.mjs';
export { renderers } from '../../../renderers.mjs';

const sanitizeValue = (value) => value === undefined ? null : value;
async function PUT({ request }) {
  try {
    const data = await request.json();
    console.log("Datos recibidos en el servidor:", data);
    const { idDocente, idiomas } = data;
    if (!idDocente || !idiomas || idiomas.length === 0) {
      return new Response(
        JSON.stringify({ error: "Faltan campos obligatorios o idiomas" }),
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
    for (const idioma of idiomas) {
      const { idIdiomaDocente, idIdioma, escritura, oral, lectura, escucha } = idioma;
      const [idiomaExistente] = await db.execute(
        `SELECT COUNT(*) AS count FROM idiomas_docente WHERE idDocente = ? AND idIdioma = ?`,
        [idDocente, idIdioma]
      );
      if (idiomaExistente[0].count > 0) {
        const updateQuery = `
          UPDATE idiomas_docente
          SET escritura = ?, oral = ?, lectura = ?, escucha = ?
          WHERE idDocente = ? AND idIdioma = ?
        `;
        await db.execute(updateQuery, [
          sanitizeValue(escritura),
          sanitizeValue(oral),
          sanitizeValue(lectura),
          sanitizeValue(escucha),
          sanitizeValue(idDocente),
          sanitizeValue(idIdioma)
        ]);
      } else {
        const insertQuery = `
          INSERT INTO idiomas_docente (idDocente, idIdioma, escritura, oral, lectura, escucha)
          VALUES (?, ?, ?, ?, ?, ?)
        `;
        await db.execute(insertQuery, [
          sanitizeValue(idDocente),
          sanitizeValue(idIdioma),
          sanitizeValue(escritura),
          sanitizeValue(oral),
          sanitizeValue(lectura),
          sanitizeValue(escucha)
        ]);
      }
    }
    db.end();
    return new Response(
      JSON.stringify({ message: "Idiomas y habilidades actualizados correctamente" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error en el servidor:", error);
    return new Response(
      JSON.stringify({ error: "Error al actualizar idiomas y habilidades" }),
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
