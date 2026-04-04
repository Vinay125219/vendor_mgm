/** Versioned API contracts for integration with the main site. Prefix: /api/v1 */

export const API_V1_PREFIX = '/api/v1';

export type ApiEnvelope<T> = {
  ok: true;
  data: T;
  meta?: { requestId: string; version: '1' };
};

export type ApiError = {
  ok: false;
  error: { code: string; message: string; details?: unknown };
};

// ============ Auth ============
export type AuthLoginRequest = {
  email: string;
  password: string;
};

export type AuthLoginResponse = {
  accessToken: string;
  refreshToken?: string;
  expiresAt: number;
  user: { id: string; email: string; role: string; name?: string };
};

export type AuthRefreshRequest = {
  refreshToken: string;
};

// ============ Dashboard ============
export type DashboardKpis = {
  totalVendors: number;
  activeVendors: number;
  pendingApprovals: number;
  liveProducts: number;
  openDisputes: number;
  completedOrders: number;
  grossRevenuePaise: number;
  pendingSettlementsPaise: number;
  failedPayments: number;
};

export type TimeSeriesPoint = { date: string; value: number };

export type PaymentStatusSlice = { status: string; count: number };

export type FulfillmentTrendPoint = { date: string; fulfilled: number; pending: number };

// ============ Vendors ============
export type ListVendorsResponse = {
  vendors: Array<{
    id: string;
    businessName: string;
    email: string;
    state: string;
    kycStatus: string;
    riskScore?: number;
  }>;
  total: number;
  page: number;
  pageSize: number;
};

export type GetVendorResponse = {
  id: string;
  businessName: string;
  legalName: string;
  email: string;
  phone: string;
  gstin?: string;
  pan?: string;
  state: string;
  kycStatus: string;
  onboardingStep: number;
  verifiedAt?: string;
  riskScore?: number;
};

// ============ Products ============
export type ListProductsRequest = {
  page?: number;
  pageSize?: number;
  vendorId?: string;
  status?: string;
};

export type ListProductsResponse = {
  products: Array<{
    id: string;
    sku: string;
    title: string;
    vendorId: string;
    basePricePaise: number;
    stock: number;
    approvalStatus: string;
    published: boolean;
  }>;
  total: number;
  page: number;
  pageSize: number;
};

export type CreateProductRequest = {
  sku: string;
  title: string;
  description?: string;
  categoryId: string;
  basePricePaise: number;
  stock: number;
  tagIds?: string[];
};

export type UpdateProductRequest = Partial<CreateProductRequest> & {
  published?: boolean;
  approvalStatus?: string;
};

export type GetProductResponse = {
  id: string;
  sku: string;
  title: string;
  description?: string;
  categoryId: string;
  basePricePaise: number;
  compareAtPaise?: number;
  stock: number;
  approvalStatus: string;
  published: boolean;
  vendorId: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
};

// ============ Orders ============
export type ListOrdersResponse = {
  orders: Array<{
    id: string;
    customer: { name: string; email: string };
    status: string;
    fulfillmentStage: string;
    totalPaise: number;
    createdAt: string;
  }>;
  total: number;
  page: number;
  pageSize: number;
};

export type GetOrderResponse = {
  id: string;
  customer: { id: string; email: string; name: string };
  lines: Array<{ productId: string; sku: string; title: string; qty: number; unitPricePaise: number }>;
  status: string;
  fulfillmentStage: string;
  totalPaise: number;
  vendorIds: string[];
  razorpayOrderId?: string;
  paymentId?: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateOrderRequest = {
  fulfillmentStage?: string;
  status?: string;
};

// ============ Payments ============
export type ListPaymentsResponse = {
  payments: Array<{
    id: string;
    orderId: string;
    vendorId: string;
    amountPaise: number;
    status: string;
    razorpayPaymentId?: string;
    createdAt: string;
  }>;
  total: number;
  page: number;
  pageSize: number;
};

export type VerifyPaymentRequest = {
  razorpayOrderId: string;
  razorpayPaymentId: string;
  razorpaySignature: string;
};

export type VerifyPaymentResponse = {
  valid: boolean;
  paymentId: string;
  orderId: string;
  status: string;
};

// ============ Settlements ============
export type ListSettlementsResponse = {
  settlements: Array<{
    id: string;
    vendorId: string;
    periodStart: string;
    periodEnd: string;
    netPaise: number;
    status: string;
    payoutRef?: string;
  }>;
  total: number;
  page: number;
  pageSize: number;
};

// ============ Disputes ============
export type ListDisputesResponse = {
  disputes: Array<{
    id: string;
    orderId: string;
    vendorId: string;
    type: string;
    amountPaise: number;
    status: string;
    createdAt: string;
  }>;
  total: number;
  page: number;
  pageSize: number;
};

// ============ Support ============
export type CreateTicketRequest = {
  subject: string;
  description: string;
  category: string;
};

export type ListTicketsResponse = {
  tickets: Array<{
    id: string;
    subject: string;
    status: string;
    priority: string;
    createdAt: string;
  }>;
  total: number;
  page: number;
  pageSize: number;
};
