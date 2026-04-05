import { c as createComponent } from './astro-component_BJcmtL7v.mjs';
import 'piccolore';
import { r as renderTemplate, l as renderComponent, m as maybeRenderHead, h as addAttribute } from './entrypoint_Cug4CaDP.mjs';
import { e as mockOrders, $ as $$VendorShell, a as $$PageHeader } from './PageHeader_DGhT7KE0.mjs';
import { $ as $$UiCard } from './UiCard_-clAiy_c.mjs';
import { $ as $$UiBadge } from './UiBadge_ChdQeMxj.mjs';
import { $ as $$UiButton } from './UiButton_C6ZwpCjp.mjs';
import { a as formatDate, f as formatINRFromPaise } from './format_CV2KI1dq.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
function getStaticPaths() {
  return mockOrders.map((o) => ({ params: { id: o.id } }));
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const order = mockOrders.find((o) => o.id === id);
  if (!order) {
    return Astro2.redirect("/vendor/orders");
  }
  const timeline = [
    { at: order.createdAt, label: "Order created", note: "Checkout completed" },
    { at: order.updatedAt, label: "Last update", note: `Status ${order.status}` }
  ];
  const stages = ["unfulfilled", "picking", "packed", "shipped", "completed"];
  return renderTemplate(_a || (_a = __template(["", ` <script>
  import { orderService, getErrorMessage } from '@/services/backend.service';

  const formEl = document.getElementById('vs-order-stage-form');
  const oid = formEl?.getAttribute('data-order-id');
  const label = document.getElementById('vs-order-stage-label');

  formEl?.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!oid) return;

    const submitBtn = formEl.querySelector('button[type="submit"]');
    const select = formEl.querySelector('select[name="fulfillmentStage"]');
    const stage = select?.value;

    if (!stage) return;

    submitBtn.disabled = true;
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Saving...';

    try {
      await orderService.updateFulfillmentStage(oid, stage);
      if (label) label.textContent = stage;
      window.dispatchEvent(new CustomEvent('vs:toast', { detail: { message: 'Fulfillment stage updated', level: 'success' } }));
    } catch (error) {
      window.dispatchEvent(new CustomEvent('vs:toast', { detail: { message: getErrorMessage(error), level: 'error' } }));
      console.error('Update failed:', error);
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }
  });
<\/script>`])), renderComponent($$result, "VendorShell", $$VendorShell, { "title": `Order ${order.id}` }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": order.id, "description": `Placed ${formatDate(order.createdAt)}` }, { "actions": async ($$result3) => renderTemplate`${renderComponent($$result3, "UiButton", $$UiButton, { "href": "/vendor/orders", "variant": "secondary", "slot": "actions" }, { "default": async ($$result4) => renderTemplate`Back` })}` })} ${maybeRenderHead()}<div class="grid gap-6 lg:grid-cols-3"> ${renderComponent($$result2, "UiCard", $$UiCard, { "class": "lg:col-span-2", "padding": "lg" }, { "default": async ($$result3) => renderTemplate` <h2 class="text-base font-semibold">Line items</h2> <ul class="mt-4 divide-y divide-vs-border/80"> ${order.lines.map((l) => renderTemplate`<li class="flex flex-wrap items-center justify-between gap-2 py-3 text-sm"> <div> <p class="font-medium text-vs-fg">${l.title}</p> <p class="font-mono text-xs text-vs-muted">${l.sku}</p> </div> <div class="text-right tabular-nums"> <p> ${l.qty} × ${formatINRFromPaise(l.unitPricePaise)} </p> </div> </li>`)} </ul> <p class="mt-4 text-right text-sm font-semibold">
Total ${formatINRFromPaise(order.totalPaise)} </p> ` })} ${renderComponent($$result2, "UiCard", $$UiCard, { "padding": "lg" }, { "default": async ($$result3) => renderTemplate` <h2 class="text-base font-semibold">Payment</h2> <dl class="mt-4 space-y-2 text-sm"> <div class="flex justify-between gap-2"> <dt class="text-vs-muted">Razorpay order</dt> <dd class="font-mono text-xs">${order.razorpayOrderId ?? "—"}</dd> </div> <div class="flex justify-between gap-2"> <dt class="text-vs-muted">Payment id</dt> <dd class="font-mono text-xs">${order.paymentId ?? "—"}</dd> </div> <div class="mt-3"> ${renderComponent($$result3, "UiBadge", $$UiBadge, { "variant": "success" }, { "default": async ($$result4) => renderTemplate`${order.status}` })} </div> </dl> ` })} </div> ${renderComponent($$result2, "UiCard", $$UiCard, { "class": "mt-6", "padding": "lg" }, { "default": async ($$result3) => renderTemplate` <h2 class="text-base font-semibold">Fulfillment stage</h2> <p class="mt-1 text-sm text-vs-muted">Updates persist to the order record, activity feed, and audit log.</p> <form id="vs-order-stage-form" class="mt-4 flex flex-wrap items-end gap-3"${addAttribute(order.id, "data-order-id")}> <label class="flex flex-col gap-1 text-sm"> <span class="text-vs-muted">Stage</span> <select name="fulfillmentStage" class="rounded-[var(--radius-vs-sm)] border border-vs-border bg-vs-bg px-3 py-2 capitalize"> ${stages.map((s) => renderTemplate`<option${addAttribute(s, "value")}${addAttribute(s === order.fulfillmentStage, "selected")}> ${s.replace("_", " ")} </option>`)} </select> </label> <button type="submit" class="rounded-[var(--radius-vs-sm)] bg-vs-accent px-4 py-2 text-sm font-semibold text-white hover:brightness-110">
Save stage
</button> </form> <p class="mt-2 text-xs text-vs-muted">
Current: <span class="font-medium text-vs-fg" id="vs-order-stage-label">${order.fulfillmentStage}</span> </p> ` })} ${renderComponent($$result2, "UiCard", $$UiCard, { "class": "mt-6", "padding": "lg" }, { "default": async ($$result3) => renderTemplate` <h2 class="text-base font-semibold">Timeline & notes</h2> <ol class="mt-4 space-y-4 border-l border-vs-border pl-4"> ${timeline.map((t) => renderTemplate`<li class="relative"> <span class="absolute -left-[21px] top-1.5 h-2.5 w-2.5 rounded-full bg-vs-accent" aria-hidden="true"></span> <p class="text-sm font-medium text-vs-fg">${t.label}</p> <p class="text-xs text-vs-muted">${formatDate(t.at)}</p> <p class="text-sm text-vs-muted">${t.note}</p> </li>`)} </ol> ` })} ` }));
}, "C:/Users/Vinay/Desktop/vendor/src/pages/vendor/orders/[id].astro", void 0);

const $$file = "C:/Users/Vinay/Desktop/vendor/src/pages/vendor/orders/[id].astro";
const $$url = "/vendor/orders/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
