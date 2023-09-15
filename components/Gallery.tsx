import React from 'react'
import styled from 'styled-components'
import { Column, Grid } from 'components/common/Layout'
import { H1Text, SectionText } from 'components/common/Text'
import { BackgroundImage } from 'components/common/Image'
import Image from 'next/image'
import { PREFIX } from 'global/constant'

export const Gallery: React.FC = () => (
  <Column gap={30} style={{ width: '100%' }}>
    <Column gap={10}>
      <SectionText>Gallery</SectionText>
      <H1Text>갤러리</H1Text>
    </Column>
    <GalleryGrid>
      <Image
        src='/image/Nm3TWU_mcard_2023-05-19_1dc298371df344a18110c234d34d60f8_w1280.jpg'
        width='100%'
        height={111}
        alt='test'
      />
      <GalleryImage src='/image/Nm3TWU_mcard_2023-05-19_1dc298371df344a18110c234d34d60f8_w1280.jpg' />
      <GalleryImage src='/image/Nm3TWU_mcard_2023-05-19_1dc298371df344a18110c234d34d60f8_w1280.jpg' />
      <GalleryImage src='/image/Nm3TWU_mcard_2023-05-19_1dc298371df344a18110c234d34d60f8_w1280.jpg' />
      <GalleryImage src='/image/Nm3TWU_mcard_2023-05-19_1dc298371df344a18110c234d34d60f8_w1280.jpg' />
      <GalleryImage src='/image/Nm3TWU_mcard_2023-05-19_1dc298371df344a18110c234d34d60f8_w1280.jpg' />
      <GalleryImage src='/image/Nm3TWU_mcard_2023-05-19_1dc298371df344a18110c234d34d60f8_w1280.jpg' />
    </GalleryGrid>
  </Column>
)

const GalleryGrid = styled(Grid)`
  gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
`

const GalleryImage = styled(BackgroundImage)`
  width: 100%;
  min-height: 111px;
  border-radius: 4px;
`
