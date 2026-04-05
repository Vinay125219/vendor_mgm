import { c as createComponent } from './astro-component_BJcmtL7v.mjs';
import 'piccolore';
import { m as maybeRenderHead, h as addAttribute, p as renderSlot, r as renderTemplate } from './entrypoint_Cug4CaDP.mjs';
import 'clsx';

const $$UiCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$UiCard;
  const { class: className = "", padding = "md", hover = false } = Astro2.props;
  const pad = {
    none: "",
    sm: "p-4",
    md: "p-5 sm:p-6",
    lg: "p-6 sm:p-8"
  };
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "vs-card vs-animate-in",
    pad[padding],
    hover && "transition-shadow duration-300 hover:shadow-[var(--shadow-vs-lg)]",
    className
  ], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/Vinay/Desktop/vendor/src/components/ui/UiCard.astro", void 0);

export { $$UiCard as $ };
