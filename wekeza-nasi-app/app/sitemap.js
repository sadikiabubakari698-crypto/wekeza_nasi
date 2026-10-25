export default function sitemap() {
  return [
    {
      url: 'https://wekeza-nasi.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://wekeza-nasi.vercel.app/kuhusu',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
