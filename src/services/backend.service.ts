import type {
  AuthLoginRequest,
  AuthLoginResponse,
  ListProductsRequest,
  ListProductsResponse,
  CreateProductRequest,
  UpdateProductRequest,
  GetProductResponse,
  ListOrdersResponse,
  GetOrderResponse,
  UpdateOrderRequest,
  ListPaymentsResponse,
  VerifyPaymentRequest,
  VerifyPaymentResponse,
  ListSettlementsResponse,
  ListDisputesResponse,
  CreateTicketRequest,
  ListTicketsResponse,
  GetVendorResponse,
  ListVendorsResponse,
} from '@/types/api-contracts';
import { getJson, postJson, putJson, patchJson, deleteJson, ApiError } from './api-client';

// ============ Auth Service ============
export const authService = {
  login: (req: AuthLoginRequest) => postJson<AuthLoginResponse>('/auth/login', req),
  logout: () => postJson<{ ok: true }>('/auth/logout', {}),
  refresh: (refreshToken: string) => postJson<AuthLoginResponse>('/auth/refresh', { refreshToken }),
};

// ============ Dashboard Service ============
export const dashboardService = {
  getKpis: () => getJson<{ kpis: any }>('/dashboard/kpis'),
  getGrowthChart: () => getJson<{ data: any }>('/dashboard/growth'),
  getPaymentDistribution: () => getJson<{ data: any }>('/dashboard/payments-distribution'),
  getFulfillmentTrends: () => getJson<{ data: any }>('/dashboard/fulfillment-trends'),
  getRecentActivity: () => getJson<{ activities: any[] }>('/dashboard/activities'),
  getComplianceAlerts: () => getJson<{ alerts: any[] }>('/dashboard/compliance-alerts'),
};

// ============ Vendor Service ============
export const vendorService = {
  listVendors: (page = 1, pageSize = 20) =>
    getJson<ListVendorsResponse>(`/vendors?page=${page}&pageSize=${pageSize}`),
  getVendor: (vendorId: string) => getJson<GetVendorResponse>(`/vendors/${vendorId}`),
  createVendor: (data: Record<string, unknown>) => postJson<{ id: string }>('/vendors', data),
  updateVendor: (vendorId: string, data: Record<string, unknown>) =>
    putJson<GetVendorResponse>(`/vendors/${vendorId}`, data),
  approveVendor: (vendorId: string) => postJson<{ ok: true }>(`/vendors/${vendorId}/approve`, {}),
  rejectVendor: (vendorId: string, reason: string) =>
    postJson<{ ok: true }>(`/vendors/${vendorId}/reject`, { reason }),
};

// ============ Product Service ============
export const productService = {
  listProducts: (req: ListProductsRequest) => {
    const params = new URLSearchParams({
      page: String(req.page ?? 1),
      pageSize: String(req.pageSize ?? 20),
      ...(req.vendorId && { vendorId: req.vendorId }),
      ...(req.status && { status: req.status }),
    });
    return getJson<ListProductsResponse>(`/products?${params}`);
  },
  getProduct: (productId: string) => getJson<GetProductResponse>(`/products/${productId}`),
  createProduct: (data: CreateProductRequest) => postJson<{ id: string }>('/products', data),
  updateProduct: (productId: string, data: UpdateProductRequest) =>
    putJson<GetProductResponse>(`/products/${productId}`, data),
  deleteProduct: (productId: string) => deleteJson<{ ok: true }>(`/products/${productId}`),
  publishProduct: (productId: string) =>
    patchJson<{ ok: true }>(`/products/${productId}/publish`, {}),
  unpublishProduct: (productId: string) =>
    patchJson<{ ok: true }>(`/products/${productId}/unpublish`, {}),
  submitForApproval: (productId: string) =>
    postJson<{ ok: true }>(`/products/${productId}/submit-approval`, {}),
};

// ============ Order Service ============
export const orderService = {
  listOrders: (page = 1, pageSize = 20) =>
    getJson<ListOrdersResponse>(`/orders?page=${page}&pageSize=${pageSize}`),
  getOrder: (orderId: string) => getJson<GetOrderResponse>(`/orders/${orderId}`),
  updateOrder: (orderId: string, data: UpdateOrderRequest) =>
    putJson<GetOrderResponse>(`/orders/${orderId}`, data),
  updateFulfillmentStage: (orderId: string, stage: string) =>
    patchJson<{ ok: true }>(`/orders/${orderId}/fulfillment-stage`, { stage }),
  cancelOrder: (orderId: string, reason: string) =>
    postJson<{ ok: true }>(`/orders/${orderId}/cancel`, { reason }),
};

// ============ Payment Service ============
export const paymentService = {
  listPayments: (page = 1, pageSize = 20) =>
    getJson<ListPaymentsResponse>(`/payments?page=${page}&pageSize=${pageSize}`),
  verifyPayment: (data: VerifyPaymentRequest) =>
    postJson<VerifyPaymentResponse>('/payments/verify', data),
  retryPayment: (paymentId: string) =>
    postJson<{ ok: true }>(`/payments/${paymentId}/retry`, {}),
  refundPayment: (paymentId: string, amountPaise?: number) =>
    postJson<{ ok: true }>(`/payments/${paymentId}/refund`, { amountPaise }),
};

// ============ Settlement Service ============
export const settlementService = {
  listSettlements: (page = 1, pageSize = 20) =>
    getJson<ListSettlementsResponse>(`/settlements?page=${page}&pageSize=${pageSize}`),
  getSettlement: (settlementId: string) => getJson<Record<string, unknown>>(`/settlements/${settlementId}`),
  retrySettlement: (settlementId: string) =>
    postJson<{ ok: true }>(`/settlements/${settlementId}/retry`, {}),
};

// ============ Dispute Service ============
export const disputeService = {
  listDisputes: (page = 1, pageSize = 20) =>
    getJson<ListDisputesResponse>(`/disputes?page=${page}&pageSize=${pageSize}`),
  getDispute: (disputeId: string) => getJson<Record<string, unknown>>(`/disputes/${disputeId}`),
  updateDispute: (disputeId: string, data: Record<string, unknown>) =>
    putJson<Record<string, unknown>>(`/disputes/${disputeId}`, data),
  resolveDispute: (disputeId: string, resolution: string) =>
    postJson<{ ok: true }>(`/disputes/${disputeId}/resolve`, { resolution }),
};

// ============ Support Service ============
export const supportService = {
  listTickets: (page = 1, pageSize = 20) =>
    getJson<ListTicketsResponse>(`/support/tickets?page=${page}&pageSize=${pageSize}`),
  getTicket: (ticketId: string) => getJson<Record<string, unknown>>(`/support/tickets/${ticketId}`),
  createTicket: (data: CreateTicketRequest) =>
    postJson<{ id: string }>('/support/tickets', data),
  addComment: (ticketId: string, comment: string) =>
    postJson<{ ok: true }>(`/support/tickets/${ticketId}/comments`, { comment }),
  closeTicket: (ticketId: string) =>
    postJson<{ ok: true }>(`/support/tickets/${ticketId}/close`, {}),
};

// ============ Inventory Service ============
export const inventoryService = {
  updateStock: (productId: string, stock: number) =>
    patchJson<{ ok: true }>(`/inventory/products/${productId}`, { stock }),
  syncInventory: () => postJson<{ synced: number }>('/inventory/sync', {}),
};

// ============ Error utilities ============
export function isApiError(error: unknown): error is ApiError {
  return error instanceof ApiError;
}

export function getErrorMessage(error: unknown): string {
  if (isApiError(error)) {
    return error.message;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return 'An unexpected error occurred';
}
