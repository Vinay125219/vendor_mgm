import { c as createComponent } from './astro-component_D1F3j4nc.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_CV8pRvJF.mjs';
import { $ as $$VendorShell, a as $$PageHeader } from './PageHeader_C41VybD-.mjs';
import { $ as $$UiCard } from './UiCard_DdDgZOBN.mjs';
import { $ as $$UiButton } from './UiButton_9xyzcQW4.mjs';
import { c as getFulfillmentTrends, $ as $$ChartBlock } from './dashboard.service_B7r74-hF.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const fulfill = getFulfillmentTrends();
  const spec = {
    type: "line",
    labels: fulfill.map((f) => f.date),
    datasets: [
      {
        label: "Net revenue (index)",
        data: fulfill.map((f) => f.fulfilled * 1200 + f.pending * 200),
        borderColor: "rgb(14, 165, 233)",
        backgroundColor: "rgba(14, 165, 233, 0.1)"
      }
    ]
  };
  return renderTemplate`${renderComponent($$result, "VendorShell", $$VendorShell, { "title": "Reports" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "Reports", "description": "Exportable slices for finance and category managers — powered by the same aggregates as the dashboard." }, { "actions": ($$result3) => renderTemplate`${renderComponent($$result3, "UiButton", $$UiButton, { "variant": "primary", "slot": "actions" }, { "default": ($$result4) => renderTemplate`Download XLSX` })}${renderComponent($$result3, "UiButton", $$UiButton, { "variant": "secondary", "slot": "actions" }, { "default": ($$result4) => renderTemplate`Schedule email` })}` })} ${maybeRenderHead()}<div class="grid gap-6 lg:grid-cols-2"> ${renderComponent($$result2, "UiCard", $$UiCard, { "padding": "md" }, { "default": ($$result3) => renderTemplate` <h2 class="text-base font-semibold">Revenue index (mock)</h2> <p class="text-xs text-vs-muted">Swap with warehouse queries later.</p> <div class="mt-4"> ${renderComponent($$result3, "ChartBlock", $$ChartBlock, { "spec": spec })} </div> ` })} ${renderComponent($$result2, "UiCard", $$UiCard, { "padding": "md" }, { "default": ($$result3) => renderTemplate` <h2 class="text-base font-semibold">Saved views</h2> <ul class="mt-4 space-y-2 text-sm text-vs-muted"> <li class="rounded-[var(--radius-vs-sm)] border border-vs-border px-3 py-2">Payout readiness · weekly</li> <li class="rounded-[var(--radius-vs-sm)] border border-vs-border px-3 py-2">Catalog risk · daily</li> <li class="rounded-[var(--radius-vs-sm)] border border-vs-border px-3 py-2">SLA breaches · realtime</li> </ul> ` })} </div> ` })}`;
}, "C:/Users/Vinay/Desktop/vendor/src/pages/vendor/reports/index.astro", void 0);

const $$file = "C:/Users/Vinay/Desktop/vendor/src/pages/vendor/reports/index.astro";
const $$url = "/vendor/reports";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
