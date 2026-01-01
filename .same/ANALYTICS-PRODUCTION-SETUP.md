# Analytics Production Setup Guide

## 🎯 Overview

This guide will help you enable Plausible Analytics or Google Analytics for your Supadirect clone in production.

---

## Option 1: Plausible Analytics (Recommended)

### Why Plausible?
✅ Privacy-focused (GDPR, CCPA compliant)
✅ No cookies required
✅ Lightweight (< 1KB script)
✅ Simple, beautiful dashboard
✅ Open-source

### Setup Steps

#### 1. Create Plausible Account
Visit: https://plausible.io/register

**Pricing:**
- $9/month for 10k monthly pageviews
- $19/month for 100k monthly pageviews
- 30-day free trial available

#### 2. Add Your Website
1. Click "Add website" in dashboard
2. Enter your domain: `supadirect.dev` (or your actual domain)
3. Select timezone

#### 3. Configure Environment Variable

**For Local Development:**
```bash
# In .env.local
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=supadirect.dev
```

**For Production (Netlify/Vercel):**
1. Go to your deployment dashboard
2. Navigate to Settings → Environment Variables
3. Add: `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` = `supadirect.dev`
4. Redeploy your site

#### 4. Verify Installation
1. Visit your deployed site
2. Open browser DevTools → Network tab
3. Look for request to `https://plausible.io/api/event`
4. Check your Plausible dashboard for live visitors

### Custom Event Tracking

Already implemented! Your CTAs track custom events:

```typescript
import { trackCTAClick } from '@/lib/cta-links';

// This sends event to Plausible
trackCTAClick('Hero CTA', '/signup');
```

**Events Being Tracked:**
- Page views (automatic)
- CTA clicks (custom events)
- Form submissions (when forms are implemented)
- Navigation clicks

### Plausible Dashboard Features
- Real-time visitors
- Top pages
- Traffic sources
- Devices/browsers
- Countries
- Custom events (CTA clicks)
- Goal conversions

---

## Option 2: Google Analytics 4

### Setup Steps

#### 1. Create GA4 Property
1. Visit: https://analytics.google.com
2. Create account (if needed)
3. Create GA4 property
4. Get your Measurement ID (format: `G-XXXXXXXXXX`)

#### 2. Configure Environment Variable

**For Local Development:**
```bash
# In .env.local
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**For Production (Netlify/Vercel):**
1. Go to your deployment dashboard
2. Navigate to Settings → Environment Variables
3. Add: `NEXT_PUBLIC_GA_MEASUREMENT_ID` = `G-XXXXXXXXXX`
4. Redeploy your site

#### 3. Verify Installation
1. Visit your deployed site
2. Open browser DevTools → Network tab
3. Look for requests to `https://www.googletagmanager.com/gtag/js`
4. Check GA4 Real-time report for active users

### Custom Event Tracking

Already implemented:

```typescript
// Automatically tracked:
- pageviews
- CTA clicks (event: 'cta_click')
- Form submissions
```

### GA4 Features
- Real-time reporting
- User acquisition
- Engagement metrics
- E-commerce tracking (if needed)
- Custom dimensions
- Funnel analysis
- Integration with Google Ads

---

## Option 3: Use Both (Recommended for Maximum Insights)

You can enable both Plausible and Google Analytics simultaneously:

```bash
# .env.local or Production Environment Variables
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=supadirect.dev
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**Why use both?**
- Plausible: Clean, privacy-focused dashboard for quick insights
- GA4: Deep analysis, custom reports, advanced segmentation

---

## 🧪 Testing Analytics Locally

### 1. Create Test Configuration
```bash
# .env.local
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=localhost
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-TEST12345
```

### 2. Check Browser Console
Open DevTools console and look for:
- Plausible script loading
- GA4 gtag initialization
- Event tracking calls

### 3. Use Analytics Debuggers

**Plausible:**
- Install browser extension
- Or check Network tab for `/api/event` calls

**Google Analytics:**
- Use GA Debugger Chrome extension
- Or use GA4 Debug View in dashboard

---

## 📊 Tracked Events Reference

### Automatic Events
| Event | When Triggered | Platform |
|-------|---------------|----------|
| pageview | Every page load | Both |
| page_view | Route change | GA4 |

### Custom Events (CTA Tracking)
| Event Name | Location | Properties |
|-----------|----------|-----------|
| cta_click | Hero Section | cta_name: "Hero Primary CTA"<br>cta_destination: "/signup?plan=starter" |
| cta_click | Navigation | cta_name: "Sign up button"<br>cta_destination: "/signup" |
| cta_click | Final CTA | cta_name: "Final CTA"<br>cta_destination: "/signup?plan=starter" |

### Adding More Events

```typescript
import { trackCTAClick } from '@/lib/cta-links';

// In your component
<Button onClick={() => trackCTAClick('Button Name', '/destination')}>
  Click Me
</Button>
```

---

## 🚀 Deployment Checklist

Before deploying to production:

- [ ] Choose analytics platform (Plausible, GA4, or both)
- [ ] Create account and get credentials
- [ ] Add environment variables to deployment platform
- [ ] Deploy site
- [ ] Verify analytics loading in browser DevTools
- [ ] Check dashboard for data (may take 24-48 hours for GA4)
- [ ] Test custom event tracking
- [ ] Set up goals/conversions (optional)
- [ ] Configure alerts (optional)

---

## 🔒 Privacy & Compliance

### Plausible
- ✅ No cookies
- ✅ GDPR compliant out of the box
- ✅ No need for cookie banner
- ✅ All data stored in EU

### Google Analytics
- ⚠️ Uses cookies
- ⚠️ May require cookie consent banner (depending on region)
- ⚠️ Configure for GDPR compliance:
  1. Enable IP anonymization (already done in code)
  2. Configure data retention
  3. Add privacy policy link
  4. Consider cookie consent tool (e.g., CookieYes, OneTrust)

---

## 📈 Next Steps After Setup

### Week 1: Monitor Setup
- [ ] Verify all pages are tracking
- [ ] Check custom events are firing
- [ ] Review real-time data

### Week 2-4: Analyze Patterns
- [ ] Identify top-performing pages
- [ ] Analyze user flow
- [ ] Review conversion rates
- [ ] Identify drop-off points

### Month 2+: Optimize
- [ ] A/B test CTAs based on data
- [ ] Optimize high-traffic pages
- [ ] Improve low-converting pages
- [ ] Set up custom dashboards

---

## 🆘 Troubleshooting

### Analytics Not Loading

**Check 1: Environment Variables**
```bash
# Verify in terminal
echo $NEXT_PUBLIC_PLAUSIBLE_DOMAIN
echo $NEXT_PUBLIC_GA_MEASUREMENT_ID
```

**Check 2: Script Loading**
- Open DevTools → Network tab
- Filter by "plausible" or "gtag"
- Look for 200 status codes

**Check 3: Ad Blockers**
- Disable ad blockers temporarily
- Some block analytics scripts

### Events Not Tracking

**Check 1: Console Errors**
- Open browser console
- Look for JavaScript errors

**Check 2: Event Code**
```typescript
// Ensure trackCTAClick is called
onClick={() => trackCTAClick('Name', '/destination')}
```

**Check 3: Platform Dashboard**
- Plausible: Check "Goals" section
- GA4: Check "Events" report (may take 24-48 hours)

---

## 📞 Support

### Plausible
- Docs: https://plausible.io/docs
- Support: support@plausible.io

### Google Analytics
- Help Center: https://support.google.com/analytics
- Community: https://www.en.advertisercommunity.com/

---

## ✅ Production Ready

Once analytics is enabled and verified:

1. ✅ Environment variables configured
2. ✅ Scripts loading successfully
3. ✅ Pageviews tracking
4. ✅ Custom events firing
5. ✅ Dashboard showing data
6. ✅ Privacy policy updated (if using GA4)

**Status:** Ready to track! 🎉

---

**Last Updated:** December 26, 2025
**Version:** v89
**Analytics Status:** Configured and ready for production
