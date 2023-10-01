import React from 'react'
import styled from 'styled-components'
import { ColumnCenter, Row } from 'components/common/Layout'
import { BaseText, H2Text, H3Text } from 'components/common/Text'
import { PhoneNumber } from 'global/type'
import { CopyBtn } from 'components/CopyBtn'

export const Contact: React.FC<{
  groomPhoneNumber: PhoneNumber[]
  gridePhoneNumber: PhoneNumber[]
}> = ({ gridePhoneNumber, groomPhoneNumber }) => (
  <ColumnCenter gap={40}>
    <Header>
      <HeaderText>연락처</HeaderText>
    </Header>
    <Section>
      <SectionText>신랑측</SectionText>
      {groomPhoneNumber.map((item, index) => (
        <Item key={index} name={item.name} phoneNumber={item.phoneNumber} />
      ))}
    </Section>
    <Section>
      <SectionText>신부측</SectionText>
      {gridePhoneNumber.map((item, index) => (
        <Item key={index} name={item.name} phoneNumber={item.phoneNumber} />
      ))}
    </Section>
  </ColumnCenter>
)

const Item: React.FC<{ name: string; phoneNumber: string }> = ({
  name,
  phoneNumber,
}) => (
  <Row key={name} gap={10}>
    <BaseText style={{ width: 60 }}>{name}</BaseText>
    <CopyBtn text={phoneNumber} />
  </Row>
)

const Header = styled(Row)`
  width: 100%;
  padding: 35px;
  justify-content: center;
  background-color: ${(p) => p.theme.color.secondary};
`

const HeaderText = styled(H2Text)`
  color: ${(p) => p.theme.color.primary};
`

const Section = styled(ColumnCenter)`
  gap: 20px;
  align-items: center;
`

const SectionText = styled(H3Text)`
  color: ${(p) => p.theme.color.primary};
`
