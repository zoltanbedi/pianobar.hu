import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Fűzy Gábor',
  },
  trailingSlash: 'always',
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-netlify',
    'gatsby-plugin-graphql-codegen',
    {
      resolve: 'gatsby-plugin-svgr-loader',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
        ignore: [`**/.*`], // ignore files starting with a dot
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
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
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['G-QE9MJ6MV2Q'],
        gtagConfig: {
          anonymize_ip: true,
        },
      },
    },
  ],
}

export default config
