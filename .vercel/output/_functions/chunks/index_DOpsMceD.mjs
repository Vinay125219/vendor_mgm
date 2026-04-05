import { c as createComponent } from './astro-component_BJcmtL7v.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_Cug4CaDP.mjs';
import { $ as $$VendorShell, r as renderScript, a as $$PageHeader, f as mockWebhookLog, g as mockPayments } from './PageHeader_DGhT7KE0.mjs';
import { $ as $$UiTable } from './UiTable_DJUpEr9W.mjs';
import { $ as $$UiBadge } from './UiBadge_ChdQeMxj.mjs';
import { $ as $$UiButton } from './UiButton_C6ZwpCjp.mjs';
import { $ as $$UiCard } from './UiCard_-clAiy_c.mjs';
import { $ as $$UiAlert } from './UiAlert_B00Y8FGQ.mjs';
import { $ as $$TableFilter } from './TableFilter_D5ghsCgG.mjs';
import { f as formatINRFromPaise } from './format_CV2KI1dq.mjs';

function getRazorpayKeyId() {
  return "rzp_test_xxx";
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  function payVariant(s) {
    if (s === "captured" || s === "authorized") return "success";
    if (s === "failed") return "danger";
    if (s === "refunded" || s === "disputed") return "warning";
    return "neutral";
  }
  const keyId = getRazorpayKeyId();
  return renderTemplate`${renderComponent($$result, "VendorShell", $$VendorShell, { "title": "Payments" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "Payments", "description": "Razorpay order → payment mapping — verification and webhooks would run on your API in production." }, { "actions": ($$result3) => renderTemplate`${renderComponent($$result3, "UiButton", $$UiButton, { "href": "#checkout-stub", "variant": "primary", "slot": "actions" }, { "default": ($$result4) => renderTemplate`Test checkout (stub)` })}` })} ${renderComponent($$result2, "UiAlert", $$UiAlert, { "variant": "info", "title": "Production verification" }, { "default": ($$result3) => renderTemplate`
Never trust client-only success callbacks. Use a server ${maybeRenderHead()}<code class="font-mono text-xs">payments/verify</code> endpoint and
    webhooks for authoritative state.
` })} <div class="mt-6 grid gap-4 lg:grid-cols-3"> ${renderComponent($$result2, "UiCard", $$UiCard, { "padding": "md", "class": "lg:col-span-2" }, { "default": ($$result3) => renderTemplate` <h2 class="text-sm font-semibold text-vs-fg">Public key (mock)</h2> <p class="mt-2 font-mono text-xs text-vs-muted break-all">${keyId}</p> ` })} ${renderComponent($$result2, "UiCard", $$UiCard, { "padding": "md" }, { "default": ($$result3) => renderTemplate` <h2 class="text-sm font-semibold text-vs-fg">Latest webhook</h2> <p class="mt-2 text-xs text-vs-muted"> ${mockWebhookLog[0]?.event} · ${mockWebhookLog[0]?.verified ? "verified" : "pending"} </p> ` })} </div> <h2 class="mt-10 text-base font-semibold" id="checkout-stub">
Checkout stub (client)
</h2> <p class="text-sm text-vs-muted">
Loads Razorpay Checkout script when you wire real keys; below is a safe placeholder CTA.
</p> <div class="mt-4 flex flex-wrap gap-2"> ${renderComponent($$result2, "UiButton", $$UiButton, { "variant": "secondary", "id": "vs-razorpay-open" }, { "default": ($$result3) => renderTemplate`Open Checkout (mock)` })} </div> <h2 class="mt-10 text-base font-semibold">Transactions</h2> ${renderComponent($$result2, "TableFilter", $$TableFilter, { "placeholder": "Search order, payment id…" })} ${renderComponent($$result2, "UiTable", $$UiTable, { "class": "mt-4" }, { "default": ($$result3) => renderTemplate` <thead class="border-b border-vs-border bg-vs-elevated/80 text-xs uppercase tracking-wide text-vs-muted"> <tr> <th class="px-4 py-3 font-semibold">Payment</th> <th class="px-4 py-3 font-semibold">Order</th> <th class="px-4 py-3 font-semibold">Amount</th> <th class="px-4 py-3 font-semibold">Status</th> <th class="px-4 py-3 font-semibold">Updated</th> </tr> </thead> <tbody data-vs-table> ${mockPayments.map((p) => renderTemplate`<tr class="border-b border-vs-border/80"> <td class="px-4 py-3 font-mono text-xs">${p.razorpayPaymentId ?? p.id}</td> <td class="px-4 py-3 font-mono text-xs">${p.orderId}</td> <td class="px-4 py-3 tabular-nums">${formatINRFromPaise(p.amountPaise)}</td> <td class="px-4 py-3"> ${renderComponent($$result3, "UiBadge", $$UiBadge, { "variant": payVariant(p.status) }, { "default": ($$result4) => renderTemplate`${p.status}` })} </td> <td class="px-4 py-3 text-xs text-vs-muted">${p.updatedAt}</td> </tr>`)} </tbody> ` })} ` })} ${renderScript($$result, "C:/Users/Vinay/Desktop/vendor/src/pages/vendor/payments/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Vinay/Desktop/vendor/src/pages/vendor/payments/index.astro", void 0);

const $$file = "C:/Users/Vinay/Desktop/vendor/src/pages/vendor/payments/index.astro";
const $$url = "/vendor/payments";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
