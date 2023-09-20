import 'styles/reset.css'
import 'styles/global.css'
import React from 'react'
import Script from 'next/script'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'
import { PortfolioProvider } from 'global/context'
import { PREFIX } from 'global/constant'

const MyApp = ({ Component, pageProps }: AppProps) => {
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
