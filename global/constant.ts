export const PREFIX =
  process.env.NODE_ENV === 'production'
    ? 'https://seongho-son.github.io/we-marry'
    : 'http://localhost:3001'
export const IS_DEV = process.env.NODE_ENV === 'development'
export const AMPLITUDE_API_KEY = 'e9f15102bed33c3afa01f12dce9a93ae'
export const IS_BROWSER =
  typeof window !== 'undefined' && typeof window.document !== 'undefined'
export const GOOGLE_SHEET_API_KEY = 'AIzaSyBeaXgJ8ECfUcbxtehALGrnGbHT3nBTRYE'
export const GOOGLE_SPREAD_SHEET_ID =
  '1819d6QMC5_EBlThHSC1CQwhOe5hThLf4OaxvoUv1pIY'
export const KAKAO_REST_API_KEY = 'b9790bb9f05a0092b7bb80bc221a7fc9'
export const KAKAO_JS_KEY = '7f507b714b35d40245268ee3378570c7'
export const COMMENT_FORM_URL = 'https://forms.gle/SQC8b97xWi3HYXxc6'
