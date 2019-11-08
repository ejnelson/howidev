import React from 'react'
import {css} from '@emotion/core'
import styled from '@emotion/styled'
import {Link} from 'gatsby'
import theme from '../../config/theme'
import {rhythm, scale} from '../utils/typography'

const StyledLink = styled(Link)`
  color: ${theme.colors.primary_ultra_light};
  &:hover {
    color: ${theme.colors.primary_light};
  }
`

const Header = ({location, title}) => {
  const rootPath = `${__PATH_PREFIX__}/`

  return location.pathname === rootPath ? (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin: ${rhythm(1 / 2)} 0 ${rhythm(1)};
      `}
    >
      <h1
        css={css`
          ${scale(1.5)}
        `}
      >
        <Link to={`/`}>{title}</Link>
      </h1>
      <h3>
        <StyledLink to={`/about`}>about</StyledLink>
      </h3>
    </div>
  ) : (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin: ${rhythm(1 / 2)} 0 ${rhythm(1)};
      `}
    >
      <h3
        css={css`
          transform-origin: left;
        `}
      >
        <Link to={`/`}>{title}</Link>
      </h3>

      {location.pathname !== '/about' && (
        <h4>
          <StyledLink to={`/about`}>about</StyledLink>
        </h4>
      )}
    </div>
  )
}

export default Header
