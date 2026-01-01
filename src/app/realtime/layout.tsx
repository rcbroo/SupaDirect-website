import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Real-Time Updates | Supadirect - No Pusher or Ably Needed',
  description: 'Real-time features built into the platform. No Pusher, no Ably, no separate WebSocket service. Automatic subscriptions and presence. Save 60-70% vs separate real-time services.',
  keywords: ['real-time updates', 'Pusher alternative', 'Ably alternative', 'WebSocket', 'live updates', 'real-time features'],
  openGraph: {
    title: 'Real-Time Updates | Supadirect',
    description: 'Real-time features built into the platform. No Pusher or Ably needed. Save 60-70% on real-time costs.',
    type: 'website',
    url: 'https://supadirect.dev/realtime',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real-Time Updates | Supadirect',
    description: 'Real-time features built-in. No Pusher or Ably. Save 60-70%.',
  },
};

export default function RealtimeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
