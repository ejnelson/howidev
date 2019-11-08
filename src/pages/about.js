import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

function About(props) {
  const {data, location} = props
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      ❔ 👁️ 💻 <br />
      const prequestion = 'Have you ever wanted to ';
      <br />
      prequestion + mentor someone?
      <br />
      prequestion + contribute to open source software?
      <br />
      prequestion + be interviewed for a blog?
      <br />
      prequestion + write for a blog?
      <br />
      <br />I was in need of some inspiration one day and thought some of my
      fellow developers might be too. You could get inspiration from this
      project by <br />
      1. being able to contribute to an open source project (Pull requests
      welcome) <br />
      2. being able to contribute to the blog (best way to contribute is to
      actually make a pull request with your blog entry, I will take
      email-entries though as well erik@ejnelson.com) <br />
      3. reading the blog posts of other developers
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
