import { c as connectToDatabase } from '../../../chunks/dbConect_BXvRdf3y.mjs';
export { renderers } from '../../../renderers.mjs';

async function GET({ request }) {
  try {
    const db = await connectToDatabase();
    const url = new URL(request.url);
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
      WHERE c.estado = "abierta" OR c.estado="cerrada"
      GROUP BY c.idConvocatoria;
    `;
    const [results] = await db.query(query);
    db.end();
    const parsedResults = results.map((row) => {
      try {
        row.postulantes = JSON.parse(row.postulantes);
      } catch (e) {
        row.postulantes = [];
      }
      return row;
    });
    return new Response(JSON.stringify(parsedResults), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error al obtener las convocatorias:", error);
    return new Response(
      JSON.stringify({ error: "Error al obtener las convocatorias" }),
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
