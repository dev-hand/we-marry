import React from 'react'
import styled from 'styled-components'
import { Column, Row } from 'components/common/Layout'
import { H2Text, H3Text } from 'components/common/Text'
import { getFullWeddingDate } from 'global/format'
import { CopyBtn } from 'components/CopyBtn'

export const WeddingDay: React.FC<{
  weddingDate: string
  location: string
  address: string
}> = ({ weddingDate, location, address }) => (
  <Main>
    <Column gap={30}>
      <H2Text>{getFullWeddingDate(weddingDate)}</H2Text>
      <Column gap={15}>
        <DescText>{location}</DescText>
        <Row
          gap={10}
          style={{ justifyContent: 'center', alignItems: 'center' }}
        >
          <DescText>{address}</DescText>
          <CopyBtn text={address} />
        </Row>
      </Column>
    </Column>
  </Main>
)

const Main = styled(Column)`
  gap: 40px;
  padding: 80px 0;
  align-items: center;
  background-color: ${(p) => p.theme.color.secondary}88;
`

const DescText = styled(H3Text)`
  color: ${(p) => p.theme.color.darkGray};
`
