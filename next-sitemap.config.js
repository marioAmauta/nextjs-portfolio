/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://marioprogramador.com/',
  generateRobotsTxt: true,
  alternateRefs: [
    {
      href: 'https://marioprogramador.com/es',
      hreflang: 'es'
    }
  ]
};
