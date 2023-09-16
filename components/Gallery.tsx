import React, { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Column, Grid } from 'components/common/Layout'
import { H1Text, SectionText } from 'components/common/Text'
import { ImageSlider } from 'components/common/ImageSlider'

const IMAGE_SIZE = 120

export const Gallery: React.FC<{ images: string[] }> = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const component = (src: string, index: number) => {
    return (
      <GalleryImage
        key={index}
        src={src}
        alt={src}
        width={IMAGE_SIZE}
        height={IMAGE_SIZE}
        onClick={() => {
          setSelectedIndex(index)
          setIsOpen(true)
        }}
      />
    )
  }
  return (
    <Column gap={30} style={{ width: '100%' }}>
      <Column gap={10}>
        <SectionText>Gallery</SectionText>
        <H1Text>갤러리</H1Text>
      </Column>
      <Column gap={10}>
        <GalleryGrid3Columns>
          {images.map((item, index) => {
            if (index > 2) return
            return component(item, index)
          })}
        </GalleryGrid3Columns>
        <GalleryGrid2Columns>
          <GalleryImage
            src={images[4]}
            alt={images[4]}
            width={IMAGE_SIZE * 2}
            height={IMAGE_SIZE * 2}
          />
          <Column gap={10}>
            {images.map((item, index) => {
              if (index < 4 || index > 5) return
              return component(item, index)
            })}
          </Column>
        </GalleryGrid2Columns>
        <GalleryGrid3Columns>
          {images.map((item, index) => {
            if (index < 6) return
            return component(item, index)
          })}
        </GalleryGrid3Columns>
      </Column>
      <ImageSlider
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        images={images}
        index={selectedIndex}
      />
    </Column>
  )
}

const GalleryGrid3Columns = styled(Grid)`
  gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
`

const GalleryGrid2Columns = styled(GalleryGrid3Columns)`
  grid-template-columns: 2.08fr 1fr;
`

const GalleryImage = styled(Image).attrs({
  objectFit: 'cover',
  layout: 'responsive',
})`
  border-radius: 4px;
  cursor: pointer;
`
