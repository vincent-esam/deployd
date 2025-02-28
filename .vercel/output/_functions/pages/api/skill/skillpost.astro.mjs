import { c as connectToDatabase } from '../../../chunks/dbConect_BXvRdf3y.mjs';
export { renderers } from '../../../renderers.mjs';

const sanitizeValue = (value) => value === void 0 ? null : value;
async function POST({ request }) {
  try {
    const data = await request.json();
    console.log("Datos recibidos en el servidor:", data);
    const { idDocente, habilidadesBlandas } = data;
    if (!idDocente || !habilidadesBlandas || habilidadesBlandas.length === 0) {
      return new Response(
        JSON.stringify({ error: "Faltan campos obligatorios o habilidades blandas" }),
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
    for (const habilidad of habilidadesBlandas) {
      const habilidadQuery = `
        INSERT INTO habilidadesblandas (idDocentes, habilidad)
        VALUES (?, ?)
      `;
      const habilidadValues = [
        sanitizeValue(Number(idDocente)),
        sanitizeValue(habilidad.trim())
      ];
      console.log("Ejecutando inserción con valores:", habilidadValues);
      await db.execute(habilidadQuery, habilidadValues);
    }
    db.end();
    return new Response(
      JSON.stringify({ message: "Habilidades blandas insertadas correctamente" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error en el servidor:", error);
    return new Response(
      JSON.stringify({ error: "Error al insertar habilidades blandas" }),
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
