import React from 'react'
import { Column, Grid } from 'components/common/Layout'
import { H1Text, SectionText } from 'components/common/Text'
import { BackgroundImage } from 'components/common/Image'

export const Gallery: React.FC = () => (
  <Column gap={30}>
    <Column gap={10}>
      <SectionText>Gallery</SectionText>
      <H1Text>갤러리</H1Text>
      <Grid>
        <BackgroundImage
          src='/image/Nm3TWU_mcard_2023-05-19_1dc298371df344a18110c234d34d60f8_w1280.jpg'
          style={{ width: '100%', height: 111 }}
        />
      </Grid>
    </Column>
  </Column>
)
