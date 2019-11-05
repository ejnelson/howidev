import React from 'react'
import {Link} from 'gatsby'
import {Global, css} from '@emotion/core'
import styled from '@emotion/styled'
import {ThemeProvider} from 'emotion-theming'
import theme from '../../config/theme'
import {rhythm, scale} from '../utils/typography'
import {bpMaxSM} from '../lib/breakpoints'
import reset from '../lib/reset'

export const globalStyles = css`
  ${bpMaxSM} {
    h1 {
      font-size: 30px;
    }
    h2 {
      font-size: 24px;
    }
  }
  a {
    &:hover {
      text-decoration: none;
    }
  }

  ${reset};
`
const StyledLink = styled(Link)`
  color: ${theme.brand.primary_ultra_light};
  box-shadow: none;
  text-decoration: none;
  &:hover {
    color: ${theme.brand.primary_light};
  }
`

class Layout extends React.Component {
  render() {
    const {location, title, children} = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <div
          css={css`
            display: flex;
            justify-content: space-between;
          `}
        >
          <h1
            style={{
              ...scale(1.5),
              marginBottom: rhythm(0.5),
              marginTop: 0,
            }}
          >
            <StyledLink to={`/`}>{title}</StyledLink>
          </h1>
          <h3>
            <Link>about</Link>
          </h3>
        </div>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <StyledLink to={`/`}>{title}</StyledLink>
        </h3>
      )
    }
    return (
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />

        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <header>{header}</header>
          <main>{children}</main>
          <footer
            style={{
              padding: `${rhythm(1.5)} 0`,
            }}
          >
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </ThemeProvider>
    )
  }
}

export default Layout
