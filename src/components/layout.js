import React, {useState} from 'react'
import {Global, css} from '@emotion/core'
import {ThemeProvider} from 'emotion-theming'
import theme from '../../config/theme'
import {rhythm} from '../utils/typography'
import {bpMaxSM} from '../lib/breakpoints'
import reset from '../lib/reset'
import Header from '../components/header'
import Footer from '../components/footer'

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

function Layout({children, location, title}) {
  // const [theme, setTheme] = useState('dark')
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />

      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(28),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <Header location={location} title={title} />
        <main>{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default Layout
