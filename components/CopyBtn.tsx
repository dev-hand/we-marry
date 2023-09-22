import React from 'react'
import styled from 'styled-components'
import { Button } from 'components/common/Button'
import { BackgroundImage } from 'components/common/Image'

const handleCopy = async (text: string) => {
  await getCopyText(text)
  alert('클립보드에 복사되었습니다.')
}

const getCopyText = (text: string) => window.navigator.clipboard.writeText(text)

export const CopyBtn: React.FC<{ text: string }> = ({ text }) => (
  <MainButton onClick={() => handleCopy(text)}>
    <BackgroundImage src='/icon/copy.svg' style={{ width: 16, height: 16 }} />
    복사
  </MainButton>
)

const MainButton = styled(Button)`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 2px;
  padding: 1px 6px;
  border: 0;
  border-radius: 4px;
  background-color: ${(p) => p.theme.color.lightGray};
  font-size: 13px;
  color: ${(p) => p.theme.color.darkGray};
`
