import { k as mockAuditLog, f as mockWebhookLog, j as mockComplianceAlerts, i as mockActivities, d as mockNotifications, l as mockTickets, m as mockDisputes, h as mockSettlements, g as mockPayments, e as mockOrders, c as mockProducts, b as mockVendors } from './PageHeader_C41VybD-.mjs';

const STORAGE_KEY = "vs_app_state_v1";
function clone(x) {
  return JSON.parse(JSON.stringify(x));
}
function createInitialState() {
  let auditSeq = 1;
  for (const a of mockAuditLog) {
    const n = parseInt(a.id.replace(/\D/g, ""), 10);
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
    runtime: { lastInventorySyncAt: "2026-04-01T05:55:00.000Z" },
    meta: { productSeq: 200, activitySeq: 100, ticketSeq: 100, auditSeq }
  };
}
function loadState() {
  if (typeof localStorage === "undefined") return createInitialState();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const s = createInitialState();
      saveState(s);
      return s;
    }
    return JSON.parse(raw);
  } catch {
    const s = createInitialState();
    saveState(s);
    return s;
  }
}
function saveState(s) {
  if (typeof localStorage === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
}
function countLowStock(threshold = 10) {
  return loadState().products.filter((p) => p.stock < threshold).length;
}
function listAudit(limit = 50) {
  return loadState().auditLog.slice(0, limit);
}

export { listAudit as a, countLowStock as c, loadState as l };
