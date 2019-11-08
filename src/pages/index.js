import React, {useState} from 'react'
import {Link, graphql} from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {rhythm, scale} from '../utils/typography'
import Img from 'gatsby-image'
import {css} from '@emotion/core'
import theme from '../../config/theme'
import {transparentize} from 'polished'

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
            border-style: dotted;
            border-color: ${theme.colors.green};
            border-width: 0 0 ${rhythm(1 / 8)} 0;
            color: ${theme.colors.green};
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
                border: 1px solid ${theme.colors.primary_ultra_light};
                border-radius: 15px;
                padding: 0 ${rhythm(1 / 2)};
                margin: ${rhythm(1 / 2)} 0;
                &:hover {
                  /* background-color: ${transparentize(
                    0.9,
                    theme.colors.primary_ultra_light,
                  )}; */
                  transform: scale(1.02);
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
                      color: ${theme.brand.primary};
                      margin: ${rhythm(1 / 2)} 0 0;
                    `}
                  >
                    {author}
                  </h3>
                </header>
                <section
                  css={css`
                    color: ${theme.colors.body_color};
                  `}
                >
                  <small
                    css={css`
                      margin: 0;
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
