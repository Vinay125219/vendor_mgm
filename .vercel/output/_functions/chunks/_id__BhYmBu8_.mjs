import { z } from 'zod';
import { d as db } from './database_VfOCB4IN.mjs';
import { v as validateToken, A as ApiErrors, s as successResponse } from './api-response_DnXmo0UI.mjs';

const UpdateVendorSchema = z.object({
  name: z.string().min(2).optional(),
  phone: z.string().optional(),
  businessType: z.string().optional(),
  status: z.enum(["pending", "approved", "rejected", "suspended"]).optional(),
  onboardingStep: z.number().int().optional()
}).strict();
const GET = async (context) => {
  try {
    const authHeader = context.request.headers.get("authorization");
    const payload = validateToken(authHeader);
    if (!payload) {
      return ApiErrors.unauthorized();
    }
    const vendorId = context.params.id;
    if (!vendorId) {
      return ApiErrors.badRequest("Vendor ID is required");
    }
    const vendor = db.getVendorById(vendorId);
    if (!vendor) {
      return ApiErrors.notFound("Vendor not found");
    }
    if (payload.role === "vendor" && payload.vendorId !== vendorId) {
      return ApiErrors.forbidden();
    }
    return successResponse(vendor);
  } catch (error) {
    console.error("Get vendor error:", error);
    return ApiErrors.internalServerError();
  }
};
const PUT = async (context) => {
  try {
    const authHeader = context.request.headers.get("authorization");
    const payload = validateToken(authHeader);
    if (!payload) {
      return ApiErrors.unauthorized();
    }
    const vendorId = context.params.id;
    if (!vendorId) {
      return ApiErrors.badRequest("Vendor ID is required");
    }
    const vendor = db.getVendorById(vendorId);
    if (!vendor) {
      return ApiErrors.notFound("Vendor not found");
    }
    if (payload.role === "vendor" && payload.vendorId !== vendorId) {
      return ApiErrors.forbidden();
    }
    const body = await context.request.json().catch(() => ({}));
    const validation = UpdateVendorSchema.safeParse(body);
    if (!validation.success) {
      const details = validation.error.errors.map((e) => ({
        field: e.path[0],
        message: e.message
      }));
      return ApiErrors.badRequest("Validation failed", details);
    }
    const updated = db.updateVendor(vendorId, validation.data);
    if (!updated) {
      return ApiErrors.internalServerError();
    }
    return successResponse(updated);
  } catch (error) {
    console.error("Update vendor error:", error);
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
