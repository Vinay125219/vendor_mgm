/**
 * GET /api/v1/disputes
 */

import type { APIRoute } from 'astro';
import { db } from '@/lib/database';
import { validateToken } from '@/lib/token-manager';
import { ApiErrors, successResponse } from '@/lib/api-response';

export const GET: APIRoute = async (context) => {
  try {
    const authHeader = context.request.headers.get('authorization');
    const payload = validateToken(authHeader);

    if (!payload) {
      return ApiErrors.unauthorized();
    }

    let disputes;
    if (payload.role === 'vendor' && payload.vendorId) {
      disputes = db.getDisputes(payload.vendorId);
    } else {
      disputes = db.getDisputes();
    }

    return successResponse({
      data: disputes,
      total: disputes.length,
    });
  } catch (error) {
    console.error('Get disputes error:', error);
    return ApiErrors.internalServerError();
  }
};
