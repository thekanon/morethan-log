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
      lastmod: config.autoLastmod ? toCustomISOFormat(new Date()) : undefined,
    }
  },
}
const toCustomISOFormat = (date) => {
  let iso = date.toISOString()
  return iso.slice(0, 19) + "+00:00"
}
