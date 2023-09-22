import React from 'react'
import styled from 'styled-components'
import { Column, Row } from 'components/common/Layout'
import { BaseText, H1Text, SectionText } from 'components/common/Text'
import { theme } from 'styles/theme'
import { PhoneNumber } from 'global/type'
import { Chip } from 'components/common/Chip'
import { CopyBtn } from 'components/CopyBtn'

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
      {groomPhoneNumber.map((item, index) => (
        <Item key={index} name={item.name} phoneNumber={item.phoneNumber} />
      ))}
    </Section>
    <Section>
      <Chip>신부측</Chip>
      {gridePhoneNumber.map((item, index) => (
        <Item key={index} name={item.name} phoneNumber={item.phoneNumber} />
      ))}
    </Section>
  </Column>
)

const Item: React.FC<{ name: string; phoneNumber: string }> = ({
  name,
  phoneNumber,
}) => (
  <Row key={name} gap={20} style={{ alignItems: 'center' }}>
    <Row gap={10}>
      <BaseText>{phoneNumber}</BaseText>
      <BaseText style={{ color: theme.color.gray }}>|</BaseText>
      <BaseText>{name}</BaseText>
    </Row>
    <CopyBtn text={phoneNumber} />
  </Row>
)

const Section = styled(Column)`
  gap: 15px;
  align-items: center;
`
