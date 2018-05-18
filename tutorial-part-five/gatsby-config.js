module.exports = {
  siteMetadata: {
    title: `Pandas Eating Lots`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `src`, path: `${__dirname}/src/` }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `public`, path: `${__dirname}/public/` }
    },
    `gatsby-plugin-glamor`,
    {
      resolve: `gatsby-plugin-typography`,
      options: { pathToConfigModule: `src/utils/typography` }
    }
  ]
};
