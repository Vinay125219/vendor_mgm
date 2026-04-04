import type {
  ActivityItem,
  AuditLogEntry,
  ComplianceAlert,
  CustomerRef,
  Dispute,
  NotificationItem,
  PaymentRecord,
  SettlementEntry,
  StoreOrder,
  StoreProduct,
  SupportTicket,
  VendorProfile,
  WebhookEventLog,
} from '@/types';

export const mockVendors: VendorProfile[] = [
  {
    id: 'ven_001',
    businessName: 'Northwind Traders',
    legalName: 'Northwind Traders Pvt Ltd',
    contactName: 'Ananya Rao',
    email: 'ops@northwind.example',
    phone: '+91 98765 43210',
    gstin: '29AABCU9603R1ZV',
    pan: 'AABCU9603R',
    bankAccountMasked: '**** **** **** 4421',
    state: 'approved',
    kycStatus: 'verified',
    onboardingStep: 6,
    submittedAt: '2025-11-02T10:00:00.000Z',
    verifiedAt: '2025-11-05T14:20:00.000Z',
    riskScore: 12,
  },
  {
    id: 'ven_002',
    businessName: 'Blue Harbor Crafts',
    legalName: 'Blue Harbor LLP',
    contactName: 'Rahul Mehta',
    email: 'rahul@blueharbor.example',
    phone: '+91 91234 56789',
    state: 'pending',
    kycStatus: 'submitted',
    onboardingStep: 4,
    submittedAt: '2026-03-28T09:15:00.000Z',
    riskScore: 34,
  },
  {
    id: 'ven_003',
    businessName: 'Urban Pantry Co',
    legalName: 'Urban Pantry Foods',
    contactName: 'Sneha Kulkarni',
    email: 'sneha@urbanpantry.example',
    phone: '+91 99887 76655',
    state: 'at_risk',
    kycStatus: 'verified',
    onboardingStep: 6,
    submittedAt: '2025-08-10T08:00:00.000Z',
    verifiedAt: '2025-08-12T11:00:00.000Z',
    riskScore: 72,
  },
  {
    id: 'ven_004',
    businessName: 'Lumen Electronics',
    legalName: 'Lumen Devices India',
    contactName: 'Vikram Singh',
    email: 'vikram@lumen.example',
    phone: '+91 90000 11112',
    state: 'on_hold',
    kycStatus: 'failed',
    onboardingStep: 5,
    submittedAt: '2026-01-20T12:00:00.000Z',
    riskScore: 58,
  },
];

const cust: CustomerRef = {
  id: 'cus_88',
  email: 'buyer@example.com',
  name: 'Priya Nair',
};

export const mockProducts: StoreProduct[] = [
  {
    id: 'prd_101',
    sku: 'NW-TEA-01',
    title: 'Assam Whole Leaf Black Tea',
    categoryId: 'cat_beverages',
    tagIds: ['organic', 'bestseller'],
    basePricePaise: 44900,
    compareAtPaise: 49900,
    currency: 'INR',
    images: ['/favicon.svg'],
    vendorId: 'ven_001',
    approvalStatus: 'approved',
    published: true,
    stock: 240,
    updatedAt: '2026-03-30T06:00:00.000Z',
  },
  {
    id: 'prd_102',
    sku: 'BH-MUG-02',
    title: 'Hand-glazed Ceramic Mug',
    categoryId: 'cat_home',
    tagIds: ['handmade'],
    basePricePaise: 89000,
    currency: 'INR',
    images: ['/favicon.svg'],
    vendorId: 'ven_002',
    approvalStatus: 'pending_review',
    published: false,
    stock: 18,
    updatedAt: '2026-03-29T16:22:00.000Z',
  },
  {
    id: 'prd_103',
    sku: 'UP-SNACK-09',
    title: 'Roasted Makhana — Peri Peri',
    categoryId: 'cat_snacks',
    tagIds: ['vegan'],
    basePricePaise: 19900,
    currency: 'INR',
    images: ['/favicon.svg'],
    vendorId: 'ven_003',
    approvalStatus: 'approved',
    published: true,
    stock: 4,
    updatedAt: '2026-03-31T01:10:00.000Z',
  },
];

export const mockOrders: StoreOrder[] = [
  {
    id: 'ord_5001',
    customer: cust,
    lines: [
      {
        productId: 'prd_101',
        sku: 'NW-TEA-01',
        title: 'Assam Whole Leaf Black Tea',
        qty: 2,
        unitPricePaise: 44900,
      },
    ],
    status: 'paid',
    fulfillmentStage: 'picking',
    totalPaise: 89800,
    currency: 'INR',
    vendorIds: ['ven_001'],
    razorpayOrderId: 'order_rp_7x9',
    paymentId: 'pay_9k2',
    createdAt: '2026-04-01T08:12:00.000Z',
    updatedAt: '2026-04-01T08:14:00.000Z',
  },
  {
    id: 'ord_5002',
    customer: cust,
    lines: [
      {
        productId: 'prd_103',
        sku: 'UP-SNACK-09',
        title: 'Roasted Makhana — Peri Peri',
        qty: 5,
        unitPricePaise: 19900,
      },
    ],
    status: 'shipped',
    fulfillmentStage: 'shipped',
    totalPaise: 99500,
    currency: 'INR',
    vendorIds: ['ven_003'],
    razorpayOrderId: 'order_rp_8a1',
    paymentId: 'pay_8a1',
    createdAt: '2026-03-29T11:00:00.000Z',
    updatedAt: '2026-03-30T09:00:00.000Z',
  },
  {
    id: 'ord_5003',
    customer: cust,
    lines: [
      {
        productId: 'prd_102',
        sku: 'BH-MUG-02',
        title: 'Hand-glazed Ceramic Mug',
        qty: 1,
        unitPricePaise: 89000,
      },
    ],
    status: 'refunded',
    fulfillmentStage: 'completed',
    totalPaise: 89000,
    currency: 'INR',
    vendorIds: ['ven_002'],
    razorpayOrderId: 'order_rp_3c4',
    paymentId: 'pay_3c4',
    createdAt: '2026-03-15T14:00:00.000Z',
    updatedAt: '2026-03-18T10:00:00.000Z',
  },
];

export const mockPayments: PaymentRecord[] = [
  {
    id: 'pay_9k2',
    orderId: 'ord_5001',
    vendorId: 'ven_001',
    razorpayOrderId: 'order_rp_7x9',
    razorpayPaymentId: 'pay_9k2',
    amountPaise: 89800,
    status: 'captured',
    updatedAt: '2026-04-01T08:14:00.000Z',
  },
  {
    id: 'pay_fail_01',
    orderId: 'ord_4999',
    vendorId: 'ven_001',
    razorpayOrderId: 'order_rp_fail',
    amountPaise: 120000,
    status: 'failed',
    updatedAt: '2026-03-31T22:01:00.000Z',
  },
];

export const mockSettlements: SettlementEntry[] = [
  {
    id: 'set_01',
    vendorId: 'ven_001',
    periodStart: '2026-03-24',
    periodEnd: '2026-03-30',
    grossPaise: 1250000,
    commissionPaise: 187500,
    netPaise: 1062500,
    status: 'scheduled',
  },
  {
    id: 'set_02',
    vendorId: 'ven_003',
    periodStart: '2026-03-24',
    periodEnd: '2026-03-30',
    grossPaise: 640000,
    commissionPaise: 96000,
    netPaise: 544000,
    status: 'paid',
    payoutRef: 'pout_rp_22',
  },
];

export const mockDisputes: Dispute[] = [
  {
    id: 'dsp_01',
    orderId: 'ord_5003',
    vendorId: 'ven_002',
    type: 'refund',
    status: 'under_review',
    amountPaise: 89000,
    openedAt: '2026-03-16T09:00:00.000Z',
  },
];

export const mockTickets: SupportTicket[] = [
  {
    id: 'tkt_01',
    vendorId: 'ven_001',
    subject: 'Bulk upload template clarification',
    status: 'open',
    priority: 'medium',
    updatedAt: '2026-04-01T07:00:00.000Z',
  },
];

export const mockNotifications: NotificationItem[] = [
  {
    id: 'ntf_1',
    title: 'Catalog review queued',
    body: '2 products are awaiting compliance review.',
    channel: 'in_app',
    read: false,
    createdAt: '2026-04-01T06:00:00.000Z',
    href: '/vendor/products',
  },
  {
    id: 'ntf_2',
    title: 'Settlement batch scheduled',
    body: 'Week 13 settlement will process on Apr 5.',
    channel: 'in_app',
    read: true,
    createdAt: '2026-03-31T18:00:00.000Z',
    href: '/vendor/settlements',
  },
];

export const mockActivities: ActivityItem[] = [
  {
    id: 'act_1',
    actor: 'system',
    action: 'synced inventory',
    entity: 'product',
    entityId: 'prd_103',
    at: '2026-04-01T05:55:00.000Z',
  },
  {
    id: 'act_2',
    actor: 'finance.bot',
    action: 'flagged payout hold',
    entity: 'vendor',
    entityId: 'ven_004',
    at: '2026-03-31T21:10:00.000Z',
    severity: 'warning',
  },
  {
    id: 'act_3',
    actor: 'admin@platform',
    action: 'approved product',
    entity: 'product',
    entityId: 'prd_101',
    at: '2026-03-30T14:02:00.000Z',
  },
];

export const mockComplianceAlerts: ComplianceAlert[] = [
  {
    id: 'cmp_1',
    title: 'GSTIN expiring in 30 days',
    detail: 'Northwind Traders — renew before May 2.',
    level: 'warning',
    vendorId: 'ven_001',
  },
  {
    id: 'cmp_2',
    title: 'High return rate',
    detail: 'Urban Pantry Co exceeded category SLA.',
    level: 'critical',
    vendorId: 'ven_003',
  },
];

export const mockWebhookLog: WebhookEventLog[] = [
  {
    id: 'wh_1',
    provider: 'razorpay',
    event: 'payment.captured',
    receivedAt: '2026-04-01T08:14:02.000Z',
    payloadSummary: 'order_rp_7x9 → captured',
    verified: true,
  },
];

export const mockAuditLog: AuditLogEntry[] = [
  {
    id: 'aud_seed_1',
    at: '2026-04-01T07:00:00.000Z',
    actorId: 'usr_admin',
    role: 'admin',
    action: 'product.approve',
    resource: 'product',
    resourceId: 'prd_101',
  },
];
