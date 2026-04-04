/**
 * GET /api/v1/vendors/[id]
 * PUT /api/v1/vendors/[id]
 */

import type { APIRoute } from 'astro';
import { z } from 'zod';
import { db } from '@/lib/database';
import { validateToken } from '@/lib/token-manager';
import { ApiErrors, successResponse } from '@/lib/api-response';

const UpdateVendorSchema = z.object({
  name: z.string().min(2).optional(),
  phone: z.string().optional(),
  businessType: z.string().optional(),
  status: z.enum(['pending', 'approved', 'rejected', 'suspended']).optional(),
  onboardingStep: z.number().int().optional(),
}).strict();

export const GET: APIRoute = async (context) => {
  try {
    const authHeader = context.request.headers.get('authorization');
    const payload = validateToken(authHeader);

    if (!payload) {
      return ApiErrors.unauthorized();
    }

    const vendorId = context.params.id;
    if (!vendorId) {
      return ApiErrors.badRequest('Vendor ID is required');
    }

    const vendor = db.getVendorById(vendorId);
    if (!vendor) {
      return ApiErrors.notFound('Vendor not found');
    }

    // Check authorization
    if (payload.role === 'vendor' && payload.vendorId !== vendorId) {
      return ApiErrors.forbidden();
    }

    return successResponse(vendor);
  } catch (error) {
    console.error('Get vendor error:', error);
    return ApiErrors.internalServerError();
  }
};

export const PUT: APIRoute = async (context) => {
  try {
    const authHeader = context.request.headers.get('authorization');
    const payload = validateToken(authHeader);

    if (!payload) {
      return ApiErrors.unauthorized();
    }

    const vendorId = context.params.id;
    if (!vendorId) {
      return ApiErrors.badRequest('Vendor ID is required');
    }

    const vendor = db.getVendorById(vendorId);
    if (!vendor) {
      return ApiErrors.notFound('Vendor not found');
    }

    // Check authorization
    if (payload.role === 'vendor' && payload.vendorId !== vendorId) {
      return ApiErrors.forbidden();
    }

    const body = await context.request.json().catch(() => ({}));

    // Validate input
    const validation = UpdateVendorSchema.safeParse(body);
    if (!validation.success) {
      const details = validation.error.errors.map((e) => ({
        field: e.path[0],
        message: e.message,
      }));
      return ApiErrors.badRequest('Validation failed', details);
    }

    const updated = db.updateVendor(vendorId, validation.data);
    if (!updated) {
      return ApiErrors.internalServerError();
    }

    return successResponse(updated);
  } catch (error) {
    console.error('Update vendor error:', error);
    return ApiErrors.internalServerError();
  }
};
