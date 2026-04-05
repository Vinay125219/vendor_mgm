import { c as createComponent } from './astro-component_D1F3j4nc.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_CV8pRvJF.mjs';
import { $ as $$VendorShell, a as $$PageHeader } from './PageHeader_C41VybD-.mjs';
import { $ as $$KpiCard } from './KpiCard_Dx7ChyxZ.mjs';
import { $ as $$UiCard } from './UiCard_DdDgZOBN.mjs';
import { $ as $$UiButton } from './UiButton_9xyzcQW4.mjs';
import { $ as $$UiBadge } from './UiBadge_DReIQUBO.mjs';
import { g as getDashboardKpis, $ as $$ChartBlock } from './dashboard.service_B7r74-hF.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const kpis = getDashboardKpis();
  const ticketSpec = {
    type: "bar",
    labels: ["Open", "In Progress", "Resolved", "Closed"],
    datasets: [
      {
        label: "Support Tickets",
        data: [12, 28, 45, 58],
        backgroundColor: ["#ef4444", "#f59e0b", "#3b82f6", "#22c55e"]
      }
    ]
  };
  const responseSpec = {
    type: "line",
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Avg Response Time (min)",
        data: [45, 38, 42, 35, 40, 48, 52],
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.12)"
      }
    ]
  };
  return renderTemplate`${renderComponent($$result, "VendorShell", $$VendorShell, { "title": "Support Center" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "Support center operations", "description": "Ticket management, vendor support requests, dispute resolution — customer-centric operations." }, { "actions": ($$result3) => renderTemplate`${renderComponent($$result3, "UiButton", $$UiButton, { "href": "#tickets", "variant": "primary", "slot": "actions" }, { "default": ($$result4) => renderTemplate`Open tickets` })}${renderComponent($$result3, "UiButton", $$UiButton, { "href": "#disputes", "variant": "secondary", "slot": "actions" }, { "default": ($$result4) => renderTemplate`Escalated cases` })}` })} ${maybeRenderHead()}<section class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"> ${renderComponent($$result2, "KpiCard", $$KpiCard, { "label": "Open tickets", "value": "12", "hint": "Require attention" })} ${renderComponent($$result2, "KpiCard", $$KpiCard, { "label": "In progress", "value": "28", "trend": "5 urgent tickets" })} ${renderComponent($$result2, "KpiCard", $$KpiCard, { "label": "Resolved today", "value": "15", "trend": "+3 vs yesterday", "trendUp": true })} ${renderComponent($$result2, "KpiCard", $$KpiCard, { "label": "Avg response time", "value": "32 min", "hint": "SLA: <2 hours", "trendUp": true })} ${renderComponent($$result2, "KpiCard", $$KpiCard, { "label": "Customer satisfaction", "value": "4.7/5", "hint": "92% positive ratings", "trendUp": true })} ${renderComponent($$result2, "KpiCard", $$KpiCard, { "label": "Active disputes", "value": String(kpis.openDisputes), "hint": "Escalated cases" })} ${renderComponent($$result2, "KpiCard", $$KpiCard, { "label": "Vendor escalations", "value": "6", "hint": "Needs management review" })} ${renderComponent($$result2, "KpiCard", $$KpiCard, { "label": "Follow-ups pending", "value": "8", "hint": "Due within 24h" })} </section> <div class="mt-8 grid gap-6 lg:grid-cols-2"> ${renderComponent($$result2, "UiCard", $$UiCard, { "padding": "lg" }, { "default": ($$result3) => renderTemplate` <h2 class="mb-4 text-lg font-semibold">Support Ticket Pipeline</h2> ${renderComponent($$result3, "ChartBlock", $$ChartBlock, { "spec": ticketSpec })} ` })} ${renderComponent($$result2, "UiCard", $$UiCard, { "padding": "lg" }, { "default": ($$result3) => renderTemplate` <h2 class="mb-4 text-lg font-semibold">Response Time Trend (7 days)</h2> ${renderComponent($$result3, "ChartBlock", $$ChartBlock, { "spec": responseSpec })} ` })} </div>  <div class="mt-8 grid gap-6"> ${renderComponent($$result2, "UiCard", $$UiCard, { "padding": "lg" }, { "default": ($$result3) => renderTemplate` <div class="mb-4 flex items-center justify-between"> <h2 class="text-lg font-semibold">Active Support Tickets</h2> ${renderComponent($$result3, "UiBadge", $$UiBadge, { "variant": "danger" }, { "default": ($$result4) => renderTemplate`12 Open` })} </div> <div class="space-y-3"> ${[
    { id: "10012", issue: "Payment gateway error on checkout", vendor: "Electronics Hub", priority: "Urgent", time: "2 hours" },
    { id: "10011", issue: "Inventory sync not working", vendor: "Fashion Store", priority: "High", time: "4 hours" },
    { id: "10010", issue: "Order cancellation dispute", vendor: "Books Central", priority: "High", time: "6 hours" },
    { id: "10009", issue: "Settlement amount mismatch", vendor: "Home Decor Co", priority: "Medium", time: "1 day" },
    { id: "10008", issue: "Product listing approval pending", vendor: "Beauty Plus", priority: "Medium", time: "2 days" }
  ].map((ticket) => renderTemplate`<div class="flex items-center justify-between rounded-lg border border-neutral-200 bg-white px-3 py-3 dark:border-neutral-700 dark:bg-neutral-900"> <div class="flex-1"> <p class="font-medium">Ticket #${ticket.id}: ${ticket.issue}</p> <p class="text-xs text-vs-muted">${ticket.vendor} • Open for ${ticket.time}</p> </div> <div class="flex items-center gap-2"> ${renderComponent($$result3, "UiBadge", $$UiBadge, { "variant": ticket.priority === "Urgent" ? "danger" : ticket.priority === "High" ? "warning" : "neutral" }, { "default": ($$result4) => renderTemplate`${ticket.priority}` })} ${renderComponent($$result3, "UiButton", $$UiButton, { "variant": "secondary", "size": "sm" }, { "default": ($$result4) => renderTemplate`View` })} </div> </div>`)} </div> ` })} <!-- Disputes & Escalations --> ${renderComponent($$result2, "UiCard", $$UiCard, { "padding": "lg" }, { "default": ($$result3) => renderTemplate` <div class="mb-4 flex items-center justify-between"> <h2 class="text-lg font-semibold">Escalated Disputes</h2> ${renderComponent($$result3, "UiBadge", $$UiBadge, { "variant": "warning" }, { "default": ($$result4) => renderTemplate`6 Active` })} </div> <div class="space-y-3"> ${[
    { issue: "Customer claims unauthorized charge - Chargeback filed", amount: "₹8,500", status: "Escalated" },
    { issue: "Vendor non-compliant with shipping timeline", amount: "Multiple orders", status: "Investigating" },
    { issue: "Quality complaint - Product damaged on delivery", amount: "₹3,200", status: "Pending Resolution" },
    { issue: "Vendor suspension request - Policy violation", amount: "Account risk", status: "Review Pending" }
  ].map((dispute, i) => renderTemplate`<div class="flex items-center justify-between border-b border-vs-border py-3 last:border-b-0"> <div> <p class="font-medium">${dispute.issue}</p> <p class="text-xs text-vs-muted">${dispute.amount}</p> </div> ${renderComponent($$result3, "UiBadge", $$UiBadge, { "variant": i === 0 ? "danger" : "warning" }, { "default": ($$result4) => renderTemplate`${dispute.status}` })} </div>`)} </div> ` })} </div>` })}`;
}, "C:/Users/Vinay/Desktop/vendor/src/pages/support/index.astro", void 0);

const $$file = "C:/Users/Vinay/Desktop/vendor/src/pages/support/index.astro";
const $$url = "/support";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
