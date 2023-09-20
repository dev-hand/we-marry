import React from 'react'
import Head from 'next/head'

interface SeoProps {
  title?: string
  description?: string
  image?: string
  url?: string
}

export const Seo: React.FC<SeoProps> = (props) => {
  const { title, description, image, url } = props

  return (
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
}
