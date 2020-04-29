import * as React from "react"

import { Layout } from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { MarkdownBlock } from "../components/markdown-block"
import { PageQuery } from "../../graphql-types"

interface PageProps {
  data: PageQuery
}

class Page extends React.Component<PageProps> {

  componentDidMount() {
    const { data: { mdx } } = this.props

    if ( mdx.frontmatter.script ) {
      const bodyElement = document.getElementsByTagName( 'body' )[0];
      const scriptElement = document.createElement( 'script' )

      scriptElement.type = 'text/javascript'
      scriptElement.src = mdx.frontmatter.script

      if ( window ) {
        window.onload = ()=> bodyElement.append( scriptElement )
      }
      // bodyElement.append( scriptElement )
    }
  }

  render() {
    const { data: { mdx } } = this.props

    return(
      <>
        <Layout>
          <SEO 
            title={ mdx.frontmatter.title } 
            description={ mdx.frontmatter.description || mdx.excerpt }
          />
          <MarkdownBlock className={ mdx.frontmatter.className }>
            { mdx.body }
          </MarkdownBlock>
        </Layout>
      </>
    )
  }
}

export default Page

export const query = graphql`
query Page( $id: String ) {
  mdx(id: { eq: $id }) {
    id
    body
    excerpt
    frontmatter {
			title
      description
      className
      script
    }
  }
}
`

// do not remove the following comments. It is to avoid css purgin see: https://www.gatsbyjs.org/packages/gatsby-plugin-purgecss/#2-use-a-javascript-comment
// h3
// h4
// h5
// blockquote
// pre
// code
// token
// tag
// number 
// language-text
// page
// index
// index-header
// readers-benefit