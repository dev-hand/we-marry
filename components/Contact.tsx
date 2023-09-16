import React from 'react'
import styled from 'styled-components'
import { Column, Row } from 'components/common/Layout'
import { BaseText, H1Text, SectionText } from 'components/common/Text'
import { Button } from 'components/common/Button'
import { BackgroundImage } from 'components/common/Image'
import { theme } from 'styles/theme'
import { PhoneNumber } from 'global/type'

export const Contact: React.FC<{
  groomPhoneNumber: PhoneNumber[]
  gridePhoneNumber: PhoneNumber[]
}> = ({ gridePhoneNumber, groomPhoneNumber }) => (
  <Column gap={30} style={{ alignItems: 'center' }}>
    <Column gap={10}>
      <SectionText>Contact</SectionText>
      <H1Text>연락처</H1Text>
    </Column>
    <Column gap={20}>
      <BaseText>신랑측</BaseText>
      {groomPhoneNumber.map((item) => (
        <Row key={item.name} gap={20} style={{ alignItems: 'center' }}>
          <Row gap={10}>
            <BaseText>{item.phoneNumber}</BaseText>
            <BaseText style={{ color: theme.color.gray }}>|</BaseText>
            <BaseText>{item.name}</BaseText>
          </Row>
          <CopyButton>
            <BackgroundImage
              src='/icon/copy.svg'
              style={{ width: 16, height: 16 }}
            />
            복사
          </CopyButton>
        </Row>
      ))}
    </Column>
    <Column gap={20}>
      <BaseText>신부측</BaseText>
      {gridePhoneNumber.map((item) => (
        <Row key={item.name} gap={20} style={{ alignItems: 'center' }}>
          <Row gap={10}>
            <BaseText>{item.phoneNumber}</BaseText>
            <BaseText style={{ color: theme.color.gray }}>|</BaseText>
            <BaseText>{item.name}</BaseText>
          </Row>
          <CopyButton>
            <BackgroundImage
              src='/icon/copy.svg'
              style={{ width: 16, height: 16 }}
            />
            복사
          </CopyButton>
        </Row>
      ))}
    </Column>
  </Column>
)

const CopyButton = styled(Button)`
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
