import Typography from 'typography'
import typographyThemeGithub from 'typography-theme-github'

const typography = new Typography(typographyThemeGithub)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const {rhythm, scale} = typography
