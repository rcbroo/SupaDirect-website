# Analytics Setup Guide

## Overview

The Supadirect clone supports two analytics platforms:
1. **Plausible Analytics** (Recommended) - Privacy-focused, GDPR compliant, no cookies
2. **Google Analytics** (Optional) - Traditional analytics with more features

## Quick Start

### 1. Choose Your Analytics Platform

#### Option A: Plausible Analytics (Recommended)

**Why Plausible?**
- ✅ Privacy-focused, GDPR compliant
- ✅ No cookies, no personal data collection
- ✅ Lightweight script (<1KB)
- ✅ Simple dashboard
- ✅ EU-hosted option available

**Setup:**
1. Sign up at https://plausible.io (€9/month for 10K pageviews)
2. Add your domain (e.g., `supadirect.dev`)
3. Copy `.env.example` to `.env.local`
4. Add your domain:
   ```
   NEXT_PUBLIC_PLAUSIBLE_DOMAIN=supadirect.dev
   ```
5. Restart dev server

#### Option B: Google Analytics

**Why Google Analytics?**
- ✅ Free forever
- ✅ Advanced features (funnels, cohorts, etc.)
- ✅ Integration with Google Ads
- ❌ Requires cookie consent in EU
- ❌ Shares data with Google

**Setup:**
1. Create account at https://analytics.google.com
2. Create a GA4 property
3. Copy your Measurement ID (starts with `G-`)
4. Copy `.env.example` to `.env.local`
5. Add your measurement ID:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
6. Restart dev server

### 2. Verify Installation

After setting up analytics:

1. **Start dev server**: `bun run dev`
2. **Visit site**: http://localhost:3000
3. **Check browser console**: Should see no errors
4. **Check network tab**: Should see analytics script loading
5. **Visit analytics dashboard**: Should see real-time visitor (you!)

## Custom Event Tracking

Track custom events like button clicks, form submissions, etc.

### Example: Track CTA Clicks

```tsx
import { trackEvent } from '@/components/Analytics';

function CTAButton() {
  const handleClick = () => {
    trackEvent('cta_click', {
      location: 'hero',
      label: 'Start free trial'
    });
  };

  return <button onClick={handleClick}>Start free trial</button>;
}
```

### Example: Track Form Submissions

```tsx
import { trackEvent } from '@/components/Analytics';

function ContactForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    trackEvent('form_submit', {
      form_name: 'contact',
      form_location: 'contact_page'
    });

    // ... handle form submission
  };

  return <form onSubmit={handleSubmit}>...</form>;
}
```

### Common Events to Track

- `cta_click` - Call-to-action button clicks
- `form_submit` - Form submissions
- `signup_start` - User starts signup process
- `pricing_view` - User views pricing page
- `docs_search` - User searches documentation
- `feature_click` - User clicks on feature cards

## Production Deployment

### Netlify

Add environment variables in Netlify dashboard:
1. Site settings → Build & deploy → Environment
2. Add `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` or `NEXT_PUBLIC_GA_MEASUREMENT_ID`
3. Redeploy site

### Vercel

Add environment variables in Vercel dashboard:
1. Project settings → Environment Variables
2. Add `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` or `NEXT_PUBLIC_GA_MEASUREMENT_ID`
3. Redeploy site

## Privacy & GDPR Compliance

### Plausible
- ✅ No cookie consent banner needed
- ✅ GDPR compliant out of the box
- ✅ No personal data collected

### Google Analytics
- ⚠️ Requires cookie consent banner in EU
- ⚠️ Must update privacy policy
- ⚠️ Consider IP anonymization (already enabled in our setup)

## Analytics Best Practices

1. **Set Goals**: Define what you want to track (signups, pricing views, etc.)
2. **Track Conversions**: Identify key conversion events
3. **Monitor Performance**: Check analytics weekly
4. **A/B Testing**: Use event tracking to measure feature adoption
5. **Privacy First**: Only collect data you need

## Troubleshooting

### Analytics not working?

1. **Check environment variables**:
   ```bash
   cat .env.local
   ```
2. **Restart dev server**: Analytics loads on server start
3. **Check browser console**: Look for script loading errors
4. **Verify domain**: Plausible domain must match exactly
5. **Check ad blockers**: May block analytics scripts

### Events not tracking?

1. **Check function call**: `trackEvent('event_name', { prop: 'value' })`
2. **Verify analytics loaded**: Check `window.plausible` or `window.gtag` exists
3. **Check dashboard**: Events may take 1-2 minutes to appear

## Cost Comparison

| Platform | Cost | Features | Privacy |
|----------|------|----------|---------|
| Plausible | €9/mo (10K pageviews) | Basic analytics | Excellent |
| Google Analytics | Free | Advanced features | Moderate |

## Recommendation

For Supadirect clone:
- **Production**: Use Plausible for privacy + compliance
- **Development**: Use either (or both!) for testing
- **Enterprise**: Consider self-hosted Plausible

---

**Need help?** Check the [Plausible docs](https://plausible.io/docs) or [GA4 docs](https://support.google.com/analytics)
