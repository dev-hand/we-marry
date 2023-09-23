import React from 'react'
import styled from 'styled-components'
import { Column, Media } from 'components/common/Layout'
import { Card } from 'components/common/Card'
import { BaseText } from 'components/common/Text'

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
          {children}
          <CloseText>
            <span onClick={onClose}>닫기</span>
          </CloseText>
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
  background-color: rgba(72, 72, 72, 0.2);
  z-index: 1;
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
  position: absolute;
  top: -250px;
  gap: 60px;
  padding: 60px 0;
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

const CloseText = styled(BaseText)`
  text-decoration: underline;
  span {
    cursor: pointer;
  }
`
