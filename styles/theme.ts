const size = {
  small: '0.875rem', // 14px
  default: '1rem', // 16px
  h3: '1.125rem', // 18px
  h2: '1.375rem', // 22px
  h1: '1.5rem', // 24px
}

const color = {
  primary: '#D8BEB2',
  secondary: '#F8ECE7',
  white: '#FEFEFE',
  black: '#484848',
  lightGray: '#EBEBEB',
  gray: '#D8D8D8',
  darkGray: '#7B7B7B',
}

const media = {
  desktop: '(min-width: 480px)',
  mobile: '(max-width: 479px)',
}

export const theme = {
  size,
  color,
  media,
}

export type ThemeType = typeof theme
