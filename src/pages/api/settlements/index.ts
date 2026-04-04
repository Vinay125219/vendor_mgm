/**
 * GET /api/v1/settlements
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

    let settlements;
    if (payload.role === 'vendor' && payload.vendorId) {
      settlements = db.getSettlements(payload.vendorId);
    } else {
      settlements = db.getSettlements();
    }

    return successResponse({
      data: settlements,
      total: settlements.length,
    });
  } catch (error) {
    console.error('Get settlements error:', error);
    return ApiErrors.internalServerError();
  }
};
