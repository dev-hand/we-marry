import React from 'react'
import styled from 'styled-components'
import { Column, Row } from 'components/common/Layout'
import { BaseText, H1Text, SectionText } from 'components/common/Text'
import { Button } from 'components/common/Button'
import { BackgroundImage } from 'components/common/Image'
import { theme } from 'styles/theme'
import { PhoneNumber } from 'global/type'
import { Chip } from 'components/common/Chip'

export const Contact: React.FC<{
  groomPhoneNumber: PhoneNumber[]
  gridePhoneNumber: PhoneNumber[]
}> = ({ gridePhoneNumber, groomPhoneNumber }) => (
  <Column gap={30} style={{ alignItems: 'center' }}>
    <Column gap={10}>
      <SectionText>Contact</SectionText>
      <H1Text>연락처</H1Text>
    </Column>
    <Section>
      <Chip>신랑측</Chip>
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
    </Section>
    <Section>
      <Chip>신부측</Chip>
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
    </Section>
  </Column>
)

const Section = styled(Column)`
  gap: 15px;
  align-items: center;
`

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
