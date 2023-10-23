const { CONFIG } = require("./site.config")

module.exports = {
  siteUrl: CONFIG.link,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  generateIndexSitemap: false,
  transform: async (config, path) => {
    return {
      loc: encodeURI(path.trim()), // => this will be exported as http(s)://<config.siteUrl>/<path>
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },
}
