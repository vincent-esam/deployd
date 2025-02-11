import { c as connectToDatabase } from '../../chunks/dbConect_Be3anmNA.mjs';
import fs from 'fs';
import path from 'path';
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
    let imagePath = null;
    if (fotografia && fotografia.size > 0) {
      console.log("Imagen recibida en el backend:", fotografia);
      const uploadDir = path.join(process.cwd(), "public/images/docentes");
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }
      const fileName = `${Date.now()}-${fotografia.name || "imagen"}`;
      const filePath = path.join(uploadDir, fileName);
      try {
        const buffer = Buffer.from(await fotografia.arrayBuffer());
        fs.writeFileSync(filePath, buffer);
        console.log("La imagen se guardó en:", filePath);
        imagePath = `/images/docentes/${fileName}`;
      } catch (err) {
        console.error("Error al guardar la imagen:", err);
        return new Response(
          JSON.stringify({ error: "Error al guardar la imagen" }),
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
      imagePath,
      // Si no se envió nueva imagen, se almacenará null (puedes adaptar esta lógica para conservar la foto actual)
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
