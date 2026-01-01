import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Full-Stack Templates | Supadirect - Deploy in 15 Minutes',
  description: 'Full-stack templates with frontend, backend, database, auth, and deployment config. Deploy in one command—no AWS, Vercel, or Convex configuration. 16x faster than manual setup.',
  keywords: ['full-stack templates', 'starter templates', 'quick deployment', 'SaaS templates', 'app templates', 'TypeScript templates'],
  openGraph: {
    title: 'Full-Stack Templates | Supadirect',
    description: 'Full-stack templates deployable in 15 minutes. No AWS, Vercel, or Convex configuration needed.',
    type: 'website',
    url: 'https://supadirect.dev/templates',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Full-Stack Templates | Supadirect',
    description: 'Deploy full-stack apps in 15 minutes. 16x faster than manual setup.',
  },
};

export default function TemplatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
