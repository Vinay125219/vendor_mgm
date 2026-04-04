import { c as createComponent } from './astro-component_BR9_Owca.mjs';
import 'piccolore';
import { m as maybeRenderHead, h as addAttribute, r as renderTemplate, o as renderSlot } from './entrypoint_B9G27Yxt.mjs';
import 'clsx';

const $$UiAlert = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$UiAlert;
  const { variant = "info", title, class: className = "" } = Astro2.props;
  const styles = {
    info: "border-sky-500/30 bg-sky-500/10 text-sky-900 dark:text-sky-100",
    success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-900 dark:text-emerald-100",
    warning: "border-amber-500/30 bg-amber-500/10 text-amber-950 dark:text-amber-100",
    danger: "border-red-500/30 bg-red-500/10 text-red-900 dark:text-red-100"
  };
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "rounded-[var(--radius-vs)] border px-4 py-3 text-sm",
    styles[variant],
    className
  ], "class:list")} role="alert"> ${title && renderTemplate`<p class="font-semibold">${title}</p>`} <div${addAttribute([title && "mt-1"], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div> </div>`;
}, "C:/Users/Vinay/Desktop/vendor/src/components/ui/UiAlert.astro", void 0);

export { $$UiAlert as $ };
