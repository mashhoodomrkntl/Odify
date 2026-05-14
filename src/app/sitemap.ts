import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://odifyindia.com';
  const locales = ['en', 'ar'];
  const paths = [
    '', 
    '/about', 
    '/services', 
    '/contact',
    '/services/accounting-bookkeeping',
    '/services/taxation-advisory',
    '/services/audit-management',
    '/services/financial-statements',
    '/services/compliance-advisory',
    '/services/e-invoicing'
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of paths) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: path === '' ? 1 : 0.8,
      });
    }
  }

  return sitemapEntries;
}
