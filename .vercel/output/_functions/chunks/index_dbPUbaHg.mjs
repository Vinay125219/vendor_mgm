import { c as createComponent } from './astro-component_BJcmtL7v.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_Cug4CaDP.mjs';
import { $ as $$VendorShell, a as $$PageHeader } from './PageHeader_DGhT7KE0.mjs';
import { $ as $$KpiCard } from './KpiCard_Cxwekf7v.mjs';
import { $ as $$UiCard } from './UiCard_-clAiy_c.mjs';
import { $ as $$UiButton } from './UiButton_C6ZwpCjp.mjs';
import { $ as $$UiBadge } from './UiBadge_ChdQeMxj.mjs';
import { g as getDashboardKpis, a as getPaymentStatusDistribution, $ as $$ChartBlock } from './dashboard.service_YjbujEOf.mjs';
import { f as formatINRFromPaise, a as formatDate } from './format_CV2KI1dq.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const kpis = getDashboardKpis();
  const payDist = getPaymentStatusDistribution();
  const paySpec = {
    type: "doughnut",
    labels: payDist.map((p) => p.status),
    datasets: [
      {
        label: "Payment Status",
        data: payDist.map((p) => p.count),
        backgroundColor: ["#22c55e", "#eab308", "#ef4444", "#6366f1", "#94a3b8"]
      }
    ]
  };
  const settlementSpec = {
    type: "bar",
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Daily Settlements (₹)",
        data: [245e3, 189e3, 312e3, 156e3, 428e3, 198e3, 267e3],
        backgroundColor: "rgba(34, 197, 94, 0.7)"
      }
    ]
  };
  return renderTemplate`${renderComponent($$result, "VendorShell", $$VendorShell, { "title": "Finance Operations" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "Financial operations center", "description": "Payment processing, settlements, reconciliation — complete financial oversight and reporting." }, { "actions": ($$result3) => renderTemplate`${renderComponent($$result3, "UiButton", $$UiButton, { "href": "#settlements", "variant": "primary", "slot": "actions" }, { "default": ($$result4) => renderTemplate`Process settlements` })}${renderComponent($$result3, "UiButton", $$UiButton, { "href": "#reconciliation", "variant": "secondary", "slot": "actions" }, { "default": ($$result4) => renderTemplate`Reconciliation` })}` })}  ${maybeRenderHead()}<section class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"> ${renderComponent($$result2, "KpiCard", $$KpiCard, { "label": "Total payments captured", "value": formatINRFromPaise(kpis.grossRevenuePaise), "trend": "+18% vs last month", "trendUp": true })} ${renderComponent($$result2, "KpiCard", $$KpiCard, { "label": "Pending settlements", "value": formatINRFromPaise(Math.floor(kpis.grossRevenuePaise * 0.15)), "hint": "Next cycle: 2 days" })} ${renderComponent($$result2, "KpiCard", $$KpiCard, { "label": "Settled (MTD)", "value": formatINRFromPaise(Math.floor(kpis.grossRevenuePaise * 0.85)), "trend": "98.2% success", "trendUp": true })} ${renderComponent($$result2, "KpiCard", $$KpiCard, { "label": "Failed/refunded", "value": formatINRFromPaise(Math.floor(kpis.grossRevenuePaise * 0.03)), "hint": "Initiated refunds" })} ${renderComponent($$result2, "KpiCard", $$KpiCard, { "label": "Settlement success rate", "value": "99.8%", "hint": "Industry leading", "trendUp": true })} ${renderComponent($$result2, "KpiCard", $$KpiCard, { "label": "Avg settlement time", "value": "2.1 days", "hint": "Faster than avg", "trendUp": true })} ${renderComponent($$result2, "KpiCard", $$KpiCard, { "label": "Reconciliation status", "value": "100%", "hint": "Fully reconciled", "trendUp": true })} ${renderComponent($$result2, "KpiCard", $$KpiCard, { "label": "Chargeback rate", "value": "0.08%", "hint": "Very low risk", "trendUp": true })} </section>  <div class="mt-8 grid gap-6 lg:grid-cols-2"> ${renderComponent($$result2, "UiCard", $$UiCard, { "padding": "lg" }, { "default": ($$result3) => renderTemplate` <h2 class="mb-4 text-lg font-semibold">Payment Status Distribution</h2> ${renderComponent($$result3, "ChartBlock", $$ChartBlock, { "spec": paySpec })} ` })} ${renderComponent($$result2, "UiCard", $$UiCard, { "padding": "lg" }, { "default": ($$result3) => renderTemplate` <h2 class="mb-4 text-lg font-semibold">Daily Settlement Volume (Last 7 days)</h2> ${renderComponent($$result3, "ChartBlock", $$ChartBlock, { "spec": settlementSpec })} ` })} </div>  <div class="mt-8 grid gap-6"> ${renderComponent($$result2, "UiCard", $$UiCard, { "padding": "lg" }, { "default": ($$result3) => renderTemplate` <div class="mb-4 flex items-center justify-between"> <h2 class="text-lg font-semibold">Pending Settlement Batches</h2> ${renderComponent($$result3, "UiBadge", $$UiBadge, { "variant": "warning" }, { "default": ($$result4) => renderTemplate`8 Pending` })} </div> <div class="space-y-3"> ${Array.from({ length: 5 }).map((_, i) => renderTemplate`<div class="flex items-center justify-between rounded-lg border border-amber-500/20 bg-amber-500/5 px-3 py-3"> <div class="flex-1"> <p class="font-medium">Settlement Batch #${i + 1001}</p> <p class="text-xs text-vs-muted">${formatINRFromPaise((i + 1) * 15e4)} • ${["2 hours", "4 hours", "1 day", "2 days", "3 days"][i]}</p> </div> <div class="flex gap-2"> ${renderComponent($$result3, "UiButton", $$UiButton, { "variant": "secondary", "size": "sm" }, { "default": ($$result4) => renderTemplate`Review` })} ${renderComponent($$result3, "UiButton", $$UiButton, { "variant": "primary", "size": "sm" }, { "default": ($$result4) => renderTemplate`Process` })} </div> </div>`)} </div> ` })} <!-- Refund Processing --> ${renderComponent($$result2, "UiCard", $$UiCard, { "padding": "lg" }, { "default": ($$result3) => renderTemplate` <h2 class="mb-4 text-lg font-semibold">Active Refund Processing</h2> <div class="space-y-3"> ${["Customer refund request - Order #45821", "Payment reversal - Duplicate charge", "Chargeback - Customer dispute", "Partial refund - Item return", "Cancelled order - Auto refund"].map((refund, i) => renderTemplate`<div class="flex items-center justify-between border-b border-vs-border py-3 last:border-b-0"> <div> <p class="font-medium">${refund}</p> <p class="text-xs text-vs-muted">${formatINRFromPaise((i + 1) * 5e3)} • ${formatDate(new Date(Date.now() - i * 36e5).toISOString())}</p> </div> ${renderComponent($$result3, "UiBadge", $$UiBadge, { "variant": i === 0 ? "danger" : "warning" }, { "default": ($$result4) => renderTemplate`${["URGENT", "HIGH", "MEDIUM", "LOW", "PENDING"][i]}` })} </div>`)} </div> ` })} <!-- Daily Reconciliation --> ${renderComponent($$result2, "UiCard", $$UiCard, { "padding": "lg" }, { "default": ($$result3) => renderTemplate` <h2 class="mb-4 text-lg font-semibold">Daily Reconciliation Status</h2> <div class="space-y-2"> ${[
    { date: "Today", status: "In Progress", matched: "99.8%" },
    { date: "Yesterday", status: "Completed", matched: "100%" },
    { date: "2 days ago", status: "Completed", matched: "100%" },
    { date: "3 days ago", status: "Completed", matched: "99.9%" }
  ].map((rec) => renderTemplate`<div class="flex items-center justify-between border-b border-vs-border py-2 last:border-b-0"> <div> <p class="font-medium">${rec.date}</p> <p class="text-xs text-vs-muted">${rec.matched} matched</p> </div> ${renderComponent($$result3, "UiBadge", $$UiBadge, { "variant": rec.status === "Completed" ? "success" : "info" }, { "default": ($$result4) => renderTemplate`${rec.status}` })} </div>`)} </div> ` })} </div> ` })}`;
}, "C:/Users/Vinay/Desktop/vendor/src/pages/finance/index.astro", void 0);

const $$file = "C:/Users/Vinay/Desktop/vendor/src/pages/finance/index.astro";
const $$url = "/finance";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
