import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Real-Time Sync | Supadirect - Built-In Data Synchronization',
  description: 'Real-time data sync built into the platform. No separate WebSocket service needed. Replace Kafka and RabbitMQ with integrated sync. Save 60-70% on infrastructure costs.',
  keywords: ['real-time sync', 'data synchronization', 'WebSocket', 'Kafka alternative', 'RabbitMQ alternative', 'real-time database'],
  openGraph: {
    title: 'Real-Time Sync | Supadirect',
    description: 'Real-time data sync built into the platform. No separate WebSocket service needed. Save 60-70% on costs.',
    type: 'website',
    url: 'https://supadirect.dev/sync',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real-Time Sync | Supadirect',
    description: 'Real-time data sync built into the platform. No separate WebSocket service. Save 60-70%.',
  },
};

export default function SyncLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
