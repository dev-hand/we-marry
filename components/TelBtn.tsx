import React from 'react'
import styled from 'styled-components'
import { Button } from 'components/common/Button'
import { BackgroundImage } from 'components/common/Image'

export const TelBtn: React.FC<{ phoneNumber: string }> = ({ phoneNumber }) => (
  <a href={`tel:${phoneNumber}`}>
    <MainButton>
      <BackgroundImage
        src='/icon/phone.svg'
        style={{ width: 16, height: 16 }}
      />
      전화
    </MainButton>
  </a>
)

const MainButton = styled(Button)`
  display: flex;
  width: fit-content;
  height: fit-content;
  align-items: center;
  gap: 2px;
  padding: 1px 6px;
  border: 0;
  border-radius: 4px;
  background-color: ${(p) => p.theme.color.lightGray};
  font-size: 13px;
  color: ${(p) => p.theme.color.darkGray};
`
