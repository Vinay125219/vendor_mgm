/**
 * GET /api/v1/support
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

    let tickets;
    if (payload.role === 'vendor' && payload.vendorId) {
      tickets = db.getSupportTickets(payload.vendorId);
    } else {
      tickets = db.getSupportTickets();
    }

    return successResponse({
      data: tickets,
      total: tickets.length,
    });
  } catch (error) {
    console.error('Get support tickets error:', error);
    return ApiErrors.internalServerError();
  }
};
