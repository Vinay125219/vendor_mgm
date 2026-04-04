import { c as createComponent } from './astro-component_BR9_Owca.mjs';
import 'piccolore';
import { m as maybeRenderHead, h as addAttribute, r as renderTemplate, n as renderComponent, o as renderSlot, l as renderHead } from './entrypoint_B9G27Yxt.mjs';
import { r as renderScript, V as VENDOR_BASE_PATH, A as APP_NAME } from './constants_CmOIQZgW.mjs';
import 'clsx';

const vendorNav = [
  { href: "/vendor", label: "Dashboard", icon: "home", permission: "dashboard:read" },
  { href: "/vendor/vendors", label: "Vendors", icon: "users", permission: "vendors:read" },
  { href: "/vendor/onboarding", label: "Onboarding", icon: "clipboard", permission: "vendors:read" },
  { href: "/vendor/products", label: "Products", icon: "box", permission: "products:read" },
  { href: "/vendor/orders", label: "Orders", icon: "cart", permission: "orders:read" },
  { href: "/vendor/inventory", label: "Inventory", icon: "layers", permission: "products:read" },
  { href: "/vendor/payments", label: "Payments", icon: "wallet", permission: "payments:read" },
  { href: "/vendor/settlements", label: "Settlements", icon: "bank", permission: "settlements:read" },
  { href: "/vendor/disputes", label: "Disputes", icon: "alert", permission: "disputes:read" },
  { href: "/vendor/notifications", label: "Notifications", icon: "bell", permission: "notifications:read" },
  { href: "/vendor/reports", label: "Reports", icon: "chart", permission: "reports:read" },
  { href: "/vendor/support", label: "Support", icon: "lifebuoy", permission: "support:read" },
  { href: "/vendor/settings", label: "Settings", icon: "cog", permission: "settings:read" }
];

const $$NavIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$NavIcon;
  const { name, class: className = "h-5 w-5" } = Astro2.props;
  const common = `shrink-0 ${className}`;
  return renderTemplate`${name === "home" && renderTemplate`${maybeRenderHead()}<svg${addAttribute(common, "class")} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="m3 10 9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10Z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M9 22V12h6v10"></path></svg>`}${name === "users" && renderTemplate`<svg${addAttribute(common, "class")} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4" stroke-width="1.75"></circle><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`}${name === "clipboard" && renderTemplate`<svg${addAttribute(common, "class")} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><rect width="8" height="4" x="8" y="2" rx="1" ry="1" stroke-width="1.75"></rect><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path></svg>`}${name === "box" && renderTemplate`<svg${addAttribute(common, "class")} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="m3.27 6.96 8.73 5.05 8.73-5.05M12 22.08V12"></path></svg>`}${name === "cart" && renderTemplate`<svg${addAttribute(common, "class")} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><circle cx="8" cy="21" r="1" stroke-width="1.75"></circle><circle cx="19" cy="21" r="1" stroke-width="1.75"></circle><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.72a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>`}${name === "layers" && renderTemplate`<svg${addAttribute(common, "class")} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="m12.83 2.18 8 4.6a1 1 0 0 1 0 1.73l-8 4.6a2 2 0 0 1-1.66 0l-8-4.6a1 1 0 0 1 0-1.73l8-4.6a2 2 0 0 1 1.66 0Z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M2 12.65l10 5.77 10-5.77M2 17.5l10 5.75 10-5.75"></path></svg>`}${name === "wallet" && renderTemplate`<svg${addAttribute(common, "class")} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path></svg>`}${name === "bank" && renderTemplate`<svg${addAttribute(common, "class")} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"></path></svg>`}${name === "alert" && renderTemplate`<svg${addAttribute(common, "class")} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M12 9v4M12 17h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.99 2.14h12.8a2 2 0 0 0 1.99-2.14L13.71 3.86a2 2 0 0 0-3.42 0Z"></path></svg>`}${name === "bell" && renderTemplate`<svg${addAttribute(common, "class")} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M6 8a6 6 0 0 1 12 0c0 7 3 7 3 7H3s3 0 3-7M10.3 21a1.94 1.94 0 0 0 3.4 0"></path></svg>`}${name === "chart" && renderTemplate`<svg${addAttribute(common, "class")} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M3 3v18h18M7 16l4-8 4 5 4-9"></path></svg>`}${name === "cog" && renderTemplate`<svg${addAttribute(common, "class")} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.26.604.852.997 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"></path></svg>`}${name === "lifebuoy" && renderTemplate`<svg${addAttribute(common, "class")} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><circle cx="12" cy="12" r="10" stroke-width="1.75"></circle><circle cx="12" cy="12" r="4" stroke-width="1.75"></circle><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="m4.93 4.93 4.24 4.24m6.36 6.36 4.24 4.24m0-14.83-4.24 4.24m-6.36 6.36-4.24 4.24"></path></svg>`}`;
}, "C:/Users/Vinay/Desktop/vendor/src/components/navigation/NavIcon.astro", void 0);

const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button type="button" class="flex h-10 w-10 items-center justify-center rounded-[var(--radius-vs-sm)] border border-vs-border bg-vs-surface text-vs-fg shadow-[var(--shadow-vs-sm)] transition hover:bg-vs-elevated" aria-label="Toggle color theme" data-theme-toggle> <span class="dark:hidden" aria-hidden="true">◐</span> <span class="hidden dark:inline" aria-hidden="true">◑</span> </button> ${renderScript($$result, "C:/Users/Vinay/Desktop/vendor/src/components/islands/ThemeToggle.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Vinay/Desktop/vendor/src/components/islands/ThemeToggle.astro", void 0);

const $$ToastHost = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="vs-toast-host" class="pointer-events-none fixed bottom-4 right-4 z-[100] flex max-w-sm flex-col gap-2" aria-live="polite"></div> ${renderScript($$result, "C:/Users/Vinay/Desktop/vendor/src/components/islands/ToastHost.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Vinay/Desktop/vendor/src/components/islands/ToastHost.astro", void 0);

const ROLE_LABELS = {
  super_admin: "Super Admin",
  admin: "Admin",
  finance: "Finance",
  support: "Support",
  vendor: "Vendor"
};

const $$SuperAdminRoleSwitch = createComponent(($$result, $$props, $$slots) => {
  const roles = Object.keys(ROLE_LABELS).map((id) => ({ id, label: ROLE_LABELS[id] }));
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center gap-2"> <label for="vs-sa-role" class="sr-only">Switch role (Super Admin)</label> <select id="vs-sa-role" class="max-w-[140px] rounded-[var(--radius-vs-sm)] border border-vs-border bg-vs-surface px-2 py-1.5 text-xs font-medium text-vs-fg" data-vs-sa-role> ${roles.map((r) => renderTemplate`<option${addAttribute(r.id, "value")}> ${r.label} </option>`)} </select> <span class="hidden text-[10px] uppercase tracking-wide text-vs-muted sm:inline">impersonate</span> </div> ${renderScript($$result, "C:/Users/Vinay/Desktop/vendor/src/components/islands/SuperAdminRoleSwitch.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Vinay/Desktop/vendor/src/components/islands/SuperAdminRoleSwitch.astro", void 0);

const mockVendors = [
  {
    id: "ven_001",
    businessName: "Northwind Traders",
    legalName: "Northwind Traders Pvt Ltd",
    contactName: "Ananya Rao",
    email: "ops@northwind.example",
    phone: "+91 98765 43210",
    gstin: "29AABCU9603R1ZV",
    pan: "AABCU9603R",
    bankAccountMasked: "**** **** **** 4421",
    state: "approved",
    kycStatus: "verified",
    onboardingStep: 6,
    submittedAt: "2025-11-02T10:00:00.000Z",
    verifiedAt: "2025-11-05T14:20:00.000Z",
    riskScore: 12
  },
  {
    id: "ven_002",
    businessName: "Blue Harbor Crafts",
    legalName: "Blue Harbor LLP",
    contactName: "Rahul Mehta",
    email: "rahul@blueharbor.example",
    phone: "+91 91234 56789",
    state: "pending",
    kycStatus: "submitted",
    onboardingStep: 4,
    submittedAt: "2026-03-28T09:15:00.000Z",
    riskScore: 34
  },
  {
    id: "ven_003",
    businessName: "Urban Pantry Co",
    legalName: "Urban Pantry Foods",
    contactName: "Sneha Kulkarni",
    email: "sneha@urbanpantry.example",
    phone: "+91 99887 76655",
    state: "at_risk",
    kycStatus: "verified",
    onboardingStep: 6,
    submittedAt: "2025-08-10T08:00:00.000Z",
    verifiedAt: "2025-08-12T11:00:00.000Z",
    riskScore: 72
  },
  {
    id: "ven_004",
    businessName: "Lumen Electronics",
    legalName: "Lumen Devices India",
    contactName: "Vikram Singh",
    email: "vikram@lumen.example",
    phone: "+91 90000 11112",
    state: "on_hold",
    kycStatus: "failed",
    onboardingStep: 5,
    submittedAt: "2026-01-20T12:00:00.000Z",
    riskScore: 58
  }
];
const cust = {
  id: "cus_88",
  email: "buyer@example.com",
  name: "Priya Nair"
};
const mockProducts = [
  {
    id: "prd_101",
    sku: "NW-TEA-01",
    title: "Assam Whole Leaf Black Tea",
    categoryId: "cat_beverages",
    tagIds: ["organic", "bestseller"],
    basePricePaise: 44900,
    compareAtPaise: 49900,
    currency: "INR",
    images: ["/favicon.svg"],
    vendorId: "ven_001",
    approvalStatus: "approved",
    published: true,
    stock: 240,
    updatedAt: "2026-03-30T06:00:00.000Z"
  },
  {
    id: "prd_102",
    sku: "BH-MUG-02",
    title: "Hand-glazed Ceramic Mug",
    categoryId: "cat_home",
    tagIds: ["handmade"],
    basePricePaise: 89e3,
    currency: "INR",
    images: ["/favicon.svg"],
    vendorId: "ven_002",
    approvalStatus: "pending_review",
    published: false,
    stock: 18,
    updatedAt: "2026-03-29T16:22:00.000Z"
  },
  {
    id: "prd_103",
    sku: "UP-SNACK-09",
    title: "Roasted Makhana — Peri Peri",
    categoryId: "cat_snacks",
    tagIds: ["vegan"],
    basePricePaise: 19900,
    currency: "INR",
    images: ["/favicon.svg"],
    vendorId: "ven_003",
    approvalStatus: "approved",
    published: true,
    stock: 4,
    updatedAt: "2026-03-31T01:10:00.000Z"
  }
];
const mockOrders = [
  {
    id: "ord_5001",
    customer: cust,
    lines: [
      {
        productId: "prd_101",
        sku: "NW-TEA-01",
        title: "Assam Whole Leaf Black Tea",
        qty: 2,
        unitPricePaise: 44900
      }
    ],
    status: "paid",
    fulfillmentStage: "picking",
    totalPaise: 89800,
    currency: "INR",
    vendorIds: ["ven_001"],
    razorpayOrderId: "order_rp_7x9",
    paymentId: "pay_9k2",
    createdAt: "2026-04-01T08:12:00.000Z",
    updatedAt: "2026-04-01T08:14:00.000Z"
  },
  {
    id: "ord_5002",
    customer: cust,
    lines: [
      {
        productId: "prd_103",
        sku: "UP-SNACK-09",
        title: "Roasted Makhana — Peri Peri",
        qty: 5,
        unitPricePaise: 19900
      }
    ],
    status: "shipped",
    fulfillmentStage: "shipped",
    totalPaise: 99500,
    currency: "INR",
    vendorIds: ["ven_003"],
    razorpayOrderId: "order_rp_8a1",
    paymentId: "pay_8a1",
    createdAt: "2026-03-29T11:00:00.000Z",
    updatedAt: "2026-03-30T09:00:00.000Z"
  },
  {
    id: "ord_5003",
    customer: cust,
    lines: [
      {
        productId: "prd_102",
        sku: "BH-MUG-02",
        title: "Hand-glazed Ceramic Mug",
        qty: 1,
        unitPricePaise: 89e3
      }
    ],
    status: "refunded",
    fulfillmentStage: "completed",
    totalPaise: 89e3,
    currency: "INR",
    vendorIds: ["ven_002"],
    razorpayOrderId: "order_rp_3c4",
    paymentId: "pay_3c4",
    createdAt: "2026-03-15T14:00:00.000Z",
    updatedAt: "2026-03-18T10:00:00.000Z"
  }
];
const mockPayments = [
  {
    id: "pay_9k2",
    orderId: "ord_5001",
    vendorId: "ven_001",
    razorpayOrderId: "order_rp_7x9",
    razorpayPaymentId: "pay_9k2",
    amountPaise: 89800,
    status: "captured",
    updatedAt: "2026-04-01T08:14:00.000Z"
  },
  {
    id: "pay_fail_01",
    orderId: "ord_4999",
    vendorId: "ven_001",
    razorpayOrderId: "order_rp_fail",
    amountPaise: 12e4,
    status: "failed",
    updatedAt: "2026-03-31T22:01:00.000Z"
  }
];
const mockSettlements = [
  {
    id: "set_01",
    vendorId: "ven_001",
    periodStart: "2026-03-24",
    periodEnd: "2026-03-30",
    grossPaise: 125e4,
    commissionPaise: 187500,
    netPaise: 1062500,
    status: "scheduled"
  },
  {
    id: "set_02",
    vendorId: "ven_003",
    periodStart: "2026-03-24",
    periodEnd: "2026-03-30",
    grossPaise: 64e4,
    commissionPaise: 96e3,
    netPaise: 544e3,
    status: "paid",
    payoutRef: "pout_rp_22"
  }
];
const mockDisputes = [
  {
    id: "dsp_01",
    orderId: "ord_5003",
    vendorId: "ven_002",
    type: "refund",
    status: "under_review",
    amountPaise: 89e3,
    openedAt: "2026-03-16T09:00:00.000Z"
  }
];
const mockTickets = [
  {
    id: "tkt_01",
    vendorId: "ven_001",
    subject: "Bulk upload template clarification",
    status: "open",
    priority: "medium",
    updatedAt: "2026-04-01T07:00:00.000Z"
  }
];
const mockNotifications = [
  {
    id: "ntf_1",
    title: "Catalog review queued",
    body: "2 products are awaiting compliance review.",
    channel: "in_app",
    read: false,
    createdAt: "2026-04-01T06:00:00.000Z",
    href: "/vendor/products"
  },
  {
    id: "ntf_2",
    title: "Settlement batch scheduled",
    body: "Week 13 settlement will process on Apr 5.",
    channel: "in_app",
    read: true,
    createdAt: "2026-03-31T18:00:00.000Z",
    href: "/vendor/settlements"
  }
];
const mockActivities = [
  {
    id: "act_1",
    actor: "system",
    action: "synced inventory",
    entity: "product",
    entityId: "prd_103",
    at: "2026-04-01T05:55:00.000Z"
  },
  {
    id: "act_2",
    actor: "finance.bot",
    action: "flagged payout hold",
    entity: "vendor",
    entityId: "ven_004",
    at: "2026-03-31T21:10:00.000Z",
    severity: "warning"
  },
  {
    id: "act_3",
    actor: "admin@platform",
    action: "approved product",
    entity: "product",
    entityId: "prd_101",
    at: "2026-03-30T14:02:00.000Z"
  }
];
const mockComplianceAlerts = [
  {
    id: "cmp_1",
    title: "GSTIN expiring in 30 days",
    detail: "Northwind Traders — renew before May 2.",
    level: "warning",
    vendorId: "ven_001"
  },
  {
    id: "cmp_2",
    title: "High return rate",
    detail: "Urban Pantry Co exceeded category SLA.",
    level: "critical",
    vendorId: "ven_003"
  }
];
const mockWebhookLog = [
  {
    id: "wh_1",
    provider: "razorpay",
    event: "payment.captured",
    receivedAt: "2026-04-01T08:14:02.000Z",
    payloadSummary: "order_rp_7x9 → captured",
    verified: true
  }
];
const mockAuditLog = [
  {
    id: "aud_seed_1",
    at: "2026-04-01T07:00:00.000Z",
    actorId: "usr_admin",
    role: "admin",
    action: "product.approve",
    resource: "product",
    resourceId: "prd_101"
  }
];

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$VendorShell = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$VendorShell;
  const { title, description = "Vendor operations cockpit" } = Astro2.props;
  const path = Astro2.url.pathname;
  const seedUnread = mockNotifications.filter((n) => !n.read).length;
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="h-full"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description"', '><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=JetBrains+Mono:wght@400;500&display=swap"><title>', " · ", "</title><script>\n      try {\n        if (\n          location.pathname.startsWith('/vendor') &&\n          !localStorage.getItem('vs_auth_token')\n        ) {\n          location.replace('/login?redirect=' + encodeURIComponent(location.pathname + location.search));\n        }\n      } catch (_) {}\n    <\/script>", '</head> <body class="min-h-full bg-vs-bg"> <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded-md focus:bg-vs-accent focus:px-3 focus:py-2 focus:text-white">\nSkip to content\n</a> <div class="flex min-h-screen"> <aside class="fixed inset-y-0 left-0 z-40 w-64 -translate-x-full border-r border-vs-border bg-vs-surface shadow-[var(--shadow-vs-md)] transition-transform duration-300 lg:translate-x-0" id="vs-sidebar" aria-label="Primary"> <div class="flex h-16 items-center gap-2 border-b border-vs-border px-5"> <div class="flex h-9 w-9 items-center justify-center rounded-[var(--radius-vs-sm)] bg-vs-accent text-sm font-bold text-white">\nVS\n</div> <div> <p class="text-sm font-bold tracking-tight text-vs-fg">', '</p> <p class="text-[11px] text-vs-muted">Vendor Control</p> </div> </div> <nav class="flex flex-col gap-0.5 p-3"> ', ' </nav> <div class="absolute bottom-0 left-0 right-0 border-t border-vs-border p-4 text-[11px] text-vs-muted"> <p class="font-mono text-[10px] uppercase tracking-wider">Static demo</p> <p class="mt-1">Mount path: ', '</p> </div> </aside> <div class="flex min-h-screen flex-1 flex-col lg:pl-64" id="vs-shell-main"> <header class="sticky top-0 z-30 flex h-16 items-center justify-between gap-3 border-b border-vs-border bg-vs-bg/90 px-4 backdrop-blur-md sm:px-6"> <div class="flex items-center gap-2"> <button type="button" class="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-vs-sm)] border border-vs-border bg-vs-surface lg:hidden" aria-controls="vs-sidebar" aria-expanded="false" data-vs-sidebar-toggle> <span class="sr-only">Open menu</span> <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> <div> <p class="text-xs font-semibold uppercase tracking-wider text-vs-muted">Workspace</p> <p class="text-sm font-semibold text-vs-fg">', '</p> </div> </div> <div class="flex items-center gap-2 sm:gap-3"> <span class="hidden max-w-[160px] truncate text-xs text-vs-muted lg:inline" data-vs-header-email></span> <span class="hidden rounded-full border border-vs-border bg-vs-elevated px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-vs-muted sm:inline" title="From browser session" data-vs-header-role></span> <div class="hidden" data-vs-sa-switch-wrap> ', " </div> ", ' <button type="button" class="hidden rounded-[var(--radius-vs-sm)] border border-vs-border bg-vs-surface px-2 py-1.5 text-xs font-medium text-vs-muted hover:text-vs-fg sm:inline" data-vs-logout>\nSign out\n</button> <a href="/vendor/notifications" data-astro-prefetch class="relative flex h-10 w-10 items-center justify-center rounded-[var(--radius-vs-sm)] border border-vs-border bg-vs-surface text-vs-fg"', "> <span", ' data-vs-notify-dot aria-hidden="true"></span> <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M6 8a6 6 0 0 1 12 0c0 7 3 7 3 7H3s3 0 3-7M10.3 21a1.94 1.94 0 0 0 3.4 0"></path> </svg> </a> </div> </header> <main id="main-content" class="flex-1 px-4 py-8 sm:px-6 lg:px-10"> ', ' </main> </div> </div> <div class="fixed inset-0 z-30 bg-black/40 opacity-0 pointer-events-none transition-opacity lg:hidden" id="vs-sidebar-backdrop" aria-hidden="true"></div> ', " ", " </body> </html>"])), addAttribute(description, "content"), title, APP_NAME, renderHead(), APP_NAME, vendorNav.map((item) => {
    const active = path === item.href || path.startsWith(item.href + "/");
    return renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(item.permission, "data-req-perm")} data-astro-prefetch${addAttribute([
      "flex items-center gap-3 rounded-[var(--radius-vs-sm)] px-3 py-2.5 text-sm font-medium transition-colors",
      active ? "bg-vs-accent-soft text-vs-accent" : "text-vs-muted hover:bg-vs-elevated hover:text-vs-fg"
    ], "class:list")}${addAttribute(active ? "page" : void 0, "aria-current")}> ${renderComponent($$result, "NavIcon", $$NavIcon, { "name": item.icon, "class": "h-5 w-5" })} ${item.label} </a>`;
  }), VENDOR_BASE_PATH, title, renderComponent($$result, "SuperAdminRoleSwitch", $$SuperAdminRoleSwitch, {}), renderComponent($$result, "ThemeToggle", $$ThemeToggle, {}), addAttribute(`Notifications${seedUnread ? `, ${seedUnread} unread` : ""}`, "aria-label"), addAttribute(["absolute right-2 top-2 h-2 w-2 rounded-full bg-vs-accent", seedUnread === 0 && "hidden"], "class:list"), renderSlot($$result, $$slots["default"]), renderComponent($$result, "ToastHost", $$ToastHost, {}), renderScript($$result, "C:/Users/Vinay/Desktop/vendor/src/layouts/VendorShell.astro?astro&type=script&index=0&lang.ts"));
}, "C:/Users/Vinay/Desktop/vendor/src/layouts/VendorShell.astro", void 0);

const $$PageHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PageHeader;
  const { title, description, class: className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header${addAttribute(["mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between", className], "class:list")}> <div> <h1 class="text-2xl font-bold tracking-tight text-vs-fg sm:text-3xl">${title}</h1> ${description && renderTemplate`<p class="mt-1 max-w-2xl text-sm text-vs-muted">${description}</p>`} </div> <div class="flex flex-wrap items-center gap-2"> ${renderSlot($$result, $$slots["actions"])} </div> </header>`;
}, "C:/Users/Vinay/Desktop/vendor/src/components/ui/PageHeader.astro", void 0);

export { $$VendorShell as $, $$PageHeader as a, mockVendors as b, mockProducts as c, mockNotifications as d, mockOrders as e, mockWebhookLog as f, mockPayments as g, mockAuditLog as h, mockComplianceAlerts as i, mockActivities as j, mockTickets as k, mockSettlements as l, mockDisputes as m };
