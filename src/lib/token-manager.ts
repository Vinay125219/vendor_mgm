/**
 * JWT Token Management
 * Handles token creation, validation, and expiration
 */

import jwt from 'jsonwebtoken';
import { config } from './backend-config';

export interface TokenPayload {
  userId: string;
  email: string;
  role: 'admin' | 'vendor' | 'super-admin';
  vendorId?: string;
}

export interface TokenResponse {
  accessToken: string;
  expiresAt: number;
}

/**
 * Create a JWT token
 */
export function createToken(payload: TokenPayload): TokenResponse {
  const expiresAt = Math.floor(Date.now() / 1000) + config.jwtExpiration;

  const token = jwt.sign(
    { ...payload, exp: expiresAt },
    config.jwtSecret,
    { algorithm: 'HS256' }
  );

  return {
    accessToken: token,
    expiresAt: expiresAt * 1000, // Convert to milliseconds for frontend
  };
}

/**
 * Verify and decode a JWT token
 */
export function verifyToken(token: string): TokenPayload | null {
  try {
    const decoded = jwt.verify(token, config.jwtSecret) as jwt.JwtPayload;
    return {
      userId: decoded.userId,
      email: decoded.email,
      role: decoded.role,
      vendorId: decoded.vendorId,
    };
  } catch (error) {
    console.error('Token verification failed:', error);
    return null;
  }
}

/**
 * Extract token from Authorization header
 */
export function extractToken(authHeader?: string): string | null {
  if (!authHeader) return null;

  const parts = authHeader.split(' ');
  if (parts.length !== 2 || parts[0] !== 'Bearer') {
    return null;
  }

  return parts[1];
}

/**
 * Validate token and return payload
 */
export function validateToken(authHeader?: string | null): TokenPayload | null {
  const token = extractToken(authHeader ?? undefined);
  if (!token) return null;
  return verifyToken(token);
}
