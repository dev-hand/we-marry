/* eslint-disable @typescript-eslint/no-explicit-any */
import 'styles/reset.css'
import 'styles/global.css'
import React, { useEffect } from 'react'
import Script from 'next/script'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'
import { PortfolioProvider } from 'global/context'
import { KAKAO_JS_KEY, PREFIX } from 'global/constant'

declare global {
  interface Window {
    Kakao: any //  kakao share api
    kakao: any // kakao map api
  }
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(
    () =>
      window.addEventListener('load', () => window.Kakao.init(KAKAO_JS_KEY)),
    [],
  )
  return (
    <>
      <Script
        src='https://t1.kakaocdn.net/kakao_js_sdk/2.3.0/kakao.min.js'
        integrity='sha384-70k0rrouSYPWJt7q9rSTKpiTfX6USlMYjZUtr1Du+9o4cGvhPAWxngdtVZDdErlh'
        crossOrigin='anonymous'
      />
      <PortfolioProvider value={PREFIX}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </PortfolioProvider>
    </>
  )
}

export default MyApp
