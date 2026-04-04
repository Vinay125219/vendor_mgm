import { v4 } from 'uuid';
import bcrypt from 'bcrypt';
import { a as config } from './api-response_DnXmo0UI.mjs';

class Database {
  static instance;
  users = /* @__PURE__ */ new Map();
  vendors = /* @__PURE__ */ new Map();
  products = /* @__PURE__ */ new Map();
  orders = /* @__PURE__ */ new Map();
  payments = /* @__PURE__ */ new Map();
  settlements = /* @__PURE__ */ new Map();
  disputes = /* @__PURE__ */ new Map();
  supportTickets = /* @__PURE__ */ new Map();
  inventoryLogs = [];
  constructor() {
    this.seedInitialData();
  }
  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
  /**
   * Seed initial test data
   */
  seedInitialData() {
    const adminPasswordHash = bcrypt.hashSync("admin@123", config.bcryptRounds);
    const admin = {
      id: v4(),
      email: "admin@vendorsphere.io",
      passwordHash: adminPasswordHash,
      role: "admin",
      name: "Admin User",
      createdAt: Date.now(),
      updatedAt: Date.now()
    };
    this.users.set(admin.id, admin);
    const superAdminPasswordHash = bcrypt.hashSync("superadmin@123", config.bcryptRounds);
    const superAdmin = {
      id: v4(),
      email: "superadmin@vendorsphere.io",
      passwordHash: superAdminPasswordHash,
      role: "super-admin",
      name: "Super Admin",
      createdAt: Date.now(),
      updatedAt: Date.now()
    };
    this.users.set(superAdmin.id, superAdmin);
    const vendorPasswordHash = bcrypt.hashSync("vendor@123", config.bcryptRounds);
    const vendorUser = {
      id: v4(),
      email: "vendor@example.com",
      passwordHash: vendorPasswordHash,
      role: "vendor",
      name: "Vendor User",
      phone: "+91 98765 43210",
      createdAt: Date.now(),
      updatedAt: Date.now()
    };
    this.users.set(vendorUser.id, vendorUser);
    const vendor = {
      id: v4(),
      name: "Electronics Hub",
      email: "contact@electronicshub.com",
      phone: "+91 98765 43210",
      businessType: "electronics",
      gstNumber: "18AABCU1234H1Z0",
      status: "approved",
      onboardingStep: 4,
      userId: vendorUser.id,
      createdAt: Date.now(),
      updatedAt: Date.now()
    };
    vendorUser.vendorId = vendor.id;
    this.vendors.set(vendor.id, vendor);
  }
  // ========== USER OPERATIONS ==========
  getUserByEmail(email) {
    for (const user of this.users.values()) {
      if (user.email.toLowerCase() === email.toLowerCase()) {
        return user;
      }
    }
    return null;
  }
  getUserById(id) {
    return this.users.get(id) || null;
  }
  createUser(data) {
    const user = {
      id: v4(),
      ...data,
      createdAt: Date.now(),
      updatedAt: Date.now()
    };
    this.users.set(user.id, user);
    return user;
  }
  // ========== VENDOR OPERATIONS ==========
  getVendors() {
    return Array.from(this.vendors.values());
  }
  getVendorById(id) {
    return this.vendors.get(id) || null;
  }
  getVendorByUserId(userId) {
    for (const vendor of this.vendors.values()) {
      if (vendor.userId === userId) {
        return vendor;
      }
    }
    return null;
  }
  createVendor(data) {
    const vendor = {
      id: v4(),
      ...data,
      createdAt: Date.now(),
      updatedAt: Date.now()
    };
    this.vendors.set(vendor.id, vendor);
    return vendor;
  }
  updateVendor(id, data) {
    const vendor = this.vendors.get(id);
    if (!vendor) return null;
    const updated = { ...vendor, ...data, updatedAt: Date.now() };
    this.vendors.set(id, updated);
    return updated;
  }
  // ========== PRODUCT OPERATIONS ==========
  getProducts(vendorId) {
    return Array.from(this.products.values()).filter(
      (p) => !vendorId || p.vendorId === vendorId
    );
  }
  getProductById(id) {
    return this.products.get(id) || null;
  }
  createProduct(data) {
    const product = {
      id: v4(),
      ...data,
      createdAt: Date.now(),
      updatedAt: Date.now()
    };
    this.products.set(product.id, product);
    return product;
  }
  updateProduct(id, data) {
    const product = this.products.get(id);
    if (!product) return null;
    const updated = { ...product, ...data, updatedAt: Date.now() };
    this.products.set(id, updated);
    return updated;
  }
  deleteProduct(id) {
    return this.products.delete(id);
  }
  // ========== ORDER OPERATIONS ==========
  getOrders(vendorId) {
    return Array.from(this.orders.values()).filter(
      (o) => !vendorId || o.vendorId === vendorId
    );
  }
  getOrderById(id) {
    return this.orders.get(id) || null;
  }
  createOrder(data) {
    const order = {
      id: v4(),
      ...data,
      createdAt: Date.now(),
      updatedAt: Date.now()
    };
    this.orders.set(order.id, order);
    return order;
  }
  updateOrder(id, data) {
    const order = this.orders.get(id);
    if (!order) return null;
    const updated = { ...order, ...data, updatedAt: Date.now() };
    this.orders.set(id, updated);
    return updated;
  }
  // ========== PAYMENT OPERATIONS ==========
  getPayments(vendorId) {
    return Array.from(this.payments.values()).filter(
      (p) => !vendorId || p.vendorId === vendorId
    );
  }
  getPaymentById(id) {
    return this.payments.get(id) || null;
  }
  createPayment(data) {
    const payment = {
      id: v4(),
      ...data,
      createdAt: Date.now(),
      updatedAt: Date.now()
    };
    this.payments.set(payment.id, payment);
    return payment;
  }
  updatePayment(id, data) {
    const payment = this.payments.get(id);
    if (!payment) return null;
    const updated = { ...payment, ...data, updatedAt: Date.now() };
    this.payments.set(id, updated);
    return updated;
  }
  // ========== SETTLEMENT OPERATIONS ==========
  getSettlements(vendorId) {
    return Array.from(this.settlements.values()).filter(
      (s) => !vendorId || s.vendorId === vendorId
    );
  }
  getSettlementById(id) {
    return this.settlements.get(id) || null;
  }
  createSettlement(data) {
    const settlement = {
      id: v4(),
      ...data,
      createdAt: Date.now(),
      updatedAt: Date.now()
    };
    this.settlements.set(settlement.id, settlement);
    return settlement;
  }
  updateSettlement(id, data) {
    const settlement = this.settlements.get(id);
    if (!settlement) return null;
    const updated = { ...settlement, ...data, updatedAt: Date.now() };
    this.settlements.set(id, updated);
    return updated;
  }
  // ========== DISPUTE OPERATIONS ==========
  getDisputes(vendorId) {
    return Array.from(this.disputes.values()).filter(
      (d) => !vendorId || d.vendorId === vendorId
    );
  }
  getDisputeById(id) {
    return this.disputes.get(id) || null;
  }
  createDispute(data) {
    const dispute = {
      id: v4(),
      ...data,
      createdAt: Date.now(),
      updatedAt: Date.now()
    };
    this.disputes.set(dispute.id, dispute);
    return dispute;
  }
  updateDispute(id, data) {
    const dispute = this.disputes.get(id);
    if (!dispute) return null;
    const updated = { ...dispute, ...data, updatedAt: Date.now() };
    this.disputes.set(id, updated);
    return updated;
  }
  // ========== SUPPORT TICKET OPERATIONS ==========
  getSupportTickets(vendorId) {
    return Array.from(this.supportTickets.values()).filter(
      (t) => !vendorId || t.vendorId === vendorId
    );
  }
  getSupportTicketById(id) {
    return this.supportTickets.get(id) || null;
  }
  createSupportTicket(data) {
    const ticket = {
      id: v4(),
      ...data,
      createdAt: Date.now(),
      updatedAt: Date.now()
    };
    this.supportTickets.set(ticket.id, ticket);
    return ticket;
  }
  updateSupportTicket(id, data) {
    const ticket = this.supportTickets.get(id);
    if (!ticket) return null;
    const updated = { ...ticket, ...data, updatedAt: Date.now() };
    this.supportTickets.set(id, updated);
    return updated;
  }
  addTicketMessage(ticketId, message) {
    const ticket = this.supportTickets.get(ticketId);
    if (!ticket) return null;
    ticket.messages.push(message);
    ticket.updatedAt = Date.now();
    this.supportTickets.set(ticketId, ticket);
    return ticket;
  }
  // ========== INVENTORY LOG OPERATIONS ==========
  getInventoryLogs(vendorId) {
    return this.inventoryLogs.filter(
      (log) => !vendorId || log.vendorId === vendorId
    );
  }
  addInventoryLog(data) {
    const log = {
      id: v4(),
      ...data,
      createdAt: Date.now()
    };
    this.inventoryLogs.push(log);
    return log;
  }
}
const db = Database.getInstance();

export { db as d };
