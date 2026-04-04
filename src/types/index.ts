/** Shared commerce schema — align with main storefront Customer / Product / Order. */
export type CustomerRef = {
  id: string;
  email: string;
  name: string;
};

export type StoreProduct = {
  id: string;
  sku: string;
  title: string;
  description?: string;
  categoryId: string;
  tagIds: string[];
  basePricePaise: number;
  compareAtPaise?: number;
  currency: 'INR';
  images: string[];
  vendorId: string;
  approvalStatus: 'draft' | 'pending_review' | 'approved' | 'rejected';
  published: boolean;
  stock: number;
  updatedAt: string;
};

export type StoreOrderLine = {
  productId: string;
  sku: string;
  title: string;
  qty: number;
  unitPricePaise: number;
};

export type StoreOrder = {
  id: string;
  customer: CustomerRef;
  lines: StoreOrderLine[];
  status:
    | 'created'
    | 'paid'
    | 'processing'
    | 'packed'
    | 'shipped'
    | 'delivered'
    | 'returned'
    | 'refunded'
    | 'cancelled';
  fulfillmentStage: 'unfulfilled' | 'picking' | 'packed' | 'shipped' | 'completed';
  totalPaise: number;
  currency: 'INR';
  vendorIds: string[];
  razorpayOrderId?: string;
  paymentId?: string;
  createdAt: string;
  updatedAt: string;
};

export type UserRole = 'super_admin' | 'admin' | 'vendor' | 'finance' | 'support';

export type VendorState =
  | 'pending'
  | 'approved'
  | 'rejected'
  | 'at_risk'
  | 'on_hold'
  | 'disputed';

export type VendorProfile = {
  id: string;
  businessName: string;
  legalName: string;
  contactName: string;
  email: string;
  phone: string;
  gstin?: string;
  pan?: string;
  bankAccountMasked?: string;
  state: VendorState;
  kycStatus: 'not_started' | 'in_progress' | 'submitted' | 'verified' | 'failed';
  onboardingStep: number;
  submittedAt?: string;
  verifiedAt?: string;
  riskScore?: number;
};

export type VendorDocument = {
  id: string;
  vendorId: string;
  label: string;
  status: 'pending' | 'approved' | 'rejected';
  uploadedAt: string;
};

export type CommissionRule = {
  vendorId: string;
  categoryId: string;
  percentBps: number;
};

export type SettlementEntry = {
  id: string;
  vendorId: string;
  periodStart: string;
  periodEnd: string;
  grossPaise: number;
  commissionPaise: number;
  netPaise: number;
  status: 'scheduled' | 'processing' | 'paid' | 'on_hold' | 'failed';
  payoutRef?: string;
};

export type PaymentRecord = {
  id: string;
  orderId: string;
  vendorId: string;
  razorpayOrderId: string;
  razorpayPaymentId?: string;
  amountPaise: number;
  status:
    | 'created'
    | 'authorized'
    | 'captured'
    | 'failed'
    | 'refunded'
    | 'disputed';
  updatedAt: string;
};

export type Dispute = {
  id: string;
  orderId: string;
  vendorId: string;
  type: 'return' | 'refund' | 'chargeback' | 'quality';
  status: 'open' | 'under_review' | 'resolved' | 'lost';
  amountPaise: number;
  openedAt: string;
};

export type SupportTicket = {
  id: string;
  vendorId: string;
  subject: string;
  status: 'open' | 'pending' | 'resolved';
  priority: 'low' | 'medium' | 'high';
  updatedAt: string;
};

export type NotificationItem = {
  id: string;
  title: string;
  body: string;
  channel: 'in_app' | 'email' | 'sms';
  read: boolean;
  createdAt: string;
  href?: string;
};

export type ActivityItem = {
  id: string;
  actor: string;
  action: string;
  entity: string;
  entityId: string;
  at: string;
  severity?: 'info' | 'warning' | 'critical';
};

export type AuditLogEntry = {
  id: string;
  at: string;
  actorId: string;
  role: UserRole;
  action: string;
  resource: string;
  resourceId?: string;
  metadata?: Record<string, unknown>;
};

export type ComplianceAlert = {
  id: string;
  title: string;
  detail: string;
  level: 'info' | 'warning' | 'critical';
  vendorId?: string;
};

export type WebhookEventLog = {
  id: string;
  provider: 'razorpay';
  event: string;
  receivedAt: string;
  payloadSummary: string;
  verified: boolean;
};
