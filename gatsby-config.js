require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Zenii`,
    description: `A One-page Gatsby starter built with Tailwindcss and  Postcss.`,
    author: `The Bakerdev`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`material icons`, `Roboto\:400,700`, `Rubik\:400,700`],
        display: "swap",
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-resolve-src",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Zenii Gatsby`,
        short_name: `zenii`,
        start_url: `/`,
        background_color: `#6C63FF`,
        theme_color: `#6C63FF`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-intl-contentful`,
      options: {
        // default language
        defaultLanguage: `en`,
        // option to redirect to `/ko` when connecting `/`
        redirect: true,
        // Contentful space credentials
        contentfulSpaceId: process.env.CONTENTFUL_SPACE_ID,
        contentfulAccessToken: process.env.CONTENTFUL_ACCESS_TOKEN,

        // OPTIONAL!
        // messageContentType
        messageContentType: "message",
        // Your Contentful message Content Type key field id
        fieldKey: "key", 
        // Your Contentful message Content Type value field id
        fieldValue: "value", 
      }
    },
    `@contentful/gatsby-transformer-contentful-richtext`
  ],
};
