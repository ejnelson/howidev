import React, {useState} from 'react'
import {Link, graphql} from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {rhythm, scale} from '../utils/typography'
import Img from 'gatsby-image'
import {css} from '@emotion/core'
import theme from '../../config/theme'
import {transparentize, lighten} from 'polished'

/**
 * Main Page component
 *
 * @param {object} props - The response from the graphql query.
 */
function BlogIndex(props) {
  const {data, location} = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  const [search, setSearch] = useState('')

  const searchFilter = node => {
    const {tags, title, author} = node.frontmatter
    const tagsFound = tags?.some(tag =>
      tag.toLowerCase().startsWith(search.toLowerCase()),
    )
    const titleFound = title?.toLowerCase().includes(search.toLowerCase())
    const authorFound = author?.toLowerCase().startsWith(search.toLowerCase())
    return tagsFound || titleFound || authorFound
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <form
        css={css`
          display: flex;
          justify-content: center;
          text-align: center;
        `}
      >
        <input
          css={css`
            margin: 0 ${rhythm(1 / 2)};
            width: ${rhythm(12)};
            background-color: inherit;
            border-bottom: dotted;
            border-color: ${theme.colors.primary_light};
            border-width: 0 0 ${rhythm(1 / 8)} 0;
            color: ${theme.colors.primary_light};
            &:focus {
              outline: none;
            }
          `}
          type="text"
          value={search}
          placeholder="Search"
          onChange={e => setSearch(e.target.value)}
        />
      </form>
      {posts
        .filter(({node}) => searchFilter(node))
        .map(({node}) => {
          const title = node.frontmatter.title || node.fields.slug
          const author = node.frontmatter.author || node.fields.slug
          const tags = node.frontmatter.tags || node.fields.slug
          return (
            <Link
              key={node.fields.slug}
              to={node.fields.slug}
              css={css`
                display: flex;
                align-items: center;
                /* border: 1px solid ${theme.brand.primary_ultra_light}; */
                border-radius: 15px;
                padding: 0 ${rhythm(1 / 2)};
                background-color: ${lighten(0.05, theme.colors.background)};
                margin: ${rhythm(1 / 2)} 0;
                &:hover {
                  /* background-color: ${transparentize(
                    0.9,
                    theme.colors.primary_ultra_light,
                  )}; */
                  transform: scale(1.05);
                }
              `}
            >
              {node.frontmatter.headShot && (
                <Img
                  css={css`
                    min-width: 80px;
                    height: 80px;
                    border-radius: 50%;
                    margin: 0 ${rhythm(1 / 2)};
                  `}
                  fluid={node.frontmatter.headShot.childImageSharp.fluid}
                />
              )}
              <div
                css={css`
                  max-width: ${rhythm(24)};
                  margin-left: ${rhythm(1 / 2)};
                `}
              >
                <header>
                  <h3
                    css={css`
                      color: ${theme.colors.primary_light};
                      margin: ${rhythm(1 / 2)} 0 0;
                    `}
                  >
                    {author}
                  </h3>
                </header>
                <section
                  css={css`
                    color: ${theme.colors.body_color};
                    display: flex;
                    flex-direction: column;
                  `}
                >
                  <small
                    css={css`
                      margin: ${rhythm(1 / 10)} 0;
                    `}
                  >
                    📅{` `}
                    {node.frontmatter.date}
                  </small>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </section>
              </div>
            </Link>
          )
        })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MM-DD-YYYY")
            title
            author
            description
            headShot {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            tags
          }
        }
      }
    }
  }
`
