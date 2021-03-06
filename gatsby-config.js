module.exports = {
  siteMetadata: {
    title: '1qlee.com',
    author: 'Wonkyu Lee',
    description: 'Wonkyu Lee personal website or portfolio.',
    github: 'https://github.com/1qlee',
    linkedin: 'https://www.linkedin.com/in/wonkyulee93/',
    twitter: 'https://twitter.com/wonq33',
    email: 'mailto:wonq33@gmail.com',
    resume: 'https://www.dropbox.com/s/k4nlv3kd5g355bv/Wonkyu%20Lee%20-%20Resume_2018.pdf'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Karla`,
            variants: [`400`, `700`]
          },
          {
            family: 'Spectral',
            variants: ['400']
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `wonkyu-personal`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#444`,
        theme_color: `#444`,
        display: `minimal-ui`,
        icon: `src/images/site-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-styled-components',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
