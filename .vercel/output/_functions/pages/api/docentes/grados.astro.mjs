import { c as connectToDatabase } from '../../../chunks/dbConect_Be3anmNA.mjs';
export { renderers } from '../../../renderers.mjs';

async function GET(_) {
  try {
    const db = await connectToDatabase();
    const query = `
      SELECT idGrado, tipo
      FROM grados
    `;
    const [results] = await db.query(query);
    db.end();
    return new Response(JSON.stringify(results), { status: 200 });
  } catch (error) {
    console.error("Error al obtener los grados académicos:", error);
    return new Response(
      JSON.stringify({ error: "Error al obtener los grados académicos" }),
      { status: 500 }
    );
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
