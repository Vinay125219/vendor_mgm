/**
 * GET /api/v1/vendors
 * POST /api/v1/vendors
 */

import type { APIRoute } from 'astro';
import { z } from 'zod';
import { db } from '@/lib/database';
import { validateToken } from '@/lib/token-manager';
import { ApiErrors, successResponse } from '@/lib/api-response';

const CreateVendorSchema = z.object({
  name: z.string().min(2, 'Vendor name must be at least 2 characters'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(10, 'Invalid phone number'),
  businessType: z.string().min(2, 'Business type required'),
  gstNumber: z.string().regex(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/, 'Invalid GST number'),
});

export const GET: APIRoute = async (context) => {
  try {
    const authHeader = context.request.headers.get('authorization');
    const payload = validateToken(authHeader);

    if (!payload) {
      return ApiErrors.unauthorized();
    }

    let vendors;
    if (payload.role === 'vendor' && payload.vendorId) {
      // Vendors can only see their own profile
      vendors = [db.getVendorById(payload.vendorId)].filter(Boolean);
    } else {
      // Admins can see all vendors
      vendors = db.getVendors();
    }

    return successResponse({
      data: vendors,
      total: vendors.length,
    });
  } catch (error) {
    console.error('Get vendors error:', error);
    return ApiErrors.internalServerError();
  }
};

export const POST: APIRoute = async (context) => {
  try {
    const authHeader = context.request.headers.get('authorization');
    const payload = validateToken(authHeader);

    if (!payload) {
      return ApiErrors.unauthorized();
    }

    const body = await context.request.json().catch(() => ({}));

    // Validate input
    const validation = CreateVendorSchema.safeParse(body);
    if (!validation.success) {
      const details = validation.error.errors.map((e) => ({
        field: e.path[0],
        message: e.message,
      }));
      return ApiErrors.badRequest('Validation failed', details);
    }

    // Check if email already exists
    const existingUser = db.getUserByEmail(validation.data.email);
    if (existingUser) {
      return ApiErrors.conflict('Email already registered');
    }

    // Create vendor
    const vendor = db.createVendor({
      ...validation.data,
      status: 'pending',
      onboardingStep: 1,
      userId: payload.userId,
    });

    return successResponse(vendor, 201);
  } catch (error) {
    console.error('Create vendor error:', error);
    return ApiErrors.internalServerError();
  }
};
