import {darken, lighten} from 'polished'

const brand = {
  primary: '#50a5fa',
  secondary: '#EEF4F2',
}

const colors = {
  primary_light: `${lighten(0.1, brand.primary)}`,
  primary_ultra_light: `${lighten(0.25, brand.primary)}`,
  primary_dark: `${darken(0.2, brand.primary)}`,
  gray: '#D3D3D3',
  black: '#000',
  white: '#fff',
  background: '#011627',
  body_color: '#fff',
  link_color: brand.primary,
  link_color_hover: `${darken(0.3, brand.primary)}`,
  green: '#17A974',
}

const theme = {
  colors,
  brand,
  breakpoints: {
    xs: '400px',
    s: '600px',
    m: '900px',
    l: '1200px',
  },
  container: {
    base: '100rem',
    text: '55rem',
  },
  spacer: {
    horizontal: '2rem',
    vertical: '3rem',
  },
  transition: {
    ease: 'all 200ms ease',
  },
}

export default theme
