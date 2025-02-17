import{j as e}from"./jsx-runtime.CLpGMVip.js";import{r as a}from"./index.CXuOLBzL.js";const m=({convocatoriaId:r})=>{const[i,l]=a.useState(!1),[c,u]=a.useState(null),[d,p]=a.useState(null),[g,f]=a.useState(!1);a.useEffect(()=>{(async()=>{if(r)try{const t=localStorage.getItem("idDocente");if(!t)return;const s=await(await fetch(`/api/convocatorias/postulantes/${r}?idDocente=${t}`)).json();s.postulantes&&Array.isArray(s.postulantes)&&f(s.postulantes.some(h=>h.idDocente===t))}catch(t){console.error("Error al verificar postulación:",t)}})()},[r]);const b=async()=>{l(!0),u(null),p(null);const n=localStorage.getItem("token"),t=localStorage.getItem("idDocente");if(!n||!t){alert("Debe iniciar sesión primero."),window.location.href="/login";return}try{const o=await fetch("/api/convocatorias/postulantes/create",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`},body:JSON.stringify({idConvocatoria:r,idDocente:t})}),s=await o.json();if(!o.ok)throw new Error(s.error||"Error al realizar la postulación.");p("¡Postulación realizada con éxito!"),f(!0)}catch(o){u(o.message)}finally{l(!1)}};return e.jsxs("div",{children:[g?e.jsx("p",{style:{color:"green",fontWeight:"bold"},children:"¡Ya postulado!!"}):e.jsx("button",{type:"button",className:"postulate-button",onClick:b,disabled:i,children:i?"Enviando...":"POSTULATE YA!"}),c&&e.jsx("p",{style:{color:"red"},children:c}),d&&e.jsx("p",{style:{color:"green"},children:d}),e.jsx("style",{jsx:!0,children:`
        .postulate-button {
          display: inline-block;
          background: #0b5f9a;
          color: white;
          padding: 12px 20px;
          text-align: center;
          border-radius: 8px;
          font-size: 16px;
          text-decoration: none;
          transition: background 0.3s ease, transform 0.3s ease;
        }

        .postulate-button:hover {
          background: #095184;
          transform: scale(1.05);
        }

        .postulate-button:disabled {
          background: #b0c4de;
          cursor: not-allowed;
        }
      `})]})};export{m as default};
