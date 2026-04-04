/**
 * POST /api/v1/auth/refresh
 * Refresh access token
 */

import type { APIRoute } from 'astro';
import { validateToken, createToken } from '@/lib/token-manager';
import { ApiErrors, successResponse } from '@/lib/api-response';

export const POST: APIRoute = async (context) => {
  try {
    const authHeader = context.request.headers.get('authorization');
    const payload = validateToken(authHeader);

    if (!payload) {
      return ApiErrors.unauthorized('Invalid token');
    }

    // Create new token
    const token = createToken(payload);

    return successResponse({ token });
  } catch (error) {
    console.error('Token refresh error:', error);
    return ApiErrors.internalServerError();
  }
};
