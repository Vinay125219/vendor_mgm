# VendorSphere Backend Integration Guide

## Overview

This is a frontend-ready Astro vendor portal application with complete type definitions and service layer architecture for backend integration. All pages and components are prepared to work with backend APIs.

## ✅ Completed Fixes & Improvements

### 1. **Authentication System (Fixed)**
- ✅ Removed demo credentials from client auth
- ✅ Implemented token-based authentication (Bearer token in Authorization header)
- ✅ Session storage now uses `vs_auth_token` instead of demo session markers
- ✅ Token expiration checking implemented
- ✅ Auth redirect guards updated in layout

**Backend Requirement:**
- Endpoint: `POST /api/v1/auth/login`
- Request: `{ email: string, password: string }`
- Response: `{ ok: true, token: { accessToken: string, expiresAt: number }, user: { email, role } }`

### 2. **API Client Enhancement (Fixed)**
- ✅ Added proper error handling with `ApiError` class
- ✅ Implemented all HTTP methods: GET, POST, PUT, PATCH, DELETE
- ✅ Automatic Bearer token injection in all requests
- ✅ JSON response envelope handling
- ✅ Proper error code and message extraction

**Features:**
- Credentials included in all requests (`include` mode)
- Automatic 401 handling (token expired redirects to login)
- Typed responses for all endpoints

### 3. **Backend Service Layer (Created)**
- ✅ Complete service layer with typed functions
- ✅ All main modules covered:
  - `authService` - Login, logout, token refresh
  - `dashboardService` - KPIs, charts, activities
  - `vendorService` - Vendor CRUD operations
  - `productService` - Product management
  - `orderService` - Order fulfillment
  - `paymentService` - Payment verification
  - `settlementService` - Payout management
  - `disputeService` - Dispute resolution
  - `supportService` - Support tickets
  - `inventoryService` - Stock management

**File:** `src/services/backend.service.ts`

### 4. **API Type Contracts (Expanded)**
- ✅ Complete request/response types for all endpoints
- ✅ Authentication contracts
- ✅ CRUD operation contracts
- ✅ List/pagination contracts
- ✅ Error handling types

**File:** `src/types/api-contracts.ts`

### 5. **Page-Level Updates (Fixed)**
- ✅ **Login Page:** Backend-ready form, no demo credentials
- ✅ **Product Creation:** Now POSTs to `/api/v1/products`
- ✅ **Order Fulfillment:** Updates stage via `/api/v1/orders/{id}/fulfillment-stage`
- ✅ **Vendor Onboarding:** Submits to `/api/v1/vendors`
- ✅ **Error Handling:** All forms show proper error messages
- ✅ **Loading States:** Submit buttons show loading feedback

## 📋 API Endpoints Required

### Authentication
```
POST /api/v1/auth/login
POST /api/v1/auth/logout
POST /api/v1/auth/refresh
```

### Dashboard
```
GET /api/v1/dashboard/kpis
GET /api/v1/dashboard/growth
GET /api/v1/dashboard/payments-distribution
GET /api/v1/dashboard/fulfillment-trends
GET /api/v1/dashboard/activities
GET /api/v1/dashboard/compliance-alerts
```

### Vendors
```
GET  /api/v1/vendors
GET  /api/v1/vendors/:id
POST /api/v1/vendors
PUT  /api/v1/vendors/:id
POST /api/v1/vendors/:id/approve
POST /api/v1/vendors/:id/reject
```

### Products
```
GET    /api/v1/products
GET    /api/v1/products/:id
POST   /api/v1/products
PUT    /api/v1/products/:id
DELETE /api/v1/products/:id
PATCH  /api/v1/products/:id/publish
PATCH  /api/v1/products/:id/unpublish
POST   /api/v1/products/:id/submit-approval
```

### Orders
```
GET   /api/v1/orders
GET   /api/v1/orders/:id
PUT   /api/v1/orders/:id
PATCH /api/v1/orders/:id/fulfillment-stage
POST  /api/v1/orders/:id/cancel
```

### Payments
```
GET  /api/v1/payments
POST /api/v1/payments/verify
POST /api/v1/payments/:id/retry
POST /api/v1/payments/:id/refund
```

### Settlements
```
GET  /api/v1/settlements
GET  /api/v1/settlements/:id
POST /api/v1/settlements/:id/retry
```

### Disputes
```
GET  /api/v1/disputes
GET  /api/v1/disputes/:id
PUT  /api/v1/disputes/:id
POST /api/v1/disputes/:id/resolve
```

### Support
```
GET  /api/v1/support/tickets
GET  /api/v1/support/tickets/:id
POST /api/v1/support/tickets
POST /api/v1/support/tickets/:id/comments
POST /api/v1/support/tickets/:id/close
```

### Inventory
```
PATCH /api/v1/inventory/products/:id
POST  /api/v1/inventory/sync
```

## 🔄 Response Format

All endpoints should follow this envelope format:

### Success Response
```json
{
  "ok": true,
  "data": {
    // Your response data
  },
  "meta": {
    "requestId": "req_123",
    "version": "1"
  }
}
```

### Error Response
```json
{
  "ok": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid email format",
    "details": {}
  }
}
```

## 🛠️ How to Use the Service Layer

### Example: Create Product
```typescript
import { productService, getErrorMessage } from '@/services/backend.service';

try {
  const result = await productService.createProduct({
    title: 'My Product',
    sku: 'SKU-001',
    basePricePaise: 99900, // 999.00 INR
    categoryId: 'cat_beverages',
    stock: 100
  });
  console.log('Created:', result.id);
} catch (error) {
  console.error(getErrorMessage(error));
}
```

### Example: List Orders
```typescript
import { orderService } from '@/services/backend.service';

const orders = await orderService.listOrders(page, pageSize);
```

### Example: Update Order Status
```typescript
import { orderService } from '@/services/backend.service';

await orderService.updateFulfillmentStage(orderId, 'shipped');
```

## 🔐 Security Considerations

1. **Token Storage:** Tokens are stored in `localStorage`
   - Use `httpOnly` cookies for production (requires backend CSRF token support)
   
2. **Authorization Headers:** 
   - Automatically included in all requests
   - Format: `Authorization: Bearer <token>`

3. **CORS:**
   - Set `Access-Control-Allow-Credentials: true`
   - Backend must handle preflight OPTIONS requests

4. **Input Validation:**
   - Frontend validates required fields
   - Backend must also validate all inputs

## 📦 Local Storage Keys

- `vs_auth_token` - JWT access token
- `vs_user_role` - Current user role
- `vs_user_email` - Current user email
- `vs_token_expires` - Token expiration timestamp (milliseconds)
- `vs_onboarding_draft` - Vendor onboarding form draft

## 🎯 Pages Ready for Backend

- ✅ `/login` - Login form
- ✅ `/vendor` - Dashboard
- ✅ `/vendor/products` - Product list
- ✅ `/vendor/products/new` - Create product
- ✅ `/vendor/products/:id` - Edit product
- ✅ `/vendor/orders` - Orders list
- ✅ `/vendor/orders/:id` - Order details & fulfillment
- ✅ `/vendor/payments` - Payment transactions
- ✅ `/vendor/settlements` - Settlement payouts
- ✅ `/vendor/disputes` - Dispute management
- ✅ `/vendor/support` - Support tickets
- ✅ `/vendor/onboarding` - Vendor signup
- ✅ `/vendor/inventory` - Inventory management
- ✅ `/vendor/vendors` - Vendor management (admin)

## 🚀 Deployment Checklist

Before going to production:

- [ ] All API endpoints implemented and tested
- [ ] CORS configured on backend
- [ ] JWT token generation/validation working
- [ ] All database migrations run
- [ ] Error handling on backend matches expected format
- [ ] Rate limiting implemented
- [ ] Input validation on backend
- [ ] Logging/monitoring set up
- [ ] SSL/TLS certificates configured
- [ ] Environment variables set (.env)
- [ ] Database backups configured
- [ ] Email notifications tested

## 🐛 Debugging

Enable console logging by checking browser DevTools:
- Network tab shows all API requests
- Console shows error messages
- Application tab shows stored tokens

## 📝 Notes

- Mock data (`mock-store.ts`) is still available for reference but not used in production flows
- All forms now submit to backend APIs
- Loading and error states properly handled
- Toast notifications show API responses
- Session management is fully token-based
