import mysql from 'mysql2/promise';

async function connectToDatabase() {
  try {
    const connection = await mysql.createConnection({
      host: "149.28.46.53",
      user: "acadcbba_vins",
      password: "Vins8039368",
      database: "acadcbba_esamdb"
    });
    console.log("Conexión a la base de datos establecida exitosamente.");
    return connection;
  } catch (error) {
    console.error("Error al conectar con la base de datos:", error.message);
    throw error;
  }
}

export { connectToDatabase as c };
