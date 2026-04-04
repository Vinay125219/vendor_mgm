import { c as createComponent } from './astro-component_BR9_Owca.mjs';
import 'piccolore';
import { r as renderTemplate, l as renderHead } from './entrypoint_B9G27Yxt.mjs';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template([`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>VendorSphere</title><script>
      try {
        var ok = localStorage.getItem('vs_session') === 'vs_demo_authenticated';
        location.replace(ok ? '/vendor' : '/login');
      } catch (_) {
        location.replace('/login');
      }
    <\/script>`, "</head> <body></body></html>"])), renderHead());
}, "C:/Users/Vinay/Desktop/vendor/src/pages/index.astro", void 0);

const $$file = "C:/Users/Vinay/Desktop/vendor/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
