import { c as createComponent, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_DDyqfWY9.mjs';
import 'kleur/colors';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
export { renderers } from '../renderers.mjs';

const styles = {
  imageContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "900px",
    // Ajustando el ancho
    height: "800px",
    overflow: "hidden",
    position: "relative"
  },
  formContainer: {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    // Espaciado uniforme entre inputs y botón
    width: "50%"
    // Ancho más amplio para el formulario
  },
  input: {
    padding: "0.8rem",
    fontSize: "1rem",
    borderRadius: "8px",
    border: "1px solid #ccc",
    width: "85%"
    // Asegura que los inputs ocupen todo el ancho del contenedor
  },
  button: {
    padding: "0.8rem",
    fontSize: "1rem",
    color: "white",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  },
  buttonHover: {
    backgroundColor: "#0056b3"
  },
  errorMessage: {
    color: "red",
    fontSize: "1rem",
    marginTop: "1rem"
  }
};
const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usuario, password })
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        window.location.href = "/dashboardDoc";
      } else {
        setError(data.error || "Usuario o contraseña incorrectos.");
      }
    } catch (err) {
      console.error("Error al hacer login:", err);
      setError("Hubo un error al procesar la solicitud.");
    }
  };
  return /* @__PURE__ */ jsxs("div", { style: styles.imageContainer, children: [
    /* @__PURE__ */ jsx("img", { src: "/images/esam-cover.jpeg", alt: "ESAM Cover" }),
    /* @__PURE__ */ jsxs("div", { style: styles.formContainer, children: [
      /* @__PURE__ */ jsxs("form", { onSubmit: handleLogin, children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            placeholder: "Usuario",
            value: usuario,
            onChange: (e) => setUsuario(e.target.value),
            style: styles.input
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "password",
            placeholder: "Contraseña",
            value: password,
            onChange: (e) => setPassword(e.target.value),
            style: styles.input
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            style: styles.button,
            onMouseOver: (e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor,
            onMouseOut: (e) => e.target.style.backgroundColor = styles.button.backgroundColor,
            onClick: handleLogin,
            children: "Iniciar Sesión"
          }
        )
      ] }),
      error && /* @__PURE__ */ jsx("p", { style: styles.errorMessage, children: error }),
      " "
    ] })
  ] });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Componente React para el formulario de login -->${renderComponent($$result, "Login", Login, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/components/login/Login", "client:component-export": "Login" })}`;
}, "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/pages/login/index.astro", undefined);

const $$file = "C:/Users/TIESA/OneDrive/Escritorio/Astrojs-academic/academic/src/pages/login/index.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
