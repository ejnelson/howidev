import React from 'react'
import {Link} from 'gatsby'
import {Global, css} from '@emotion/core'
import {ThemeProvider} from 'emotion-theming'
import theme from '../../config/theme'
import {rhythm, scale} from '../utils/typography'
import {bpMaxSM} from '../lib/breakpoints'
import reset from '../lib/reset'

export const globalStyles = css`
  .mainLink {
    boxshadow: none;
    textdecoration: none;
    color: ${theme.colors.red};
  }
  ${bpMaxSM} {
    h1 {
      font-size: 30px;
    }
    h2 {
      font-size: 24px;
    }
  }

  ${reset};
`

class Layout extends React.Component {
  render() {
    const {location, title, children} = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link className="mainLink" to={`/`}>
            {title} ❔ 👁️ 💻
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
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
          <footer>
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
