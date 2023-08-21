export const PREFIX =
  process.env.NODE_ENV === 'production'
    ? 'https://dev-hand.github.io/wedding-card'
    : 'http://localhost:3001'
export const IS_DEV = process.env.NODE_ENV === 'development'
export const AMPLITUDE_API_KEY = 'e9f15102bed33c3afa01f12dce9a93ae'
export const IS_BROWSER =
  typeof window !== 'undefined' && typeof window.document !== 'undefined'
