import type { UserRole } from '@/types';
import { isUserRole } from '@/lib/rbac';

const TOKEN_KEY = 'vs_auth_token';
const ROLE_KEY = 'vs_user_role';
const EMAIL_KEY = 'vs_user_email';
const EXPIRES_KEY = 'vs_token_expires';

export type AuthToken = {
  accessToken: string;
  refreshToken?: string;
  expiresAt: number;
};

export type LoginResponse = {
  ok: true;
  token: AuthToken;
  user: { email: string; role: UserRole; name?: string };
} | {
  ok: false;
  message: string;
};

export function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
}

export function isSessionValid(): boolean {
  if (!isBrowser()) return false;
  const token = localStorage.getItem(TOKEN_KEY);
  const expires = parseInt(localStorage.getItem(EXPIRES_KEY) ?? '0', 10);
  if (!token) return false;
  if (expires && Date.now() > expires) {
    logout();
    return false;
  }
  return true;
}

export function getSessionRole(): UserRole {
  if (!isBrowser()) return 'admin';
  const r = localStorage.getItem(ROLE_KEY) ?? '';
  return isUserRole(r) ? r : 'admin';
}

export function getSessionEmail(): string {
  if (!isBrowser()) return '';
  return localStorage.getItem(EMAIL_KEY) ?? '';
}

export function isElevatedSession(): boolean {
  if (!isBrowser()) return false;
  return getSessionRole() === 'super_admin';
}

export function getAuthToken(): string {
  if (!isBrowser()) return '';
  return localStorage.getItem(TOKEN_KEY) ?? '';
}

export function login(email: string, password: string): LoginResponse {
  return { 
    ok: false, 
    message: 'Backend authentication required. Use /api/v1/auth/login endpoint.' 
  };
}

export function storeAuthToken(token: AuthToken, user: { email: string; role: UserRole }): void {
  if (!isBrowser()) return;
  localStorage.setItem(TOKEN_KEY, token.accessToken);
  localStorage.setItem(ROLE_KEY, user.role);
  localStorage.setItem(EMAIL_KEY, user.email);
  localStorage.setItem(EXPIRES_KEY, token.expiresAt.toString());
}

export function logout(): void {
  if (!isBrowser()) return;
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(ROLE_KEY);
  localStorage.removeItem(EMAIL_KEY);
  localStorage.removeItem(EXPIRES_KEY);
}

export function switchRole(newRole: string): { ok: boolean; message?: string } {
  if (!isBrowser()) return { ok: false, message: 'Not in browser environment' };
  if (!isUserRole(newRole)) return { ok: false, message: 'Invalid role' };
  if (!isElevatedSession()) return { ok: false, message: 'Only super admin can switch roles' };
  
  localStorage.setItem(ROLE_KEY, newRole);
  return { ok: true };
}
