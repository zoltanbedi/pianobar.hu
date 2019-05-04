module.exports = {
  siteMetadata: {
    title: 'Fűzy Gábor',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-svg-sprite',
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fűzy Gábor`,
        short_name: `Fűzy Gábor`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#5e2e2d`,
        display: `standalone`,
        icon: `assets/images/favicon-192x192.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/assets/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-48618206-1',
      },
    },
  ],
}
