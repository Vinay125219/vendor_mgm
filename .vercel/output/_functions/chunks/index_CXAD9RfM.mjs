import { c as createComponent } from './astro-component_BR9_Owca.mjs';
import 'piccolore';
import { n as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_B9G27Yxt.mjs';
import { $ as $$VendorShell, a as $$PageHeader, c as mockProducts, b as mockVendors } from './PageHeader_CvItCAHT.mjs';
import { $ as $$UiTable } from './UiTable_BoIqhcaz.mjs';
import { $ as $$UiBadge } from './UiBadge_DVyRGpab.mjs';
import { $ as $$UiButton } from './UiButton_X1Id3z-x.mjs';
import { $ as $$TableFilter } from './TableFilter_DdSnAb0s.mjs';
import { f as formatINRFromPaise } from './format_CV2KI1dq.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  function vendorName(id) {
    return mockVendors.find((v) => v.id === id)?.businessName ?? id;
  }
  return renderTemplate`${renderComponent($$result, "VendorShell", $$VendorShell, { "title": "Products" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "Catalog", "description": "Submission, approval, pricing rules, and publish gates — aligned with storefront product schema." }, { "actions": ($$result3) => renderTemplate`${renderComponent($$result3, "UiButton", $$UiButton, { "href": "/vendor/products/new", "variant": "primary", "slot": "actions" }, { "default": ($$result4) => renderTemplate`New product` })}${renderComponent($$result3, "UiButton", $$UiButton, { "variant": "secondary", "slot": "actions" }, { "default": ($$result4) => renderTemplate`Bulk upload` })}` })} ${renderComponent($$result2, "TableFilter", $$TableFilter, { "placeholder": "Search SKU, title, vendor…" })} ${renderComponent($$result2, "UiTable", $$UiTable, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<thead class="border-b border-vs-border bg-vs-elevated/80 text-xs uppercase tracking-wide text-vs-muted"> <tr> <th class="px-4 py-3 font-semibold">Product</th> <th class="px-4 py-3 font-semibold">Vendor</th> <th class="px-4 py-3 font-semibold">Price</th> <th class="px-4 py-3 font-semibold">Stock</th> <th class="px-4 py-3 font-semibold">Approval</th> <th class="px-4 py-3 font-semibold">Published</th> <th class="px-4 py-3 font-semibold"></th> </tr> </thead> <tbody data-vs-table> ${mockProducts.map((p) => renderTemplate`<tr class="border-b border-vs-border/80 hover:bg-vs-elevated/40"> <td class="px-4 py-3"> <p class="font-medium text-vs-fg">${p.title}</p> <p class="font-mono text-xs text-vs-muted">${p.sku}</p> </td> <td class="px-4 py-3 text-sm text-vs-muted">${vendorName(p.vendorId)}</td> <td class="px-4 py-3 text-sm tabular-nums">${formatINRFromPaise(p.basePricePaise)}</td> <td class="px-4 py-3 text-sm tabular-nums">${p.stock}</td> <td class="px-4 py-3"> ${renderComponent($$result3, "UiBadge", $$UiBadge, { "variant": p.approvalStatus === "approved" ? "approved" : "pending" }, { "default": ($$result4) => renderTemplate`${p.approvalStatus.replace("_", " ")}` })} </td> <td class="px-4 py-3"> ${renderComponent($$result3, "UiBadge", $$UiBadge, { "variant": p.published ? "success" : "neutral" }, { "default": ($$result4) => renderTemplate`${p.published ? "Live" : "Draft"}` })} </td> <td class="px-4 py-3 text-right"> ${renderComponent($$result3, "UiButton", $$UiButton, { "href": `/vendor/products/${p.id}`, "variant": "ghost", "size": "sm" }, { "default": ($$result4) => renderTemplate`
Edit
` })} </td> </tr>`)} </tbody> ` })} ` })}`;
}, "C:/Users/Vinay/Desktop/vendor/src/pages/vendor/products/index.astro", void 0);

const $$file = "C:/Users/Vinay/Desktop/vendor/src/pages/vendor/products/index.astro";
const $$url = "/vendor/products";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
