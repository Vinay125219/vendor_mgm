export type NavItem = {
  href: string;
  label: string;
  icon: 'home' | 'users' | 'clipboard' | 'box' | 'cart' | 'layers' | 'wallet' | 'bank' | 'alert' | 'bell' | 'chart' | 'cog' | 'lifebuoy';
  permission?: import('@/lib/rbac').Permission;
};

export const vendorNav: NavItem[] = [
  { href: '/vendor', label: 'Dashboard', icon: 'home', permission: 'dashboard:read' },
  { href: '/vendor/vendors', label: 'Vendors', icon: 'users', permission: 'vendors:read' },
  { href: '/vendor/onboarding', label: 'Onboarding', icon: 'clipboard', permission: 'vendors:read' },
  { href: '/vendor/products', label: 'Products', icon: 'box', permission: 'products:read' },
  { href: '/vendor/orders', label: 'Orders', icon: 'cart', permission: 'orders:read' },
  { href: '/vendor/inventory', label: 'Inventory', icon: 'layers', permission: 'products:read' },
  { href: '/vendor/payments', label: 'Payments', icon: 'wallet', permission: 'payments:read' },
  { href: '/vendor/settlements', label: 'Settlements', icon: 'bank', permission: 'settlements:read' },
  { href: '/vendor/disputes', label: 'Disputes', icon: 'alert', permission: 'disputes:read' },
  { href: '/vendor/notifications', label: 'Notifications', icon: 'bell', permission: 'notifications:read' },
  { href: '/vendor/reports', label: 'Reports', icon: 'chart', permission: 'reports:read' },
  { href: '/vendor/support', label: 'Support', icon: 'lifebuoy', permission: 'support:read' },
  { href: '/vendor/settings', label: 'Settings', icon: 'cog', permission: 'settings:read' },
];
