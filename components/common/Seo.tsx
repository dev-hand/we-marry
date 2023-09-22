import React from 'react'
import Head from 'next/head'

export const Seo: React.FC<{
  title?: string
  description?: string
  image?: string
  url?: string
}> = ({ title, description, image, url }) => (
  <Head>
    {title && (
      <>
        <title>{title}</title>
        <meta property='og:title' content={title} />
      </>
    )}
    {description && (
      <>
        <meta name='description' content={description} />
        <meta property='og:description' content={description} />
      </>
    )}
    {image && <meta property='og:image' content={image} />}
    {url && <meta property='og:url' content={url} />}
  </Head>
)
