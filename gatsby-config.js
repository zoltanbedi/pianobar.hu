/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
    title: 'Fűzy Gábor',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-graphql-codegen',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-source-facebook-graphql`,
      options: {
        // Facebook account or page ID
        pageId: 190825651114970,
        params: {
          fields: [
            'posts.limit(3){attachments,permalink_url}'
          ],
        },
        // Access Token from facebook
        accessToken: process.env.GATSBY_FACEBOOK_GRAPH_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Fűzy Gábor',
        short_name: 'Fűzy Gábor',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#5e2e2d',
        display: 'standalone',
        icon: 'src/images/favicon-192x192.png',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-48618206-1',
      },
    },
  ],
}
