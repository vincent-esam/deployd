import { c as connectToDatabase } from '../../chunks/dbConect_BXvRdf3y.mjs';
import bcrypt from 'bcryptjs';
export { renderers } from '../../renderers.mjs';

async function POST({ request }) {
  try {
    const formData = await request.formData();
    const usuario = formData.get("usuario")?.toString();
    const password = formData.get("password")?.toString();
    const nombres = formData.get("nombres")?.toString();
    const apellidoPaterno = formData.get("apellidoPaterno")?.toString();
    const apellidoMaterno = formData.get("apellidoMaterno")?.toString();
    const correo = formData.get("correo")?.toString();
    const ciudadRadicacion = formData.get("ciudadRadicacion")?.toString();
    const idPais = formData.get("idPais")?.toString();
    const telefono = formData.get("telefono")?.toString();
    const fechaNacimiento = formData.get("fechaNacimiento")?.toString();
    const idAreaInteres = formData.get("idAreaInteres")?.toString();
    const idSector = formData.get("idSector")?.toString();
    const imagen = formData.get("fotografia");
    console.log("Imagen recibida en el backend:", imagen);
    if (!usuario || !password || !nombres || !apellidoPaterno || !correo || !ciudadRadicacion || !idPais || !telefono || !fechaNacimiento || !idAreaInteres || !idSector) {
      return new Response(
        JSON.stringify({ error: "Faltan campos obligatorios" }),
        { status: 400 }
      );
    }
    const hashedPassword = await bcrypt.hash(password.trim(), 10);
    let imageBase64 = null;
    if (imagen) {
      console.log("Nombre del archivo:", imagen.name);
      console.log("Tipo de archivo:", imagen.type);
      try {
        const buffer = Buffer.from(await imagen.arrayBuffer());
        imageBase64 = buffer.toString("base64");
        console.log("Imagen convertida a Base64.");
      } catch (err) {
        console.error("Error al convertir la imagen:", err);
        return new Response(
          JSON.stringify({ error: "Error al procesar la imagen" }),
          { status: 500 }
        );
      }
    }
    const db = await connectToDatabase();
    const query = `
      INSERT INTO docentes (
        usuario, password, nombres, apellidoPaterno, apellidoMaterno, correo,
        ciudadRadicacion, idPais, telefono, fechaNacimiento,
        idAreaInteres, idSector, fotografia, estado
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [
      usuario.trim(),
      hashedPassword,
      // Contraseña encriptada
      nombres.trim(),
      apellidoPaterno.trim(),
      apellidoMaterno?.trim() || null,
      correo.trim().toLowerCase(),
      ciudadRadicacion.trim(),
      Number(idPais),
      telefono.trim(),
      fechaNacimiento.trim(),
      Number(idAreaInteres),
      Number(idSector),
      imageBase64,
      // Se almacena la cadena Base64 (o null si no se subió imagen)
      "postulante"
    ];
    await db.execute(query, values);
    db.end();
    return new Response(
      JSON.stringify({ message: "Docente insertado correctamente" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: "Error al insertar datos" }), {
      status: 500
    });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
