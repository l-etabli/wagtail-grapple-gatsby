import * as React from "react"

export default ({ data }) => {
  const { page } = data.wagtail

  return (
    <div>
      <h1>{page.title}</h1>
    </div>
  )
}

export const query = graphql`
  query($slug: String) {
    wagtail {
      page(slug: $slug) {
        ... on BlogPage {
          title
        }
      }
    }
  }
`
