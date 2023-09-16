import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Column, Grid } from 'components/common/Layout'
import { H1Text, SectionText } from 'components/common/Text'
import { ImageSlider } from 'components/common/ImageSlider'

const IMAGE_SIZE = 120

export const Gallery: React.FC<{ images: string[] }> = ({ images }) => (
  <Column gap={30} style={{ width: '100%' }}>
    <Column gap={10}>
      <SectionText>Gallery</SectionText>
      <H1Text>갤러리</H1Text>
    </Column>
    <Column gap={10}>
      <GalleryGrid3Columns>
        <GalleryImage
          src='/image/Nm3TWU_mcard_2023-05-19_1dc298371df344a18110c234d34d60f8_w1280.jpg'
          alt='/image/Nm3TWU_mcard_2023-05-19_1dc298371df344a18110c234d34d60f8_w1280.jpg'
          width={IMAGE_SIZE}
          height={IMAGE_SIZE}
        />
        <GalleryImage
          src='/image/Nm3TWU_mcard_2023-05-19_1dc298371df344a18110c234d34d60f8_w1280.jpg'
          alt='/image/Nm3TWU_mcard_2023-05-19_1dc298371df344a18110c234d34d60f8_w1280.jpg'
          width={IMAGE_SIZE}
          height={IMAGE_SIZE}
        />
        <GalleryImage
          src='/image/Nm3TWU_mcard_2023-05-19_1dc298371df344a18110c234d34d60f8_w1280.jpg'
          alt='/image/Nm3TWU_mcard_2023-05-19_1dc298371df344a18110c234d34d60f8_w1280.jpg'
          width={IMAGE_SIZE}
          height={IMAGE_SIZE}
        />
      </GalleryGrid3Columns>
      <GalleryGrid2Columns>
        <GalleryImage
          src='/image/Nm3TWU_mcard_2023-05-19_1dc298371df344a18110c234d34d60f8_w1280.jpg'
          alt='/image/Nm3TWU_mcard_2023-05-19_1dc298371df344a18110c234d34d60f8_w1280.jpg'
          width={IMAGE_SIZE * 2}
          height={IMAGE_SIZE * 2}
          style={{ flex: 1 }}
        />
        <Column gap={10}>
          <GalleryImage
            src='/image/Nm3TWU_mcard_2023-05-19_1dc298371df344a18110c234d34d60f8_w1280.jpg'
            alt='/image/Nm3TWU_mcard_2023-05-19_1dc298371df344a18110c234d34d60f8_w1280.jpg'
            width={IMAGE_SIZE}
            height={IMAGE_SIZE}
          />
          <GalleryImage
            src='/image/Nm3TWU_mcard_2023-05-19_1dc298371df344a18110c234d34d60f8_w1280.jpg'
            alt='/image/Nm3TWU_mcard_2023-05-19_1dc298371df344a18110c234d34d60f8_w1280.jpg'
            width={IMAGE_SIZE}
            height={IMAGE_SIZE}
          />
        </Column>
      </GalleryGrid2Columns>
      <GalleryGrid3Columns>
        <GalleryImage
          src='/image/Nm3TWU_mcard_2023-05-19_1dc298371df344a18110c234d34d60f8_w1280.jpg'
          alt='/image/Nm3TWU_mcard_2023-05-19_1dc298371df344a18110c234d34d60f8_w1280.jpg'
          width={IMAGE_SIZE}
          height={IMAGE_SIZE}
        />
        <GalleryImage
          src='/image/Nm3TWU_mcard_2023-05-19_1dc298371df344a18110c234d34d60f8_w1280.jpg'
          alt='/image/Nm3TWU_mcard_2023-05-19_1dc298371df344a18110c234d34d60f8_w1280.jpg'
          width={IMAGE_SIZE}
          height={IMAGE_SIZE}
        />
        <GalleryImage
          src='/image/Nm3TWU_mcard_2023-05-19_1dc298371df344a18110c234d34d60f8_w1280.jpg'
          alt='/image/Nm3TWU_mcard_2023-05-19_1dc298371df344a18110c234d34d60f8_w1280.jpg'
          width={IMAGE_SIZE}
          height={IMAGE_SIZE}
        />
      </GalleryGrid3Columns>
    </Column>
    {/* <ImageSlider /> */}
  </Column>
)

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
