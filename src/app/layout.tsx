import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@/components/Analytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://supadirect.dev'),
  title: {
    default: 'Supadirect - The backend platform that keeps your app in sync',
    template: '%s | Supadirect'
  },
  description: 'Build real-time applications with Supadirect. Everything is code - database, functions, auth, and more. TypeScript-first backend platform for modern web apps.',
  keywords: [
    'backend platform',
    'real-time database',
    'TypeScript backend',
    'serverless functions',
    'backend-as-a-service',
    'BaaS',
    'real-time sync',
    'database',
    'authentication',
    'Convex alternative',
    'Firebase alternative'
  ],
  authors: [{ name: 'Supadirect, Inc.' }],
  creator: 'Supadirect, Inc.',
  publisher: 'Supadirect, Inc.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://supadirect.dev',
    siteName: 'Supadirect',
    title: 'Supadirect - The backend platform that keeps your app in sync',
    description: 'Build real-time applications with Supadirect. Everything is code - database, functions, auth, and more. TypeScript-first backend platform for modern web apps.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Supadirect - Backend Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Supadirect - The backend platform that keeps your app in sync',
    description: 'Build real-time applications with Supadirect. Everything is code - database, functions, auth, and more.',
    images: ['/og-image.png'],
    creator: '@supadirect',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/logo-icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    shortcut: '/logo-icon.svg',
    apple: '/logo-icon.svg',
  },
  manifest: '/manifest.json',
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'Supadirect',
              applicationCategory: 'DeveloperApplication',
              operatingSystem: 'Web',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                ratingCount: '1250',
              },
              description: 'Build real-time applications with Supadirect. Everything is code - database, functions, auth, and more. TypeScript-first backend platform for modern web apps.',
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Supadirect, Inc.',
              url: 'https://supadirect.dev',
              logo: 'https://supadirect.dev/logo.png',
              sameAs: [
                'https://twitter.com/supadirect',
                'https://github.com/supadirect',
                'https://discord.gg/supadirect',
                'https://youtube.com/@supadirect',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Support',
                email: 'support@supadirect.com',
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} antialiased font-sans`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
