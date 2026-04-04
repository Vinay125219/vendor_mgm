import type { ActivityItem, ComplianceAlert, VendorProfile } from '@/types';
import type {
  DashboardKpis,
  FulfillmentTrendPoint,
  PaymentStatusSlice,
  TimeSeriesPoint,
} from '@/types/api-contracts';
import type { AppState } from '@/lib/client-store';
import type { Dispute, StoreOrder, PaymentRecord, StoreProduct, SettlementEntry } from '@/types';
import {
  mockActivities,
  mockComplianceAlerts,
  mockDisputes,
  mockOrders,
  mockPayments,
  mockProducts,
  mockSettlements,
  mockVendors,
} from '@/services/mock-store';

type DashboardSnapshot = {
  vendors: VendorProfile[];
  products: StoreProduct[];
  orders: StoreOrder[];
  payments: PaymentRecord[];
  settlements: SettlementEntry[];
  disputes: Dispute[];
};

export function computeDashboardKpis(snapshot: DashboardSnapshot): DashboardKpis {
  const { vendors, products, orders, payments, settlements, disputes } = snapshot;
  const activeVendors = vendors.filter((v) => v.state === 'approved' && v.kycStatus === 'verified').length;
  const pendingApprovals = vendors.filter((v) => v.kycStatus === 'submitted' || v.state === 'pending').length;
  const liveProducts = products.filter((p) => p.published && p.approvalStatus === 'approved').length;
  const fulfilled = orders.filter((o) => o.fulfillmentStage === 'completed' || o.status === 'delivered').length;
  const grossRevenuePaise = payments
    .filter((p) => p.status === 'captured')
    .reduce((s, p) => s + p.amountPaise, 0);
  const pendingSettlementsPaise = settlements
    .filter((st) => st.status === 'scheduled' || st.status === 'processing')
    .reduce((acc, st) => acc + st.netPaise, 0);
  return {
    totalVendors: vendors.length,
    activeVendors,
    pendingApprovals,
    liveProducts,
    openDisputes: disputes.filter((d) => d.status !== 'resolved' && d.status !== 'lost').length,
    completedOrders: fulfilled,
    grossRevenuePaise,
    pendingSettlementsPaise,
    failedPayments: payments.filter((p) => p.status === 'failed').length,
  };
}

export function getDashboardKpis(): DashboardKpis {
  return computeDashboardKpis({
    vendors: mockVendors,
    products: mockProducts,
    orders: mockOrders,
    payments: mockPayments,
    settlements: mockSettlements,
    disputes: mockDisputes,
  });
}

export function getDashboardKpisFromAppState(state: AppState): DashboardKpis {
  return computeDashboardKpis({
    vendors: state.vendors,
    products: state.products,
    orders: state.orders,
    payments: state.payments,
    settlements: state.settlements,
    disputes: state.disputes,
  });
}

export function getVendorGrowthSeries(vendorCount: number): TimeSeriesPoint[] {
  return [
    { date: '2026-01', value: 12 },
    { date: '2026-02', value: 19 },
    { date: '2026-03', value: 24 },
    { date: '2026-04', value: vendorCount + 20 },
  ];
}

export function getPaymentStatusDistributionFromPayments(payments: PaymentRecord[]): PaymentStatusSlice[] {
  const map = new Map<string, number>();
  for (const p of payments) {
    map.set(p.status, (map.get(p.status) ?? 0) + 1);
  }
  return Array.from(map.entries()).map(([status, count]) => ({ status, count }));
}

export function getVendorGrowthSeriesDefault(): TimeSeriesPoint[] {
  return getVendorGrowthSeries(mockVendors.length);
}

export function getPaymentStatusDistribution(): PaymentStatusSlice[] {
  return getPaymentStatusDistributionFromPayments(mockPayments);
}

export function getFulfillmentTrends(): FulfillmentTrendPoint[] {
  return [
    { date: 'Mar 25', fulfilled: 42, pending: 11 },
    { date: 'Mar 26', fulfilled: 48, pending: 9 },
    { date: 'Mar 27', fulfilled: 51, pending: 14 },
    { date: 'Mar 28', fulfilled: 55, pending: 10 },
    { date: 'Mar 29', fulfilled: 60, pending: 8 },
    { date: 'Mar 30', fulfilled: 63, pending: 12 },
    { date: 'Mar 31', fulfilled: 58, pending: 15 },
    { date: 'Apr 1', fulfilled: 44, pending: 18 },
  ];
}

export function getRecentActivityFromState(activities: ActivityItem[]): ActivityItem[] {
  return activities;
}

export function getRecentActivity(): ActivityItem[] {
  return mockActivities;
}

export function getComplianceAlerts(): ComplianceAlert[] {
  return mockComplianceAlerts;
}
