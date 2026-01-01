import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frontend Hosting | Supadirect - Deploy to 150+ Edge Locations',
  description: 'Global frontend hosting built into the platform. Deploy Next.js, React, Vue to 150+ edge locations. Automatic CDN, SSL, custom domains. No Vercel needed. Starting at $99/month.',
  keywords: ['frontend hosting', 'Vercel alternative', 'edge hosting', 'Next.js deployment', 'global CDN', 'static site hosting', 'SSR hosting'],
  openGraph: {
    title: 'Frontend Hosting | Supadirect',
    description: 'Deploy to 150+ edge locations. Automatic CDN, SSL, analytics. No Vercel needed. $99/month.',
    type: 'website',
    url: 'https://supadirect.dev/features/hosting',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frontend Hosting | Supadirect',
    description: 'Global edge hosting without Vercel. Deploy in 30 seconds.',
  },
};

export default function HostingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
