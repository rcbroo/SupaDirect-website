'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string | number> }) => void;
    gtag?: (command: string, ...args: unknown[]) => void;
  }
}

export function Analytics() {
  const pathname = usePathname();

  // Track page views on route change
  useEffect(() => {
    if (pathname) {
      // Track with Plausible
      if (typeof window !== 'undefined' && window.plausible) {
        window.plausible('pageview');
      }

      // Track with Google Analytics (if GA_MEASUREMENT_ID is set)
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '', {
          page_path: pathname,
        });
      }
    }
  }, [pathname]);

  return (
    <>
      {/* Plausible Analytics - Privacy-focused, no cookies */}
      {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
        <Script
          defer
          data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      )}

      {/* Google Analytics - Optional */}
      {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
                anonymize_ip: true,
                cookie_flags: 'SameSite=None;Secure'
              });
            `}
          </Script>
        </>
      )}
    </>
  );
}

// Custom event tracking helper
export function trackEvent(eventName: string, props?: Record<string, string | number>) {
  // Track with Plausible
  if (typeof window !== 'undefined' && window.plausible) {
    window.plausible(eventName, { props });
  }

  // Track with Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, props);
  }
}
