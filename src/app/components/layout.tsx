import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pre-Built Components | Supadirect - Unified Stack Components',
  description: 'Pre-built components for your unified stack. Work seamlessly across database, frontend, compute, and storage. TypeScript-first, type-safe. No integration complexity.',
  keywords: ['pre-built components', 'TypeScript components', 'unified stack', 'full-stack components', 'integrated components'],
  openGraph: {
    title: 'Pre-Built Components | Supadirect',
    description: 'Pre-built components for your unified stack. TypeScript-first, type-safe. No integration complexity.',
    type: 'website',
    url: 'https://supadirect.dev/components',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pre-Built Components | Supadirect',
    description: 'Pre-built components for your unified stack. TypeScript-first. No integration work.',
  },
};

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
