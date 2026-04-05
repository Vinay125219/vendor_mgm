import { c as createComponent } from './astro-component_D1F3j4nc.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from './entrypoint_CV8pRvJF.mjs';
import { $ as $$VendorShell, a as $$PageHeader } from './PageHeader_C41VybD-.mjs';
import { $ as $$KpiCard } from './KpiCard_Dx7ChyxZ.mjs';
import { $ as $$UiCard } from './UiCard_DdDgZOBN.mjs';
import { $ as $$UiBadge } from './UiBadge_DReIQUBO.mjs';
import { $ as $$UiButton } from './UiButton_9xyzcQW4.mjs';
import { g as getDashboardKpis, a as getPaymentStatusDistribution, b as getVendorGrowthSeries, c as getFulfillmentTrends, $ as $$ChartBlock, d as getRecentActivity, e as getComplianceAlerts } from './dashboard.service_B7r74-hF.mjs';
import { f as formatINRFromPaise, a as formatDate } from './format_CV2KI1dq.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const kpis = getDashboardKpis();
  const growth = getVendorGrowthSeries(5);
  const payDist = getPaymentStatusDistribution();
  const fulfill = getFulfillmentTrends();
  const activity = getRecentActivity();
  const alerts = getComplianceAlerts();
  const growthSpec = {
    type: "line",
    labels: growth.map((g) => g.date),
    datasets: [
      {
        label: "Active vendors",
        data: growth.map((g) => g.value),
        borderColor: "rgb(99, 102, 241)",
        backgroundColor: "rgba(99, 102, 241, 0.12)"
      }
    ]
  };
  const paySpec = {
    type: "doughnut",
    labels: payDist.map((p) => p.status),
    datasets: [
      {
        label: "Payments",
        data: payDist.map((p) => p.count),
        backgroundColor: ["#22c55e", "#eab308", "#ef4444", "#6366f1", "#94a3b8"]
      }
    ]
  };
  const fulfillSpec = {
    type: "bar",
    labels: fulfill.map((f) => f.date),
    datasets: [
      { label: "Fulfilled", data: fulfill.map((f) => f.fulfilled), backgroundColor: "rgba(16, 185, 129, 0.7)" },
      { label: "Pending", data: fulfill.map((f) => f.pending), backgroundColor: "rgba(148, 163, 184, 0.5)" }
    ]
  };
  return renderTemplate`${renderComponent($$result, "VendorShell", $$VendorShell, { "title": "Dashboard" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "Operations overview", "description": "Real-time signal across vendors, catalog, payments, and fulfillment — tuned for a procurement-grade workflow." }, { "actions": ($$result3) => renderTemplate`${renderComponent($$result3, "UiButton", $$UiButton, { "href": "/vendor/onboarding", "variant": "primary", "slot": "actions" }, { "default": ($$result4) => renderTemplate`New vendor` })}${renderComponent($$result3, "UiButton", $$UiButton, { "href": "/vendor/reports", "variant": "secondary", "slot": "actions" }, { "default": ($$result4) => renderTemplate`Export report` })}` })} ${maybeRenderHead()}<section class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"> ${renderComponent($$result2, "KpiCard", $$KpiCard, { "label": "Total vendors", "value": String(kpis.totalVendors), "trend": "+4 this month", "trendUp": true })} ${renderComponent($$result2, "KpiCard", $$KpiCard, { "label": "Active vendors", "value": String(kpis.activeVendors), "hint": "KYC verified & trading" })} ${renderComponent($$result2, "KpiCard", $$KpiCard, { "label": "Pending approvals", "value": String(kpis.pendingApprovals) })} ${renderComponent($$result2, "KpiCard", $$KpiCard, { "label": "Live products", "value": String(kpis.liveProducts) })} ${renderComponent($$result2, "KpiCard", $$KpiCard, { "label": "Open disputes", "value": String(kpis.openDisputes) })} ${renderComponent($$result2, "KpiCard", $$KpiCard, { "label": "Completed orders", "value": String(kpis.completedOrders), "trend": "7d moving avg" })} ${renderComponent($$result2, "KpiCard", $$KpiCard, { "label": "Gross revenue", "value": formatINRFromPaise(kpis.grossRevenuePaise), "hint": "Captured payments" })} ${renderComponent($$result2, "KpiCard", $$KpiCard, { "label": "Pending settlements", "value": formatINRFromPaise(kpis.pendingSettlementsPaise), "hint": "Scheduled batches" })} ${renderComponent($$result2, "KpiCard", $$KpiCard, { "label": "Failed payments", "value": String(kpis.failedPayments), "trend": "Investigate in Payments" })} </section> <section class="mt-10 grid gap-6 lg:grid-cols-3"> ${renderComponent($$result2, "UiCard", $$UiCard, { "class": "lg:col-span-2", "padding": "md" }, { "default": ($$result3) => renderTemplate` <div class="mb-4 flex items-center justify-between gap-4"> <div> <h2 class="text-base font-semibold text-vs-fg">Vendor growth</h2> <p class="text-xs text-vs-muted">Normalized for stakeholder reviews</p> </div> ${renderComponent($$result3, "UiBadge", $$UiBadge, { "variant": "accent" }, { "default": ($$result4) => renderTemplate`Live mock` })} </div> ${renderComponent($$result3, "ChartBlock", $$ChartBlock, { "spec": growthSpec })} ` })} ${renderComponent($$result2, "UiCard", $$UiCard, { "padding": "md" }, { "default": ($$result3) => renderTemplate` <h2 class="text-base font-semibold text-vs-fg">Payment status</h2> <p class="text-xs text-vs-muted">Mapped to Razorpay states</p> <div class="mt-4"> ${renderComponent($$result3, "ChartBlock", $$ChartBlock, { "spec": paySpec, "height": 200 })} </div> ` })} </section> <section class="mt-6 grid gap-6 lg:grid-cols-3"> ${renderComponent($$result2, "UiCard", $$UiCard, { "class": "lg:col-span-2", "padding": "md" }, { "default": ($$result3) => renderTemplate` <h2 class="text-base font-semibold text-vs-fg">Fulfillment trend</h2> <p class="text-xs text-vs-muted">Packed & shipped vs backlog</p> <div class="mt-4"> ${renderComponent($$result3, "ChartBlock", $$ChartBlock, { "spec": fulfillSpec })} </div> ` })} ${renderComponent($$result2, "UiCard", $$UiCard, { "padding": "md" }, { "default": ($$result3) => renderTemplate` <h2 class="text-base font-semibold text-vs-fg">Compliance</h2> <ul class="mt-4 flex flex-col gap-3"> ${alerts.map((a) => renderTemplate`<li${addAttribute([
    "rounded-[var(--radius-vs-sm)] border px-3 py-2 text-sm",
    a.level === "critical" && "border-red-500/40 bg-red-500/5",
    a.level === "warning" && "border-amber-500/40 bg-amber-500/5",
    a.level === "info" && "border-sky-500/40 bg-sky-500/5"
  ], "class:list")}> <p class="font-medium text-vs-fg">${a.title}</p> <p class="text-xs text-vs-muted">${a.detail}</p> </li>`)} </ul> ` })} </section> <section class="mt-6 grid gap-6 lg:grid-cols-2"> ${renderComponent($$result2, "UiCard", $$UiCard, { "padding": "md" }, { "default": ($$result3) => renderTemplate` <div class="mb-4 flex items-center justify-between"> <h2 class="text-base font-semibold text-vs-fg">Recent activity</h2> ${renderComponent($$result3, "UiButton", $$UiButton, { "href": "/vendor/settings", "variant": "ghost", "size": "sm" }, { "default": ($$result4) => renderTemplate`Audit` })} </div> <ol class="space-y-4"> ${activity.map((a) => renderTemplate`<li class="flex gap-3 text-sm"> <span class="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-vs-accent" aria-hidden="true"></span> <div> <p class="text-vs-fg"> <span class="font-medium">${a.actor}</span>${" "} <span class="text-vs-muted">${a.action}</span>${" "} <span class="font-mono text-xs">${a.entity}</span> </p> <p class="text-xs text-vs-muted">${formatDate(a.at)}</p> </div> </li>`)} </ol> ` })} ${renderComponent($$result2, "UiCard", $$UiCard, { "padding": "md" }, { "default": ($$result3) => renderTemplate` <h2 class="text-base font-semibold text-vs-fg">Quick actions</h2> <div class="mt-4 grid gap-2 sm:grid-cols-2"> ${renderComponent($$result3, "UiButton", $$UiButton, { "href": "/vendor/products/new", "variant": "secondary" }, { "default": ($$result4) => renderTemplate`Create product` })} ${renderComponent($$result3, "UiButton", $$UiButton, { "href": "/vendor/orders", "variant": "secondary" }, { "default": ($$result4) => renderTemplate`Review orders` })} ${renderComponent($$result3, "UiButton", $$UiButton, { "href": "/vendor/payments", "variant": "secondary" }, { "default": ($$result4) => renderTemplate`Payment health` })} ${renderComponent($$result3, "UiButton", $$UiButton, { "href": "/vendor/support", "variant": "secondary" }, { "default": ($$result4) => renderTemplate`Open ticket` })} </div> <div class="mt-6 rounded-[var(--radius-vs-sm)] border border-dashed border-vs-border bg-vs-elevated/40 p-4 text-xs text-vs-muted"> <p class="font-semibold text-vs-fg">Integration note</p> <p class="mt-2">
This static shell uses routes under <code class="font-mono text-vs-accent">/vendor/*</code>. Demo data and mutations live in
<code class="font-mono text-vs-accent">localStorage</code>; wire a real API when you embed in production.
</p> </div> ` })} </section> ` })}`;
}, "C:/Users/Vinay/Desktop/vendor/src/pages/vendor/index.astro", void 0);

const $$file = "C:/Users/Vinay/Desktop/vendor/src/pages/vendor/index.astro";
const $$url = "/vendor";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
