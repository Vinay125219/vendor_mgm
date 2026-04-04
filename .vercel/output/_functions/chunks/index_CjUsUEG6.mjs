import { c as createComponent } from './astro-component_BR9_Owca.mjs';
import 'piccolore';
import { m as maybeRenderHead, h as addAttribute, o as renderSlot, r as renderTemplate, n as renderComponent } from './entrypoint_B9G27Yxt.mjs';
import { r as renderScript } from './constants_CmOIQZgW.mjs';
import { $ as $$VendorShell, a as $$PageHeader, b as mockVendors, k as mockTickets } from './PageHeader_CvItCAHT.mjs';
import { $ as $$UiCard } from './UiCard_C97yNYVB.mjs';
import { $ as $$UiBadge } from './UiBadge_DVyRGpab.mjs';
import 'clsx';
import { a as formatDate } from './format_CV2KI1dq.mjs';

const $$EmptyState = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$EmptyState;
  const { title, description, class: className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "flex flex-col items-center justify-center rounded-[var(--radius-vs)] border border-dashed border-vs-border bg-vs-elevated/50 px-6 py-14 text-center",
    className
  ], "class:list")}> <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-vs-accent-soft text-vs-accent"> ${renderSlot($$result, $$slots["icon"])} </div> <h3 class="text-base font-semibold text-vs-fg">${title}</h3> ${description && renderTemplate`<p class="mt-2 max-w-sm text-sm text-vs-muted">${description}</p>`} <div class="mt-6"> ${renderSlot($$result, $$slots["action"])} </div> </div>`;
}, "C:/Users/Vinay/Desktop/vendor/src/components/ui/EmptyState.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  function vendorName(id) {
    return mockVendors.find((v) => v.id === id)?.businessName ?? id;
  }
  return renderTemplate`${renderComponent($$result, "VendorShell", $$VendorShell, { "title": "Support" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "Support desk", "description": "New tickets are stored in your browser and appear in the list below immediately." })} ${renderComponent($$result2, "UiCard", $$UiCard, { "class": "mb-8", "padding": "lg" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h2 class="text-base font-semibold text-vs-fg">Create ticket</h2> <form id="vs-ticket-form" class="mt-4 flex flex-col gap-3 sm:flex-row sm:items-end"> <label class="flex min-w-0 flex-1 flex-col gap-1 text-sm"> <span class="text-vs-muted">Vendor</span> <select name="vendorId" class="rounded-[var(--radius-vs-sm)] border border-vs-border bg-vs-bg px-3 py-2"> ${mockVendors.map((v) => renderTemplate`<option${addAttribute(v.id, "value")}>${v.businessName}</option>`)} </select> </label> <label class="flex min-w-0 flex-[2] flex-col gap-1 text-sm"> <span class="text-vs-muted">Subject</span> <input name="subject" required class="rounded-[var(--radius-vs-sm)] border border-vs-border bg-vs-bg px-3 py-2" placeholder="What do you need help with?"> </label> <button type="submit" class="rounded-[var(--radius-vs-sm)] bg-vs-accent px-5 py-2.5 text-sm font-semibold text-white hover:brightness-110">
Submit
</button> </form> <p id="vs-ticket-err" class="mt-2 hidden text-sm text-red-600 dark:text-red-400"></p> ` })} <div class="grid gap-6 lg:grid-cols-3"> ${renderComponent($$result2, "UiCard", $$UiCard, { "class": "lg:col-span-2", "padding": "lg" }, { "default": ($$result3) => renderTemplate` <h2 class="text-base font-semibold">Open tickets</h2> <ul class="mt-4 divide-y divide-vs-border/80" id="vs-ticket-list"> ${mockTickets.map((t) => renderTemplate`<li class="flex flex-wrap items-center justify-between gap-3 py-4"> <div> <p class="font-medium text-vs-fg">${t.subject}</p> <p class="text-xs text-vs-muted">${vendorName(t.vendorId)}</p> </div> <div class="flex items-center gap-2"> ${renderComponent($$result3, "UiBadge", $$UiBadge, { "variant": "neutral" }, { "default": ($$result4) => renderTemplate`${t.priority}` })} ${renderComponent($$result3, "UiBadge", $$UiBadge, { "variant": "warning" }, { "default": ($$result4) => renderTemplate`${t.status}` })} <span class="text-xs text-vs-muted">${formatDate(t.updatedAt)}</span> </div> </li>`)} </ul> ` })} ${renderComponent($$result2, "UiCard", $$UiCard, { "padding": "lg" }, { "default": ($$result3) => renderTemplate` <h2 class="text-base font-semibold">Helpful links</h2> <ul class="mt-4 space-y-2 text-sm text-vs-accent"> <li> <a href="/vendor/onboarding" class="hover:underline">Onboarding guide</a> </li> <li> <a href="/vendor/payments" class="hover:underline">Payments & webhooks</a> </li> <li> <a href="/vendor/reports" class="hover:underline">Operational reports</a> </li> </ul> ` })} </div> <div class="mt-8"> ${renderComponent($$result2, "EmptyState", $$EmptyState, { "title": "No SLA breaches", "description": "When monitors fire, they will surface here with owner assignment." }, { "icon": ($$result3) => renderTemplate`<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg>` })} </div> ` })} ${renderScript($$result, "C:/Users/Vinay/Desktop/vendor/src/pages/vendor/support/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Vinay/Desktop/vendor/src/pages/vendor/support/index.astro", void 0);

const $$file = "C:/Users/Vinay/Desktop/vendor/src/pages/vendor/support/index.astro";
const $$url = "/vendor/support";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
