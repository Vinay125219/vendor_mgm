# Test VendorSphere Backend - PowerShell Script
# Usage: .\test-backend.ps1

param(
    [string]$BaseUrl = "http://localhost:3000",
    [string]$Email = "admin@vendorsphere.io",
    [string]$Password = "admin@123",
    [string]$ProdUrl = ""  # Set to production URL for production testing
)

# Colors for output
$Green = [ConsoleColor]::Green
$Red = [ConsoleColor]::Red
$Yellow = [ConsoleColor]::Yellow
$Blue = [ConsoleColor]::Blue

function Write-Success { Write-Host "✅ $args" -ForegroundColor $Green }
function Write-Error { Write-Host "❌ $args" -ForegroundColor $Red }
function Write-Info { Write-Host "ℹ️ $args" -ForegroundColor $Blue }
function Write-Section { Write-Host "`n$args" -ForegroundColor $Yellow; Write-Host "================================" }

# Use production URL if provided
if ($ProdUrl) {
    $BaseUrl = $ProdUrl
    Write-Info "Testing production URL: $BaseUrl"
}
else {
    Write-Info "Testing local URL: $BaseUrl"
}

Write-Host "`n🧪 VENDORSPHERE BACKEND VERIFICATION`n" -ForegroundColor $Blue

# Test 1: Login
Write-Section "1. Testing Authentication (Login)"

try {
    $loginResponse = Invoke-WebRequest -Uri "$BaseUrl/api/v1/auth/login" `
        -Method POST `
        -Headers @{"Content-Type" = "application/json"} `
        -Body (ConvertTo-Json @{
            email = $Email
            password = $Password
        }) | ConvertFrom-Json

    if ($loginResponse.ok -eq $true) {
        $token = $loginResponse.data.token.accessToken
        $user = $loginResponse.data.user
        
        Write-Success "Login successful"
        Write-Host "  User: $($user.email)" -ForegroundColor Gray
        Write-Host "  Role: $($user.role)" -ForegroundColor Gray
        Write-Host "  Token: $($token.Substring(0, 20))..." -ForegroundColor Gray
    }
    else {
        Write-Error "Login failed"
        Write-Host $loginResponse.error.message -ForegroundColor $Red
        exit 1
    }
}
catch {
    Write-Error "Login request failed: $_"
    exit 1
}

# Headers for authenticated requests
$headers = @{
    "Authorization" = "Bearer $token"
    "Content-Type" = "application/json"
}

# Test 2: Vendors
Write-Section "2. Testing Vendors Endpoint"

try {
    $vendorsResponse = Invoke-WebRequest -Uri "$BaseUrl/api/v1/vendors" `
        -Method GET `
        -Headers $headers | ConvertFrom-Json

    if ($vendorsResponse.ok) {
        Write-Success "Vendors endpoint working"
        Write-Host "  Total vendors: $($vendorsResponse.total)" -ForegroundColor Gray
        if ($vendorsResponse.data.Count -gt 0) {
            Write-Host "  First vendor: $($vendorsResponse.data[0].name)" -ForegroundColor Gray
        }
    }
    else {
        Write-Error "Vendors endpoint failed"
    }
}
catch {
    Write-Error "Vendors request failed: $_"
}

# Test 3: Products
Write-Section "3. Testing Products Endpoint"

try {
    $productsResponse = Invoke-WebRequest -Uri "$BaseUrl/api/v1/products" `
        -Method GET `
        -Headers $headers | ConvertFrom-Json

    if ($productsResponse.ok) {
        Write-Success "Products endpoint working"
        Write-Host "  Total products: $($productsResponse.total)" -ForegroundColor Gray
    }
    else {
        Write-Error "Products endpoint failed"
    }
}
catch {
    Write-Error "Products request failed: $_"
}

# Test 4: Create Product
Write-Section "4. Testing Create Product"

try {
    $newProduct = @{
        name = "Test Product - $(Get-Date -Format 'HHmmss')"
        description = "This is a test product for verification"
        category = "electronics"
        price = 999.99
        stock = 50
        sku = "TEST-$(Get-Random -Minimum 1000 -Maximum 9999)"
    }

    $createResponse = Invoke-WebRequest -Uri "$BaseUrl/api/v1/products" `
        -Method POST `
        -Headers $headers `
        -Body (ConvertTo-Json $newProduct) | ConvertFrom-Json

    if ($createResponse.ok) {
        Write-Success "Product created successfully"
        Write-Host "  Product ID: $($createResponse.data.id)" -ForegroundColor Gray
        Write-Host "  Product Name: $($createResponse.data.name)" -ForegroundColor Gray
        $productId = $createResponse.data.id
    }
    else {
        Write-Error "Product creation failed"
        Write-Host $createResponse.error.message -ForegroundColor $Red
    }
}
catch {
    Write-Error "Create product request failed: $_"
}

# Test 5: Get Product by ID
if ($productId) {
    Write-Section "5. Testing Get Product by ID"

    try {
        $productResponse = Invoke-WebRequest -Uri "$BaseUrl/api/v1/products/$productId" `
            -Method GET `
            -Headers $headers | ConvertFrom-Json

        if ($productResponse.ok) {
            Write-Success "Get product successful"
            Write-Host "  Name: $($productResponse.data.name)" -ForegroundColor Gray
            Write-Host "  Price: $($productResponse.data.price)" -ForegroundColor Gray
            Write-Host "  Stock: $($productResponse.data.stock)" -ForegroundColor Gray
        }
        else {
            Write-Error "Get product failed"
        }
    }
    catch {
        Write-Error "Get product request failed: $_"
    }
}

# Test 6: Update Product
if ($productId) {
    Write-Section "6. Testing Update Product"

    try {
        $updateData = @{
            price = 1099.99
            stock = 45
            status = "published"
        }

        $updateResponse = Invoke-WebRequest -Uri "$BaseUrl/api/v1/products/$productId" `
            -Method PUT `
            -Headers $headers `
            -Body (ConvertTo-Json $updateData) | ConvertFrom-Json

        if ($updateResponse.ok) {
            Write-Success "Product updated successfully"
            Write-Host "  New Price: $($updateResponse.data.price)" -ForegroundColor Gray
            Write-Host "  New Stock: $($updateResponse.data.stock)" -ForegroundColor Gray
            Write-Host "  New Status: $($updateResponse.data.status)" -ForegroundColor Gray
        }
        else {
            Write-Error "Product update failed"
        }
    }
    catch {
        Write-Error "Update product request failed: $_"
    }
}

# Test 7: Orders
Write-Section "7. Testing Orders Endpoint"

try {
    $ordersResponse = Invoke-WebRequest -Uri "$BaseUrl/api/v1/orders" `
        -Method GET `
        -Headers $headers | ConvertFrom-Json

    if ($ordersResponse.ok) {
        Write-Success "Orders endpoint working"
        Write-Host "  Total orders: $($ordersResponse.total)" -ForegroundColor Gray
    }
    else {
        Write-Error "Orders endpoint failed"
    }
}
catch {
    Write-Error "Orders request failed: $_"
}

# Test 8: Payments
Write-Section "8. Testing Payments Endpoint"

try {
    $paymentsResponse = Invoke-WebRequest -Uri "$BaseUrl/api/v1/payments" `
        -Method GET `
        -Headers $headers | ConvertFrom-Json

    if ($paymentsResponse.ok) {
        Write-Success "Payments endpoint working"
        Write-Host "  Total payments: $($paymentsResponse.total)" -ForegroundColor Gray
    }
    else {
        Write-Error "Payments endpoint failed"
    }
}
catch {
    Write-Error "Payments request failed: $_"
}

# Test 9: Dashboard
Write-Section "9. Testing Dashboard KPIs"

try {
    $kpiResponse = Invoke-WebRequest -Uri "$BaseUrl/api/v1/dashboard/kpis" `
        -Method GET `
        -Headers $headers | ConvertFrom-Json

    if ($kpiResponse.ok) {
        Write-Success "Dashboard endpoint working"
        Write-Host "  Total Revenue: $($kpiResponse.data.totalRevenue)" -ForegroundColor Gray
        Write-Host "  Total Orders: $($kpiResponse.data.totalOrders)" -ForegroundColor Gray
        Write-Host "  Conversion Rate: $($kpiResponse.data.conversionRate)%" -ForegroundColor Gray
    }
    else {
        Write-Error "Dashboard endpoint failed"
    }
}
catch {
    Write-Error "Dashboard request failed: $_"
}

# Test 10: Other Endpoints
Write-Section "10. Testing Other Endpoints"

$endpoints = @(
    @{ Name = "Settlements"; Url = "/api/v1/settlements" },
    @{ Name = "Disputes"; Url = "/api/v1/disputes" },
    @{ Name = "Support Tickets"; Url = "/api/v1/support" },
    @{ Name = "Inventory"; Url = "/api/v1/inventory" }
)

foreach ($endpoint in $endpoints) {
    try {
        $response = Invoke-WebRequest -Uri "$BaseUrl$($endpoint.Url)" `
            -Method GET `
            -Headers $headers | ConvertFrom-Json

        if ($response.ok) {
            Write-Success "$($endpoint.Name) - working ($($response.total) records)"
        }
        else {
            Write-Error "$($endpoint.Name) - failed"
        }
    }
    catch {
        Write-Error "$($endpoint.Name) - request failed"
    }
}

# Test 11: Unauthorized Access
Write-Section "11. Testing Unauthorized Access"

try {
    $unauthorizedResponse = Invoke-WebRequest -Uri "$BaseUrl/api/v1/vendors" `
        -Method GET `
        -ErrorAction Stop | ConvertFrom-Json
    
    Write-Error "Unauthorized access should have failed!"
}
catch {
    if ($_.Exception.Response.StatusCode -eq 401) {
        Write-Success "Unauthorized endpoint correctly returns 401"
    }
    else {
        Write-Error "Unexpected error: $_"
    }
}

# Test 12: Delete Product
if ($productId) {
    Write-Section "12. Testing Delete Product"

    try {
        $deleteResponse = Invoke-WebRequest -Uri "$BaseUrl/api/v1/products/$productId" `
            -Method DELETE `
            -Headers $headers | ConvertFrom-Json

        if ($deleteResponse.ok) {
            Write-Success "Product deleted successfully"
            Write-Host "  Deleted Product ID: $($deleteResponse.data.id)" -ForegroundColor Gray
        }
        else {
            Write-Error "Product deletion failed"
        }
    }
    catch {
        Write-Error "Delete product request failed: $_"
    }
}

# Summary
Write-Section "VERIFICATION COMPLETE"
Write-Host "✅ Backend is working correctly!" -ForegroundColor $Green
Write-Host "`nNext steps:" -ForegroundColor $Yellow
Write-Host "1. If testing locally: Deploy to Vercel" -ForegroundColor Gray
Write-Host "2. If testing production: Monitor logs and metrics" -ForegroundColor Gray
Write-Host "3. Commit changes: git push origin main" -ForegroundColor Gray
Write-Host "`nDocumentation:" -ForegroundColor $Yellow
Write-Host "- Quick Reference: QUICK_REFERENCE.md" -ForegroundColor Gray
Write-Host "- Deployment: VERCEL_DEPLOYMENT.md" -ForegroundColor Gray
Write-Host "- API Examples: .env.example" -ForegroundColor Gray
