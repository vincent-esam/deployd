import { connectToDatabase } from "../../utils/dbConect";
import type { APIContext } from "astro";
import bcrypt from "bcryptjs";

export async function POST({ request }: APIContext) {
  try {
    const formData = await request.formData();
    // Extraer los datos del formulario
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
    const imagen = formData.get("fotografia") as File | null;
    console.log("Imagen recibida en el backend:", imagen);

    // Validar los campos requeridos
    if (
      !usuario ||
      !password ||
      !nombres ||
      !apellidoPaterno ||
      !correo ||
      !ciudadRadicacion ||
      !idPais ||
      !telefono ||
      !fechaNacimiento ||
      !idAreaInteres ||
      !idSector
    ) {
      return new Response(
        JSON.stringify({ error: "Faltan campos obligatorios" }),
        { status: 400 }
      );
    }

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password.trim(), 10);

    // Convertir la imagen a Base64 para almacenar en la base de datos
    let imageBase64: string | null = null;
    if (imagen) {
      console.log("Nombre del archivo:", imagen.name);
      console.log("Tipo de archivo:", imagen.type);
      try {
        const buffer = Buffer.from(await imagen.arrayBuffer());
        // Convertir el Buffer a cadena en Base64
        imageBase64 = buffer.toString("base64");
        // Opcional: si quieres almacenar la información del tipo MIME junto con la imagen,
        // puedes concatenarlo de la siguiente manera:
        // imageBase64 = `data:${imagen.type};base64,` + imageBase64;
        console.log("Imagen convertida a Base64.");
      } catch (err) {
        console.error("Error al convertir la imagen:", err);
        return new Response(
          JSON.stringify({ error: "Error al procesar la imagen" }),
          { status: 500 }
        );
      }
    }

    // Conectar a la base de datos e insertar los datos
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
      hashedPassword, // Contraseña encriptada
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
      imageBase64, // Se almacena la cadena Base64 (o null si no se subió imagen)
      "postulante",
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
      status: 500,
    });
  }
}
