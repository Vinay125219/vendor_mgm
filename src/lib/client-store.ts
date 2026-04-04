import type {
  ActivityItem,
  AuditLogEntry,
  ComplianceAlert,
  Dispute,
  NotificationItem,
  PaymentRecord,
  SettlementEntry,
  StoreOrder,
  StoreProduct,
  SupportTicket,
  UserRole,
  VendorProfile,
  WebhookEventLog,
} from '@/types';
import {
  mockActivities,
  mockAuditLog,
  mockComplianceAlerts,
  mockDisputes,
  mockNotifications,
  mockOrders,
  mockPayments,
  mockProducts,
  mockSettlements,
  mockTickets,
  mockVendors,
  mockWebhookLog,
} from '@/services/mock-store';
import { getSessionRole } from '@/lib/client-auth';

const STORAGE_KEY = 'vs_app_state_v1';

export type AppState = {
  vendors: VendorProfile[];
  products: StoreProduct[];
  orders: StoreOrder[];
  payments: PaymentRecord[];
  settlements: SettlementEntry[];
  disputes: Dispute[];
  tickets: SupportTicket[];
  notifications: NotificationItem[];
  activities: ActivityItem[];
  complianceAlerts: ComplianceAlert[];
  webhookLog: WebhookEventLog[];
  auditLog: AuditLogEntry[];
  onboardingDraft: Record<string, string>;
  runtime: { lastInventorySyncAt: string };
  meta: { productSeq: number; activitySeq: number; ticketSeq: number; auditSeq: number };
};

function clone<T>(x: T): T {
  return JSON.parse(JSON.stringify(x)) as T;
}

export function createInitialState(): AppState {
  let auditSeq = 1;
  for (const a of mockAuditLog) {
    const n = parseInt(a.id.replace(/\D/g, ''), 10);
    if (!Number.isNaN(n)) auditSeq = Math.max(auditSeq, n + 1);
  }
  return {
    vendors: clone(mockVendors),
    products: clone(mockProducts),
    orders: clone(mockOrders),
    payments: clone(mockPayments),
    settlements: clone(mockSettlements),
    disputes: clone(mockDisputes),
    tickets: clone(mockTickets),
    notifications: clone(mockNotifications),
    activities: clone(mockActivities),
    complianceAlerts: clone(mockComplianceAlerts),
    webhookLog: clone(mockWebhookLog),
    auditLog: clone(mockAuditLog),
    onboardingDraft: {},
    runtime: { lastInventorySyncAt: '2026-04-01T05:55:00.000Z' },
    meta: { productSeq: 200, activitySeq: 100, ticketSeq: 100, auditSeq },
  };
}

export function loadState(): AppState {
  if (typeof localStorage === 'undefined') return createInitialState();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const s = createInitialState();
      saveState(s);
      return s;
    }
    return JSON.parse(raw) as AppState;
  } catch {
    const s = createInitialState();
    saveState(s);
    return s;
  }
}

export function saveState(s: AppState): void {
  if (typeof localStorage === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
}

function actorId(): string {
  return getSessionRole() === 'vendor' ? 'vendor_user' : 'console_user';
}

function appendAudit(s: AppState, entry: Omit<AuditLogEntry, 'id' | 'at'>): void {
  const full: AuditLogEntry = {
    ...entry,
    id: `aud_${s.meta.auditSeq++}`,
    at: new Date().toISOString(),
  };
  s.auditLog.unshift(full);
}

export function updateProductStock(productId: string, stock: number): StoreProduct | null {
  const s = loadState();
  const p = s.products.find((x) => x.id === productId);
  if (!p || !Number.isFinite(stock) || stock < 0) return null;
  p.stock = Math.floor(stock);
  p.updatedAt = new Date().toISOString();
  const role = getSessionRole();
  s.activities.unshift({
    id: `act_${s.meta.activitySeq++}`,
    actor: actorId(),
    action: 'updated stock',
    entity: 'product',
    entityId: productId,
    at: new Date().toISOString(),
  });
  appendAudit(s, {
    actorId: actorId(),
    role,
    action: 'inventory.update',
    resource: 'product',
    resourceId: productId,
    metadata: { stock: p.stock },
  });
  saveState(s);
  return p;
}

const catMap: Record<string, string> = {
  Beverages: 'cat_beverages',
  Home: 'cat_home',
  Snacks: 'cat_snacks',
};

export function createProduct(input: {
  title: string;
  sku: string;
  priceInr: number;
  stock: number;
  categoryLabel: string;
  tags: string;
  description: string;
  vendorId: string;
}): StoreProduct | null {
  if (!input.title.trim() || !input.sku.trim()) return null;
  const paise = Math.round(input.priceInr * 100);
  if (!Number.isFinite(paise) || paise < 0) return null;
  const stock = Math.max(0, Math.floor(input.stock));
  const s = loadState();
  const categoryId = catMap[input.categoryLabel] ?? 'cat_home';
  const tagIds = input.tags
    .split(',')
    .map((t) => t.trim())
    .filter(Boolean);
  const id = `prd_${s.meta.productSeq++}`;
  const role = getSessionRole();
  const p: StoreProduct = {
    id,
    sku: input.sku.trim(),
    title: input.title.trim(),
    description: input.description.trim() || undefined,
    categoryId,
    tagIds,
    basePricePaise: paise,
    currency: 'INR',
    images: ['/favicon.svg'],
    vendorId: input.vendorId,
    approvalStatus: 'pending_review',
    published: false,
    stock,
    updatedAt: new Date().toISOString(),
  };
  s.products.unshift(p);
  s.activities.unshift({
    id: `act_${s.meta.activitySeq++}`,
    actor: actorId(),
    action: 'submitted product',
    entity: 'product',
    entityId: id,
    at: new Date().toISOString(),
  });
  appendAudit(s, { actorId: actorId(), role, action: 'product.create', resource: 'product', resourceId: id });
  saveState(s);
  return p;
}

export function updateOrderStage(orderId: string, fulfillmentStage: StoreOrder['fulfillmentStage']): StoreOrder | null {
  const s = loadState();
  const o = s.orders.find((x) => x.id === orderId);
  if (!o) return null;
  o.fulfillmentStage = fulfillmentStage;
  o.updatedAt = new Date().toISOString();
  const role = getSessionRole();
  s.activities.unshift({
    id: `act_${s.meta.activitySeq++}`,
    actor: actorId(),
    action: `fulfillment → ${fulfillmentStage}`,
    entity: 'order',
    entityId: orderId,
    at: new Date().toISOString(),
  });
  appendAudit(s, {
    actorId: actorId(),
    role,
    action: 'order.fulfillment',
    resource: 'order',
    resourceId: orderId,
    metadata: { fulfillmentStage },
  });
  saveState(s);
  return o;
}

export function saveOnboardingDraft(data: Record<string, string>): void {
  const s = loadState();
  s.onboardingDraft = { ...s.onboardingDraft, ...data, savedAt: new Date().toISOString() };
  saveState(s);
}

export function getOnboardingDraft(): Record<string, string> {
  return { ...loadState().onboardingDraft };
}

export function runInventorySyncAll(): string {
  const s = loadState();
  const role = getSessionRole();
  s.runtime.lastInventorySyncAt = new Date().toISOString();
  s.activities.unshift({
    id: `act_${s.meta.activitySeq++}`,
    actor: actorId(),
    action: 'inventory sync all',
    entity: 'inventory',
    entityId: 'all',
    at: s.runtime.lastInventorySyncAt,
  });
  appendAudit(s, { actorId: actorId(), role, action: 'inventory.sync_all', resource: 'inventory' });
  saveState(s);
  return s.runtime.lastInventorySyncAt;
}

export function markAllNotificationsRead(): number {
  const s = loadState();
  let n = 0;
  for (const x of s.notifications) {
    if (!x.read) {
      x.read = true;
      n++;
    }
  }
  saveState(s);
  return n;
}

export function createSupportTicket(subject: string, vendorId: string): SupportTicket | null {
  const s = subject.trim();
  if (!s) return null;
  const st = loadState();
  const role = getSessionRole();
  const id = `tkt_${st.meta.ticketSeq++}`;
  const t: SupportTicket = {
    id,
    vendorId,
    subject: s,
    status: 'open',
    priority: 'medium',
    updatedAt: new Date().toISOString(),
  };
  st.tickets.unshift(t);
  appendAudit(st, {
    actorId: actorId(),
    role,
    action: 'support.ticket.create',
    resource: 'ticket',
    resourceId: id,
  });
  saveState(st);
  return t;
}

export function countLowStock(threshold = 10): number {
  return loadState().products.filter((p) => p.stock < threshold).length;
}

export function listAudit(limit = 50): AuditLogEntry[] {
  return loadState().auditLog.slice(0, limit);
}
