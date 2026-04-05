import { c as createComponent } from './astro-component_D1F3j4nc.mjs';
import 'piccolore';
import { m as maybeRenderHead, h as addAttribute, p as renderSlot, r as renderTemplate } from './entrypoint_CV8pRvJF.mjs';
import 'clsx';

const $$UiTable = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$UiTable;
  const { class: className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["overflow-x-auto rounded-[var(--radius-vs)] border border-vs-border", className], "class:list")}> <table class="min-w-full border-collapse text-left text-sm"> ${renderSlot($$result, $$slots["default"])} </table> </div>`;
}, "C:/Users/Vinay/Desktop/vendor/src/components/ui/UiTable.astro", void 0);

export { $$UiTable as $ };
