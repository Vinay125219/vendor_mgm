/**
 * GET /api/v1/inventory
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

    let logs;
    if (payload.role === 'vendor' && payload.vendorId) {
      logs = db.getInventoryLogs(payload.vendorId);
    } else {
      logs = db.getInventoryLogs();
    }

    return successResponse({
      data: logs,
      total: logs.length,
    });
  } catch (error) {
    console.error('Get inventory logs error:', error);
    return ApiErrors.internalServerError();
  }
};
