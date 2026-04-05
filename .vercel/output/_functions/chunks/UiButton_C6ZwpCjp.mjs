import { c as createComponent } from './astro-component_BJcmtL7v.mjs';
import 'piccolore';
import { m as maybeRenderHead, h as addAttribute, p as renderSlot, r as renderTemplate } from './entrypoint_Cug4CaDP.mjs';
import 'clsx';

const $$UiButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$UiButton;
  const {
    href,
    variant = "secondary",
    size = "md",
    type = "button",
    class: className = "",
    disabled = false,
    id
  } = Astro2.props;
  const base = "inline-flex items-center justify-center gap-2 font-semibold rounded-[var(--radius-vs-sm)] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";
  const variants = {
    primary: "bg-vs-accent text-white shadow-[var(--shadow-vs-sm)] hover:brightness-110 focus-visible:outline-vs-accent",
    secondary: "border border-vs-border bg-vs-surface text-vs-fg shadow-[var(--shadow-vs-sm)] hover:bg-vs-elevated",
    ghost: "text-vs-muted hover:text-vs-fg hover:bg-vs-border/30",
    danger: "bg-red-600 text-white hover:bg-red-700 focus-visible:outline-red-600"
  };
  const sizes = {
    sm: "text-xs px-3 py-1.5",
    md: "text-sm px-4 py-2.5",
    lg: "text-sm px-5 py-3"
  };
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  return renderTemplate`${href ? renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(id, "id")}${addAttribute(classes, "class")}>${renderSlot($$result, $$slots["default"])}</a>` : renderTemplate`<button${addAttribute(type, "type")}${addAttribute(id, "id")}${addAttribute(classes, "class")}${addAttribute(disabled, "disabled")}>${renderSlot($$result, $$slots["default"])}</button>`}`;
}, "C:/Users/Vinay/Desktop/vendor/src/components/ui/UiButton.astro", void 0);

export { $$UiButton as $ };
