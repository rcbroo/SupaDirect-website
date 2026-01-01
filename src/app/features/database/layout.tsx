import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Real-Time Database | Supadirect - TypeScript-Native with Convex API Parity',
  description: 'TypeScript-native database with real-time subscriptions. ACID transactions, vector search, full-text search built-in. Convex API parity. No separate backend needed. Starting at $99/month.',
  keywords: ['real-time database', 'TypeScript database', 'Convex alternative', 'ACID database', 'vector search', 'reactive database', 'real-time sync'],
  openGraph: {
    title: 'Real-Time Database | Supadirect',
    description: 'TypeScript queries, real-time sync, ACID transactions. Convex API parity included. $99/month.',
    type: 'website',
    url: 'https://supadirect.dev/features/database',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real-Time Database | Supadirect',
    description: 'TypeScript-native database with real-time sync. No Convex needed.',
  },
};

export default function DatabaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
