import { z } from 'zod';
import { d as db } from './database_Cd7lDf0Q.mjs';
import { v as validateToken, A as ApiErrors, s as successResponse } from './api-response_DnXmo0UI.mjs';

const CreateVendorSchema = z.object({
  name: z.string().min(2, "Vendor name must be at least 2 characters"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Invalid phone number"),
  businessType: z.string().min(2, "Business type required"),
  gstNumber: z.string().regex(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/, "Invalid GST number")
});
const GET = async (context) => {
  try {
    const authHeader = context.request.headers.get("authorization");
    const payload = validateToken(authHeader);
    if (!payload) {
      return ApiErrors.unauthorized();
    }
    let vendors;
    if (payload.role === "vendor" && payload.vendorId) {
      vendors = [db.getVendorById(payload.vendorId)].filter(Boolean);
    } else {
      vendors = db.getVendors();
    }
    return successResponse({
      data: vendors,
      total: vendors.length
    });
  } catch (error) {
    console.error("Get vendors error:", error);
    return ApiErrors.internalServerError();
  }
};
const POST = async (context) => {
  try {
    const authHeader = context.request.headers.get("authorization");
    const payload = validateToken(authHeader);
    if (!payload) {
      return ApiErrors.unauthorized();
    }
    const body = await context.request.json().catch(() => ({}));
    const validation = CreateVendorSchema.safeParse(body);
    if (!validation.success) {
      const details = validation.error.errors.map((e) => ({
        field: e.path[0],
        message: e.message
      }));
      return ApiErrors.badRequest("Validation failed", details);
    }
    const existingUser = db.getUserByEmail(validation.data.email);
    if (existingUser) {
      return ApiErrors.conflict("Email already registered");
    }
    const vendor = db.createVendor({
      ...validation.data,
      status: "pending",
      onboardingStep: 1,
      userId: payload.userId
    });
    return successResponse(vendor, 201);
  } catch (error) {
    console.error("Create vendor error:", error);
    return ApiErrors.internalServerError();
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
