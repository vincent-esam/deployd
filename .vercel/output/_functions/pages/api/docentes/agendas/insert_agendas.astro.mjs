import { c as connectToDatabase } from '../../../../chunks/dbConect_Be3anmNA.mjs';
export { renderers } from '../../../../renderers.mjs';

async function POST({ request }) {
  try {
    const { idDocente, fecha, linkZoom } = await request.json();
    if (!idDocente || !fecha || !linkZoom) {
      return new Response(
        JSON.stringify({ error: "Faltan campos obligatorios" }),
        { status: 400 }
      );
    }
    const fechaValida = new Date(fecha);
    if (isNaN(fechaValida.getTime())) {
      return new Response(
        JSON.stringify({ error: "La fecha proporcionada no es válida" }),
        { status: 400 }
      );
    }
    const fechaFormateada = `${fechaValida.getFullYear()}-${String(
      fechaValida.getMonth() + 1
    ).padStart(2, "0")}-${String(fechaValida.getDate()).padStart(2, "0")} ${String(
      fechaValida.getHours()
    ).padStart(2, "0")}:${String(fechaValida.getMinutes()).padStart(
      2,
      "0"
    )}:${String(fechaValida.getSeconds()).padStart(2, "0")}`;
    const db = await connectToDatabase();
    const query = `
      INSERT INTO agendas (idDocente, fecha, linkZoom)
      VALUES (?, ?, ?)
    `;
    const values = [idDocente, fechaFormateada, linkZoom];
    await db.execute(query, values);
    db.end();
    return new Response(
      JSON.stringify({ message: "Agenda insertada correctamente" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al insertar la agenda:", error);
    return new Response(
      JSON.stringify({ error: "Error al insertar la agenda" }),
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
