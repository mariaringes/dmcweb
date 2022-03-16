module.exports = {
  siteMetadata: {
      title: `Danbury Music Center`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Roboto",
              variants: ["200", "300", "400", "500"],
            },
            {
              family: "Poppins",
              variants: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
            },
            {
              family: "Homemade Apple",
            },
            {
              family: 'Abel',
            }
          ],
        },
        usePreload: true,
        usePreconnect: true,
      },
    },
  ]
};
