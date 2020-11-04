/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const { createWagtailPages } = require("gatsby-source-wagtail/pages.js")

exports.createPages = ({ graphql, actions }) => {
  return createWagtailPages({
      "home.BlogPage": "templates/blog.js",
  }, graphql, actions, [])
}
