import { c as connectToDatabase } from '../../chunks/dbConect_Be3anmNA.mjs';
export { renderers } from '../../renderers.mjs';

const sanitizeValue = (value) => value === undefined ? null : value;
async function POST({ request }) {
  try {
    const data = await request.json();
    console.log("Datos recibidos en el servidor:", data);
    const { idDocente, estudiossuperiores } = data;
    if (!idDocente || !estudiossuperiores || estudiossuperiores.length === 0) {
      return new Response(
        JSON.stringify({ error: "Faltan campos obligatorios o estudios superiores" }),
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
    for (const estudio of estudiossuperiores) {
      const [tipoEstudioResult] = await db.execute(
        `SELECT COUNT(*) AS count FROM tiposestudios WHERE idTipoEstudio = ?`,
        [estudio.idTipoEstudio]
      );
      if (tipoEstudioResult[0].count === 0) {
        return new Response(JSON.stringify({ error: "idTipoEstudio no válido" }), { status: 400 });
      }
      const estudioQuery = `
        INSERT INTO estudiossuperiores (universidad, carrera, fecha, nombre, idPais, idGrado, idModalidad, idTipoEstudio)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `;
      const estudioValues = [
        sanitizeValue(estudio.universidad?.trim()),
        sanitizeValue(estudio.carrera?.trim()),
        sanitizeValue(estudio.fecha?.trim()),
        sanitizeValue(estudio.nombre?.trim()),
        sanitizeValue(Number(estudio.idPais)),
        sanitizeValue(Number(estudio.idGrado)),
        sanitizeValue(Number(estudio.idModalidad)),
        sanitizeValue(Number(estudio.idTipoEstudio))
      ];
      console.log("Ejecutando inserción con valores:", estudioValues);
      const [estudioResult] = await db.execute(estudioQuery, estudioValues);
      const docentesEstudiosQuery = `
        INSERT INTO docentes_estudios (idDocente, idEstudioSuperior)
        VALUES (?, ?)
      `;
      const docentesEstudiosValues = [
        sanitizeValue(Number(idDocente)),
        estudioResult.insertId
      ];
      await db.execute(docentesEstudiosQuery, docentesEstudiosValues);
    }
    db.end();
    return new Response(
      JSON.stringify({ message: "Estudios superiores insertados correctamente" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error en el servidor:", error);
    return new Response(
      JSON.stringify({ error: "Error al insertar estudios superiores" }),
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
