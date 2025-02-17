import { c as connectToDatabase } from '../../../../chunks/dbConect_Be3anmNA.mjs';
import { a as authenticateToken } from '../../../../chunks/auth_CYSh_Mv7.mjs';
export { renderers } from '../../../../renderers.mjs';

async function POST({ request }) {
  let db;
  try {
    const authResult = authenticateToken(request);
    if (!authResult.success) {
      return authResult.response;
    }
    const user = authResult.user;
    const { idConvocatoria } = await request.json();
    if (!idConvocatoria) {
      return new Response(
        JSON.stringify({ error: "Faltan datos obligatorios" }),
        { status: 400 }
      );
    }
    db = await connectToDatabase();
    const query = `
      INSERT INTO postulantes_convocatoria (idDocente, idConvocatoria)
      VALUES (?, ?)
    `;
    const values = [user.idDocente, idConvocatoria];
    await db.execute(query, values);
    return new Response(
      JSON.stringify({ message: "Postulación registrada correctamente" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al registrar la postulación:", error);
    return new Response(
      JSON.stringify({ error: "Error al registrar la postulación" }),
      { status: 500 }
    );
  } finally {
    if (db) db.end();
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
