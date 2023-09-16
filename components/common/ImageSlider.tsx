import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Column, Media, Row } from 'components/common/Layout'
import { BackgroundImage } from 'components/common/Image'
import { BaseText } from 'components/common/Text'

const IMAGE_SIZE = 120
const ARROW_SIZE = 24
export const ImageSlider: React.FC<{
  isOpen: boolean
  onClose: () => void
  images: string[]
  index: number
}> = ({ isOpen, onClose, images, index }) => {
  if (!isOpen) return null
  return (
    <Background>
      <Media>
        <GalleryImage
          src={images[index]}
          alt={images[index]}
          width={IMAGE_SIZE}
          height={IMAGE_SIZE}
        />
        <BottomContainer>
          <ArrowBtn src='/icon/chevron-up-left.svg' />
          <CloseButton onClick={onClose}>닫기</CloseButton>
          <ArrowBtn src='/icon/chevron-up-right.svg' />
        </BottomContainer>
      </Media>
    </Background>
  )
}

const ArrowBtn = styled(BackgroundImage)`
  width: ${ARROW_SIZE}px;
  height: ${ARROW_SIZE}px;
  cursor: pointer;
`

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
