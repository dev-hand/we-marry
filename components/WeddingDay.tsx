import React from 'react'
import styled from 'styled-components'
import { Column } from 'components/common/Layout'
import { H2Text, SectionText } from 'components/common/Text'
import { getFullWeddingDate } from 'global/format'

export const WeddingDay: React.FC<{
  weddingDate: string
}> = ({ weddingDate }) => (
  <Main>
    <SectionText>WEDDING DAY</SectionText>
    <H2Text>{getFullWeddingDate(weddingDate)}</H2Text>
  </Main>
)

const Main = styled(Column)`
  gap: 15px;
  padding: 80px 0;
  align-items: center;
  background-color: ${(p) => p.theme.color.secondary}88;
`
