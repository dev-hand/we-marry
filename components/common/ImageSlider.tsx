import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Column, Media, Row } from 'components/common/Layout'
import { BackgroundImage } from 'components/common/Image'
import { BaseText } from 'components/common/Text'

const IMAGE_SIZE = 120

export const ImageSlider: React.FC = () => {
  return (
    <Background>
      <Media>
        <GalleryImage
          src='/image/Nm3TWU_mcard_2023-05-19_1dc298371df344a18110c234d34d60f8_w1280.jpg'
          alt='/image/Nm3TWU_mcard_2023-05-19_1dc298371df344a18110c234d34d60f8_w1280.jpg'
          width={IMAGE_SIZE}
          height={IMAGE_SIZE}
        />
        <BottomContainer>
          <BackgroundImage
            src='/icon/chevron-up-left.svg'
            style={{ width: 44, height: 44 }}
          />
          <CloseButton>닫기</CloseButton>
          <BackgroundImage
            src='/icon/chevron-up-right.svg'
            style={{ width: 44, height: 44 }}
          />
        </BottomContainer>
      </Media>
    </Background>
  )
}

const Background = styled(Column)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  background-color: #000000ee;
  z-index: 1;
`

const GalleryImage = styled(Image).attrs({
  objectFit: 'cover',
  layout: 'responsive',
})``

const BottomContainer = styled(Row)`
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 40px;
  justify-content: center;
  align-items: center;
  gap: 40px;
`

const CloseButton = styled(BaseText)`
  color: ${(p) => p.theme.color.white};
  text-decoration: underline;
  cursor: pointer;
`
