import bcrypt from 'bcryptjs';
import { c as connectToDatabase } from './dbConect_Be3anmNA.mjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = "tu_clave_secreta";
async function POST({ request }) {
  try {
    const body = await request.json();
    const { usuario, password } = body;
    const db = await connectToDatabase();
    const query = "SELECT * FROM docentes WHERE usuario = ?";
    const [results] = await db.query(query, [usuario]);
    if (results.length === 0) {
      throw new Error("Usuario no encontrado");
    }
    const docente = results[0];
    const match = await bcrypt.compare(password, docente.password);
    if (!match) {
      throw new Error("Contraseña incorrecta");
    }
    const token = jwt.sign(
      {
        idDocente: docente.idDocente,
        email: docente.usuario,
        nombre: docente.nombres,
        apellidoPaterno: docente.apellidoPaterno
        // Almacena el nombre del docente
      },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
    return new Response(
      JSON.stringify({ token }),
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof Error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 400 });
    }
    return new Response(JSON.stringify({ error: "Error desconocido" }), { status: 400 });
  }
}
function authenticateToken(request) {
  const authHeader = request.headers.get("authorization");
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return {
      success: false,
      response: new Response(JSON.stringify({ error: "Acceso denegado. No se proporcionó un token." }), { status: 401 })
    };
  }
  try {
    const user = jwt.verify(token, JWT_SECRET);
    return { success: true, user };
  } catch (error) {
    return {
      success: false,
      response: new Response(JSON.stringify({ error: "Token no válido." }), { status: 403 })
    };
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  authenticateToken
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _, authenticateToken as a };
