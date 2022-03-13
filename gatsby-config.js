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
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
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
};
