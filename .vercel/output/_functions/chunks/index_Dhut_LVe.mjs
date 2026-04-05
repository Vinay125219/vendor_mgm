import { c as createComponent } from './astro-component_D1F3j4nc.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_CV8pRvJF.mjs';
import { $ as $$VendorShell, r as renderScript, a as $$PageHeader, d as mockNotifications } from './PageHeader_C41VybD-.mjs';
import { $ as $$UiCard } from './UiCard_DdDgZOBN.mjs';
import { $ as $$UiBadge } from './UiBadge_DReIQUBO.mjs';
import { $ as $$UiButton } from './UiButton_9xyzcQW4.mjs';
import { a as formatDate } from './format_CV2KI1dq.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "VendorShell", $$VendorShell, { "title": "Notifications" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "Notification center", "description": "In-app, email, and SMS routing — task reminders surface here for vendor SLAs." }, { "actions": ($$result3) => renderTemplate`${maybeRenderHead()}<button type="button" id="vs-notify-readall" class="inline-flex items-center justify-center rounded-[var(--radius-vs-sm)] border border-vs-border bg-vs-surface px-4 py-2.5 text-sm font-semibold text-vs-fg shadow-[var(--shadow-vs-sm)] hover:bg-vs-elevated">
Mark all read
</button>` })} <ul class="flex flex-col gap-3" id="vs-notify-list"> ${mockNotifications.map((n) => renderTemplate`<li> ${renderComponent($$result2, "UiCard", $$UiCard, { "padding": "md", "class:list": [!n.read && "border-vs-accent/30"] }, { "default": ($$result3) => renderTemplate` <div class="flex flex-wrap items-start justify-between gap-3"> <div> <p class="font-semibold text-vs-fg">${n.title}</p> <p class="mt-1 text-sm text-vs-muted">${n.body}</p> <p class="mt-2 text-xs text-vs-muted">${formatDate(n.createdAt)}</p> </div> <div class="flex flex-col items-end gap-2"> ${renderComponent($$result3, "UiBadge", $$UiBadge, { "variant": n.read ? "neutral" : "accent" }, { "default": ($$result4) => renderTemplate`${n.read ? "Read" : "New"}` })} ${n.href && renderTemplate`${renderComponent($$result3, "UiButton", $$UiButton, { "href": n.href, "variant": "ghost", "size": "sm" }, { "default": ($$result4) => renderTemplate`
Open
` })}`} </div> </div> ` })} </li>`)} </ul> ` })} ${renderScript($$result, "C:/Users/Vinay/Desktop/vendor/src/pages/vendor/notifications/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Vinay/Desktop/vendor/src/pages/vendor/notifications/index.astro", void 0);

const $$file = "C:/Users/Vinay/Desktop/vendor/src/pages/vendor/notifications/index.astro";
const $$url = "/vendor/notifications";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
