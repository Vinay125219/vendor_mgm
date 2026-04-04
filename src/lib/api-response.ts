/**
 * API Response Utilities
 * Standardized response formatting for all API endpoints
 */

import type { APIRoute } from 'astro';

export interface ApiResponse<T = any> {
  ok: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
}

/**
 * Send success response
 */
export function successResponse<T>(data: T, status = 200): Response {
  return new Response(
    JSON.stringify({
      ok: true,
      data,
    } as ApiResponse<T>),
    {
      status,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}

/**
 * Send error response
 */
export function errorResponse(
  code: string,
  message: string,
  status = 400,
  details?: any
): Response {
  return new Response(
    JSON.stringify({
      ok: false,
      error: {
        code,
        message,
        details,
      },
    } as ApiResponse),
    {
      status,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}

/**
 * Common error responses
 */
export const ApiErrors = {
  unauthorized: (message = 'Unauthorized') => 
    errorResponse('UNAUTHORIZED', message, 401),
  forbidden: (message = 'Forbidden') => 
    errorResponse('FORBIDDEN', message, 403),
  notFound: (message = 'Not found') => 
    errorResponse('NOT_FOUND', message, 404),
  badRequest: (message = 'Bad request', details?: any) => 
    errorResponse('BAD_REQUEST', message, 400, details),
  conflict: (message = 'Conflict', details?: any) => 
    errorResponse('CONFLICT', message, 409, details),
  unprocessableEntity: (message = 'Unprocessable entity', details?: any) => 
    errorResponse('UNPROCESSABLE_ENTITY', message, 422, details),
  internalServerError: (message = 'Internal server error') => 
    errorResponse('INTERNAL_SERVER_ERROR', message, 500),
};

/**
 * Type-safe route handler
 */
export function createRouteHandler(
  handler: (req: Request) => Promise<Response>
): APIRoute {
  return async (context) => {
    try {
      return await handler(context.request);
    } catch (error) {
      console.error('Route handler error:', error);
      return ApiErrors.internalServerError();
    }
  };
}
