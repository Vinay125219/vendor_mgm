import { v as validateToken, A as ApiErrors, c as createToken, s as successResponse } from './api-response_DnXmo0UI.mjs';

const POST = async (context) => {
  try {
    const authHeader = context.request.headers.get("authorization");
    const payload = validateToken(authHeader);
    if (!payload) {
      return ApiErrors.unauthorized("Invalid token");
    }
    const token = createToken(payload);
    return successResponse({ token });
  } catch (error) {
    console.error("Token refresh error:", error);
    return ApiErrors.internalServerError();
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
