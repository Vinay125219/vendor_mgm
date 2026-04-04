/**
 * GET /api/v1/orders
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

    let orders;
    if (payload.role === 'vendor' && payload.vendorId) {
      orders = db.getOrders(payload.vendorId);
    } else {
      orders = db.getOrders();
    }

    return successResponse({
      data: orders,
      total: orders.length,
    });
  } catch (error) {
    console.error('Get orders error:', error);
    return ApiErrors.internalServerError();
  }
};
