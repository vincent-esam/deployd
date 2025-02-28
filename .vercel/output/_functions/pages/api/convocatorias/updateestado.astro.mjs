import { c as connectToDatabase } from '../../../chunks/dbConect_BXvRdf3y.mjs';
export { renderers } from '../../../renderers.mjs';

async function PUT({ request }) {
  try {
    const body = await request.json();
    const { idConvocatoria, estado } = body;
    if (!idConvocatoria || !estado) {
      return new Response(
        JSON.stringify({ error: "Faltan datos obligatorios" }),
        { status: 400 }
      );
    }
    const db = await connectToDatabase();
    const query = `UPDATE convocatorias SET estado = ? WHERE idConvocatoria = ?`;
    const values = [estado, idConvocatoria];
    const [result] = await db.execute(query, values);
    db.end();
    if (result.affectedRows === 0) {
      return new Response(
        JSON.stringify({
          error: "No se encontró la convocatoria o no se actualizó"
        }),
        { status: 404 }
      );
    }
    return new Response(
      JSON.stringify({
        message: "Estado de la convocatoria actualizado correctamente"
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al actualizar el estado:", error);
    return new Response(
      JSON.stringify({
        error: "Error al actualizar el estado"
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
