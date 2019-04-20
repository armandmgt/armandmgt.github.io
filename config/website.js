const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'armandmgt - Portfolio', // Navigation and Site Title
  siteTitleAlt: 'armandmgt', // Alternative Site title for SEO
  siteTitleShort: 'armandmgt', // short_name for manifest
  siteHeadline: 'Portfolio created using GatsbyJS', // Headline for schema.org JSONLD
  siteUrl: 'https://armandmgt.fr', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'One-Page website with Parallax effect',
  author: 'Armand Mégrot', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@armandmgt', // Twitter Username
  ogSiteName: 'armandmgt', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-138674012-1',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
