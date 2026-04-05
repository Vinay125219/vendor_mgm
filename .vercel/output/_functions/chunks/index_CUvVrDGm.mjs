import { c as createComponent } from './astro-component_D1F3j4nc.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_CV8pRvJF.mjs';
import { $ as $$VendorShell, a as $$PageHeader, e as mockOrders } from './PageHeader_C41VybD-.mjs';
import { $ as $$UiTable } from './UiTable_CJc66xwx.mjs';
import { $ as $$UiBadge } from './UiBadge_DReIQUBO.mjs';
import { $ as $$UiButton } from './UiButton_9xyzcQW4.mjs';
import { $ as $$TableFilter } from './TableFilter_g6Mgs-7_.mjs';
import { f as formatINRFromPaise } from './format_CV2KI1dq.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  function statusVariant(s) {
    if (s === "paid" || s === "shipped" || s === "delivered") return "success";
    if (s === "refunded" || s === "cancelled") return "danger";
    return "neutral";
  }
  return renderTemplate`${renderComponent($$result, "VendorShell", $$VendorShell, { "title": "Orders" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "Orders", "description": "Fulfillment stages, Razorpay linkage, and return/refund workflows in one operational view." }, { "actions": ($$result3) => renderTemplate`${renderComponent($$result3, "UiButton", $$UiButton, { "variant": "secondary", "slot": "actions" }, { "default": ($$result4) => renderTemplate`Export CSV` })}` })} ${maybeRenderHead()}<div class="mb-4 flex flex-wrap gap-2"> ${renderComponent($$result2, "UiBadge", $$UiBadge, { "variant": "accent" }, { "default": ($$result3) => renderTemplate`All` })} ${renderComponent($$result2, "UiBadge", $$UiBadge, { "variant": "neutral" }, { "default": ($$result3) => renderTemplate`Unfulfilled` })} ${renderComponent($$result2, "UiBadge", $$UiBadge, { "variant": "neutral" }, { "default": ($$result3) => renderTemplate`SLA risk` })} ${renderComponent($$result2, "UiBadge", $$UiBadge, { "variant": "neutral" }, { "default": ($$result3) => renderTemplate`Returns` })} </div> ${renderComponent($$result2, "TableFilter", $$TableFilter, { "placeholder": "Search order id, customer, payment…" })} ${renderComponent($$result2, "UiTable", $$UiTable, {}, { "default": ($$result3) => renderTemplate` <thead class="border-b border-vs-border bg-vs-elevated/80 text-xs uppercase tracking-wide text-vs-muted"> <tr> <th class="px-4 py-3 font-semibold">Order</th> <th class="px-4 py-3 font-semibold">Customer</th> <th class="px-4 py-3 font-semibold">Total</th> <th class="px-4 py-3 font-semibold">Status</th> <th class="px-4 py-3 font-semibold">Fulfillment</th> <th class="px-4 py-3 font-semibold">Payment ref</th> <th class="px-4 py-3 font-semibold"></th> </tr> </thead> <tbody data-vs-table> ${mockOrders.map((o) => renderTemplate`<tr class="border-b border-vs-border/80 hover:bg-vs-elevated/40"> <td class="px-4 py-3 font-mono text-sm text-vs-fg">${o.id}</td> <td class="px-4 py-3 text-sm text-vs-muted"> <p>${o.customer.name}</p> <p class="text-xs">${o.customer.email}</p> </td> <td class="px-4 py-3 text-sm tabular-nums">${formatINRFromPaise(o.totalPaise)}</td> <td class="px-4 py-3"> ${renderComponent($$result3, "UiBadge", $$UiBadge, { "variant": statusVariant(o.status) }, { "default": ($$result4) => renderTemplate`${o.status}` })} </td> <td class="px-4 py-3"> ${renderComponent($$result3, "UiBadge", $$UiBadge, { "variant": "info" }, { "default": ($$result4) => renderTemplate`${o.fulfillmentStage}` })} </td> <td class="px-4 py-3 font-mono text-xs text-vs-muted">${o.razorpayOrderId ?? "—"}</td> <td class="px-4 py-3 text-right"> ${renderComponent($$result3, "UiButton", $$UiButton, { "href": `/vendor/orders/${o.id}`, "variant": "ghost", "size": "sm" }, { "default": ($$result4) => renderTemplate`
Open
` })} </td> </tr>`)} </tbody> ` })} ` })}`;
}, "C:/Users/Vinay/Desktop/vendor/src/pages/vendor/orders/index.astro", void 0);

const $$file = "C:/Users/Vinay/Desktop/vendor/src/pages/vendor/orders/index.astro";
const $$url = "/vendor/orders";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
