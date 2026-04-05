export type NavItem = {
  href: string;
  label: string;
  icon: 'home' | 'users' | 'clipboard' | 'box' | 'cart' | 'layers' | 'wallet' | 'bank' | 'alert' | 'bell' | 'chart' | 'cog' | 'lifebuoy';
  permission?: import('@/lib/rbac').Permission;
};

export const adminNav: NavItem[] = [
  { href: '/admin', label: 'Dashboard', icon: 'home', permission: 'dashboard:read' },
  { href: '/admin/vendors', label: 'Vendors', icon: 'users', permission: 'vendors:read' },
  { href: '/admin/compliance', label: 'Compliance', icon: 'alert', permission: 'vendors:read' },
  { href: '/admin/products', label: 'Products', icon: 'box', permission: 'products:read' },
  { href: '/admin/orders', label: 'Orders', icon: 'cart', permission: 'orders:read' },
  { href: '/admin/disputes', label: 'Disputes', icon: 'alert', permission: 'disputes:read' },
  { href: '/admin/reports', label: 'Reports', icon: 'chart', permission: 'reports:read' },
  { href: '/admin/settings', label: 'Settings', icon: 'cog', permission: 'settings:read' },
];

export const financeNav: NavItem[] = [
  { href: '/finance', label: 'Dashboard', icon: 'home', permission: 'dashboard:read' },
  { href: '/finance/payments', label: 'Payments', icon: 'wallet', permission: 'payments:read' },
  { href: '/finance/settlements', label: 'Settlements', icon: 'bank', permission: 'settlements:read' },
  { href: '/finance/reconciliation', label: 'Reconciliation', icon: 'chart', permission: 'settlements:read' },
  { href: '/finance/refunds', label: 'Refunds', icon: 'wallet', permission: 'payments:read' },
  { href: '/finance/reports', label: 'Reports', icon: 'chart', permission: 'reports:read' },
  { href: '/finance/settings', label: 'Settings', icon: 'cog', permission: 'settings:read' },
];

export const supportNav: NavItem[] = [
  { href: '/support', label: 'Dashboard', icon: 'home', permission: 'dashboard:read' },
  { href: '/support/tickets', label: 'Support Tickets', icon: 'lifebuoy', permission: 'support:read' },
  { href: '/support/vendors', label: 'Vendor Contacts', icon: 'users', permission: 'vendors:read' },
  { href: '/support/disputes', label: 'Disputes', icon: 'alert', permission: 'disputes:read' },
  { href: '/support/escalations', label: 'Escalations', icon: 'alert', permission: 'disputes:read' },
  { href: '/support/reports', label: 'Reports', icon: 'chart', permission: 'reports:read' },
  { href: '/support/settings', label: 'Settings', icon: 'cog', permission: 'settings:read' },
];

export const vendorNav: NavItem[] = [
  { href: '/vendor', label: 'Dashboard', icon: 'home', permission: 'dashboard:read' },
  { href: '/vendor/products', label: 'Products', icon: 'box', permission: 'products:read' },
  { href: '/vendor/orders', label: 'Orders', icon: 'cart', permission: 'orders:read' },
  { href: '/vendor/inventory', label: 'Inventory', icon: 'layers', permission: 'products:read' },
  { href: '/vendor/payments', label: 'Payments', icon: 'wallet', permission: 'payments:read' },
  { href: '/vendor/disputes', label: 'Disputes', icon: 'alert', permission: 'disputes:read' },
  { href: '/vendor/support', label: 'Support', icon: 'lifebuoy', permission: 'support:read' },
  { href: '/vendor/reports', label: 'Reports', icon: 'chart', permission: 'reports:read' },
  { href: '/vendor/settings', label: 'Settings', icon: 'cog', permission: 'settings:read' },
];
