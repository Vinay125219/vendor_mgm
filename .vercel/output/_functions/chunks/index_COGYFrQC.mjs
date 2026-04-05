import { z } from 'zod';
import { d as db } from './database_VfOCB4IN.mjs';
import { v as validateToken, A as ApiErrors, s as successResponse } from './api-response_DnXmo0UI.mjs';

const CreateProductSchema = z.object({
  name: z.string().min(2, "Product name required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  category: z.string().min(2, "Category required"),
  price: z.number().positive("Price must be positive"),
  stock: z.number().int().nonnegative("Stock must be non-negative"),
  sku: z.string().min(3, "SKU required"),
  images: z.array(z.string().url()).optional()
});
const GET = async (context) => {
  try {
    const authHeader = context.request.headers.get("authorization");
    const payload = validateToken(authHeader);
    if (!payload) {
      return ApiErrors.unauthorized();
    }
    let products;
    if (payload.role === "vendor" && payload.vendorId) {
      products = db.getProducts(payload.vendorId);
    } else {
      products = db.getProducts();
    }
    return successResponse({
      data: products,
      total: products.length
    });
  } catch (error) {
    console.error("Get products error:", error);
    return ApiErrors.internalServerError();
  }
};
const POST = async (context) => {
  try {
    const authHeader = context.request.headers.get("authorization");
    const payload = validateToken(authHeader);
    if (!payload || payload.role !== "vendor") {
      return ApiErrors.unauthorized("Only vendors can create products");
    }
    if (!payload.vendorId) {
      return ApiErrors.forbidden("Vendor ID not found");
    }
    const body = await context.request.json().catch(() => ({}));
    const validation = CreateProductSchema.safeParse(body);
    if (!validation.success) {
      const details = validation.error.errors.map((e) => ({
        field: e.path[0],
        message: e.message
      }));
      return ApiErrors.badRequest("Validation failed", details);
    }
    const product = db.createProduct({
      ...validation.data,
      vendorId: payload.vendorId,
      status: "draft",
      images: validation.data.images || []
    });
    return successResponse(product, 201);
  } catch (error) {
    console.error("Create product error:", error);
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
