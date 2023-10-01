import React from 'react'
import styled from 'styled-components'
import { Column, ColumnCenter, Row } from 'components/common/Layout'
import { H3Text } from 'components/common/Text'
import { PhoneNumber } from 'global/type'
import { CopyBtn } from 'components/CopyBtn'

export const Contact: React.FC<{
  groomPhoneNumber: PhoneNumber[]
  gridePhoneNumber: PhoneNumber[]
}> = ({ gridePhoneNumber, groomPhoneNumber }) => (
  <ColumnCenter gap={40} style={{ paddingTop: 40 }}>
    <ColumnCenter gap={40}>
      <SectionText>신랑측</SectionText>
      <Column gap={20}>
        {groomPhoneNumber.map((item, index) => (
          <Item key={index} name={item.name} phoneNumber={item.phoneNumber} />
        ))}
      </Column>
    </ColumnCenter>
    <ColumnCenter gap={40}>
      <SectionText>신부측</SectionText>
      <Column gap={20}>
        {gridePhoneNumber.map((item, index) => (
          <Item key={index} name={item.name} phoneNumber={item.phoneNumber} />
        ))}
      </Column>
    </ColumnCenter>
  </ColumnCenter>
)

const Item: React.FC<{ name: string; phoneNumber: string }> = ({
  name,
  phoneNumber,
}) => (
  <Row key={name} gap={15}>
    <NameText>{name}</NameText>
    <CopyBtn text={phoneNumber} />
  </Row>
)

const SectionText = styled(H3Text)`
  color: ${(p) => p.theme.color.primary};
`

const NameText = styled(H3Text)`
  width: 80px;
`
