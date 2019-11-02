const brand = {
  primary: '#50a5fa',
  primary_light: '#9bcbfa',
  primary_dark: '#316da8',
  primary_ultra_light: '#c2e0fc',
}

const colors = {
  gray: '#D3D3D3',
  black: '#000',
  white: '#fff',
  bg_color: '#011627',
  body_color: '#fff',
  link_color: brand.primary,
  link_color_hover: brand.primary_dark,
  red: '#E75248',
  green: '#17A974',
  blue: '#327CDC',
  yellow: '#FFB700',
  purple: '#8242F6',
  purple_dark: '#231c42',
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
