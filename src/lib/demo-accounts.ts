import type { UserRole } from '@/types';

export const DEMO_SHARED_PASSWORD = 'VendorSphere2026!';

export const DEMO_ACCOUNTS_BY_ROLE: Record<UserRole, { email: string; password: string }> = {
  super_admin: { email: 'superadmin@vendorsphere.app', password: DEMO_SHARED_PASSWORD },
  admin: { email: 'admin@vendorsphere.app', password: DEMO_SHARED_PASSWORD },
  finance: { email: 'finance@vendorsphere.app', password: DEMO_SHARED_PASSWORD },
  support: { email: 'support@vendorsphere.app', password: DEMO_SHARED_PASSWORD },
  vendor: { email: 'vendor@vendorsphere.app', password: DEMO_SHARED_PASSWORD },
};

export function credentialsMatchRole(email: string, password: string, claimedRole: string): claimedRole is UserRole {
  if (!(claimedRole in DEMO_ACCOUNTS_BY_ROLE)) return false;
  const acc = DEMO_ACCOUNTS_BY_ROLE[claimedRole as UserRole];
  return email.trim().toLowerCase() === acc.email.toLowerCase() && password === acc.password;
}
