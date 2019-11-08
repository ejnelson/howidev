import React, {useState} from 'react'
import {Link, graphql} from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {rhythm} from '../utils/typography'
import Img from 'gatsby-image'
import {css} from '@emotion/core'
import theme from '../../config/theme'

function About(props) {
  const {data, location} = props
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      This is where i'm going to write a bit about what howidev is all about,
      maybe include the twitter handle and github link. incorporate RSS. ❔ 👁️
      💻 is a blog devicated to the deds.
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
