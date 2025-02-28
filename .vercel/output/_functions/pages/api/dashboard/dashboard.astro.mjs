import { a as authenticateToken } from '../../../chunks/auth_Ct2uN5AV.mjs';
export { renderers } from '../../../renderers.mjs';

async function GET({ request }) {
  const { success, response } = authenticateToken(request);
  if (!success) {
    return response;
  }
  return new Response(JSON.stringify({ message: "Bienvenido al dashboard." }), { status: 200 });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
