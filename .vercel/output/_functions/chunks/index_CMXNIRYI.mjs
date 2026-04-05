import { d as db } from './database_VfOCB4IN.mjs';
import { v as validateToken, A as ApiErrors, s as successResponse } from './api-response_DnXmo0UI.mjs';

const GET = async (context) => {
  try {
    const authHeader = context.request.headers.get("authorization");
    const payload = validateToken(authHeader);
    if (!payload) {
      return ApiErrors.unauthorized();
    }
    let orders;
    if (payload.role === "vendor" && payload.vendorId) {
      orders = db.getOrders(payload.vendorId);
    } else {
      orders = db.getOrders();
    }
    return successResponse({
      data: orders,
      total: orders.length
    });
  } catch (error) {
    console.error("Get orders error:", error);
    return ApiErrors.internalServerError();
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
