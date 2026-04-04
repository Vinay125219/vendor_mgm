# 🔍 Backend Integration Verification Guide

## ✅ GitHub Push Status

Your code has been successfully pushed to:
```
Repository: https://github.com/Vinay125219/vendor_mgm.git
Branch: main
```

---

## Part 1: Verify Backend Integration Locally

### Step 1: Clean Install & Setup

```bash
# 1a. Clear node_modules and reinstall
cd c:\Users\Vinay\Desktop\vendor
rm -r node_modules package-lock.json  # or delete manually
npm install

# 1b. Create .env.local from .env.example
copy .env.example .env.local
```

Update `.env.local`:
```env
JWT_SECRET=dev-secret-change-in-production-min-32-chars
JWT_EXPIRATION=86400
BCRYPT_ROUNDS=10
NODE_ENV=development
```

### Step 2: Verify Build

```bash
npm run build
```

**Expected Output:**
```
✓ Build complete
✓ 0 errors
✓ Output directory: dist/
```

### Step 3: Start Development Server

```bash
npm run dev
```

**Expected Output:**
```
  ✓ Listening on http://localhost:3000
  ✓ Hot reloading enabled
```

---

## Part 2: Local API Testing (Complete Checklist)

### 2.1 Test Authentication Endpoints

#### Test 1: Login with Vendor Credentials
```bash
curl -X POST http://localhost:3000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "vendor@example.com",
    "password": "vendor@123"
  }'
```

**Expected Response:**
```json
{
  "ok": true,
  "data": {
    "token": {
      "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "expiresAt": 1712390400000
    },
    "user": {
      "id": "...",
      "email": "vendor@example.com",
      "name": "Vendor User",
      "role": "vendor",
      "vendorId": "..."
    }
  }
}
```

**What to verify:**
- ✅ Response includes `ok: true`
- ✅ Token is a valid JWT string
- ✅ User role is "vendor"
- ✅ expiresAt is a future timestamp

#### Test 2: Login with Admin Credentials
```bash
curl -X POST http://localhost:3000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@vendorsphere.io",
    "password": "admin@123"
  }'
```

**Expected:** Login successful with role "admin"

#### Test 3: Invalid Credentials
```bash
curl -X POST http://localhost:3000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "vendor@example.com",
    "password": "wrongpassword"
  }'
```

**Expected Error Response:**
```json
{
  "ok": false,
  "error": {
    "code": "UNAUTHORIZED",
    "message": "Invalid email or password"
  }
}
```

**What to verify:**
- ✅ Response includes `ok: false`
- ✅ HTTP status is 401
- ✅ Error code is "UNAUTHORIZED"

---

### 2.2 Test Protected Endpoints (Vendors)

#### Test 4: Get All Vendors (with token)
```bash
# First, get a token from login
curl -X POST http://localhost:3000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"vendor@example.com","password":"vendor@123"}' \
  | jq '.data.token.accessToken' -r > token.txt

# Then use the token
$TOKEN = Get-Content token.txt
curl -X GET http://localhost:3000/api/v1/vendors \
  -H "Authorization: Bearer $TOKEN"
```

**Expected Response:**
```json
{
  "ok": true,
  "data": [
    {
      "id": "...",
      "name": "Electronics Hub",
      "email": "contact@electronicshub.com",
      "status": "approved",
      ...
    }
  ],
  "total": 1
}
```

**What to verify:**
- ✅ Returns vendors list
- ✅ Vendor data includes all fields
- ✅ Status field has valid value

#### Test 5: Unauthorized Access (no token)
```bash
curl -X GET http://localhost:3000/api/v1/vendors
```

**Expected Error:**
```json
{
  "ok": false,
  "error": {
    "code": "UNAUTHORIZED",
    "message": "Unauthorized"
  }
}
```

**What to verify:**
- ✅ HTTP status is 401
- ✅ Error code is "UNAUTHORIZED"

---

### 2.3 Test Product Endpoints

#### Test 6: Create Product
```bash
curl -X POST http://localhost:3000/api/v1/products \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d '{
    "name": "Test Product",
    "description": "This is a test product for verification",
    "category": "electronics",
    "price": 999.99,
    "stock": 50,
    "sku": "TEST-001"
  }'
```

**Expected Response:**
```json
{
  "ok": true,
  "data": {
    "id": "...",
    "vendorId": "...",
    "name": "Test Product",
    "price": 999.99,
    "stock": 50,
    "status": "draft",
    "createdAt": 1712304000000
  }
}
```

**What to verify:**
- ✅ Product created with ID
- ✅ Status defaults to "draft"
- ✅ Vendor ID is automatically set

#### Test 7: Get All Products
```bash
curl -X GET http://localhost:3000/api/v1/products \
  -H "Authorization: Bearer $TOKEN"
```

**Expected Response:**
```json
{
  "ok": true,
  "data": [
    {
      "id": "...",
      "name": "Test Product",
      ...
    }
  ],
  "total": 1
}
```

#### Test 8: Get Product by ID
```bash
# Replace PRODUCT_ID with actual product ID from previous response
curl -X GET http://localhost:3000/api/v1/products/PRODUCT_ID \
  -H "Authorization: Bearer $TOKEN"
```

**Expected:** Single product object with all fields

#### Test 9: Update Product
```bash
curl -X PUT http://localhost:3000/api/v1/products/PRODUCT_ID \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d '{
    "price": 1099.99,
    "status": "published"
  }'
```

**Expected:** Updated product with new price and status

#### Test 10: Delete Product
```bash
curl -X DELETE http://localhost:3000/api/v1/products/PRODUCT_ID \
  -H "Authorization: Bearer $TOKEN"
```

**Expected Response:**
```json
{
  "ok": true,
  "data": {
    "id": "..."
  }
}
```

---

### 2.4 Test Order Endpoints

#### Test 11: Get All Orders
```bash
curl -X GET http://localhost:3000/api/v1/orders \
  -H "Authorization: Bearer $TOKEN"
```

**Expected:** Orders list (may be empty initially)

#### Test 12: Update Order
```bash
curl -X PUT http://localhost:3000/api/v1/orders/ORDER_ID \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d '{
    "fulfillmentStage": "processing",
    "status": "confirmed"
  }'
```

**Expected:** Updated order

---

### 2.5 Test Dashboard Endpoints

#### Test 13: Get Dashboard KPIs
```bash
curl -X GET http://localhost:3000/api/v1/dashboard/kpis \
  -H "Authorization: Bearer $TOKEN"
```

**Expected Response:**
```json
{
  "ok": true,
  "data": {
    "totalRevenue": 0,
    "totalOrders": 0,
    "completedOrders": 0,
    "pendingOrders": 0,
    "conversionRate": 0
  }
}
```

**What to verify:**
- ✅ All KPI fields present
- ✅ Values are numbers (not null)

---

### 2.6 Test Other Endpoints

#### Test 14: Get Payments
```bash
curl -X GET http://localhost:3000/api/v1/payments \
  -H "Authorization: Bearer $TOKEN"
```

#### Test 15: Get Settlements
```bash
curl -X GET http://localhost:3000/api/v1/settlements \
  -H "Authorization: Bearer $TOKEN"
```

#### Test 16: Get Disputes
```bash
curl -X GET http://localhost:3000/api/v1/disputes \
  -H "Authorization: Bearer $TOKEN"
```

#### Test 17: Get Support Tickets
```bash
curl -X GET http://localhost:3000/api/v1/support \
  -H "Authorization: Bearer $TOKEN"
```

#### Test 18: Get Inventory Logs
```bash
curl -X GET http://localhost:3000/api/v1/inventory \
  -H "Authorization: Bearer $TOKEN"
```

---

## Part 3: Frontend Integration Verification

### Step 1: Verify API Client is Working

Check that `src/services/api-client.ts` can communicate:

**Open Browser DevTools** (F12):

1. Go to `http://localhost:3000/login`
2. Open **Console** tab
3. Login with test credentials
4. Check Network tab to verify:
   - ✅ `POST /api/v1/auth/login` returns 200
   - ✅ Token is stored in localStorage
   - ✅ Redirects to `/vendor` (authenticated page)

### Step 2: Verify Protected Pages Load

1. Login successfully
2. Navigate to: `http://localhost:3000/vendor/products`
3. Verify:
   - ✅ Page loads (not redirected to login)
   - ✅ No 401 errors in console
   - ✅ API calls use Bearer token

### Step 3: Test Backend Service Layer

In Browser Console:
```javascript
// This should work if backend is integrated
import { backendService } from '@/services/backend.service';

// Try to get products
const products = await backendService.productService.getAll();
console.log(products);
```

---

## Part 4: Verify Vercel Deployment

### Step 1: Create Vercel Project

1. Go to https://vercel.com/dashboard
2. Click "Add New..." → "Project"
3. Select GitHub repository: `Vinay125219/vendor_mgm`
4. Click "Import"

### Step 2: Configure Environment Variables

In Vercel Dashboard:

1. Go to **Settings** → **Environment Variables**
2. Add variables:
   ```
   JWT_SECRET = your-production-secret-min-32-chars
   JWT_EXPIRATION = 86400
   BCRYPT_ROUNDS = 10
   ```

**Generate strong JWT_SECRET:**
```bash
# On Windows PowerShell
[System.Convert]::ToBase64String([System.Security.Cryptography.RandomNumberGenerator]::GetBytes(32))
```

### Step 3: Deploy

1. Click "Deploy"
2. Wait for build to complete
3. Get your production URL: `https://your-project.vercel.app`

### Step 4: Verify Production Build Logs

In Vercel:
1. Go to **Deployments** tab
2. Click latest deployment
3. Click **Build Logs** tab
4. Verify:
   - ✅ `npm install` completed
   - ✅ `npm run build` completed
   - ✅ No errors in logs

---

## Part 5: Test Production API (Vercel)

### Test 1: Production Login

```bash
curl -X POST https://your-project.vercel.app/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "vendor@example.com",
    "password": "vendor@123"
  }'
```

**Expected:** Same response as local

### Test 2: Production Products

```bash
# Use token from login response
curl -X GET https://your-project.vercel.app/api/v1/products \
  -H "Authorization: Bearer $PRODUCTION_TOKEN"
```

**Expected:** Same as local

### Test 3: Test All Endpoints

Repeat all local tests but replace `http://localhost:3000` with `https://your-project.vercel.app`

---

## Part 6: Verification Checklist

### Local Environment
- [ ] `npm install` completes without errors
- [ ] `npm run build` succeeds
- [ ] `npm run dev` starts server
- [ ] Can login with test credentials
- [ ] Token is returned in response
- [ ] Token is valid JWT format
- [ ] All 17 API endpoints respond
- [ ] Protected endpoints require token
- [ ] Unauthorized requests return 401
- [ ] Invalid credentials return error
- [ ] Product CRUD works
- [ ] Order endpoints work
- [ ] Dashboard KPIs return data
- [ ] Other endpoints return lists
- [ ] Frontend pages load after login
- [ ] No 401 errors in authenticated pages
- [ ] DevTools Console has no errors

### Production (Vercel)
- [ ] Build succeeds on Vercel
- [ ] Environment variables are set
- [ ] Login endpoint works
- [ ] Token is returned
- [ ] All endpoints respond with 200
- [ ] Protected endpoints require token
- [ ] Frontend pages load
- [ ] No errors in Vercel logs

---

## Troubleshooting

### Issue: "Cannot find module" error
```bash
# Solution: Clean install
rm -r node_modules package-lock.json
npm install
npm run dev
```

### Issue: Port 3000 already in use
```bash
# Solution: Kill process and restart
npm run dev -- --port 3001
# or
lsof -i :3000
kill -9 <PID>
```

### Issue: Build fails locally
```bash
# Check for errors
npm run build

# If TypeScript errors:
npx tsc --noEmit
```

### Issue: API returns 404
```bash
# Verify file exists
ls -la src/pages/api/auth/login.ts

# Check file naming (should be lowercase)
# Check dynamic routes use [id].ts format
```

### Issue: Token validation fails
```bash
# Check JWT_SECRET in .env.local
# Ensure same secret used for signing and validating
# Verify token format includes "Bearer "
```

### Issue: Vercel deployment fails
```bash
# Check build logs in Vercel dashboard
# Verify all environment variables are set
# Check tsconfig.json is valid
# Run npm run build locally to test
```

---

## Integration Test Script

Create `test-backend.sh`:

```bash
#!/bin/bash

BASE_URL="http://localhost:3000"
ADMIN_EMAIL="admin@vendorsphere.io"
ADMIN_PASSWORD="admin@123"

echo "🧪 Testing VendorSphere Backend"
echo "================================"

# 1. Test Login
echo "1. Testing Login..."
LOGIN_RESPONSE=$(curl -s -X POST $BASE_URL/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"$ADMIN_EMAIL\",\"password\":\"$ADMIN_PASSWORD\"}")

TOKEN=$(echo $LOGIN_RESPONSE | jq '.data.token.accessToken' -r)

if [ "$TOKEN" = "null" ] || [ -z "$TOKEN" ]; then
  echo "❌ Login failed"
  echo $LOGIN_RESPONSE
  exit 1
fi

echo "✅ Login successful"
echo "Token: ${TOKEN:0:20}..."

# 2. Test Vendors
echo ""
echo "2. Testing Vendors Endpoint..."
VENDORS=$(curl -s -X GET $BASE_URL/api/v1/vendors \
  -H "Authorization: Bearer $TOKEN")

if echo $VENDORS | jq '.ok' | grep -q true; then
  echo "✅ Vendors endpoint working"
  VENDOR_COUNT=$(echo $VENDORS | jq '.total')
  echo "Vendors count: $VENDOR_COUNT"
else
  echo "❌ Vendors endpoint failed"
  echo $VENDORS
fi

# 3. Test Products
echo ""
echo "3. Testing Products Endpoint..."
PRODUCTS=$(curl -s -X GET $BASE_URL/api/v1/products \
  -H "Authorization: Bearer $TOKEN")

if echo $PRODUCTS | jq '.ok' | grep -q true; then
  echo "✅ Products endpoint working"
else
  echo "❌ Products endpoint failed"
fi

# 4. Test Orders
echo ""
echo "4. Testing Orders Endpoint..."
ORDERS=$(curl -s -X GET $BASE_URL/api/v1/orders \
  -H "Authorization: Bearer $TOKEN")

if echo $ORDERS | jq '.ok' | grep -q true; then
  echo "✅ Orders endpoint working"
else
  echo "❌ Orders endpoint failed"
fi

# 5. Test Dashboard
echo ""
echo "5. Testing Dashboard Endpoint..."
KPI=$(curl -s -X GET $BASE_URL/api/v1/dashboard/kpis \
  -H "Authorization: Bearer $TOKEN")

if echo $KPI | jq '.ok' | grep -q true; then
  echo "✅ Dashboard endpoint working"
  echo "KPIs: $(echo $KPI | jq '.data')"
else
  echo "❌ Dashboard endpoint failed"
fi

echo ""
echo "================================"
echo "✅ All tests completed!"
```

Run:
```bash
bash test-backend.sh
```

---

## Success Indicators

### Local Testing ✅
- Server starts without errors
- All endpoints respond
- Authentication works
- Protected endpoints require token
- Error handling works
- Frontend loads after login

### Vercel Deployment ✅
- Build completes on Vercel
- Production URL is accessible
- All endpoints work with production token
- Frontend loads in production
- No errors in Vercel logs

---

## Next Steps

1. ✅ Verify all local tests pass
2. ✅ Push to GitHub (already done!)
3. ✅ Deploy to Vercel
4. ✅ Run production tests
5. ✅ Monitor Vercel logs
6. 🎉 Your app is live!

---

## Documentation References

- [QUICK_REFERENCE.md](QUICK_REFERENCE.md) - Quick commands
- [.env.example](.env.example) - All API examples
- [VERCEL_DEPLOYMENT.md](VERCEL_DEPLOYMENT.md) - Detailed deployment
- [BACKEND_IMPLEMENTATION.md](BACKEND_IMPLEMENTATION.md) - Technical details

---

**Your backend integration is complete and ready to verify!**
