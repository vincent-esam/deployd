import { c as connectToDatabase } from '../../chunks/dbConect_BXvRdf3y.mjs';
export { renderers } from '../../renderers.mjs';

const sanitizeValue = (value) => value === void 0 ? null : value;
async function ALL({ request }) {
  try {
    if (request.method === "PUT") {
      return await handlePut(request);
    } else {
      return new Response(
        JSON.stringify({ error: "Método HTTP no permitido" }),
        { status: 405 }
      );
    }
  } catch (error) {
    console.error("Error en el servidor:", error);
    return new Response(
      JSON.stringify({ error: "Error interno del servidor" }),
      { status: 500 }
    );
  }
}
async function handlePut(request) {
  const data = await request.json();
  console.log("Datos recibidos para PUT:", data);
  const { idDocente, idEstudioSuperior, updateFields } = data;
  if (!idDocente || !idEstudioSuperior || !updateFields || Object.keys(updateFields).length === 0) {
    return new Response(
      JSON.stringify({ error: "Faltan campos obligatorios para la actualización" }),
      { status: 400 }
    );
  }
  const db = await connectToDatabase();
  const docenteQuery = `SELECT COUNT(*) AS count FROM docentes WHERE idDocente = ?`;
  const [docenteResult] = await db.execute(docenteQuery, [idDocente]);
  if (docenteResult[0].count === 0) {
    return new Response(
      JSON.stringify({ error: "Docente no encontrado" }),
      { status: 400 }
    );
  }
  const estudioQuery = `
    SELECT COUNT(*) AS count 
    FROM docentes_estudios 
    WHERE idDocente = ? AND idEstudioSuperior = ?`;
  const [estudioResult] = await db.execute(estudioQuery, [idDocente, idEstudioSuperior]);
  if (estudioResult[0].count === 0) {
    return new Response(
      JSON.stringify({ error: "Estudio superior no encontrado o no está asociado al docente" }),
      { status: 400 }
    );
  }
  const updateFieldsKeys = Object.keys(updateFields).map((key) => `${key} = ?`).join(", ");
  const updateFieldsValues = Object.values(updateFields).map(sanitizeValue);
  const updateQuery = `
    UPDATE estudiossuperiores
    SET ${updateFieldsKeys}
    WHERE idEstudioSuperior = ?;
  `;
  const updateValues = [...updateFieldsValues, idEstudioSuperior];
  const [updateResult] = await db.execute(updateQuery, updateValues);
  db.end();
  return new Response(
    JSON.stringify({ message: "Estudio superior actualizado correctamente" }),
    { status: 200 }
  );
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  ALL
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
