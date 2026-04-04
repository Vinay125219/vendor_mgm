import { c as createComponent } from './astro-component_BR9_Owca.mjs';
import 'piccolore';
import { r as renderTemplate, l as renderHead } from './entrypoint_B9G27Yxt.mjs';
import 'clsx';
import { r as renderScript, A as APP_NAME } from './constants_CmOIQZgW.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="h-full"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&display=swap"><title>Sign in · ', "</title><script>\n      try {\n        if (location.pathname === '/login' && localStorage.getItem('vs_auth_token')) {\n          var q = new URLSearchParams(location.search).get('redirect') || '/vendor';\n          location.replace(q);\n        }\n      } catch (_) {}\n    <\/script>", '</head> <body class="min-h-full bg-vs-bg text-vs-fg antialiased"> <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded-md focus:bg-vs-accent focus:px-3 focus:py-2 focus:text-white">\nSkip to content\n</a> <div id="main-content" class="flex min-h-screen flex-col items-center justify-center px-4 py-12"> <div class="mb-10 text-center"> <div class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-[var(--radius-vs)] bg-vs-accent text-xl font-bold text-white shadow-[var(--shadow-vs-md)]">\nVS\n</div> <h1 class="text-2xl font-bold tracking-tight">', '</h1> <p class="mt-1 text-sm text-vs-muted">Vendor operations — sign in to continue</p> </div> <div class="vs-card w-full max-w-md p-8 shadow-[var(--shadow-vs-lg)]"> <form id="vs-login-form" class="flex flex-col gap-4"> <div id="vs-login-error" class="hidden rounded-[var(--radius-vs-sm)] border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-800 dark:text-red-200" role="alert"></div> <label class="flex flex-col gap-1.5 text-sm"> <span class="font-medium text-vs-muted">Email</span> <input name="email" id="vs-email-input" type="email" autocomplete="username" required placeholder="your@email.com" class="rounded-[var(--radius-vs-sm)] border border-vs-border bg-vs-bg px-3 py-2.5 text-vs-fg outline-none ring-vs-accent/30 focus:border-vs-accent focus:ring-2"> </label> <label class="flex flex-col gap-1.5 text-sm"> <span class="font-medium text-vs-muted">Password</span> <input name="password" id="vs-password-input" type="password" autocomplete="current-password" required placeholder="••••••••" class="rounded-[var(--radius-vs-sm)] border border-vs-border bg-vs-bg px-3 py-2.5 text-vs-fg outline-none ring-vs-accent/30 focus:border-vs-accent focus:ring-2"> </label> <button type="submit" id="vs-submit-btn" class="mt-2 rounded-[var(--radius-vs-sm)] bg-vs-accent py-3 text-sm font-semibold text-white shadow-[var(--shadow-vs-sm)] transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vs-accent disabled:opacity-50 disabled:cursor-not-allowed">\nSign in\n</button> </form> <div class="mt-6 rounded-[var(--radius-vs-sm)] border border-dashed border-vs-border bg-vs-elevated/50 px-4 py-3 text-xs text-vs-muted"> <p class="font-semibold text-vs-fg">Backend Integration Ready</p> <p class="mt-2 text-[11px] leading-relaxed">\nThis form submits to <code class="font-mono text-[10px] text-vs-fg">/api/v1/auth/login</code> </p> <p class="mt-2 text-[11px] leading-relaxed">\nResponse format: success with token, user, and expiration\n</p> </div> </div> </div> ', " </body> </html>"])), APP_NAME, renderHead(), APP_NAME, renderScript($$result, "C:/Users/Vinay/Desktop/vendor/src/pages/login.astro?astro&type=script&index=0&lang.ts"));
}, "C:/Users/Vinay/Desktop/vendor/src/pages/login.astro", void 0);

const $$file = "C:/Users/Vinay/Desktop/vendor/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
