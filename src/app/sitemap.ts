import type { MetadataRoute } from 'next';

const BASE_URL = 'https://rozaqmaruf.dev';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    { path: '', priority: 1, changeFrequency: 'monthly' as const },
    { path: '/work', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.8, changeFrequency: 'yearly' as const },
    { path: '/work/tanos-erp', priority: 0.85, changeFrequency: 'yearly' as const },
    { path: '/work/e-reserv', priority: 0.8, changeFrequency: 'yearly' as const },
    { path: '/work/balang', priority: 0.8, changeFrequency: 'yearly' as const },
    { path: '/work/iot-toren', priority: 0.75, changeFrequency: 'yearly' as const },
    { path: '/work/focusly', priority: 0.75, changeFrequency: 'yearly' as const },
  ];

  return routes.map((r) => ({
    url: `${BASE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
