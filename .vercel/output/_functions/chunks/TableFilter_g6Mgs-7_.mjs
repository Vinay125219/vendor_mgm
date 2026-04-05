import { c as createComponent } from './astro-component_D1F3j4nc.mjs';
import 'piccolore';
import { m as maybeRenderHead, h as addAttribute, p as renderSlot, r as renderTemplate } from './entrypoint_CV8pRvJF.mjs';
import 'clsx';
import { r as renderScript } from './PageHeader_C41VybD-.mjs';

const $$TableFilter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$TableFilter;
  const { placeholder = "Search…", tableSelector = "[data-vs-table]" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"> <label class="sr-only" for="vs-table-filter">Filter table</label> <input id="vs-table-filter" type="search" class="w-full max-w-md rounded-[var(--radius-vs-sm)] border border-vs-border bg-vs-surface px-3 py-2 text-sm text-vs-fg shadow-[var(--shadow-vs-sm)] placeholder:text-vs-muted focus:border-vs-accent focus:outline-none focus:ring-2 focus:ring-vs-accent/30"${addAttribute(placeholder, "placeholder")} autocomplete="off" data-vs-table-filter${addAttribute(tableSelector, "data-table-selector")}> ${renderSlot($$result, $$slots["default"])} </div> ${renderScript($$result, "C:/Users/Vinay/Desktop/vendor/src/components/islands/TableFilter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Vinay/Desktop/vendor/src/components/islands/TableFilter.astro", void 0);

export { $$TableFilter as $ };
