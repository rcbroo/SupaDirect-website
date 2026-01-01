import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Authentication | Supadirect - No Auth0 or Clerk Needed',
  description: 'Authentication built into your platform. No Auth0, no Clerk, no separate identity service. 80+ OAuth providers included. Save 50-70% vs separate auth services.',
  keywords: ['authentication', 'Auth0 alternative', 'Clerk alternative', 'OAuth', 'user management', 'built-in auth'],
  openGraph: {
    title: 'Authentication | Supadirect',
    description: 'Authentication built-in. No Auth0 or Clerk needed. 80+ OAuth providers included. Save 50-70%.',
    type: 'website',
    url: 'https://supadirect.dev/auth',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Authentication | Supadirect',
    description: 'Built-in authentication. No Auth0 or Clerk. 80+ OAuth providers. Save 50-70%.',
  },
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
