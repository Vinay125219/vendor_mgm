import { c as createComponent } from './astro-component_BR9_Owca.mjs';
import 'piccolore';
import { m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './entrypoint_B9G27Yxt.mjs';
import 'clsx';
import { r as renderScript } from './constants_CmOIQZgW.mjs';
import { b as mockVendors, c as mockProducts, e as mockOrders, g as mockPayments, l as mockSettlements, m as mockDisputes, j as mockActivities, i as mockComplianceAlerts } from './PageHeader_CvItCAHT.mjs';

const $$ChartBlock = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ChartBlock;
  const { spec, height = 220, class: className = "" } = Astro2.props;
  const specJson = JSON.stringify(spec);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["w-full", className], "class:list")} data-vs-chart-root${addAttribute(specJson, "data-spec")}> <div class="flex max-h-72 min-h-[var(--vs-chart-h,180px)] w-full items-center justify-center rounded-[var(--radius-vs-sm)] bg-vs-border/20 text-xs text-vs-muted dark:bg-vs-border/10"${addAttribute(`--vs-chart-h:${height}px;min-height:${Math.min(height, 280)}px`, "style")} data-vs-chart-placeholder aria-hidden="true">
Chart loads when visible
</div> <canvas class="hidden max-h-72 w-full"${addAttribute(`max-height:${height}px`, "style")} data-vs-chart-canvas role="img" aria-label="Data chart"></canvas> </div> ${renderScript($$result, "C:/Users/Vinay/Desktop/vendor/src/components/islands/ChartBlock.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Vinay/Desktop/vendor/src/components/islands/ChartBlock.astro", void 0);

function computeDashboardKpis(snapshot) {
  const { vendors, products, orders, payments, settlements, disputes } = snapshot;
  const activeVendors = vendors.filter((v) => v.state === "approved" && v.kycStatus === "verified").length;
  const pendingApprovals = vendors.filter((v) => v.kycStatus === "submitted" || v.state === "pending").length;
  const liveProducts = products.filter((p) => p.published && p.approvalStatus === "approved").length;
  const fulfilled = orders.filter((o) => o.fulfillmentStage === "completed" || o.status === "delivered").length;
  const grossRevenuePaise = payments.filter((p) => p.status === "captured").reduce((s, p) => s + p.amountPaise, 0);
  const pendingSettlementsPaise = settlements.filter((st) => st.status === "scheduled" || st.status === "processing").reduce((acc, st) => acc + st.netPaise, 0);
  return {
    totalVendors: vendors.length,
    activeVendors,
    pendingApprovals,
    liveProducts,
    openDisputes: disputes.filter((d) => d.status !== "resolved" && d.status !== "lost").length,
    completedOrders: fulfilled,
    grossRevenuePaise,
    pendingSettlementsPaise,
    failedPayments: payments.filter((p) => p.status === "failed").length
  };
}
function getDashboardKpis() {
  return computeDashboardKpis({
    vendors: mockVendors,
    products: mockProducts,
    orders: mockOrders,
    payments: mockPayments,
    settlements: mockSettlements,
    disputes: mockDisputes
  });
}
function getVendorGrowthSeries(vendorCount) {
  return [
    { date: "2026-01", value: 12 },
    { date: "2026-02", value: 19 },
    { date: "2026-03", value: 24 },
    { date: "2026-04", value: vendorCount + 20 }
  ];
}
function getPaymentStatusDistributionFromPayments(payments) {
  const map = /* @__PURE__ */ new Map();
  for (const p of payments) {
    map.set(p.status, (map.get(p.status) ?? 0) + 1);
  }
  return Array.from(map.entries()).map(([status, count]) => ({ status, count }));
}
function getPaymentStatusDistribution() {
  return getPaymentStatusDistributionFromPayments(mockPayments);
}
function getFulfillmentTrends() {
  return [
    { date: "Mar 25", fulfilled: 42, pending: 11 },
    { date: "Mar 26", fulfilled: 48, pending: 9 },
    { date: "Mar 27", fulfilled: 51, pending: 14 },
    { date: "Mar 28", fulfilled: 55, pending: 10 },
    { date: "Mar 29", fulfilled: 60, pending: 8 },
    { date: "Mar 30", fulfilled: 63, pending: 12 },
    { date: "Mar 31", fulfilled: 58, pending: 15 },
    { date: "Apr 1", fulfilled: 44, pending: 18 }
  ];
}
function getRecentActivity() {
  return mockActivities;
}
function getComplianceAlerts() {
  return mockComplianceAlerts;
}

export { $$ChartBlock as $, getDashboardKpis as a, getPaymentStatusDistribution as b, getVendorGrowthSeries as c, getRecentActivity as d, getComplianceAlerts as e, getFulfillmentTrends as g };
