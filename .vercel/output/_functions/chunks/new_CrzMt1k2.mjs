import { c as createComponent } from './astro-component_BR9_Owca.mjs';
import 'piccolore';
import { n as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from './entrypoint_B9G27Yxt.mjs';
import { r as renderScript } from './constants_CmOIQZgW.mjs';
import { $ as $$VendorShell, a as $$PageHeader } from './PageHeader_CvItCAHT.mjs';
import { $ as $$UiCard } from './UiCard_C97yNYVB.mjs';
import { $ as $$UiButton } from './UiButton_X1Id3z-x.mjs';

const $$New = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "VendorShell", $$VendorShell, { "title": "New product" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "Create product", "description": "Submit new products for catalog review and approval." })} ${renderComponent($$result2, "UiCard", $$UiCard, { "padding": "lg" }, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div id="vs-product-err" class="mb-4 hidden rounded-[var(--radius-vs-sm)] border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-800 dark:text-red-200"></div> <form id="vs-product-form" class="grid gap-4 sm:grid-cols-2"> <label class="flex flex-col gap-1 text-sm sm:col-span-2"> <span class="text-vs-muted">Title *</span> <input name="title" required placeholder="Product name" class="rounded-[var(--radius-vs-sm)] border border-vs-border bg-vs-bg px-3 py-2"> </label> <label class="flex flex-col gap-1 text-sm"> <span class="text-vs-muted">SKU *</span> <input name="sku" required placeholder="SKU-001" class="rounded-[var(--radius-vs-sm)] border border-vs-border bg-vs-bg px-3 py-2 font-mono"> </label> <label class="flex flex-col gap-1 text-sm"> <span class="text-vs-muted">Base price (INR) *</span> <input name="priceInr" type="number" min="0" step="0.01" required placeholder="0.00" class="rounded-[var(--radius-vs-sm)] border border-vs-border bg-vs-bg px-3 py-2"> </label> <label class="flex flex-col gap-1 text-sm"> <span class="text-vs-muted">Stock</span> <input name="stock" type="number" min="0" step="1" value="0" class="rounded-[var(--radius-vs-sm)] border border-vs-border bg-vs-bg px-3 py-2"> </label> <label class="flex flex-col gap-1 text-sm"> <span class="text-vs-muted">Category *</span> <select name="categoryId" required class="rounded-[var(--radius-vs-sm)] border border-vs-border bg-vs-bg px-3 py-2"> <option value="">Select category</option> <option value="cat_beverages">Beverages</option> <option value="cat_home">Home</option> <option value="cat_snacks">Snacks</option> </select> </label> <label class="flex flex-col gap-1 text-sm"> <span class="text-vs-muted">Tags (comma separated)</span> <input name="tags" placeholder="organic, bestseller" class="rounded-[var(--radius-vs-sm)] border border-vs-border bg-vs-bg px-3 py-2"> </label> <label class="flex flex-col gap-1 text-sm sm:col-span-2"> <span class="text-vs-muted">Description</span> <textarea name="description"${addAttribute(4, "rows")} placeholder="Product details..." class="rounded-[var(--radius-vs-sm)] border border-vs-border bg-vs-bg px-3 py-2"></textarea> </label> <div class="flex flex-wrap gap-2 sm:col-span-2"> <button type="submit" id="vs-product-submit" class="inline-flex items-center justify-center rounded-[var(--radius-vs-sm)] bg-vs-accent px-4 py-2.5 text-sm font-semibold text-white shadow-[var(--shadow-vs-sm)] hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed">
Submit for review
</button> ${renderComponent($$result3, "UiButton", $$UiButton, { "href": "/vendor/products", "variant": "secondary" }, { "default": async ($$result4) => renderTemplate`Cancel` })} </div> </form> ` })} ` })} ${renderScript($$result, "C:/Users/Vinay/Desktop/vendor/src/pages/vendor/products/new.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Vinay/Desktop/vendor/src/pages/vendor/products/new.astro", void 0);

const $$file = "C:/Users/Vinay/Desktop/vendor/src/pages/vendor/products/new.astro";
const $$url = "/vendor/products/new";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$New,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
