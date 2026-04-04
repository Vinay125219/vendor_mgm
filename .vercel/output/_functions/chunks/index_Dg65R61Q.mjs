import { c as createComponent } from './astro-component_BR9_Owca.mjs';
import 'piccolore';
import { n as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_B9G27Yxt.mjs';
import { $ as $$VendorShell, a as $$PageHeader, b as mockVendors } from './PageHeader_CvItCAHT.mjs';
import { $ as $$UiTable } from './UiTable_BoIqhcaz.mjs';
import { $ as $$UiBadge } from './UiBadge_DVyRGpab.mjs';
import { $ as $$UiButton } from './UiButton_X1Id3z-x.mjs';
import { $ as $$TableFilter } from './TableFilter_DdSnAb0s.mjs';
import { a as formatDate } from './format_CV2KI1dq.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "VendorShell", $$VendorShell, { "title": "Vendors" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "Vendor directory", "description": "Lifecycle states, risk posture, and KYC — optimized for approvals and finance reviews." }, { "actions": ($$result3) => renderTemplate`${renderComponent($$result3, "UiButton", $$UiButton, { "href": "/vendor/onboarding", "variant": "primary", "slot": "actions" }, { "default": ($$result4) => renderTemplate`Start onboarding` })}` })} ${renderComponent($$result2, "TableFilter", $$TableFilter, { "placeholder": "Search vendors, email, GSTIN…" })} ${renderComponent($$result2, "UiTable", $$UiTable, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<thead class="border-b border-vs-border bg-vs-elevated/80 text-xs uppercase tracking-wide text-vs-muted"> <tr> <th class="px-4 py-3 font-semibold">Business</th> <th class="px-4 py-3 font-semibold">Contact</th> <th class="px-4 py-3 font-semibold">State</th> <th class="px-4 py-3 font-semibold">KYC</th> <th class="px-4 py-3 font-semibold">Risk</th> <th class="px-4 py-3 font-semibold">Updated</th> </tr> </thead> <tbody data-vs-table> ${mockVendors.map((v) => renderTemplate`<tr class="border-b border-vs-border/80 hover:bg-vs-elevated/40"> <td class="px-4 py-3"> <p class="font-medium text-vs-fg">${v.businessName}</p> <p class="text-xs text-vs-muted">${v.legalName}</p> </td> <td class="px-4 py-3 text-sm text-vs-muted"> <p>${v.contactName}</p> <p class="font-mono text-xs">${v.email}</p> </td> <td class="px-4 py-3"> ${renderComponent($$result3, "UiBadge", $$UiBadge, { "variant": v.state }, { "default": ($$result4) => renderTemplate`${v.state.replace("_", " ")}` })} </td> <td class="px-4 py-3"> ${renderComponent($$result3, "UiBadge", $$UiBadge, { "variant": "neutral" }, { "default": ($$result4) => renderTemplate`${v.kycStatus.replace("_", " ")}` })} </td> <td class="px-4 py-3 text-sm tabular-nums text-vs-fg">${v.riskScore ?? "—"}</td> <td class="px-4 py-3 text-xs text-vs-muted"> ${v.verifiedAt ? formatDate(v.verifiedAt) : v.submittedAt ? formatDate(v.submittedAt) : "—"} </td> </tr>`)} </tbody> ` })} ` })}`;
}, "C:/Users/Vinay/Desktop/vendor/src/pages/vendor/vendors/index.astro", void 0);

const $$file = "C:/Users/Vinay/Desktop/vendor/src/pages/vendor/vendors/index.astro";
const $$url = "/vendor/vendors";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
