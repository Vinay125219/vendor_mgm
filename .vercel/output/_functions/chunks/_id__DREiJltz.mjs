import { z } from 'zod';
import { d as db } from './database_Cd7lDf0Q.mjs';
import { v as validateToken, A as ApiErrors, s as successResponse } from './api-response_DnXmo0UI.mjs';

const UpdateOrderSchema = z.object({
  status: z.enum(["pending", "confirmed", "shipped", "delivered", "cancelled"]).optional(),
  fulfillmentStage: z.enum(["pending", "processing", "ready", "dispatched"]).optional(),
  paymentStatus: z.enum(["pending", "completed", "failed"]).optional()
});
const GET = async (context) => {
  try {
    const authHeader = context.request.headers.get("authorization");
    const payload = validateToken(authHeader);
    if (!payload) {
      return ApiErrors.unauthorized();
    }
    const orderId = context.params.id;
    if (!orderId) {
      return ApiErrors.badRequest("Order ID is required");
    }
    const order = db.getOrderById(orderId);
    if (!order) {
      return ApiErrors.notFound("Order not found");
    }
    if (payload.role === "vendor" && order.vendorId !== payload.vendorId) {
      return ApiErrors.forbidden();
    }
    return successResponse(order);
  } catch (error) {
    console.error("Get order error:", error);
    return ApiErrors.internalServerError();
  }
};
const PUT = async (context) => {
  try {
    const authHeader = context.request.headers.get("authorization");
    const payload = validateToken(authHeader);
    if (!payload || payload.role !== "vendor") {
      return ApiErrors.unauthorized();
    }
    const orderId = context.params.id;
    if (!orderId) {
      return ApiErrors.badRequest("Order ID is required");
    }
    const order = db.getOrderById(orderId);
    if (!order) {
      return ApiErrors.notFound("Order not found");
    }
    if (order.vendorId !== payload.vendorId) {
      return ApiErrors.forbidden();
    }
    const body = await context.request.json().catch(() => ({}));
    const validation = UpdateOrderSchema.safeParse(body);
    if (!validation.success) {
      const details = validation.error.errors.map((e) => ({
        field: e.path[0],
        message: e.message
      }));
      return ApiErrors.badRequest("Validation failed", details);
    }
    const updated = db.updateOrder(orderId, validation.data);
    if (!updated) {
      return ApiErrors.internalServerError();
    }
    return successResponse(updated);
  } catch (error) {
    console.error("Update order error:", error);
    return ApiErrors.internalServerError();
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  PUT
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
