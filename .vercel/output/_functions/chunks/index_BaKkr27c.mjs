import { d as db } from './database_Cd7lDf0Q.mjs';
import { v as validateToken, A as ApiErrors, s as successResponse } from './api-response_DnXmo0UI.mjs';

const GET = async (context) => {
  try {
    const authHeader = context.request.headers.get("authorization");
    const payload = validateToken(authHeader);
    if (!payload) {
      return ApiErrors.unauthorized();
    }
    let disputes;
    if (payload.role === "vendor" && payload.vendorId) {
      disputes = db.getDisputes(payload.vendorId);
    } else {
      disputes = db.getDisputes();
    }
    return successResponse({
      data: disputes,
      total: disputes.length
    });
  } catch (error) {
    console.error("Get disputes error:", error);
    return ApiErrors.internalServerError();
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
