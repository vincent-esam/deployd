import { c as connectToDatabase } from '../../../chunks/dbConect_BXvRdf3y.mjs';
export { renderers } from '../../../renderers.mjs';

async function GET(_) {
  try {
    const db = await connectToDatabase();
    const query = `
   SELECT idPais, nombre FROM paises;
    `;
    const [results] = await db.query(query);
    db.end();
    return new Response(JSON.stringify(results), { status: 200 });
  } catch (error) {
    console.error("Error al obtener los paises:", error);
    return new Response(
      JSON.stringify({ error: "Error al obtener los paises" }),
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
