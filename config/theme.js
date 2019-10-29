const brand = {
  primary: '#573EDE',
  secondary: '#EEF4F2',
}

const colors = {
  primary_light: `'#573EDE'`,
  gray: '#D3D3D3',
  black: '#000',
  white: '#fff',
  bg_color: '#',
  body_color: '#222426',
  link_color: brand.primary,
  link_color_hover: `'#775EDE'`,
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
