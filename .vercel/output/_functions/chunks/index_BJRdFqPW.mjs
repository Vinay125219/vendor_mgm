import { c as createComponent } from './astro-component_BJcmtL7v.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_Cug4CaDP.mjs';
import { $ as $$VendorShell, a as $$PageHeader } from './PageHeader_DGhT7KE0.mjs';
import { $ as $$KpiCard } from './KpiCard_Cxwekf7v.mjs';
import { $ as $$UiCard } from './UiCard_-clAiy_c.mjs';
import { $ as $$UiButton } from './UiButton_C6ZwpCjp.mjs';
import { $ as $$UiBadge } from './UiBadge_ChdQeMxj.mjs';
import { g as getDashboardKpis, a as getPaymentStatusDistribution, b as getVendorGrowthSeries, $ as $$ChartBlock } from './dashboard.service_YjbujEOf.mjs';
import { f as formatINRFromPaise, a as formatDate } from './format_CV2KI1dq.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const kpis = getDashboardKpis();
  const growth = getVendorGrowthSeries(5);
  getPaymentStatusDistribution();
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
  const complianceSpec = {
    type: "bar",
    labels: ["KYC Verified", "Pending Review", "Failed", "Rejected"],
    datasets: [
      {
        label: "Vendor Status",
        data: [85, 12, 3, 2],
        backgroundColor: ["#22c55e", "#f59e0b", "#ef4444", "#94a3b8"]
      }
    ]
  };
  return renderTemplate`${renderComponent($$result, "VendorShell", $$VendorShell, { "title": "Platform Administration" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "Platform control center", "description": "Manage vendors, monitor compliance, track platform health — full administrative control." }, { "actions": ($$result3) => renderTemplate`${renderComponent($$result3, "UiButton", $$UiButton, { "href": "#vendor-list", "variant": "primary", "slot": "actions" }, { "default": ($$result4) => renderTemplate`Manage vendors` })}${renderComponent($$result3, "UiButton", $$UiButton, { "href": "#compliance", "variant": "secondary", "slot": "actions" }, { "default": ($$result4) => renderTemplate`Compliance review` })}` })}  ${maybeRenderHead()}<section class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"> ${renderComponent($$result2, "KpiCard", $$KpiCard, { "label": "Total vendors", "value": String(kpis.totalVendors), "trend": "+4 this month", "trendUp": true })} ${renderComponent($$result2, "KpiCard", $$KpiCard, { "label": "Pending approvals", "value": String(kpis.pendingApprovals), "hint": "Requires action" })} ${renderComponent($$result2, "KpiCard", $$KpiCard, { "label": "Suspended vendors", "value": String(Math.floor(kpis.totalVendors * 0.05)), "hint": "Risk management" })} ${renderComponent($$result2, "KpiCard", $$KpiCard, { "label": "Active vendors", "value": String(kpis.activeVendors), "hint": "KYC verified & trading", "trendUp": true })} ${renderComponent($$result2, "KpiCard", $$KpiCard, { "label": "Gross revenue", "value": formatINRFromPaise(kpis.grossRevenuePaise), "trend": "+8% growth", "trendUp": true })} ${renderComponent($$result2, "KpiCard", $$KpiCard, { "label": "Open disputes", "value": String(kpis.openDisputes), "hint": "Escalated cases" })} ${renderComponent($$result2, "KpiCard", $$KpiCard, { "label": "System health", "value": "99.8%", "hint": "Uptime this month", "trendUp": true })} ${renderComponent($$result2, "KpiCard", $$KpiCard, { "label": "Completed orders", "value": String(kpis.completedOrders), "hint": "Platform volume" })} </section>  <div class="mt-8 grid gap-6 lg:grid-cols-2"> ${renderComponent($$result2, "UiCard", $$UiCard, { "padding": "lg" }, { "default": ($$result3) => renderTemplate` <h2 class="mb-4 text-lg font-semibold">Vendor Growth</h2> ${renderComponent($$result3, "ChartBlock", $$ChartBlock, { "spec": growthSpec })} ` })} ${renderComponent($$result2, "UiCard", $$UiCard, { "padding": "lg" }, { "default": ($$result3) => renderTemplate` <h2 class="mb-4 text-lg font-semibold">Vendor Compliance Status</h2> ${renderComponent($$result3, "ChartBlock", $$ChartBlock, { "spec": complianceSpec })} ` })} </div>  <div class="mt-8 grid gap-6"> ${renderComponent($$result2, "UiCard", $$UiCard, { "padding": "lg", "id": "vendor-list" }, { "default": ($$result3) => renderTemplate` <div class="mb-4 flex items-center justify-between"> <h2 class="text-lg font-semibold">Vendors Pending Approval</h2> ${renderComponent($$result3, "UiBadge", $$UiBadge, { "variant": "warning" }, { "default": ($$result4) => renderTemplate`${kpis.pendingApprovals} Pending` })} </div> <div class="space-y-3"> ${Array.from({ length: 5 }).map((_, i) => renderTemplate`<div class="flex items-center justify-between rounded-lg border border-amber-500/20 bg-amber-500/5 px-3 py-3"> <div> <p class="font-medium">Vendor ${i + 1}</p> <p class="text-xs text-vs-muted">GSTIN: 18AABCU${String(1234 + i).padStart(4, "0")}H1Z0</p> </div> <div class="flex gap-2"> ${renderComponent($$result3, "UiButton", $$UiButton, { "variant": "secondary", "size": "sm" }, { "default": ($$result4) => renderTemplate`Review` })} ${renderComponent($$result3, "UiButton", $$UiButton, { "variant": "primary", "size": "sm" }, { "default": ($$result4) => renderTemplate`Approve` })} </div> </div>`)} </div> ` })} <!-- Compliance Alerts --> ${renderComponent($$result2, "UiCard", $$UiCard, { "padding": "lg", "id": "compliance" }, { "default": ($$result3) => renderTemplate` <h2 class="mb-4 text-lg font-semibold">Compliance Alerts & Actions</h2> <div class="space-y-3"> ${["High GMV vendor - verify KYC", "Duplicate vendor registration detected", "Unusual payment pattern flagged", "Vendor suspension review due"].map((alert, i) => renderTemplate`<div class="flex items-center justify-between border-b border-vs-border py-3 last:border-b-0"> <div> <p class="font-medium">${alert}</p> <p class="text-xs text-vs-muted">${formatDate(Date.now() - i * 36e5)}</p> </div> ${renderComponent($$result3, "UiBadge", $$UiBadge, { "variant": i === 0 ? "error" : "warning" }, { "default": ($$result4) => renderTemplate`${["CRITICAL", "HIGH", "MEDIUM", "LOW"][i]}` })} </div>`)} </div> ` })} </div> ` })}`;
}, "C:/Users/Vinay/Desktop/vendor/src/pages/admin/index.astro", void 0);

const $$file = "C:/Users/Vinay/Desktop/vendor/src/pages/admin/index.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
