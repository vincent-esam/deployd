import { c as connectToDatabase } from '../../chunks/dbConect_Be3anmNA.mjs';
export { renderers } from '../../renderers.mjs';

async function POST({ request }) {
  try {
    const formData = await request.formData();
    const idDocente = formData.get("idDocente")?.toString();
    const apellidoMaterno = formData.get("apellidoMaterno")?.toString();
    const apellidoPaterno = formData.get("apellidoPaterno")?.toString();
    const nombres = formData.get("nombres")?.toString();
    const numeroReferencia = formData.get("numeroReferencia")?.toString();
    const correo = formData.get("correo")?.toString();
    const telefono = formData.get("telefono")?.toString();
    const numeroDocumento = formData.get("numeroDocumento")?.toString();
    const fechaNacimiento = formData.get("fechaNacimiento")?.toString();
    const ciudadRadicacion = formData.get("ciudadRadicacion")?.toString();
    const genero = formData.get("genero")?.toString();
    const direccion = formData.get("direccion")?.toString();
    const estado = formData.get("estado")?.toString();
    const fotografia = formData.get("fotografia");
    if (!idDocente || !nombres || !apellidoPaterno || !correo) {
      return new Response(
        JSON.stringify({ error: "Faltan campos obligatorios" }),
        { status: 400 }
      );
    }
    let imageBase64 = null;
    if (fotografia && fotografia.size > 0) {
      console.log("Imagen recibida en el backend:", fotografia);
      try {
        const buffer = Buffer.from(await fotografia.arrayBuffer());
        imageBase64 = buffer.toString("base64");
        console.log("Imagen convertida a Base64.");
      } catch (err) {
        console.error("Error al procesar la imagen:", err);
        return new Response(
          JSON.stringify({ error: "Error al procesar la imagen" }),
          { status: 500 }
        );
      }
    }
    const db = await connectToDatabase();
    const docenteQuery = `
      UPDATE docentes 
      SET 
        apellidoMaterno = ?, 
        apellidoPaterno = ?, 
        nombres = ?, 
        numeroReferencia = ?, 
        correo = ?, 
        telefono = ?, 
        numeroDocumento = ?, 
        fechaNacimiento = ?, 
        ciudadRadicacion = ?, 
        genero = ?, 
        direccion = ?, 
        estado = ?,
        fotografia = ?
      WHERE idDocente = ?;
    `;
    const docenteValues = [
      apellidoMaterno?.trim() || null,
      apellidoPaterno.trim(),
      nombres.trim(),
      numeroReferencia?.trim() || null,
      correo.trim().toLowerCase(),
      telefono?.trim() || null,
      numeroDocumento?.trim() || null,
      fechaNacimiento ? new Date(fechaNacimiento).toISOString().split("T")[0] : null,
      ciudadRadicacion?.trim() || null,
      genero?.trim() || null,
      direccion?.trim() || null,
      estado?.trim() || null,
      imageBase64,
      // Se almacena la cadena Base64 de la imagen (o null si no se envió nueva imagen)
      idDocente
    ];
    console.log("Actualizando docente con:", docenteValues);
    const [docenteResult] = await db.execute(docenteQuery, docenteValues);
    console.log("Resultado de actualización del docente:", docenteResult);
    db.end();
    return new Response(
      JSON.stringify({ message: "Datos actualizados correctamente" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error en el servidor:", error);
    return new Response(
      JSON.stringify({ error: "Error al actualizar datos" }),
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
