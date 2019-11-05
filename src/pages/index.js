import React, {useState} from 'react'
import {Link, graphql} from 'gatsby'
import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {rhythm} from '../utils/typography'
import Img from 'gatsby-image'
import {css} from '@emotion/core'
import theme from '../../config/theme'

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
      {/* <Bio /> */}
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
                justify-content: space-around;
                transition: all 0.3s ease-in-out;
                border: 1px solid ${theme.brand.primary_ultra_light};
                border-radius: 15px;
                padding: 0 ${rhythm(1 / 2)};
                margin: ${rhythm(1 / 2)} 0;
                &:hover {
                  transform: scale(1.02);
                  /* box-shadow: 0px 0px 5px 5px rgba(256, 256, 256, 0.3); */
                }
              `}
            >
              {node.frontmatter.headShot && (
                <Img
                  css={css`
                    min-width: 80px;
                    height: 80px;
                    border-radius: 50%;
                  `}
                  fluid={node.frontmatter.headShot.childImageSharp.fluid}
                />
              )}
              <div
                css={css`
                  max-width: ${rhythm(16)};
                  margin-left: ${rhythm(1 / 2)};
                `}
              >
                <header>
                  <h3
                    css={css`
                      color: ${theme.brand.primary};
                      margin-bottom: ${rhythm(1 / 4)};
                    `}
                  >
                    {author}
                  </h3>
                </header>
                <section
                  css={css`
                    color: ${theme.colors.white};
                  `}
                >
                  <small>{node.frontmatter.date}</small>
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
            date(formatString: "MMMM DD, YYYY")
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
