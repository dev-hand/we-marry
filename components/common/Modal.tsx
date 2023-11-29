import React from 'react'
import styled from 'styled-components'
import { Column, Media } from 'components/common/Layout'
import { Card } from 'components/common/Card'
import { BackgroundImage } from 'components/common/Image'

export const Modal: React.FC<{
  children: React.ReactChild
  isOpen: boolean
  onClose: () => void
}> = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null
  return (
    <Background onClick={onClose}>
      <Container>
        <ModalCard
          screenWidth={screen.width}
          onClick={(e) => e.stopPropagation()}
        >
          <CloseBtn src='/icon/x-black.svg' onClick={onClose} />
          {children}
        </ModalCard>
      </Container>
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
  background-color: rgba(72, 72, 72, 50%);
  z-index: 2;
`

const Container = styled(Media)`
  display: flex;
  position: relative;
  justify-content: center;
`

const ModalCard = styled(Card)<{ screenWidth: number }>`
  @media ${(p) => p.theme.media.desktop} {
    width: 440px;
  }
  width: ${(p) => p.screenWidth - 40}px;
  overflow: hidden;
  position: absolute;
  top: -250px;
  @keyframes modalFadeUp {
    0% {
      top: -220px;
    }
    100% {
      top: -250px;
    }
  }
  animation: modalFadeUp 0.8s ease;
`

const CloseBtn = styled(BackgroundImage)`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`
