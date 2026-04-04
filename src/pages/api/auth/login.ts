/**
 * POST /api/v1/auth/login
 * User login endpoint
 */

import type { APIRoute } from 'astro';
import bcrypt from 'bcrypt';
import { z } from 'zod';
import { db } from '@/lib/database';
import { createToken } from '@/lib/token-manager';
import { ApiErrors, successResponse } from '@/lib/api-response';

const LoginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const POST: APIRoute = async (context) => {
  try {
    const body = await context.request.json().catch(() => ({}));

    // Validate input
    const validation = LoginSchema.safeParse(body);
    if (!validation.success) {
      const details = validation.error.errors.map((e) => ({
        field: e.path[0],
        message: e.message,
      }));
      return ApiErrors.badRequest('Validation failed', details);
    }

    const { email, password } = validation.data;

    // Find user by email
    const user = db.getUserByEmail(email);
    if (!user) {
      return ApiErrors.unauthorized('Invalid email or password');
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
    if (!isPasswordValid) {
      return ApiErrors.unauthorized('Invalid email or password');
    }

    // Create token
    const token = createToken({
      userId: user.id,
      email: user.email,
      role: user.role,
      vendorId: user.vendorId,
    });

    return successResponse({
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        vendorId: user.vendorId,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    return ApiErrors.internalServerError();
  }
};
