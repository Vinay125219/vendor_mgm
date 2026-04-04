/**
 * GET /api/v1/orders/[id]
 * PUT /api/v1/orders/[id]
 */

import type { APIRoute } from 'astro';
import { z } from 'zod';
import { db } from '@/lib/database';
import { validateToken } from '@/lib/token-manager';
import { ApiErrors, successResponse } from '@/lib/api-response';

const UpdateOrderSchema = z.object({
  status: z.enum(['pending', 'confirmed', 'shipped', 'delivered', 'cancelled']).optional(),
  fulfillmentStage: z.enum(['pending', 'processing', 'ready', 'dispatched']).optional(),
  paymentStatus: z.enum(['pending', 'completed', 'failed']).optional(),
});

export const GET: APIRoute = async (context) => {
  try {
    const authHeader = context.request.headers.get('authorization');
    const payload = validateToken(authHeader);

    if (!payload) {
      return ApiErrors.unauthorized();
    }

    const orderId = context.params.id;
    if (!orderId) {
      return ApiErrors.badRequest('Order ID is required');
    }

    const order = db.getOrderById(orderId);
    if (!order) {
      return ApiErrors.notFound('Order not found');
    }

    // Check authorization
    if (payload.role === 'vendor' && order.vendorId !== payload.vendorId) {
      return ApiErrors.forbidden();
    }

    return successResponse(order);
  } catch (error) {
    console.error('Get order error:', error);
    return ApiErrors.internalServerError();
  }
};

export const PUT: APIRoute = async (context) => {
  try {
    const authHeader = context.request.headers.get('authorization');
    const payload = validateToken(authHeader);

    if (!payload || payload.role !== 'vendor') {
      return ApiErrors.unauthorized();
    }

    const orderId = context.params.id;
    if (!orderId) {
      return ApiErrors.badRequest('Order ID is required');
    }

    const order = db.getOrderById(orderId);
    if (!order) {
      return ApiErrors.notFound('Order not found');
    }

    // Check authorization
    if (order.vendorId !== payload.vendorId) {
      return ApiErrors.forbidden();
    }

    const body = await context.request.json().catch(() => ({}));

    // Validate input
    const validation = UpdateOrderSchema.safeParse(body);
    if (!validation.success) {
      const details = validation.error.errors.map((e) => ({
        field: e.path[0],
        message: e.message,
      }));
      return ApiErrors.badRequest('Validation failed', details);
    }

    const updated = db.updateOrder(orderId, validation.data);
    if (!updated) {
      return ApiErrors.internalServerError();
    }

    return successResponse(updated);
  } catch (error) {
    console.error('Update order error:', error);
    return ApiErrors.internalServerError();
  }
};
