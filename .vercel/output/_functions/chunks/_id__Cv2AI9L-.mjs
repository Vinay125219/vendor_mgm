import { z } from 'zod';
import { d as db } from './database_Cd7lDf0Q.mjs';
import { v as validateToken, A as ApiErrors, s as successResponse } from './api-response_DnXmo0UI.mjs';

const UpdateProductSchema = z.object({
  name: z.string().min(2).optional(),
  description: z.string().min(10).optional(),
  category: z.string().optional(),
  price: z.number().positive().optional(),
  stock: z.number().int().nonnegative().optional(),
  sku: z.string().optional(),
  images: z.array(z.string().url()).optional(),
  status: z.enum(["draft", "published", "archived"]).optional()
});
const GET = async (context) => {
  try {
    const authHeader = context.request.headers.get("authorization");
    const payload = validateToken(authHeader);
    if (!payload) {
      return ApiErrors.unauthorized();
    }
    const productId = context.params.id;
    if (!productId) {
      return ApiErrors.badRequest("Product ID is required");
    }
    const product = db.getProductById(productId);
    if (!product) {
      return ApiErrors.notFound("Product not found");
    }
    if (payload.role === "vendor" && product.vendorId !== payload.vendorId) {
      return ApiErrors.forbidden();
    }
    return successResponse(product);
  } catch (error) {
    console.error("Get product error:", error);
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
    const productId = context.params.id;
    if (!productId) {
      return ApiErrors.badRequest("Product ID is required");
    }
    const product = db.getProductById(productId);
    if (!product) {
      return ApiErrors.notFound("Product not found");
    }
    if (product.vendorId !== payload.vendorId) {
      return ApiErrors.forbidden();
    }
    const body = await context.request.json().catch(() => ({}));
    const validation = UpdateProductSchema.safeParse(body);
    if (!validation.success) {
      const details = validation.error.errors.map((e) => ({
        field: e.path[0],
        message: e.message
      }));
      return ApiErrors.badRequest("Validation failed", details);
    }
    const updated = db.updateProduct(productId, validation.data);
    if (!updated) {
      return ApiErrors.internalServerError();
    }
    return successResponse(updated);
  } catch (error) {
    console.error("Update product error:", error);
    return ApiErrors.internalServerError();
  }
};
const DELETE = async (context) => {
  try {
    const authHeader = context.request.headers.get("authorization");
    const payload = validateToken(authHeader);
    if (!payload || payload.role !== "vendor") {
      return ApiErrors.unauthorized();
    }
    const productId = context.params.id;
    if (!productId) {
      return ApiErrors.badRequest("Product ID is required");
    }
    const product = db.getProductById(productId);
    if (!product) {
      return ApiErrors.notFound("Product not found");
    }
    if (product.vendorId !== payload.vendorId) {
      return ApiErrors.forbidden();
    }
    db.deleteProduct(productId);
    return successResponse({ id: productId });
  } catch (error) {
    console.error("Delete product error:", error);
    return ApiErrors.internalServerError();
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  GET,
  PUT
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
