import 'styles/reset.css'
import 'styles/global.css'
import React from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'
import { PortfolioProvider } from 'global/context'
import { PREFIX } from 'global/constant'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>we get marry</title>
      </Head>
      <PortfolioProvider value={PREFIX}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </PortfolioProvider>
    </>
  )
}

export default MyApp
