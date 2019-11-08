import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Image from 'gatsby-image'
import {css} from '@emotion/core'
import githubIcon from '../images/github.svg'
import twitterIcon from '../images/twitter.svg'
import rssIcon from '../images/rss.svg'
import styled from '@emotion/styled'
import {rhythm} from '../utils/typography'

// create filters like this https://codepen.io/sosuke/pen/Pjoqqp
const StyledImg = styled.img`
  filter: invert(65%) sepia(47%) saturate(3850%) hue-rotate(185deg)
    brightness(100%) contrast(97%);
  width: ${rhythm(1)};
  transition: all 0.3s ease-in-out;
  margin-bottom: 0;

  &:hover {
    filter: invert(37%) sepia(52%) saturate(1546%) hue-rotate(183deg)
      brightness(93%) contrast(81%);
  }
`

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          author
          social {
            twitter
            github
            rss
          }
        }
      }
    }
  `)

  const {social} = data.site.siteMetadata
  return (
    <footer
      css={css`
        display: flex;
        margin-bottom: rhythm(0.5);
      `}
    >
      <a href={`https://twitter.com/${social.twitter}`}>
        <StyledImg src={twitterIcon} alt={'twitter'} />
      </a>
      <a href={`${social.github}`}>
        <StyledImg src={githubIcon} alt={'github'} />
      </a>
      <a href={`${social.rss}`}>
        <StyledImg src={rssIcon} alt={'rss'} />
      </a>
    </footer>
  )
}

export default Footer
