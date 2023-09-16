export const PREFIX =
  process.env.NODE_ENV === 'production'
    ? 'https://dev-hand.github.io/we-marry'
    : 'http://localhost:3001'
export const IS_DEV = process.env.NODE_ENV === 'development'
export const AMPLITUDE_API_KEY = 'e9f15102bed33c3afa01f12dce9a93ae'
export const IS_BROWSER =
  typeof window !== 'undefined' && typeof window.document !== 'undefined'
export const GOOGLE_SHEET_API_KEY = 'AIzaSyBeaXgJ8ECfUcbxtehALGrnGbHT3nBTRYE'
export const GOOGLE_SPREAD_SHEET_ID =
  '1819d6QMC5_EBlThHSC1CQwhOe5hThLf4OaxvoUv1pIY'
export const USER_KEYS = ['cyc-syj']
