import { c as createComponent } from './astro-component_BR9_Owca.mjs';
import 'piccolore';
import { n as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_B9G27Yxt.mjs';
import { r as renderScript } from './constants_CmOIQZgW.mjs';
import { $ as $$VendorShell, a as $$PageHeader } from './PageHeader_CvItCAHT.mjs';
import { $ as $$UiCard } from './UiCard_C97yNYVB.mjs';
import { $ as $$UiButton } from './UiButton_X1Id3z-x.mjs';
import { $ as $$UiAlert } from './UiAlert_8_hbgA1F.mjs';
import { $ as $$UiTable } from './UiTable_BoIqhcaz.mjs';
import { a as listAudit } from './client-store_Ch47dWsg.mjs';
import { a as formatDate } from './format_CV2KI1dq.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const audit = listAudit(20);
  return renderTemplate`${renderComponent($$result, "VendorShell", $$VendorShell, { "title": "Settings" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "Settings & audit", "description": "Tenant-ready controls: SSO hooks, webhooks, API keys, and immutable audit for critical actions." })} ${maybeRenderHead()}<div class="grid gap-6 lg:grid-cols-2"> ${renderComponent($$result2, "UiCard", $$UiCard, { "padding": "lg" }, { "default": ($$result3) => renderTemplate` <h2 class="text-base font-semibold">Authentication (stub)</h2> <p class="mt-2 text-sm text-vs-muted">
Map to your IdP (OIDC/SAML). Roles: Super Admin, Admin, Finance, Support, Vendor.
</p> <div class="mt-4 space-y-3 text-sm"> <label class="flex flex-col gap-1"> <span class="text-vs-muted">SSO issuer URL</span> <input class="rounded-[var(--radius-vs-sm)] border border-vs-border bg-vs-bg px-3 py-2" placeholder="https://idp.example"> </label> <label class="flex flex-col gap-1"> <span class="text-vs-muted">Webhook signing secret</span> <input type="password" class="rounded-[var(--radius-vs-sm)] border border-vs-border bg-vs-bg px-3 py-2"> </label> </div> ${renderComponent($$result3, "UiButton", $$UiButton, { "class": "mt-4", "variant": "primary" }, { "default": ($$result4) => renderTemplate`
Save
` })} ` })} ${renderComponent($$result2, "UiCard", $$UiCard, { "padding": "lg" }, { "default": ($$result3) => renderTemplate` <h2 class="text-base font-semibold">API</h2> ${renderComponent($$result3, "UiAlert", $$UiAlert, { "variant": "warning", "title": "Static demo" }, { "default": ($$result4) => renderTemplate`
This build has no backend. In production, target your own <code class="font-mono text-xs">/api/v1/*</code> from the parent
        storefront.
` })} <p class="mt-4 text-sm text-vs-muted">
Rotate keys from your secrets manager; never commit live Razorpay credentials.
</p> ` })} </div> ${renderComponent($$result2, "UiCard", $$UiCard, { "class": "mt-8", "padding": "md" }, { "default": ($$result3) => renderTemplate` <h2 class="text-base font-semibold">Recent audit log</h2> ${renderComponent($$result3, "UiTable", $$UiTable, { "class": "mt-4" }, { "default": ($$result4) => renderTemplate` <thead class="border-b border-vs-border bg-vs-elevated/80 text-xs uppercase text-vs-muted"> <tr> <th class="px-4 py-3 text-left font-semibold">When</th> <th class="px-4 py-3 text-left font-semibold">Actor</th> <th class="px-4 py-3 text-left font-semibold">Action</th> <th class="px-4 py-3 text-left font-semibold">Resource</th> </tr> </thead> <tbody id="vs-audit-tbody"> ${audit.map((a) => renderTemplate`<tr class="border-b border-vs-border/60 text-sm"> <td class="px-4 py-2 text-vs-muted">${formatDate(a.at)}</td> <td class="px-4 py-2 font-mono text-xs">${a.actorId}</td> <td class="px-4 py-2">${a.action}</td> <td class="px-4 py-2 font-mono text-xs"> ${a.resource} ${a.resourceId ? `:${a.resourceId}` : ""} </td> </tr>`)} </tbody> ` })} ` })} ` })} ${renderScript($$result, "C:/Users/Vinay/Desktop/vendor/src/pages/vendor/settings/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Vinay/Desktop/vendor/src/pages/vendor/settings/index.astro", void 0);

const $$file = "C:/Users/Vinay/Desktop/vendor/src/pages/vendor/settings/index.astro";
const $$url = "/vendor/settings";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
