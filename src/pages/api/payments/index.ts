/**
 * GET /api/v1/payments
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

    let payments;
    if (payload.role === 'vendor' && payload.vendorId) {
      payments = db.getPayments(payload.vendorId);
    } else {
      payments = db.getPayments();
    }

    return successResponse({
      data: payments,
      total: payments.length,
    });
  } catch (error) {
    console.error('Get payments error:', error);
    return ApiErrors.internalServerError();
  }
};
