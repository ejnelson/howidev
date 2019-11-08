import React from 'react'
import {Link, graphql} from 'gatsby'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import {css} from '@emotion/core'
import theme from '../../config/theme'

import Layout from '../components/layout'
import SEO from '../components/seo'
import {rhythm, scale} from '../utils/typography'

const Tag = styled.span`
  padding: 0 ${rhythm(1 / 2)};
  border: 1px solid ${theme.colors.primary_light};
  margin: ${rhythm(1 / 8)};
  border-radius: 10px;
`

class BlogPostTemplate extends React.Component {
  render() {
    const {data, location, pageContext} = this.props
    const post = data.markdownRemark
    const siteTitle = data.site.siteMetadata.title
    const {previous, next} = pageContext
    const {title, description, tags, headShot} = post.frontmatter
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title={title} description={description || post.excerpt} />
        <article>
          <header
            css={css`
              display: flex;
              justify-content: center;
            `}
          >
            {headShot && (
              <Img
                css={css`
                  height: 220px;
                  width: 220px;
                  border-radius: 50%;
                `}
                fluid={headShot.childImageSharp.fluid}
              />
            )}
            {/* <h1
              css={css`
                margin: 0 0;
              `}
            >
              {post.frontmatter.author}
            </h1>
            <p css={css``}>{post.frontmatter.date}</p> */}
          </header>
          <div
            css={css`
              display: flex;
              justify-content: space-evenly;
              margin: ${rhythm(1)} 0;
              flex-wrap: wrap;
            `}
          >
            {tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </div>
          <section
            css={css`
              h1 {
                color: ${theme.brand.primary};
                margin-bottom: ${rhythm(1)};
              }
              h2 {
                color: ${theme.colors.primary_light};
                margin-bottom: ${rhythm(1)};
              }
              h3 {
                color: ${theme.colors.primary_light};
                margin-bottom: ${rhythm(1 / 2)};
              }
              h4 {
                color: ${theme.colors.primary_light};
                margin-bottom: ${rhythm(1 / 4)};
                ${scale(0.1)};
                font-weight: 800;
              }
              p {
                margin-bottom: ${rhythm(1 / 2)};
              }
              strong {
                color: ${theme.colors.primary_light};
              }
              hr {
                border-top: ${rhythm(1 / 8)} dotted
                  ${theme.colors.primary_light};

                color: white;
              }
            `}
            dangerouslySetInnerHTML={{__html: post.html}}
          />
          <hr
            css={css`
              margin-bottom: ${rhythm(1)};
            `}
          />
        </article>

        <nav>
          <ul
            css={css`
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
              list-style: none;
              padding: 0;
            `}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: {slug: {eq: $slug}}) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        author
        tags
        headShot {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
