import { c as connectToDatabase } from '../../../chunks/dbConect_Be3anmNA.mjs';
export { renderers } from '../../../renderers.mjs';

async function GET({ params }) {
  const { titulo } = params;
  if (!titulo) {
    return new Response(JSON.stringify({ error: "Falta el parámetro titulo" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  try {
    const db = await connectToDatabase();
    const query = `
      SELECT 
        c.idConvocatoria, 
        c.titulo, 
        c.perfil, 
        c.link,
        c.requisitos, 
        c.fechaInicio, 
        c.fechaFinal, 
        c.estado, 
        COALESCE(
          CASE
            WHEN COUNT(d.idDocente) > 0 THEN
              CONCAT(
                '[', 
                GROUP_CONCAT(
                  DISTINCT CONCAT(
                    '{',
                      '"idDocente":"', IFNULL(d.idDocente, ''), '", ',
                      '"nombre":"', IFNULL(d.nombres, ''), '", ',
                      '"apellidoPaterno":"', IFNULL(d.apellidoPaterno, ''), '", ',
                      '"apellidoMaterno":"', IFNULL(d.apellidoMaterno, ''), '", ',
                      '"fechaPostulacion":"', IFNULL(DATE_FORMAT(pc.fechaPostulacion, '%Y-%m-%d %H:%i:%s'), ''), '"',
                    '}'
                  ) SEPARATOR ','
                ), 
                ']'
              )
            ELSE '[]'
          END,
          '[]'
        ) AS postulantes,
        COUNT(d.idDocente) AS totalPostulantes
      FROM convocatorias c
      LEFT JOIN postulantes_convocatoria pc ON c.idConvocatoria = pc.idConvocatoria
      LEFT JOIN docentes d ON pc.idDocente = d.idDocente
      WHERE c.titulo = ?  
      GROUP BY c.idConvocatoria;
    `;
    const [rows] = await db.query(query, [titulo]);
    db.end();
    if (!Array.isArray(rows) || rows.length === 0) {
      return new Response(
        JSON.stringify({ error: "No se encontró la convocatoria especificada" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }
    const parsedResults = rows.map((row) => {
      try {
        row.postulantes = JSON.parse(row.postulantes);
      } catch (e) {
        row.postulantes = [];
      }
      return row;
    });
    return new Response(JSON.stringify(parsedResults[0]), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error al obtener la convocatoria:", error);
    return new Response(
      JSON.stringify({ error: "Error al obtener la convocatoria" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
