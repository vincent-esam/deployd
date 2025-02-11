import { c as connectToDatabase } from '../../../chunks/dbConect_Be3anmNA.mjs';
export { renderers } from '../../../renderers.mjs';

async function PUT({ request }) {
  try {
    const body = await request.json();
    const { idDocente, estado } = body;
    if (!idDocente || !estado || !["aprobado", "rechazado", "postulante"].includes(estado)) {
      return new Response(
        JSON.stringify({ error: "Faltan campos obligatorios o el estado es inválido" }),
        { status: 400 }
      );
    }
    const db = await connectToDatabase();
    const query = `
      UPDATE docentes
      SET estado = ?
      WHERE idDocente = ?
    `;
    const values = [estado, idDocente];
    const [result] = await db.execute(query, values);
    db.end();
    if (result.affectedRows === 0) {
      return new Response(
        JSON.stringify({
          error: "No se encontró el docente o no se actualizó el estado"
        }),
        { status: 404 }
      );
    }
    return new Response(
      JSON.stringify({
        message: `Estado del docente actualizado a ${estado}`
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al actualizar el estado del docente:", error);
    return new Response(
      JSON.stringify({
        error: "Error al actualizar el estado del docente"
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
