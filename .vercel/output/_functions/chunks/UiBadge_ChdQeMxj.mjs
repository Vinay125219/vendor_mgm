import { c as createComponent } from './astro-component_BJcmtL7v.mjs';
import 'piccolore';
import { m as maybeRenderHead, h as addAttribute, p as renderSlot, r as renderTemplate } from './entrypoint_Cug4CaDP.mjs';
import 'clsx';

const $$UiBadge = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$UiBadge;
  const { variant = "neutral", size = "sm", class: className = "" } = Astro2.props;
  const map = {
    neutral: "bg-vs-border/40 text-vs-fg",
    accent: "bg-vs-accent-soft text-vs-accent",
    success: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300",
    warning: "bg-amber-500/15 text-amber-800 dark:text-amber-200",
    danger: "bg-red-500/15 text-red-700 dark:text-red-300",
    info: "bg-sky-500/15 text-sky-800 dark:text-sky-200",
    pending: "bg-amber-500/15 text-amber-800 dark:text-amber-200",
    approved: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300",
    rejected: "bg-red-500/15 text-red-700 dark:text-red-300",
    at_risk: "bg-orange-500/15 text-orange-800 dark:text-orange-200",
    on_hold: "bg-zinc-500/20 text-zinc-700 dark:text-zinc-200",
    disputed: "bg-violet-500/15 text-violet-800 dark:text-violet-200",
    paid: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300"
  };
  const cls = map[variant] ?? map.neutral;
  const sz = size === "sm" ? "text-[11px] px-2 py-0.5" : "text-xs px-2.5 py-1";
  return renderTemplate`${maybeRenderHead()}<span${addAttribute([
    "inline-flex items-center rounded-full font-medium tracking-wide uppercase",
    sz,
    cls,
    className
  ], "class:list")} role="status"> ${renderSlot($$result, $$slots["default"])} </span>`;
}, "C:/Users/Vinay/Desktop/vendor/src/components/ui/UiBadge.astro", void 0);

export { $$UiBadge as $ };
