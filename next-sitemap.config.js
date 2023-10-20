const { CONFIG } = require("./site.config")

module.exports = {
  siteUrl: CONFIG.link,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  generateIndexSitemap: false,
  transform: (config, url) => {
    if (url.loc) {
      url.loc = encodeURI(url.loc) // URL 인코딩
    }
    return url
  },
}
