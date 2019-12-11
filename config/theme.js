import {darken, lighten} from 'polished'

const brand = {
  primary: '#50a5fa',
}

const colors = {
  primary_light: `${lighten(0.15, brand.primary)}`,
  primary_ultra_light: `${lighten(0.25, brand.primary)}`,
  primary_dark: `${darken(0.2, brand.primary)}`,
  gray: '#D3D3D3',
  black: '#000',
  white: '#fff',
  background: '#011627',
  body_color: '#fff',
  link_color: brand.primary,
  link_color_hover: `${darken(0.3, brand.primary)}`,
}

const theme = {
  colors,
  brand,
}

export default theme
