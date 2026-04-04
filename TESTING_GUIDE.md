# Quick Backend Testing Guide - Windows PowerShell

## ⚡ Quick Start (2 minutes)

### 1. Start Development Server
```powershell
# Terminal 1 - Start dev server
npm run dev
# Wait for: "🚀 dev server ready at http://localhost:3000"
```

### 2. Run PowerShell Test Script
```powershell
# Terminal 2 - Run tests
.\test-backend.ps1

# Or test production URL after deployment
.\test-backend.ps1 -BaseUrl "https://your-app.vercel.app"
```

---

## 📋 What Gets Tested

| Test # | Description | Expected Result |
|--------|-------------|-----------------|
| 1 | Login with admin credentials | ✅ Returns JWT token |
| 2 | Get vendors list | ✅ Returns vendor data |
| 3 | Get products list | ✅ Returns product data |
| 4 | Create new product | ✅ Product created with ID |
| 5 | Get product by ID | ✅ Returns single product |
| 6 | Update product | ✅ Fields updated successfully |
| 7 | Get orders | ✅ Returns order list |
| 8 | Get payments | ✅ Returns payment list |
| 9 | Get dashboard KPIs | ✅ Returns metrics (revenue, orders, etc) |
| 10 | Get all other endpoints | ✅ All return 200 OK |
| 11 | Test unauthorized access | ✅ Returns 401 Unauthorized |
| 12 | Delete product | ✅ Product deleted successfully |

---

## 🔧 Common Issues & Fixes

### Issue: "Port 3000 already in use"
```powershell
# Find what's using port 3000
Get-NetTCPConnection -LocalPort 3000

# Kill the process (replace PID with actual process ID)
Stop-Process -Id <PID> -Force

# Or use different port
npm run dev -- --port 3001
```

### Issue: "JWT_SECRET is not defined"
```powershell
# Create .env.local file with defaults
@"
JWT_SECRET=dev-secret-min-32-characters-for-production
JWT_EXPIRATION=86400
BCRYPT_ROUNDS=10
"@ | Out-File .env.local
```

### Issue: Module not found errors
```powershell
# Reinstall dependencies
rm -r node_modules
npm install
npm run build
```

### Issue: Connection refused on localhost:3000
```powershell
# Make sure dev server is actually running in Terminal 1
# Check if http://localhost:3000 loads in browser
Start-Process "http://localhost:3000"
```

---

## 🧪 Manual Testing (If PowerShell Script Fails)

### 1. Get Auth Token
```powershell
# Test login
$response = Invoke-WebRequest -Uri "http://localhost:3000/api/auth/login" `
  -Method POST `
  -Headers @{"Content-Type" = "application/json"} `
  -Body '{"email":"admin@vendorsphere.io","password":"admin@123"}'

$token = ($response.Content | ConvertFrom-Json).data.token.accessToken
Write-Host "Token: $token"
```

### 2. Test Protected Endpoint
```powershell
# Get vendors with token
Invoke-WebRequest -Uri "http://localhost:3000/api/vendors" `
  -Method GET `
  -Headers @{"Authorization" = "Bearer $token"}
```

### 3. Create Product
```powershell
# Create a product
$productData = @{
  name = "Test Product"
  description = "Test description"
  category = "electronics"
  price = 99.99
  stock = 50
  sku = "TEST-$(Get-Random)"
} | ConvertTo-Json

$response = Invoke-WebRequest -Uri "http://localhost:3000/api/products" `
  -Method POST `
  -Headers @{
    "Authorization" = "Bearer $token"
    "Content-Type" = "application/json"
  } `
  -Body $productData

$response.Content | ConvertFrom-Json | ConvertTo-Json
```

---

## ✅ Frontend Integration Testing

After backend tests pass, verify frontend works:

### 1. Test Login Page
```powershell
# Open browser
Start-Process "http://localhost:3000"
```

Then in browser:
1. Click "Login" or navigate to login page
2. Enter: `admin@vendorsphere.io` / `admin@123`
3. Click Login button
4. Should redirect to dashboard
5. Check DevTools (F12) → Network tab:
   - Should see POST `/api/auth/login` → 200
   - Should see token in LocalStorage

### 2. Test Protected Pages
1. Navigate to Products page
2. Check DevTools → Network tab:
   - Should see GET `/api/products` with Bearer token
   - Status should be 200
3. Try creating a product
4. Verify it appears in list

### 3. Test Logout
1. Click Logout button
2. Should redirect to login
3. LocalStorage should be cleared
4. Trying to access protected page should redirect to login

---

## 🚀 Deployment to Vercel

### Prerequisites
- All local tests passing ✅
- GitHub account with code pushed ✅
- Vercel account (sign up free at https://vercel.com)

### Steps

**Step 1: Connect Repository**
```
1. Go to https://vercel.com/new
2. Select "Import Git Repository"
3. Connect GitHub account
4. Select "Vinay125219/vendor_mgm"
5. Click Import
```

**Step 2: Configure Environment**
```
In Environment Variables section add:
- JWT_SECRET=your-random-secret-here
- JWT_EXPIRATION=86400
- BCRYPT_ROUNDS=10
```

**Step 3: Deploy**
```
Click "Deploy" button
Wait for deployment to complete
Get production URL (e.g., vendor-mgm.vercel.app)
```

### Step 4: Test Production Backend
```powershell
# Test production URL
.\test-backend.ps1 -BaseUrl "https://vendor-mgm.vercel.app"

# Or test specific endpoint
$prodUrl = "https://vendor-mgm.vercel.app"
Invoke-WebRequest -Uri "$prodUrl/api/auth/login" `
  -Method POST `
  -Headers @{"Content-Type" = "application/json"} `
  -Body '{"email":"admin@vendorsphere.io","password":"admin@123"}'
```

---

## 📊 Test Credentials

```
Admin:
  Email: admin@vendorsphere.io
  Password: admin@123
  Role: admin (full access)

Super Admin:
  Email: superadmin@vendorsphere.io
  Password: superadmin@123
  Role: super-admin (full access)

Vendor:
  Email: vendor@example.com
  Password: vendor@123
  Role: vendor (limited to own data)
```

---

## 🎯 Success Checklist

### Local Testing ✅
- [ ] Dev server starts: `npm run dev`
- [ ] Build succeeds: `npm run build`
- [ ] PowerShell test script runs without errors: `.\test-backend.ps1`
- [ ] All 12 tests pass (green checkmarks)
- [ ] Login page works in browser
- [ ] Can create/read/update/delete products
- [ ] Logout clears session

### Production Testing ✅
- [ ] Vercel deployment succeeds
- [ ] Production URL is accessible
- [ ] PowerShell test script passes with production URL
- [ ] Can login with test account
- [ ] Can perform CRUD operations
- [ ] No errors in Vercel logs

---

## 📞 Troubleshooting Command Reference

```powershell
# Check if port 3000 is in use
Get-NetTCPConnection -LocalPort 3000

# Kill process on port 3000
Get-Process | Where-Object {$_.ProcessName -like "*node*"} | Stop-Process -Force

# View node modules
npm list --depth=0

# Clear npm cache
npm cache clean --force

# Reinstall everything
rm -r node_modules package-lock.json; npm install; npm run build

# Check TypeScript errors
npm run check

# View current environment
Get-Content .env.local

# Test connection to localhost:3000
Test-NetConnection -ComputerName localhost -Port 3000
```

---

## 📚 Documentation Files

```
BACKEND_VERIFICATION.md      ← Main verification guide (detailed tests)
QUICK_REFERENCE.md           ← API quick reference
VERCEL_DEPLOYMENT.md         ← Deployment instructions
.env.example                 ← Environment variables & API examples
test-backend.ps1             ← PowerShell test script (automated)
test-backend.sh              ← Bash test script (for Unix/macOS)
```

---

## 🎓 API Endpoints Overview

```
Authentication:
  POST   /api/auth/login              Login
  POST   /api/auth/refresh            Refresh token

Vendors:
  GET    /api/vendors                 List all
  POST   /api/vendors                 Create
  GET    /api/vendors/:id             Get single
  PUT    /api/vendors/:id             Update

Products:
  GET    /api/products                List all
  POST   /api/products                Create
  GET    /api/products/:id            Get single
  PUT    /api/products/:id            Update
  DELETE /api/products/:id            Delete

Orders:
  GET    /api/orders                  List all
  GET    /api/orders/:id              Get single
  PUT    /api/orders/:id              Update

Other:
  GET    /api/payments                List payments
  GET    /api/settlements             List settlements
  GET    /api/disputes                List disputes
  GET    /api/support                 List support tickets
  GET    /api/inventory               List inventory
  GET    /api/dashboard/kpis          Get dashboard metrics
```

---

## 🔐 Security Notes

- Tokens expire after 24 hours (configurable via JWT_EXPIRATION)
- Passwords are hashed with Bcrypt
- Protected routes require Authorization header with Bearer token
- Vendor data is isolated by role
- All inputs validated with Zod schemas
- Change JWT_SECRET for production!

---

## 📈 Performance Tips

1. Keep JWT_EXPIRATION reasonable (default: 24 hours)
2. Use token refresh endpoint instead of re-login
3. Frontend should cache user data when possible
4. Monitor Vercel dashboard for function execution time
5. Consider database query optimization if needed

---

**Last Updated:** January 2024  
**Backend Status:** ✅ Production Ready  
**Testing Status:** ✅ Comprehensive Coverage (12+ tests)  
**Deployment Ready:** ✅ Vercel Configured  

👉 **Next Steps:** Run `.\test-backend.ps1` and follow any error messages
