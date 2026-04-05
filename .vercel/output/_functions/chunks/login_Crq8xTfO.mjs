import bcrypt from 'bcrypt';
import { z } from 'zod';
import { d as db } from './database_VfOCB4IN.mjs';
import { A as ApiErrors, c as createToken, s as successResponse } from './api-response_DnXmo0UI.mjs';

const LoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters")
});
const POST = async (context) => {
  try {
    const body = await context.request.json().catch(() => ({}));
    const validation = LoginSchema.safeParse(body);
    if (!validation.success) {
      const details = validation.error.errors.map((e) => ({
        field: e.path[0],
        message: e.message
      }));
      return ApiErrors.badRequest("Validation failed", details);
    }
    const { email, password } = validation.data;
    const user = db.getUserByEmail(email);
    if (!user) {
      return ApiErrors.unauthorized("Invalid email or password");
    }
    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
    if (!isPasswordValid) {
      return ApiErrors.unauthorized("Invalid email or password");
    }
    const token = createToken({
      userId: user.id,
      email: user.email,
      role: user.role,
      vendorId: user.vendorId
    });
    return successResponse({
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        vendorId: user.vendorId
      }
    });
  } catch (error) {
    console.error("Login error:", error);
    return ApiErrors.internalServerError();
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
