import { c as connectToDatabase } from '../../../chunks/dbConect_Be3anmNA.mjs';
export { renderers } from '../../../renderers.mjs';

async function PUT({ request }) {
  try {
    const body = await request.json();
    const { idDocente, agendado } = body;
    if (!idDocente || typeof agendado !== "number") {
      return new Response(
        JSON.stringify({ error: "Faltan campos obligatorios o son inválidos" }),
        { status: 400 }
      );
    }
    const db = await connectToDatabase();
    const query = `
      UPDATE docentes
      SET agendado = ?
      WHERE idDocente = ? AND estado = 'postulante'
    `;
    const values = [agendado, idDocente];
    const [result] = await db.execute(query, values);
    db.end();
    if (result.affectedRows === 0) {
      return new Response(
        JSON.stringify({
          error: "No se encontró el postulante o no se actualizó"
        }),
        { status: 404 }
      );
    }
    return new Response(
      JSON.stringify({
        message: "Estado de agendado actualizado correctamente"
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al actualizar el campo agendado:", error);
    return new Response(
      JSON.stringify({
        error: "Error al actualizar el campo agendado"
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
