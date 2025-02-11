import { c as connectToDatabase } from '../../../chunks/dbConect_Be3anmNA.mjs';
export { renderers } from '../../../renderers.mjs';

const sanitizeValue = (value) => value === undefined ? null : value;
async function POST({ request }) {
  try {
    const data = await request.json();
    console.log("Datos recibidos en el servidor:", data);
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
      const experienciaQuery = `
        INSERT INTO experienciadocente (materia, calidad, universidad, concluidoEl)
        VALUES (?, ?, ?, ?)
      `;
      const experienciaValues = [
        sanitizeValue(experiencia.materia?.trim()),
        sanitizeValue(experiencia.calidad?.trim()),
        sanitizeValue(experiencia.universidad?.trim()),
        sanitizeValue(experiencia.concluidoEl?.trim())
      ];
      console.log("Ejecutando inserción con valores:", experienciaValues);
      const [experienciaResult] = await db.execute(experienciaQuery, experienciaValues);
      const docenteExperienciaQuery = `
        INSERT INTO docente_experienciadocente (idDocente, idExperienciaDocente)
        VALUES (?, ?)
      `;
      const docenteExperienciaValues = [
        sanitizeValue(Number(idDocente)),
        experienciaResult.insertId
      ];
      await db.execute(docenteExperienciaQuery, docenteExperienciaValues);
    }
    db.end();
    return new Response(
      JSON.stringify({ message: "Experiencias docentes insertadas correctamente" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error en el servidor:", error);
    return new Response(
      JSON.stringify({ error: "Error al insertar experiencias docentes" }),
      { status: 500 }
    );
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
