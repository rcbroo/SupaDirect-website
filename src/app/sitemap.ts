import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://supadirect.dev';
  const currentDate = new Date().toISOString();

  const pages: Array<{
    url: string;
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    priority: number;
  }> = [
    // High priority pages
    { url: '', changeFrequency: 'daily', priority: 1.0 },
    { url: '/pricing', changeFrequency: 'weekly', priority: 0.9 },
    { url: '/blog', changeFrequency: 'daily', priority: 0.9 },
    { url: '/faq', changeFrequency: 'weekly', priority: 0.85 },

    // Product pages
    { url: '/ai', changeFrequency: 'weekly', priority: 0.85 },
    { url: '/components', changeFrequency: 'weekly', priority: 0.85 },
    { url: '/templates', changeFrequency: 'weekly', priority: 0.85 },
    { url: '/sync', changeFrequency: 'weekly', priority: 0.85 },
    { url: '/realtime', changeFrequency: 'weekly', priority: 0.85 },
    { url: '/auth', changeFrequency: 'weekly', priority: 0.85 },

    // Company pages
    { url: '/about', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/contact', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/contact/sales', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/open-source', changeFrequency: 'weekly', priority: 0.8 },
    { url: '/startups', changeFrequency: 'monthly', priority: 0.75 },
    { url: '/champions', changeFrequency: 'monthly', priority: 0.75 },
    { url: '/company/brand', changeFrequency: 'yearly', priority: 0.6 },
    { url: '/company/investors', changeFrequency: 'monthly', priority: 0.7 },
    { url: '/company/jobs', changeFrequency: 'daily', priority: 0.8 },

    // Legal pages
    { url: '/legal/terms', changeFrequency: 'monthly', priority: 0.5 },
    { url: '/legal/privacy', changeFrequency: 'monthly', priority: 0.5 },
    { url: '/legal/security', changeFrequency: 'monthly', priority: 0.6 },
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: currentDate,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
