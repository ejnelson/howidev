import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from '@emotion/styled'
import theme from '../../config/theme'
import {css} from '@emotion/core'

const StyledSpan = styled.span`
  display: block;
  padding: 0.5rem 0;
`

/**
 * About page component
 * renders at extension /about
 *
 * @param {object} props - the return value from the graphql querypath to the page that is rendered.
 */
function About(props) {
  const {data, location} = props
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <h3
        css={css`
          font-size: 3rem;
          display: flex;
          justify-content: center;
        `}
      >
        ❔ 👁️ 💻
      </h3>
      <StyledSpan>
        How I Dev is blog about developers, by developers. Each entry is written
        by a different developer answering the question:{' '}
        <b>"How do you Dev?"</b>
      </StyledSpan>
      <StyledSpan>
        I think as developers, and therefore perpetual learners, one of the
        great sources of knowledge and inspiration is to see how other people do
        stuff! Don't we all go to StackOverflow to see how other Devs write
        code? Maybe we can all go to How I Dev to see how other Devs work in
        code.
      </StyledSpan>
      <StyledSpan>
        And of course as developers we all love open source, a great (easy) way
        to get into if you haven't is to contribute to this blog.
      </StyledSpan>
      <StyledSpan>
        You could get inspiration or knowledge from this project by:
      </StyledSpan>
      <ol
        css={css`
          margin-left: 1rem;
        `}
      >
        <li>
          Being able to contribute to an open source project (Pull requests
          encouraged)
        </li>
        <li>
          Being able to contribute to the blog (best way to contribute is to
          actually make a pull request with your blog entry, I will take
          email-entries though as well{' '}
          <a href="mailto:hello@howidev.com?subject=I want to contribute!">
            hello@howidev.com
          </a>
          )
        </li>
        <li>Reading the blog posts of other developers</li>
      </ol>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
