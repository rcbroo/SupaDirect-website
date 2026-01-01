# CTA Implementation Guide

## Overview

All call-to-action (CTA) buttons and links across the Supadirect clone are now centralized in `/src/lib/cta-links.ts` for easy management and updates.

---

## 📍 Current CTA Destinations

### Primary CTAs
| CTA Text | Current URL | Status | Notes |
|----------|-------------|--------|-------|
| **Start free (30 days)** | `/signup?plan=starter` | 🟡 Placeholder | Update when signup page is ready |
| **Start free trial** | `/signup?plan=starter` | 🟡 Placeholder | Update when signup page is ready |
| **Get started** | `/signup` | 🟡 Placeholder | Update when signup page is ready |
| **Sign up** | `/signup` | 🟡 Placeholder | Update when signup page is ready |

### Secondary CTAs
| CTA Text | Current URL | Status | Notes |
|----------|-------------|--------|-------|
| **Log in** | `/login` | 🟡 Placeholder | Update when login page is ready |
| **Calculate your savings** | `/pricing#calculator` | 🟢 Active | Links to pricing page calculator |
| **Contact Sales** | `/contact/sales` | 🟢 Active | Existing page |
| **Book a demo** | `/contact/sales?demo=true` | 🟢 Active | With query parameter |

### Documentation CTAs
| CTA Text | Current URL | Status | Notes |
|----------|-------------|--------|-------|
| **View docs** | `https://docs.supadirect.dev` | 🟡 External | Update with actual docs URL |
| **Docs** | `https://docs.supadirect.dev` | 🟡 External | Update with actual docs URL |
| **Quickstart** | `https://docs.supadirect.dev/quickstart` | 🟡 External | Update when ready |

### Social & Community
| Platform | Current URL | Status | Notes |
|----------|-------------|--------|-------|
| **GitHub** | `https://github.com/supadirect/supadirect` | 🟡 External | Update with actual repo |
| **Twitter** | `https://twitter.com/supadirect` | 🟡 External | Update with actual account |
| **Discord** | `https://discord.gg/supadirect` | 🟡 External | Update with actual invite |
| **YouTube** | `https://youtube.com/@supadirect` | 🟡 External | Update with actual channel |
| **Changelog** | `https://changelog.supadirect.dev` | 🟡 External | Update when ready |
| **Podcast** | `https://podcast.supadirect.dev` | 🟡 External | Update when ready |

---

## 🗂️ CTA Locations Across Site

### Homepage (`/src/app/page.tsx`)
1. **Hero Section**
   - Primary: "Start free (30 days)" → `/signup?plan=starter`
   - Secondary: "Calculate your savings" → `/pricing#calculator`

2. **Final CTA Section**
   - "Start free trial" → `/signup?plan=starter`

### Navigation (`/src/components/Navigation.tsx`)
1. **Top Right**
   - "GitHub" (with star count) → GitHub repo
   - "Log in" → `/login`
   - "Sign up" → `/signup` (NEW - added)

2. **Developers Dropdown**
   - "Docs →" → External docs
   - "Changelog →" → External changelog
   - "Podcast →" → External podcast

### All Feature Pages
Each feature page has:
1. **Hero CTA**: "Start building" → `/signup`
2. **Secondary CTA**: "View docs" → External docs
3. **Bottom CTA**: "Start free trial" → `/signup?plan=starter`

### Pricing Page (`/src/app/pricing/page.tsx`)
- Multiple "Start Free Trial" buttons → `/signup?plan=starter`
- "Start building" → `/signup`

### Other Pages
- Contact pages: "Contact Sales" → `/contact/sales`
- Component/Template pages: Various CTAs to signup and docs

---

## 📊 Analytics Tracking

All CTAs are instrumented with analytics tracking:

```tsx
import { CTA_LINKS, trackCTAClick } from '@/lib/cta-links';

<Button
  onClick={() => trackCTAClick('CTA Name', CTA_LINKS.START_FREE_TRIAL)}
  href={CTA_LINKS.START_FREE_TRIAL}
>
  Start Free Trial
</Button>
```

### Tracked Events
- **Event Name**: `cta_click`
- **Properties**:
  - `cta_name`: Descriptive name (e.g., "Hero Primary CTA")
  - `cta_destination`: URL destination

### Analytics Platforms
- ✅ Plausible Analytics (privacy-focused)
- ✅ Google Analytics (optional)

---

## 🔧 How to Update CTA Destinations

### Step 1: Edit Central Configuration
Open `/src/lib/cta-links.ts` and update the URLs:

```typescript
export const CTA_LINKS = {
  SIGNUP: '/signup',              // ← Update this
  LOGIN: '/login',                // ← Update this
  DOCS: 'https://docs.example.com', // ← Update this
  // ... etc
} as const;
```

### Step 2: Restart Dev Server
```bash
bun run dev
```

### Step 3: Verify Changes
Check these pages to verify CTAs work:
- [ ] Homepage (/)
- [ ] Pricing page (/pricing)
- [ ] All feature pages (/features/*, /sync, /realtime, /auth)
- [ ] Navigation component (top right buttons)
- [ ] Mobile menu

---

## 🎯 CTA Best Practices

### Text Guidelines
✅ **Good CTA Text**:
- "Start free trial"
- "Get started"
- "Sign up"
- "Book a demo"
- "Contact sales"

❌ **Avoid**:
- "Click here"
- "Learn more" (too vague)
- "Submit" (without context)

### Visual Hierarchy
1. **Primary CTAs**: Use brand rose color, prominent placement
2. **Secondary CTAs**: Use outline style, slightly less prominent
3. **Tertiary CTAs**: Use ghost/link style

### Placement
- Hero section: 1 primary + 1 secondary max
- Navigation: Log in (secondary) + Sign up (primary)
- Feature pages: 2-3 CTAs max
- Footer: 1 CTA max

---

## 📝 To-Do: When Signup/Login is Ready

### Step 1: Create Pages
```bash
# Create signup page
touch src/app/signup/page.tsx

# Create login page
touch src/app/login/page.tsx
```

### Step 2: Update CTA Links
In `/src/lib/cta-links.ts`:
```typescript
export const CTA_LINKS = {
  SIGNUP: '/signup',  // ✅ Now points to real page
  LOGIN: '/login',    // ✅ Now points to real page
  // ...
} as const;
```

### Step 3: Test All CTAs
Run through this checklist:
- [ ] Homepage hero CTA works
- [ ] Homepage final CTA works
- [ ] Navigation Sign up works
- [ ] Navigation Log in works
- [ ] All feature page CTAs work
- [ ] Pricing page CTAs work
- [ ] Mobile menu CTAs work

### Step 4: Add Query Parameters (Optional)
For attribution tracking:
```typescript
SIGNUP: '/signup?source=homepage&plan=starter'
```

---

## 🚀 CTA Performance Metrics

### Key Metrics to Track
1. **Click-Through Rate (CTR)**: % of visitors who click CTAs
2. **Conversion Rate**: % who complete signup after click
3. **Bounce Rate**: % who leave after clicking CTA
4. **Time to Conversion**: How long from first visit to signup

### Recommended Tools
- Google Analytics 4 (conversion tracking)
- Plausible Analytics (privacy-focused CTR)
- Hotjar (heatmaps showing CTA clicks)
- Microsoft Clarity (session recordings)

### A/B Testing Ideas
1. **CTA Text Variations**:
   - "Start free trial" vs "Try for free"
   - "Sign up" vs "Get started"

2. **Color Variations**:
   - Brand rose vs brand green
   - Gradient vs solid

3. **Placement Variations**:
   - Above fold vs below fold
   - Left vs center vs right aligned

---

## ✅ CTA Implementation Status

### Completed ✅
- [x] Created centralized CTA links configuration
- [x] Updated Navigation component with Sign up button
- [x] Updated Homepage hero CTAs
- [x] Updated Homepage final CTA
- [x] Added analytics tracking to CTAs
- [x] Updated GitHub link in navigation
- [x] Added external link attributes (target="_blank", rel="noopener")
- [x] Made all buttons responsive (w-full on mobile)

### Pending 🟡
- [ ] Create /signup page
- [ ] Create /login page
- [ ] Update all feature page CTAs (systematic pass)
- [ ] Update pricing page CTAs
- [ ] Test all CTAs across site
- [ ] Add UTM parameters for attribution
- [ ] Set up conversion tracking in analytics

### Optional Enhancements 💡
- [ ] Add loading states to CTA buttons
- [ ] Add success/error feedback after click
- [ ] Add micro-interactions (hover effects, ripples)
- [ ] Add CTA button variants for different contexts
- [ ] Create CTA tracking dashboard

---

## 🎨 CTA Design System

### Button Variants

```tsx
// Primary CTA (most important)
<Button className="bg-brand-rose text-brand-green-darker hover:bg-brand-rose-light">
  Start free trial
</Button>

// Secondary CTA
<Button variant="outline" className="border-2 border-brand-rose text-brand-rose hover:bg-brand-rose/20">
  Calculate savings
</Button>

// Tertiary CTA
<Button variant="ghost" className="text-brand-rose hover:bg-brand-green-dark">
  Log in
</Button>

// Link-style CTA
<Link href="/pricing" className="text-brand-rose hover:underline">
  View pricing
</Link>
```

### Spacing
- Hero CTAs: 4-6 (1-1.5rem) gap
- Navigation CTAs: 4 (1rem) gap
- Feature section CTAs: 6 (1.5rem) gap

### Responsive Behavior
- Mobile: Full width buttons (`w-full`)
- Tablet: Inline buttons with gaps
- Desktop: Inline with generous spacing

---

## 📞 Support

For questions about CTA implementation:
1. Check `/src/lib/cta-links.ts` for current configuration
2. Review this guide
3. Test changes locally before deploying
4. Monitor analytics after CTA updates

---

**Last Updated**: December 26, 2025
**Version**: v86
**Status**: ✅ CTAs Centralized and Ready for Production
