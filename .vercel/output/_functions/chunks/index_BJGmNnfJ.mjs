import { c as createComponent } from './astro-component_D1F3j4nc.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_CV8pRvJF.mjs';
import { $ as $$VendorShell, a as $$PageHeader, h as mockSettlements, b as mockVendors } from './PageHeader_C41VybD-.mjs';
import { $ as $$UiTable } from './UiTable_CJc66xwx.mjs';
import { $ as $$UiBadge } from './UiBadge_DReIQUBO.mjs';
import { $ as $$UiButton } from './UiButton_9xyzcQW4.mjs';
import { f as formatINRFromPaise } from './format_CV2KI1dq.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  function vendorName(id) {
    return mockVendors.find((v) => v.id === id)?.businessName ?? id;
  }
  function stVariant(s) {
    if (s === "paid") return "paid";
    if (s === "failed") return "danger";
    if (s === "on_hold") return "on_hold";
    return "pending";
  }
  return renderTemplate`${renderComponent($$result, "VendorShell", $$VendorShell, { "title": "Settlements" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "Settlements & payouts", "description": "Commission breakdown, net payable, and Razorpay payout references for finance reconciliation." }, { "actions": ($$result3) => renderTemplate`${renderComponent($$result3, "UiButton", $$UiButton, { "variant": "secondary", "slot": "actions" }, { "default": ($$result4) => renderTemplate`Export ledger` })}` })} ${renderComponent($$result2, "UiTable", $$UiTable, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<thead class="border-b border-vs-border bg-vs-elevated/80 text-xs uppercase tracking-wide text-vs-muted"> <tr> <th class="px-4 py-3 font-semibold">Period</th> <th class="px-4 py-3 font-semibold">Vendor</th> <th class="px-4 py-3 font-semibold">Gross</th> <th class="px-4 py-3 font-semibold">Commission</th> <th class="px-4 py-3 font-semibold">Net</th> <th class="px-4 py-3 font-semibold">Status</th> <th class="px-4 py-3 font-semibold">Payout ref</th> </tr> </thead> <tbody> ${mockSettlements.map((s) => renderTemplate`<tr class="border-b border-vs-border/80 hover:bg-vs-elevated/40"> <td class="px-4 py-3 text-sm text-vs-muted"> ${s.periodStart} → ${s.periodEnd} </td> <td class="px-4 py-3 text-sm">${vendorName(s.vendorId)}</td> <td class="px-4 py-3 tabular-nums text-sm">${formatINRFromPaise(s.grossPaise)}</td> <td class="px-4 py-3 tabular-nums text-sm text-vs-muted">${formatINRFromPaise(s.commissionPaise)}</td> <td class="px-4 py-3 tabular-nums text-sm font-medium">${formatINRFromPaise(s.netPaise)}</td> <td class="px-4 py-3"> ${renderComponent($$result3, "UiBadge", $$UiBadge, { "variant": stVariant(s.status) }, { "default": ($$result4) => renderTemplate`${s.status.replace("_", " ")}` })} </td> <td class="px-4 py-3 font-mono text-xs text-vs-muted">${s.payoutRef ?? "—"}</td> </tr>`)} </tbody> ` })} ` })}`;
}, "C:/Users/Vinay/Desktop/vendor/src/pages/vendor/settlements/index.astro", void 0);

const $$file = "C:/Users/Vinay/Desktop/vendor/src/pages/vendor/settlements/index.astro";
const $$url = "/vendor/settlements";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
