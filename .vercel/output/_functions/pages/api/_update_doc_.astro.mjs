import { c as connectToDatabase } from '../../chunks/dbConect_BXvRdf3y.mjs';
export { renderers } from '../../renderers.mjs';

async function PUT({ request }) {
  try {
    const client = await connectToDatabase();
    const body = await request.json();
    console.log("Datos recibidos:", body);
    const {
      idDocente,
      apellidoMaterno,
      apellidoPaterno,
      nombres,
      numeroReferencia,
      correo,
      idEstudioSuperior,
      // Asegúrate de pasar estos valores desde el body
      universidad,
      carrera,
      fecha,
      nombre,
      idPais,
      idGrado,
      idModalidad,
      estudiossuperiores
      // Asegúrate de que este campo esté presente
    } = body;
    let parsedEstudiosSuperiores = estudiossuperiores;
    if (typeof estudiossuperiores === "string") {
      parsedEstudiosSuperiores = JSON.parse(estudiossuperiores);
    }
    const handleNull = (value) => value === void 0 || value === null ? null : value;
    const db = await connectToDatabase();
    await db.beginTransaction();
    const docenteQuery = `
      UPDATE docentes 
      SET apellidoMaterno = ?, apellidoPaterno = ?, nombres = ?, numeroReferencia = ?, correo = ?
      WHERE idDocente = ?;
    `;
    const docenteValues = [
      handleNull(apellidoMaterno),
      handleNull(apellidoPaterno),
      handleNull(nombres),
      handleNull(numeroReferencia),
      handleNull(correo),
      idDocente
    ];
    await db.execute(docenteQuery, docenteValues);
    const estudiosQuery = `
      UPDATE estudiossuperiores
      SET universidad = ?, carrera = ?, fecha = ?, nombre = ?, idPais = ?, idGrado = ?, idModalidad = ?
      WHERE idEstudioSuperior = ?;
    `;
    const estudiosValues = [
      handleNull(universidad),
      handleNull(carrera),
      handleNull(fecha),
      handleNull(nombre),
      handleNull(idPais),
      handleNull(idGrado),
      handleNull(idModalidad),
      idEstudioSuperior
    ];
    await db.execute(estudiosQuery, estudiosValues);
    await db.commit();
    return new Response(JSON.stringify({ message: "Datos actualizados con éxito" }), { status: 200 });
  } catch (error) {
    console.error("Error al actualizar los datos:", error);
    return new Response(JSON.stringify({ error: "Error al actualizar los datos." }), { status: 500 });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  PUT
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
