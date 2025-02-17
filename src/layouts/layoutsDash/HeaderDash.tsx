import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import "./headerdash.css"; 

interface DecodedToken {
  idDocente: string;
  nombre: string;
  apellidoPaterno: string;
}

export const HeaderDash: React.FC = () => {
  const [idDocente, setidDocente] = useState<string | null>(null);
  const [docenteNombre, setDocenteNombre] = useState<string | null>(null);
  const [docenteApellidoPaterno, setDocenteApellidoPaterno] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
      return;
    }
    try {
      const decodedToken = jwt_decode<DecodedToken>(token);
      const { idDocente, nombre, apellidoPaterno } = decodedToken;
      localStorage.setItem("idDocente", idDocente);
      localStorage.setItem("docenteNombre", nombre);
      localStorage.setItem("docenteApellidoPaterno", apellidoPaterno);

      setidDocente(idDocente);
      setDocenteNombre(nombre);
      setDocenteApellidoPaterno(apellidoPaterno);
    } catch (error) {
      console.error("Error al decodificar el token:", error);
      window.location.href = "/login";
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("idDocente");
    localStorage.removeItem("docenteNombre");
    localStorage.removeItem("docenteApellidoPaterno");
    window.location.href = "/login";
  };

  return (
    <>
      <header className="header-dash">
        <div className="header-left">
          {/* Logo para desktop */}
          <a className="header-logo-desktop" href="/dashboard" />
          {/* Logo y título para mobile */}
          <a className="header-logo-mobile" href="/dashboard" />
          <span className="header-title-mobile">Dashboard</span>
        </div>
        <button className="header-logout-button" onClick={handleLogout}>
          Cerrar Sesión
        </button>
      </header>
      <div className="header-bar" />
    </>
  );
};

export default HeaderDash;
