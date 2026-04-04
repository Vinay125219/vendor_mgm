import { c as createComponent } from './astro-component_BR9_Owca.mjs';
import 'piccolore';
import { n as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from './entrypoint_B9G27Yxt.mjs';
import { r as renderScript } from './constants_CmOIQZgW.mjs';
import { $ as $$VendorShell, a as $$PageHeader, c as mockProducts, b as mockVendors } from './PageHeader_CvItCAHT.mjs';
import { $ as $$UiCard } from './UiCard_C97yNYVB.mjs';
import { $ as $$UiButton } from './UiButton_X1Id3z-x.mjs';
import { $ as $$UiTable } from './UiTable_BoIqhcaz.mjs';
import { $ as $$UiBadge } from './UiBadge_DVyRGpab.mjs';
import { $ as $$TableFilter } from './TableFilter_DdSnAb0s.mjs';
import { l as loadState, c as countLowStock } from './client-store_Ch47dWsg.mjs';
import { a as formatDate } from './format_CV2KI1dq.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  function vendorName(id) {
    return mockVendors.find((v) => v.id === id)?.businessName ?? id;
  }
  const seedState = loadState();
  const lowStock = countLowStock(10);
  const lastSyncAt = seedState.runtime.lastInventorySyncAt;
  return renderTemplate`${renderComponent($$result, "VendorShell", $$VendorShell, { "title": "Inventory" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "Inventory sync", "description": "Stock saves in your browser — dashboard KPIs and catalog reflect persisted demo state on this device." }, { "actions": ($$result3) => renderTemplate`${renderComponent($$result3, "UiButton", $$UiButton, { "variant": "primary", "slot": "actions", "id": "vs-inv-sync-all" }, { "default": ($$result4) => renderTemplate`Sync all` })}` })} ${maybeRenderHead()}<div class="mb-6 grid gap-4 sm:grid-cols-3"> ${renderComponent($$result2, "UiCard", $$UiCard, { "padding": "md" }, { "default": ($$result3) => renderTemplate` <p class="text-xs font-semibold uppercase text-vs-muted">Low stock SKUs</p> <p class="mt-2 text-2xl font-bold tabular-nums" id="vs-inv-low-count">${lowStock}</p> ` })} ${renderComponent($$result2, "UiCard", $$UiCard, { "padding": "md" }, { "default": ($$result3) => renderTemplate` <p class="text-xs font-semibold uppercase text-vs-muted">Last sync</p> <p class="mt-2 text-sm text-vs-muted" id="vs-inv-last-sync">${formatDate(lastSyncAt)}</p> ` })} ${renderComponent($$result2, "UiCard", $$UiCard, { "padding": "md" }, { "default": ($$result3) => renderTemplate` <p class="text-xs font-semibold uppercase text-vs-muted">Channel</p> <p class="mt-2 text-sm">Storefront + POS</p> ` })} </div> ${renderComponent($$result2, "TableFilter", $$TableFilter, { "placeholder": "Search SKU…" })} ${renderComponent($$result2, "UiTable", $$UiTable, {}, { "default": ($$result3) => renderTemplate` <thead class="border-b border-vs-border bg-vs-elevated/80 text-xs uppercase tracking-wide text-vs-muted"> <tr> <th class="px-4 py-3 font-semibold">SKU</th> <th class="px-4 py-3 font-semibold">Vendor</th> <th class="px-4 py-3 font-semibold">On hand</th> <th class="px-4 py-3 font-semibold">Health</th> <th class="px-4 py-3 font-semibold"></th> </tr> </thead> <tbody data-vs-table> ${mockProducts.map((p) => renderTemplate`<tr class="border-b border-vs-border/80"${addAttribute(p.id, "data-product-id")}${addAttribute(p.sku, "data-sku")}> <td class="px-4 py-3 font-mono text-sm">${p.sku}</td> <td class="px-4 py-3 text-sm text-vs-muted">${vendorName(p.vendorId)}</td> <td class="px-4 py-3"> <input type="number" min="0" step="1" class="vs-inv-stock w-24 rounded-[var(--radius-vs-sm)] border border-vs-border bg-vs-bg px-2 py-1 text-sm tabular-nums"${addAttribute(p.stock, "value")}${addAttribute(`Stock for ${p.sku}`, "aria-label")}> </td> <td class="px-4 py-3 vs-inv-health"> ${renderComponent($$result3, "UiBadge", $$UiBadge, { "variant": p.stock < 10 ? "warning" : "success" }, { "default": ($$result4) => renderTemplate`${p.stock < 10 ? "Reorder" : "Healthy"}` })} </td> <td class="px-4 py-3 text-right"> <button type="button" class="rounded-[var(--radius-vs-sm)] px-3 py-1.5 text-sm font-semibold text-vs-accent hover:bg-vs-accent-soft" data-inv-save>
Save
</button> </td> </tr>`)} </tbody> ` })} ` })} ${renderScript($$result, "C:/Users/Vinay/Desktop/vendor/src/pages/vendor/inventory/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Vinay/Desktop/vendor/src/pages/vendor/inventory/index.astro", void 0);

const $$file = "C:/Users/Vinay/Desktop/vendor/src/pages/vendor/inventory/index.astro";
const $$url = "/vendor/inventory";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
