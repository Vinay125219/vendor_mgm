/**
 * In-Memory Database Mock
 * Simulates a database for development/demo purposes
 * In production, replace with actual database (PostgreSQL, MongoDB, etc.)
 */

import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';
import { config } from './backend-config';

// ============================================================================
// Type Definitions
// ============================================================================

export interface User {
  id: string;
  email: string;
  passwordHash: string;
  role: 'admin' | 'vendor' | 'super-admin';
  vendorId?: string;
  name: string;
  phone?: string;
  createdAt: number;
  updatedAt: number;
}

export interface Vendor {
  id: string;
  name: string;
  email: string;
  phone: string;
  businessType: string;
  gstNumber: string;
  status: 'pending' | 'approved' | 'rejected' | 'suspended';
  onboardingStep: number;
  userId: string;
  createdAt: number;
  updatedAt: number;
}

export interface Product {
  id: string;
  vendorId: string;
  name: string;
  description: string;
  category: string;
  price: number;
  stock: number;
  sku: string;
  images: string[];
  status: 'draft' | 'published' | 'archived';
  createdAt: number;
  updatedAt: number;
}

export interface Order {
  id: string;
  vendorId: string;
  customerId: string;
  items: OrderItem[];
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  fulfillmentStage: 'pending' | 'processing' | 'ready' | 'dispatched';
  paymentStatus: 'pending' | 'completed' | 'failed';
  shippingAddress: Address;
  createdAt: number;
  updatedAt: number;
}

export interface OrderItem {
  productId: string;
  quantity: number;
  price: number;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface Payment {
  id: string;
  orderId: string;
  vendorId: string;
  amount: number;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  method: 'card' | 'bank_transfer' | 'upi' | 'wallet';
  razorpayOrderId?: string;
  razorpayPaymentId?: string;
  createdAt: number;
  updatedAt: number;
}

export interface Settlement {
  id: string;
  vendorId: string;
  amount: number;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  payoutDate?: number;
  bankAccount: BankAccount;
  createdAt: number;
  updatedAt: number;
}

export interface BankAccount {
  accountNumber: string;
  accountHolderName: string;
  bankName: string;
  ifscCode: string;
}

export interface Dispute {
  id: string;
  orderId: string;
  vendorId: string;
  customerId: string;
  reason: string;
  description: string;
  status: 'open' | 'in_review' | 'resolved' | 'rejected';
  resolution?: string;
  createdAt: number;
  updatedAt: number;
}

export interface SupportTicket {
  id: string;
  vendorId: string;
  subject: string;
  description: string;
  category: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  messages: TicketMessage[];
  createdAt: number;
  updatedAt: number;
}

export interface TicketMessage {
  id: string;
  sender: 'vendor' | 'support';
  message: string;
  createdAt: number;
}

export interface InventoryLog {
  id: string;
  productId: string;
  vendorId: string;
  changeType: 'sale' | 'return' | 'adjustment' | 'restock';
  quantity: number;
  reason?: string;
  createdAt: number;
}

// ============================================================================
// Database Store
// ============================================================================

export class Database {
  private static instance: Database;

  private users: Map<string, User> = new Map();
  private vendors: Map<string, Vendor> = new Map();
  private products: Map<string, Product> = new Map();
  private orders: Map<string, Order> = new Map();
  private payments: Map<string, Payment> = new Map();
  private settlements: Map<string, Settlement> = new Map();
  private disputes: Map<string, Dispute> = new Map();
  private supportTickets: Map<string, SupportTicket> = new Map();
  private inventoryLogs: InventoryLog[] = [];

  private constructor() {
    this.seedInitialData();
  }

  static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  /**
   * Seed initial test data
   */
  private seedInitialData(): void {
    // Create admin user
    const adminPasswordHash = bcrypt.hashSync('admin@123', config.bcryptRounds);
    const admin: User = {
      id: uuidv4(),
      email: 'admin@vendorsphere.io',
      passwordHash: adminPasswordHash,
      role: 'admin',
      name: 'Admin User',
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    this.users.set(admin.id, admin);

    // Create super admin user
    const superAdminPasswordHash = bcrypt.hashSync('superadmin@123', config.bcryptRounds);
    const superAdmin: User = {
      id: uuidv4(),
      email: 'superadmin@vendorsphere.io',
      passwordHash: superAdminPasswordHash,
      role: 'super-admin',
      name: 'Super Admin',
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    this.users.set(superAdmin.id, superAdmin);

    // Create sample vendor user
    const vendorPasswordHash = bcrypt.hashSync('vendor@123', config.bcryptRounds);
    const vendorUser: User = {
      id: uuidv4(),
      email: 'vendor@example.com',
      passwordHash: vendorPasswordHash,
      role: 'vendor',
      name: 'Vendor User',
      phone: '+91 98765 43210',
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    this.users.set(vendorUser.id, vendorUser);

    // Create sample vendor
    const vendor: Vendor = {
      id: uuidv4(),
      name: 'Electronics Hub',
      email: 'contact@electronicshub.com',
      phone: '+91 98765 43210',
      businessType: 'electronics',
      gstNumber: '18AABCU1234H1Z0',
      status: 'approved',
      onboardingStep: 4,
      userId: vendorUser.id,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    vendorUser.vendorId = vendor.id;
    this.vendors.set(vendor.id, vendor);
  }

  // ========== USER OPERATIONS ==========

  getUserByEmail(email: string): User | null {
    for (const user of this.users.values()) {
      if (user.email.toLowerCase() === email.toLowerCase()) {
        return user;
      }
    }
    return null;
  }

  getUserById(id: string): User | null {
    return this.users.get(id) || null;
  }

  createUser(data: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): User {
    const user: User = {
      id: uuidv4(),
      ...data,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    this.users.set(user.id, user);
    return user;
  }

  // ========== VENDOR OPERATIONS ==========

  getVendors(): Vendor[] {
    return Array.from(this.vendors.values());
  }

  getVendorById(id: string): Vendor | null {
    return this.vendors.get(id) || null;
  }

  getVendorByUserId(userId: string): Vendor | null {
    for (const vendor of this.vendors.values()) {
      if (vendor.userId === userId) {
        return vendor;
      }
    }
    return null;
  }

  createVendor(data: Omit<Vendor, 'id' | 'createdAt' | 'updatedAt'>): Vendor {
    const vendor: Vendor = {
      id: uuidv4(),
      ...data,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    this.vendors.set(vendor.id, vendor);
    return vendor;
  }

  updateVendor(id: string, data: Partial<Vendor>): Vendor | null {
    const vendor = this.vendors.get(id);
    if (!vendor) return null;
    const updated = { ...vendor, ...data, updatedAt: Date.now() };
    this.vendors.set(id, updated);
    return updated;
  }

  // ========== PRODUCT OPERATIONS ==========

  getProducts(vendorId?: string): Product[] {
    return Array.from(this.products.values()).filter(
      (p) => !vendorId || p.vendorId === vendorId
    );
  }

  getProductById(id: string): Product | null {
    return this.products.get(id) || null;
  }

  createProduct(data: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Product {
    const product: Product = {
      id: uuidv4(),
      ...data,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    this.products.set(product.id, product);
    return product;
  }

  updateProduct(id: string, data: Partial<Product>): Product | null {
    const product = this.products.get(id);
    if (!product) return null;
    const updated = { ...product, ...data, updatedAt: Date.now() };
    this.products.set(id, updated);
    return updated;
  }

  deleteProduct(id: string): boolean {
    return this.products.delete(id);
  }

  // ========== ORDER OPERATIONS ==========

  getOrders(vendorId?: string): Order[] {
    return Array.from(this.orders.values()).filter(
      (o) => !vendorId || o.vendorId === vendorId
    );
  }

  getOrderById(id: string): Order | null {
    return this.orders.get(id) || null;
  }

  createOrder(data: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>): Order {
    const order: Order = {
      id: uuidv4(),
      ...data,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    this.orders.set(order.id, order);
    return order;
  }

  updateOrder(id: string, data: Partial<Order>): Order | null {
    const order = this.orders.get(id);
    if (!order) return null;
    const updated = { ...order, ...data, updatedAt: Date.now() };
    this.orders.set(id, updated);
    return updated;
  }

  // ========== PAYMENT OPERATIONS ==========

  getPayments(vendorId?: string): Payment[] {
    return Array.from(this.payments.values()).filter(
      (p) => !vendorId || p.vendorId === vendorId
    );
  }

  getPaymentById(id: string): Payment | null {
    return this.payments.get(id) || null;
  }

  createPayment(data: Omit<Payment, 'id' | 'createdAt' | 'updatedAt'>): Payment {
    const payment: Payment = {
      id: uuidv4(),
      ...data,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    this.payments.set(payment.id, payment);
    return payment;
  }

  updatePayment(id: string, data: Partial<Payment>): Payment | null {
    const payment = this.payments.get(id);
    if (!payment) return null;
    const updated = { ...payment, ...data, updatedAt: Date.now() };
    this.payments.set(id, updated);
    return updated;
  }

  // ========== SETTLEMENT OPERATIONS ==========

  getSettlements(vendorId?: string): Settlement[] {
    return Array.from(this.settlements.values()).filter(
      (s) => !vendorId || s.vendorId === vendorId
    );
  }

  getSettlementById(id: string): Settlement | null {
    return this.settlements.get(id) || null;
  }

  createSettlement(data: Omit<Settlement, 'id' | 'createdAt' | 'updatedAt'>): Settlement {
    const settlement: Settlement = {
      id: uuidv4(),
      ...data,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    this.settlements.set(settlement.id, settlement);
    return settlement;
  }

  updateSettlement(id: string, data: Partial<Settlement>): Settlement | null {
    const settlement = this.settlements.get(id);
    if (!settlement) return null;
    const updated = { ...settlement, ...data, updatedAt: Date.now() };
    this.settlements.set(id, updated);
    return updated;
  }

  // ========== DISPUTE OPERATIONS ==========

  getDisputes(vendorId?: string): Dispute[] {
    return Array.from(this.disputes.values()).filter(
      (d) => !vendorId || d.vendorId === vendorId
    );
  }

  getDisputeById(id: string): Dispute | null {
    return this.disputes.get(id) || null;
  }

  createDispute(data: Omit<Dispute, 'id' | 'createdAt' | 'updatedAt'>): Dispute {
    const dispute: Dispute = {
      id: uuidv4(),
      ...data,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    this.disputes.set(dispute.id, dispute);
    return dispute;
  }

  updateDispute(id: string, data: Partial<Dispute>): Dispute | null {
    const dispute = this.disputes.get(id);
    if (!dispute) return null;
    const updated = { ...dispute, ...data, updatedAt: Date.now() };
    this.disputes.set(id, updated);
    return updated;
  }

  // ========== SUPPORT TICKET OPERATIONS ==========

  getSupportTickets(vendorId?: string): SupportTicket[] {
    return Array.from(this.supportTickets.values()).filter(
      (t) => !vendorId || t.vendorId === vendorId
    );
  }

  getSupportTicketById(id: string): SupportTicket | null {
    return this.supportTickets.get(id) || null;
  }

  createSupportTicket(data: Omit<SupportTicket, 'id' | 'createdAt' | 'updatedAt'>): SupportTicket {
    const ticket: SupportTicket = {
      id: uuidv4(),
      ...data,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    this.supportTickets.set(ticket.id, ticket);
    return ticket;
  }

  updateSupportTicket(id: string, data: Partial<SupportTicket>): SupportTicket | null {
    const ticket = this.supportTickets.get(id);
    if (!ticket) return null;
    const updated = { ...ticket, ...data, updatedAt: Date.now() };
    this.supportTickets.set(id, updated);
    return updated;
  }

  addTicketMessage(ticketId: string, message: TicketMessage): SupportTicket | null {
    const ticket = this.supportTickets.get(ticketId);
    if (!ticket) return null;
    ticket.messages.push(message);
    ticket.updatedAt = Date.now();
    this.supportTickets.set(ticketId, ticket);
    return ticket;
  }

  // ========== INVENTORY LOG OPERATIONS ==========

  getInventoryLogs(vendorId?: string): InventoryLog[] {
    return this.inventoryLogs.filter(
      (log) => !vendorId || log.vendorId === vendorId
    );
  }

  addInventoryLog(data: Omit<InventoryLog, 'id' | 'createdAt'>): InventoryLog {
    const log: InventoryLog = {
      id: uuidv4(),
      ...data,
      createdAt: Date.now(),
    };
    this.inventoryLogs.push(log);
    return log;
  }
}

// Export singleton instance
export const db = Database.getInstance();
