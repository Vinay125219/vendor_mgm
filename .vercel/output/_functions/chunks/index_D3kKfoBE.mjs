import { c as createComponent } from './astro-component_BJcmtL7v.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_Cug4CaDP.mjs';
import { $ as $$VendorShell, a as $$PageHeader, m as mockDisputes, b as mockVendors } from './PageHeader_DGhT7KE0.mjs';
import { $ as $$UiTable } from './UiTable_DJUpEr9W.mjs';
import { $ as $$UiBadge } from './UiBadge_ChdQeMxj.mjs';
import { $ as $$UiButton } from './UiButton_C6ZwpCjp.mjs';
import { f as formatINRFromPaise } from './format_CV2KI1dq.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  function vendorName(id) {
    return mockVendors.find((v) => v.id === id)?.businessName ?? id;
  }
  return renderTemplate`${renderComponent($$result, "VendorShell", $$VendorShell, { "title": "Disputes" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "Returns & disputes", "description": "Tie-breakers between vendors, customers, and payments — with chargeback visibility." }, { "actions": ($$result3) => renderTemplate`${renderComponent($$result3, "UiButton", $$UiButton, { "variant": "primary", "slot": "actions" }, { "default": ($$result4) => renderTemplate`New case` })}` })} ${renderComponent($$result2, "UiTable", $$UiTable, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<thead class="border-b border-vs-border bg-vs-elevated/80 text-xs uppercase tracking-wide text-vs-muted"> <tr> <th class="px-4 py-3 font-semibold">Case</th> <th class="px-4 py-3 font-semibold">Order</th> <th class="px-4 py-3 font-semibold">Vendor</th> <th class="px-4 py-3 font-semibold">Type</th> <th class="px-4 py-3 font-semibold">Amount</th> <th class="px-4 py-3 font-semibold">Status</th> <th class="px-4 py-3 font-semibold"></th> </tr> </thead> <tbody> ${mockDisputes.map((d) => renderTemplate`<tr class="border-b border-vs-border/80"> <td class="px-4 py-3 font-mono text-sm">${d.id}</td> <td class="px-4 py-3 font-mono text-xs">${d.orderId}</td> <td class="px-4 py-3 text-sm">${vendorName(d.vendorId)}</td> <td class="px-4 py-3"> ${renderComponent($$result3, "UiBadge", $$UiBadge, { "variant": "neutral" }, { "default": ($$result4) => renderTemplate`${d.type}` })} </td> <td class="px-4 py-3 tabular-nums">${formatINRFromPaise(d.amountPaise)}</td> <td class="px-4 py-3"> ${renderComponent($$result3, "UiBadge", $$UiBadge, { "variant": "warning" }, { "default": ($$result4) => renderTemplate`${d.status.replace("_", " ")}` })} </td> <td class="px-4 py-3 text-right"> ${renderComponent($$result3, "UiButton", $$UiButton, { "variant": "ghost", "size": "sm" }, { "default": ($$result4) => renderTemplate`
Review
` })} </td> </tr>`)} </tbody> ` })} ` })}`;
}, "C:/Users/Vinay/Desktop/vendor/src/pages/vendor/disputes/index.astro", void 0);

const $$file = "C:/Users/Vinay/Desktop/vendor/src/pages/vendor/disputes/index.astro";
const $$url = "/vendor/disputes";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
