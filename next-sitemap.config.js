/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || 'https://cosmoscleaner.com',
  changefreq: 'weekly',
  generateRobotsTxt: true,
  autoLastmod: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      }
    ]
  }
}