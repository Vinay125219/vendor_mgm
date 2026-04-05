import { c as createComponent } from './astro-component_D1F3j4nc.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_CV8pRvJF.mjs';
import { c as mockProducts, $ as $$VendorShell, a as $$PageHeader } from './PageHeader_C41VybD-.mjs';
import { $ as $$UiCard } from './UiCard_DdDgZOBN.mjs';
import { $ as $$UiBadge } from './UiBadge_DReIQUBO.mjs';
import { $ as $$UiButton } from './UiButton_9xyzcQW4.mjs';
import { f as formatINRFromPaise } from './format_CV2KI1dq.mjs';

function getStaticPaths() {
  return mockProducts.map((p) => ({ params: { id: p.id } }));
}
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const product = mockProducts.find((p) => p.id === id);
  if (!product) {
    return Astro2.redirect("/vendor/products");
  }
  return renderTemplate`${renderComponent($$result, "VendorShell", $$VendorShell, { "title": product.title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": product.title, "description": `SKU ${product.sku} · Vendor ${product.vendorId}` }, { "actions": ($$result3) => renderTemplate`${renderComponent($$result3, "UiButton", $$UiButton, { "href": "/vendor/products", "variant": "secondary", "slot": "actions" }, { "default": ($$result4) => renderTemplate`Back` })}${renderComponent($$result3, "UiButton", $$UiButton, { "variant": "primary", "slot": "actions" }, { "default": ($$result4) => renderTemplate`Save changes` })}` })} ${maybeRenderHead()}<div class="grid gap-6 lg:grid-cols-3"> ${renderComponent($$result2, "UiCard", $$UiCard, { "class": "lg:col-span-2", "padding": "lg" }, { "default": ($$result3) => renderTemplate` <h2 class="text-base font-semibold">Pricing & inventory</h2> <dl class="mt-4 grid gap-3 text-sm sm:grid-cols-2"> <div> <dt class="text-vs-muted">Base price</dt> <dd class="font-semibold tabular-nums">${formatINRFromPaise(product.basePricePaise)}</dd> </div> <div> <dt class="text-vs-muted">Stock</dt> <dd class="font-semibold tabular-nums">${product.stock}</dd> </div> <div> <dt class="text-vs-muted">Approval</dt> <dd class="mt-1"> ${renderComponent($$result3, "UiBadge", $$UiBadge, { "variant": product.approvalStatus === "approved" ? "approved" : "pending" }, { "default": ($$result4) => renderTemplate`${product.approvalStatus}` })} </dd> </div> <div> <dt class="text-vs-muted">Published</dt> <dd class="mt-1"> ${renderComponent($$result3, "UiBadge", $$UiBadge, { "variant": product.published ? "success" : "neutral" }, { "default": ($$result4) => renderTemplate`${product.published ? "Yes" : "No"}` })} </dd> </div> </dl> ` })} ${renderComponent($$result2, "UiCard", $$UiCard, { "padding": "lg" }, { "default": ($$result3) => renderTemplate` <h2 class="text-base font-semibold">Images</h2> <p class="mt-2 text-sm text-vs-muted">Image pipeline can reuse main site CDN policies.</p> <div class="mt-4 grid grid-cols-2 gap-2"> ${product.images.map(() => renderTemplate`<div class="aspect-square rounded-[var(--radius-vs-sm)] border border-vs-border bg-vs-elevated"></div>`)} </div> ` })} </div> ` })}`;
}, "C:/Users/Vinay/Desktop/vendor/src/pages/vendor/products/[id].astro", void 0);

const $$file = "C:/Users/Vinay/Desktop/vendor/src/pages/vendor/products/[id].astro";
const $$url = "/vendor/products/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
