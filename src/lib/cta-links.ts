/**
 * Centralized CTA Links Configuration
 *
 * Update these URLs when signup/login functionality is ready.
 * This makes it easy to update all CTAs across the site from one place.
 */

export const CTA_LINKS = {
  // Primary CTAs
  SIGNUP: '/signup', // Update when signup page is ready
  LOGIN: '/login',   // Update when login page is ready

  // Trial and Demo
  START_FREE_TRIAL: '/signup?plan=starter', // 30-day free trial
  GET_STARTED: '/signup',

  // Sales and Enterprise
  CONTACT_SALES: '/contact/sales',
  BOOK_DEMO: '/contact/sales?demo=true',

  // Documentation
  DOCS: 'https://docs.supadirect.dev', // Update with actual docs URL
  VIEW_DOCS: 'https://docs.supadirect.dev',
  QUICKSTART: 'https://docs.supadirect.dev/quickstart',

  // Pricing
  PRICING: '/pricing',
  CALCULATE_SAVINGS: '/pricing#calculator',

  // GitHub and Social
  GITHUB: 'https://github.com/supadirect/supadirect',
  TWITTER: 'https://twitter.com/supadirect',
  DISCORD: 'https://discord.gg/supadirect',
  YOUTUBE: 'https://youtube.com/@supadirect',

  // Other
  BLOG: '/blog',
  CHANGELOG: 'https://changelog.supadirect.dev', // Update when ready
  PODCAST: 'https://podcast.supadirect.dev',     // Update when ready
} as const;

/**
 * Helper function to track CTA clicks (integrates with analytics)
 */
export function trackCTAClick(ctaName: string, destination: string) {
  if (typeof window !== 'undefined') {
    // Track with Plausible
    if (window.plausible) {
      window.plausible('CTA Click', {
        props: {
          cta_name: ctaName,
          cta_destination: destination,
        },
      });
    }

    // Track with Google Analytics
    if (window.gtag) {
      window.gtag('event', 'cta_click', {
        cta_name: ctaName,
        cta_destination: destination,
      });
    }
  }
}

/**
 * Usage Example:
 *
 * import { CTA_LINKS, trackCTAClick } from '@/lib/cta-links';
 *
 * <Button
 *   onClick={() => trackCTAClick('Hero CTA', CTA_LINKS.START_FREE_TRIAL)}
 *   href={CTA_LINKS.START_FREE_TRIAL}
 * >
 *   Start Free Trial
 * </Button>
 */
