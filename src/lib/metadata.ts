import { Metadata } from 'next';

interface PageMetadata {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
}

export function generateMetadata({
  title,
  description,
  path,
  keywords = [],
  image = '/og-image.png',
}: PageMetadata): Metadata {
  const url = `https://supadirect.dev${path}`;

  return {
    title,
    description,
    keywords: [
      'backend platform',
      'real-time database',
      'TypeScript backend',
      'serverless functions',
      ...keywords,
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Supadirect',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
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
  };
}
