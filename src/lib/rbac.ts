import type { UserRole } from '@/types';

export type Permission =
  | 'dashboard:read'
  | 'vendors:read'
  | 'vendors:write'
  | 'products:read'
  | 'products:write'
  | 'orders:read'
  | 'orders:write'
  | 'inventory:write'
  | 'payments:read'
  | 'settlements:read'
  | 'settlements:write'
  | 'disputes:read'
  | 'disputes:write'
  | 'support:read'
  | 'support:write'
  | 'reports:read'
  | 'settings:read'
  | 'settings:write'
  | 'audit:read'
  | 'notifications:read';

const matrix: Record<UserRole, Permission[]> = {
  super_admin: [
    'dashboard:read',
    'vendors:read',
    'vendors:write',
    'products:read',
    'products:write',
    'orders:read',
    'orders:write',
    'inventory:write',
    'payments:read',
    'settlements:read',
    'settlements:write',
    'disputes:read',
    'disputes:write',
    'support:read',
    'support:write',
    'reports:read',
    'settings:read',
    'settings:write',
    'audit:read',
    'notifications:read',
  ],
  admin: [
    'dashboard:read',
    'vendors:read',
    'vendors:write',
    'products:read',
    'products:write',
    'orders:read',
    'orders:write',
    'inventory:write',
    'payments:read',
    'settlements:read',
    'disputes:read',
    'disputes:write',
    'support:read',
    'support:write',
    'reports:read',
    'settings:read',
    'notifications:read',
    'audit:read',
  ],
  finance: [
    'dashboard:read',
    'vendors:read',
    'payments:read',
    'settlements:read',
    'settlements:write',
    'reports:read',
    'disputes:read',
    'audit:read',
    'notifications:read',
  ],
  support: [
    'dashboard:read',
    'vendors:read',
    'orders:read',
    'disputes:read',
    'disputes:write',
    'support:read',
    'support:write',
    'notifications:read',
  ],
  vendor: [
    'dashboard:read',
    'vendors:read',
    'products:read',
    'products:write',
    'orders:read',
    'orders:write',
    'inventory:write',
    'payments:read',
    'settlements:read',
    'disputes:read',
    'support:read',
    'support:write',
    'reports:read',
    'settings:read',
    'notifications:read',
  ],
};

export function permissionsFor(role: UserRole): Permission[] {
  return matrix[role] ?? [];
}

export function can(role: UserRole, permission: Permission): boolean {
  return permissionsFor(role).includes(permission);
}

const ROLE_IDS: UserRole[] = ['super_admin', 'admin', 'finance', 'support', 'vendor'];

export function isUserRole(value: string): value is UserRole {
  return (ROLE_IDS as string[]).includes(value);
}

export const ROLE_LABELS: Record<UserRole, string> = {
  super_admin: 'Super Admin',
  admin: 'Admin',
  finance: 'Finance',
  support: 'Support',
  vendor: 'Vendor',
};
