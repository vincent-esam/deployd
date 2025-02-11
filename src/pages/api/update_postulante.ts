import { connectToDatabase } from "../../utils/dbConect";
import type { APIContext } from "astro";

export async function POST({ request }: APIContext) {
  try {
    // Obtener el formData del request
    const formData = await request.formData();

    // Extraer los campos enviados por el formulario
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
    // Se recibe el archivo de imagen
    const fotografia = formData.get("fotografia") as File | null;

    // Validar campos obligatorios
    if (!idDocente || !nombres || !apellidoPaterno || !correo) {
      return new Response(
        JSON.stringify({ error: "Faltan campos obligatorios" }),
        { status: 400 }
      );
    }

    // Manejo de la imagen: convertirla a Base64 para almacenarla en la base de datos
    let imageBase64: string | null = null;
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

    // Conectar a la base de datos
    const db = await connectToDatabase();

    // Consulta de actualización, incluyendo la imagen convertida
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
      fechaNacimiento
        ? new Date(fechaNacimiento).toISOString().split("T")[0]
        : null,
      ciudadRadicacion?.trim() || null,
      genero?.trim() || null,
      direccion?.trim() || null,
      estado?.trim() || null,
      imageBase64, // Se almacena la cadena Base64 de la imagen (o null si no se envió nueva imagen)
      idDocente,
    ];

    console.log("Actualizando docente con:", docenteValues);

    const [docenteResult]: any = await db.execute(docenteQuery, docenteValues);
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
