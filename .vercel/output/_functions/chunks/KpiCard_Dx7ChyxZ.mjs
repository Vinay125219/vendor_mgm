import { c as createComponent } from './astro-component_D1F3j4nc.mjs';
import 'piccolore';
import { m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './entrypoint_CV8pRvJF.mjs';
import 'clsx';

const $$KpiCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$KpiCard;
  const { label, value, hint, trend, trendUp, class: className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "vs-card flex flex-col gap-1 border-vs-border/80 p-5 transition-transform duration-300 hover:-translate-y-0.5",
    className
  ], "class:list")}> <p class="text-xs font-semibold uppercase tracking-wider text-vs-muted">${label}</p> <p class="text-2xl font-bold tabular-nums tracking-tight text-vs-fg">${value}</p> ${hint && renderTemplate`<p class="text-xs text-vs-muted">${hint}</p>`} ${trend && renderTemplate`<p${addAttribute([
    "text-xs font-medium",
    trendUp ? "text-emerald-600 dark:text-emerald-400" : "text-vs-muted"
  ], "class:list")}> ${trend} </p>`} </div>`;
}, "C:/Users/Vinay/Desktop/vendor/src/components/ui/KpiCard.astro", void 0);

export { $$KpiCard as $ };
