# VendorSphere - Vercel Deployment Guide

## Overview

This guide explains how to deploy both the frontend and backend of VendorSphere to Vercel as a single unified application.

---

## Prerequisites

- ✅ GitHub account
- ✅ Vercel account (https://vercel.com)
- ✅ Git installed locally
- ✅ Node.js 22.12.0 or higher
- ✅ Project pushed to GitHub

---

## Step 1: Prepare Your Project

### 1.1 Make sure all changes are committed
```bash
git status
git add .
git commit -m "Add backend implementation - ready for Vercel"
```

### 1.2 Verify your project structure
```bash
npm install
npm run build  # Should complete without errors
```

### 1.3 Push to GitHub
```bash
git push origin main
```

---

## Step 2: Deploy to Vercel

### Method 1: Using Vercel Dashboard (Recommended)

#### 1. Go to Vercel Console
- Visit https://vercel.com
- Sign in with your GitHub account

#### 2. Create New Project
- Click "Add New..." → "Project"
- Select your GitHub repository
- Click "Import"

#### 3. Configure Project
- **Project Name:** vendor-sphere (or your choice)
- **Framework Preset:** Astro (auto-detected)
- **Root Directory:** ./ (root of repo)

#### 4. Environment Variables
Add these environment variables in the "Environment Variables" section:

```
JWT_SECRET=your-production-secret-key-min-32-characters
JWT_EXPIRATION=86400
BCRYPT_ROUNDS=10
NODE_ENV=production
```

**⚠️ Important:** Use a strong, random JWT_SECRET for production!

Generate a secure key:
```bash
# On macOS/Linux
openssl rand -base64 32

# On Windows PowerShell
[System.Convert]::ToBase64String([System.Security.Cryptography.RandomNumberGenerator]::GetBytes(24))
```

#### 5. Deploy
- Click "Deploy"
- Wait for deployment to complete
- Get your production URL

### Method 2: Using Vercel CLI

#### 1. Install Vercel CLI
```bash
npm i -g vercel
```

#### 2. Login to Vercel
```bash
vercel login
```

#### 3. Link Project
```bash
cd /path/to/vendor-sphere
vercel link
```

#### 4. Add Secrets
```bash
vercel env add JWT_SECRET
vercel env add JWT_EXPIRATION
vercel env add BCRYPT_ROUNDS
```

#### 5. Deploy
```bash
vercel --prod
```

---

## Step 3: Verify Deployment

### 3.1 Check Deployment Status
- Go to your Vercel dashboard
- Look for your project
- Check deployment logs
- Should show "✓ Ready"

### 3.2 Test Frontend
```bash
curl https://your-domain.vercel.app/
# Should return HTML for your app
```

### 3.3 Test Backend API
```bash
# Test login endpoint
curl -X POST https://your-domain.vercel.app/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "vendor@example.com",
    "password": "vendor@123"
  }'

# Response should be:
# {"ok":true,"data":{"token":{...},"user":{...}}}
```

### 3.4 Test Protected Endpoint
```bash
# Get your token from login response, then:
curl https://your-domain.vercel.app/api/v1/vendors \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

---

## Step 4: Configure Domain (Optional)

### 4.1 Add Custom Domain
1. Go to Vercel Dashboard → Your Project
2. Click "Settings" → "Domains"
3. Click "Add Domain"
4. Enter your domain (e.g., vendorsphere.com)
5. Follow DNS configuration instructions

### 4.2 DNS Configuration
Point your domain's DNS records to Vercel:
- **A Record:** 76.76.19.21
- **AAAA Record:** 2605:4d4d:4d4d::
- Or use Vercel's CNAME if preferred

---

## Step 5: Post-Deployment Configuration

### 5.1 Update Frontend API Base URL
If using a custom domain, update the API client:

In `src/services/api-client.ts`:
```typescript
const apiBase = import.meta.env.PROD 
  ? 'https://your-domain.vercel.app/api/v1'
  : '/api/v1';
```

### 5.2 Configure CORS (if needed)
Add to `astro.config.mjs`:
```javascript
export default defineConfig({
  // ... existing config
  vite: {
    define: {
      'process.env.API_CORS_ORIGIN': JSON.stringify('https://your-domain.vercel.app'),
    },
  },
});
```

---

## Monitoring & Logs

### 1. View Deployment Logs
```bash
vercel logs --prod
```

Or in Vercel Dashboard:
1. Go to your project
2. Click "Deployments"
3. Click on the latest deployment
4. Click "Function Logs" tab

### 2. Monitor Performance
Vercel automatically provides:
- ✅ Response times
- ✅ Error rates
- ✅ Deployment analytics
- ✅ Edge caching stats

### 3. Enable Analytics (Optional)
1. Go to project settings
2. Enable "Web Analytics"
3. Get insights on user behavior

---

## Troubleshooting

### Problem: Deployment Fails

**Check 1: Build Errors**
```bash
npm run build
# Check for errors locally first
```

**Check 2: Environment Variables**
- Make sure all required vars are set in Vercel
- Double-check spelling: `JWT_SECRET`, not `jwt_secret`

**Check 3: Dependencies**
- Verify all imports are correct
- Run `npm install` locally and build again

**Solution: Check build logs**
- Go to Vercel Dashboard → Deployments
- Click failed deployment → "Build Logs"
- Look for error messages

### Problem: API Endpoints Return 404

**Check 1: File Structure**
```bash
# Verify API files exist
ls -la src/pages/api/
ls -la src/pages/api/auth/
```

**Check 2: File Names**
- All files should be lowercase
- Dynamic routes use `[param].ts` format
- No spaces in filenames

**Check 3: Re-deploy**
```bash
git push origin main
# Vercel auto-deploys on push
```

### Problem: Tokens Not Working

**Check 1: JWT_SECRET**
- Make sure same secret is used in development and production
- Check env vars in Vercel dashboard

**Check 2: Test Locally First**
```bash
npm run dev
# Test endpoints locally with same credentials
```

### Problem: CORS Errors

**Check 1: Frontend API URL**
- Ensure frontend is calling correct API URL
- Check `src/services/api-client.ts`

**Check 2: Add CORS Headers**
If needed, add to API responses:
```typescript
headers: {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}
```

---

## Continuous Deployment

### Auto-Deploy on Push
Vercel automatically deploys when you push to main:

```bash
git add .
git commit -m "Update feature"
git push origin main
# Vercel deploys automatically
```

### Preview Deployments
Each pull request automatically gets a preview deployment:
- Vercel posts deployment URL to PR
- Test changes before merging
- Delete when PR is closed

### Rollback Deployment
If something breaks:

1. Go to Vercel Dashboard
2. Click "Deployments"
3. Find the previous working deployment
4. Click "..." → "Promote to Production"

---

## Scaling & Performance

### Current Setup
- ✅ Serverless functions (auto-scaling)
- ✅ Edge caching
- ✅ Global CDN
- ✅ Unlimited bandwidth

### Optimize Performance
1. **Enable Edge Caching**
   - Set cache headers on static assets
   - Already configured in Astro

2. **Reduce Bundle Size**
   ```bash
   npm run build -- --analyze
   ```

3. **Monitor API Response Times**
   - Use Vercel Analytics
   - Look for slow functions in logs

---

## Database Connection (Future)

### When Ready for Production Database

1. **Connect PostgreSQL**
   ```env
   DATABASE_URL=postgresql://user:pass@host/db
   ```

2. **Run Migrations**
   ```bash
   npm run db:migrate
   ```

3. **Update database.ts**
   Replace in-memory with actual queries

### Recommended Databases for Vercel
- ✅ **Vercel Postgres** (managed, easiest)
- ✅ **Supabase** (PostgreSQL with extras)
- ✅ **MongoDB Atlas** (NoSQL)
- ✅ **Planetscale** (MySQL)

---

## Security Best Practices

### 1. Secrets Management
- ✅ Never commit `.env.local` to Git
- ✅ Use Vercel dashboard for secrets
- ✅ Rotate secrets regularly

### 2. JWT Security
- ✅ Use strong `JWT_SECRET` (32+ characters)
- ✅ Set appropriate `JWT_EXPIRATION`
- ✅ Validate tokens on every request

### 3. HTTPS Only
- ✅ All traffic is HTTPS by default
- ✅ No additional config needed

### 4. Rate Limiting
Add rate limiting to production:
```bash
npm install @astrojs/node-rate-limiter
```

---

## Monitoring Checklist

- [ ] Deployment shows "✓ Ready"
- [ ] Frontend loads without errors
- [ ] Can login with test credentials
- [ ] API endpoints return data
- [ ] Tokens work correctly
- [ ] No console errors
- [ ] Performance acceptable

---

## Support & Resources

### Documentation
- [Vercel Docs](https://vercel.com/docs)
- [Astro Docs](https://docs.astro.build)
- [Astro Vercel Adapter](https://docs.astro.build/en/guides/integrations-guide/vercel/)

### API Documentation
See `.env.example` for comprehensive cURL examples

### Test Credentials
- Admin: admin@vendorsphere.io / admin@123
- Vendor: vendor@example.com / vendor@123

---

## Summary

✅ **Frontend:** Deployed to Vercel CDN
✅ **Backend:** Running as serverless functions
✅ **Database:** In-memory (production ready for DB migration)
✅ **Security:** JWT authentication, role-based access
✅ **Scaling:** Automatic with serverless
✅ **Monitoring:** Vercel analytics included

**Your VendorSphere app is now live and production-ready!**

---

## Next Steps

1. **Test all features** in production
2. **Set up monitoring** and alerts
3. **Configure domain** with custom URL
4. **Connect production database** when ready
5. **Add email notifications**
6. **Enable advanced analytics**
7. **Set up automated backups** for database
8. **Configure logging** and error tracking

For questions or issues, check the troubleshooting section above!
