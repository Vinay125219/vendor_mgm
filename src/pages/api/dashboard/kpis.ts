/**
 * GET /api/v1/dashboard/kpis
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
    let payments;

    if (payload.role === 'vendor' && payload.vendorId) {
      orders = db.getOrders(payload.vendorId);
      payments = db.getPayments(payload.vendorId);
    } else {
      orders = db.getOrders();
      payments = db.getPayments();
    }

    const totalRevenue = payments
      .filter((p) => p.status === 'completed')
      .reduce((sum, p) => sum + p.amount, 0);

    const totalOrders = orders.length;
    const completedOrders = orders.filter((o) => o.status === 'delivered').length;
    const pendingOrders = orders.filter((o) => o.status === 'pending').length;

    return successResponse({
      totalRevenue,
      totalOrders,
      completedOrders,
      pendingOrders,
      conversionRate: totalOrders > 0 ? (completedOrders / totalOrders) * 100 : 0,
    });
  } catch (error) {
    console.error('Get KPIs error:', error);
    return ApiErrors.internalServerError();
  }
};
